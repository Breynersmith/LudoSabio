function sincronizarState() {
    setTextToNodes(el.totalPreguntas, totalPreguntasBase);


    document.getElementById('inicialName').innerText = el.seletName.value.charAt(0).toUpperCase();
    // Estados de modales y mensajes
    estado.celebracionSopa === false ? el.celebracionSopa.classList.add("hidden") : el.celebracionSopa.classList.remove("hidden");
    estado.modalInicio === false ? el.pantallaInicio.classList.add("hidden") : el.pantallaInicio.classList.remove("hidden");
    estado.gusanito_modal_pregunta_rapida === false ? el.overlayOperacion.classList.add("hidden") : el.overlayOperacion.classList.remove("hidden");
    estado.gusanito_mensaje_corecto === false ? el.successMessage.classList.add("hidden") : el.successMessage.classList.remove("hidden");
    estado.gusanito_mensaje_de_error === false ? el.errorMessage.classList.add("hidden") : el.errorMessage.classList.remove("hidden");
    estado.mensajeDeGanar === false ? el.modal_de_celebracion.classList.add("hidden") : el.modal_de_celebracion.classList.remove("hidden");

    // Estados de juegos y pantallas
    if (estado.juegoGusanito === false) {
        el.pantallaGusanito.classList.add("hidden");
        el.pantallaGusanito.classList.replace("opacity-0", "opacity-1");
    } else {
        el.pantallaGusanito.classList.remove("hidden");
    }
    estado.isPaused ? el.eventoPause.classList.remove("hidden") : el.eventoPause.classList.add("hidden");
    estado.juegoSopa === false ? el.pantallaSopa.classList.add("hidden") : el.pantallaSopa.classList.remove("hidden");
    estado.quiz === false ? el.quizContainer.classList.add("hidden") : el.quizContainer.classList.remove("hidden");

    if (!estado.modalPantallaFin) {
        el.pantallaFin.classList.add("hidden")
        el.quizContainer.classList.remove("blur-sm")
    } else {
        el.pantallaFin.classList.remove("hidden")
        el.quizContainer.classList.add("blur-sm")
    }


}

function actualizarContadores() {
    // Tu juego limita a 16 preguntas, por lo que este es el total base.
    let totalPreguntas = totalPreguntasBase;

    // Calcula el porcentaje de progreso (limitado a un máximo de 100%)
    const porcentaje = Math.min(100, (estado.progreso / totalPreguntasBase) * 100);
    el.porcentaje.innerText = Math.min(100, (estado.preguntasAcertadas / totalPreguntasBase) * 100);

    if (estado.preguntasContestadas === totalPreguntasBase) {
        el.quizContainer.classList.add("blur-sm");
        el.finQuiz.classList.replace('hidden', 'fixed');
    }


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
        estado.mensajeDeGanar = false;
        estado.gusanito_modal_pregunta_rapida = false;
        estado.gusanito_mensaje_corecto = false;
        estado.gusanito_mensaje_de_error = false;
        estado.juegoGusanito = false;
        estado.juegoSopa = false;

        el.quizContainer.classList.replace("opacity-0", "opacity-1");
        sincronizarState();
        siguientePregunta();
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
    sincronizarState();

    actualizarVidasUI();
    actualizarContadores();
}
function cerrarSesion() {
    reiniciarTodo();
    estado.modalInicio = true;
    estado.quiz = false;
    el.finQuiz.classList.add("hidden");
    document.getElementsByTagName("header")[0].classList.add("hidden");
    document.getElementById('btnReiniciar').classList.add("hidden");
    sincronizarState()
}