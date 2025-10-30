function sincronizarState() {
    setTextToNodes(el.totalPreguntas, totalPreguntasBase);
    document.getElementById('inicialName').innerText = el.seletName.value.charAt(0).toUpperCase();


    toggleViewWithTransition(el.celebracionSopa, estado.celebracionSopa);
    toggleViewWithTransition(el.pantallaInicio, estado.modalInicio);
    toggleViewWithTransition(el.overlayOperacion, estado.gusanito_modal_pregunta_rapida);
    toggleViewWithTransition(el.successMessage, estado.gusanito_mensaje_corecto);
    toggleViewWithTransition(el.errorMessage, estado.gusanito_mensaje_de_error);
    toggleViewWithTransition(el.modal_de_celebracion, estado.mensajeDeGanar);


    toggleViewWithTransition(el.pantallaGusanito, estado.juegoGusanito);
    toggleViewWithTransition(el.pantallaSopa, estado.juegoSopa);
    toggleViewWithTransition(el.quizContainer, estado.quiz);



    toggleViewWithTransition(el.eventoPause, estado.isPaused);


    !estado.quiz ? el.quizContainer.classList.add("blur-sm") : el.quizContainer.classList.remove("blur-sm");
    toggleViewWithTransition(el.pantallaFin, estado.modalPantallaFin);
}
function actualizarContadores() {

    let totalPreguntas = totalPreguntasBase;


    const porcentaje = Math.min(100, (estado.progreso / totalPreguntasBase) * 100);
    el.porcentaje.innerText = Math.min(100, (estado.preguntasAcertadas / totalPreguntasBase) * 100);





    document.getElementById("contadorPreguntas").innerText = estado.preguntasContestadas;

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



const TRANSITION_DURATION = 300;


function toggleViewWithTransition(element, shouldShow, delay) {
    if (shouldShow) {
        element.classList.remove("hidden");
        setTimeout(() => {
            element.classList.remove("opacity-0");
            element.classList.add("opacity-100");
        }, delay > 0 ? delay : TRANSITION_DURATION);

    } else {


        element.classList.remove("opacity-100");
        element.classList.add("opacity-0");


        setTimeout(() => {
            element.classList.add("hidden");
        }, TRANSITION_DURATION);
    }
}