function sincronizarState() {
    setTextToNodes(el.totalPreguntas, totalPreguntasBase);
    document.getElementById('inicialName').innerText = el.seletName.value.charAt(0).toUpperCase();

    // ⭐️ AHORA USAMOS LA FUNCIÓN CON TRANSICIÓN ⭐️
    toggleViewWithTransition(el.celebracionSopa, estado.celebracionSopa);
    toggleViewWithTransition(el.pantallaInicio, estado.modalInicio);
    toggleViewWithTransition(el.overlayOperacion, estado.gusanito_modal_pregunta_rapida);
    toggleViewWithTransition(el.successMessage, estado.gusanito_mensaje_corecto);
    toggleViewWithTransition(el.errorMessage, estado.gusanito_mensaje_de_error);
    toggleViewWithTransition(el.modal_de_celebracion, estado.mensajeDeGanar);

    // Estados de juegos y pantallas (vistas principales)
    toggleViewWithTransition(el.pantallaGusanito, estado.juegoGusanito);
    toggleViewWithTransition(el.pantallaSopa, estado.juegoSopa);
    toggleViewWithTransition(el.quizContainer, estado.quiz);


    // Pausa: AHORA CON TRANSICIÓN
    toggleViewWithTransition(el.eventoPause, estado.isPaused);

    // Pantalla de fin: AHORA CON TRANSICIÓN
    !estado.quiz ? el.quizContainer.classList.add("blur-sm") : el.quizContainer.classList.remove("blur-sm");
    toggleViewWithTransition(el.pantallaFin, estado.modalPantallaFin);
}
function actualizarContadores() {
    // Tu juego limita a 16 preguntas, por lo que este es el total base.
    let totalPreguntas = totalPreguntasBase;

    // Calcula el porcentaje de progreso (limitado a un máximo de 100%)
    const porcentaje = Math.min(100, (estado.progreso / totalPreguntasBase) * 100);
    el.porcentaje.innerText = Math.min(100, (estado.preguntasAcertadas / totalPreguntasBase) * 100);




    // 1. Actualiza los contadores numéricos (texto: 5 de 20, etc.)
    document.getElementById("contadorPreguntas").innerText = estado.preguntasContestadas;
    // 2. Actualiza la barra de progreso visual
    if (el.barraProgreso) {
        el.barraProgreso.style.width = `${porcentaje}%`;
    }
}
function actualizarVidasUI() {
    el.vidasGanadas.innerHTML = '';
    for (let vida = 1; vida <= estado.vidas; vida++) {

        el.vidasGanadas.innerHTML += `<span class="material-symbols-outlined text-red-400 dark:text-red-200 text-xl">favorite_border</span>`

    }

}

function setTextToNodes(nodes, text) {
    nodes.forEach(n => n.innerText = text);
}

function volverAlQuiz() {
    if (estado.vidas == 0) {
        alert("No puedes Volver al Quiz si no tienes vidas");
        return
    } else {
        estado.modalPantallaFin = false;
        estado.quiz = true;
        toggleViewWithTransition(el.quizContainer, true);
        estado.mensajeDeGanar = false;
        estado.gusanito_modal_pregunta_rapida = false;
        estado.gusanito_mensaje_corecto = false;
        estado.gusanito_mensaje_de_error = false;
        estado.juegoGusanito = false;
        estado.juegoSopa = false;

    }
}

function reiniciarTodo() {
    estado = { vidas: 5, grado: "5", dificultad: "facil", preguntasContestadas: 0, progreso: 0, questionCurrent: null, preguntasGuardadas: [] };
    estado.juegoGusanito = false;
    estado.juegoSopa = false;
    estado.modalPantallaFin = false;
    estado.modalInicio = false;
    estado.preguntasContestadas = 0;
    estado.preguntasAcertadas = 0;
    estado.preguntasErradas = 0;
    estado.preguntasSaltadas = 0;
    gusanito.streak = 0;
    estado.preguntasGuardadas.length = 0;


    actualizarVidasUI();
    actualizarContadores();

    setTextToNodes(el.numeroDePregunta, 1)
    setTextToNodes(el.preguntasAcertadas, 0)
    setTextToNodes(el.preguntasErradas, 0)
    setTextToNodes(el.preguntasSaltadas, 0)

    estado.quiz = true;

    sincronizarState();

    toggleViewWithTransition(el.finQuiz, false)
    toggleViewWithTransition(el.quizContainer, true);
}
function cerrarSesion() {
    reiniciarTodo();
    estado.modalInicio = true;
    estado.quiz = false;
    toggleViewWithTransition(el.finQuiz, false);
    document.getElementsByTagName("header")[0].classList.add("hidden");
    document.getElementById('btnReiniciar').classList.add("hidden");
    sincronizarState()
}

// Define la duración de la transición en milisegundos.
// Debe coincidir con la clase 'duration-XXX' de Tailwind que uses (ej: duration-500)
const TRANSITION_DURATION = 500;

/**
 * Muestra/Oculta un elemento con una transición de fundido (Fade).
 * @param {HTMLElement} element El elemento del DOM a transicionar.
 * @param {boolean} shouldShow Indica si el elemento debe mostrarse (true) u ocultarse (false).
 */
function toggleViewWithTransition(element, shouldShow) {
    if (shouldShow) {
        // SECUENCIA DE MOSTRAR (Fade In)

        // 1. Quitar 'hidden' para que el elemento ocupe espacio y sea elegible para la transición
        element.classList.remove("hidden");

        // 2. Usar un pequeño retraso para asegurar que el navegador registre que 'hidden' se ha quitado
        setTimeout(() => {
            element.classList.remove("opacity-0");
            element.classList.add("opacity-100"); // Asumimos que quieres 100% de opacidad
        }, 10);

    } else {
        // SECUENCIA DE OCULTAR (Fade Out)

        // 1. Iniciar la transición de opacidad a 0
        element.classList.remove("opacity-100");
        element.classList.add("opacity-0");

        // 2. Esperar a que la transición termine antes de aplicar 'hidden'
        setTimeout(() => {
            element.classList.add("hidden");
        }, TRANSITION_DURATION);
    }
}