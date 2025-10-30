function entrar() {
    let campoClave = clave.value;
    let campoNombre = el.seletName.value;
    btnReiniciar.classList.remove("hidden");
    if (campoClave.trim() === "" || campoNombre.trim() === "") {
        const camposVacios = document.getElementById("camposVacios");
        camposVacios.classList.remove("hidden");
        el.seletName.classList.replace("border-transparent", "border-red-500");
        clave.classList.replace("border-transparent", "border-red-500");

        setTimeout(() => {
            camposVacios.classList.add("hidden");
            el.seletName.classList.replace("border-red-500", "border-transparent");
            clave.classList.replace("border-red-500", "border-transparent");
        }, 2000);
        return;
    }

    el.dataName.innerText = el.seletName.value || "Invitado";
    spanGrado.innerText = el.seletGrado.value;
    spanDificultad.innerText = el.selectDificultad.value;

    estado.modalInicio = false;
    toggleViewWithTransition(el.pantallaInicio, false, 150);

    setTimeout(() => {
        let number;

        const quizView = document.getElementById("quiz-view");
        toggleViewWithTransition(quizView, true, 150);
        document.getElementById("header").classList.remove("hidden");

        // Mostrar header

        // Activar estado del quiz
        estado.quiz = true;
        estado.juegoGusanito = false;
        estado.juegoSopa = false;
        estado.modalPantallaFin = false;

        if (estado.preguntasContestadas <= 1) {
            number = 1;
        } else {
            number = estado.preguntasContestadas;
        }
        setTextToNodes(el.numeroDePregunta, number);
        sincronizarState();
        iniciarJuego();
    }, 150);
}

function iniciarJuego() {
    estado.vidas = 5;
    estado.preguntasContestadas = 0;
    estado.progreso = 0;
    estado.preguntasGuardadas = filtrarPreguntas(estado.grado, estado.dificultad);

    if (estado.preguntasGuardadas.length < 12) {
        const cercanas = BANCO.filter(q => q.grado === estado.grado && q.dificultad !== estado.dificultad);
        mezclarEn(estado.preguntasGuardadas, cercanas);
        if (estado.preguntasGuardadas.length < 12) {
            mezclarEn(estado.preguntasGuardadas, BANCO);
        }
        estado.preguntasGuardadas = estado.preguntasGuardadas.slice(0, 20);
    }

    el.gradoLabel.innerText = el.seletGrado.value + "°";
    el.dificultadLabel.innerText = el.selectDificultad.value;


    actualizarVidasUI();
    siguientePregunta();
}

function filtrarPreguntas(grado, dificultad) {
    const exactas = BANCO.filter(q => q.grado === grado && q.dificultad === dificultad);
    if (exactas.length >= 12) return shuffle(exactas);
    const porDificultad = BANCO.filter(q => q.dificultad === dificultad && q.grado === grado);
    const porGrado = BANCO.filter(q => q.grado === grado);
    const mix = [...exactas];
    mezclarEn(mix, porDificultad);
    mezclarEn(mix, porGrado);
    mezclarEn(mix, BANCO);
    return shuffle(mix).slice(0, 16);
}