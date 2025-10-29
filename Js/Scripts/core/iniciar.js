function entrar() {
    btnReiniciar.classList.remove("hidden");
    if (clave.value === "") {
        alert("Ingrese una clave");
        return;
    }
    el.dataName.innerText = el.seletName.value || "Invitado";
    spanGrado.innerText = el.seletGrado.value;
    spanDificultad.innerText = el.selectDificultad.value;

    setTimeout(() => {
        let number;
        document.getElementById("header").classList.remove("hidden");
        estado.quiz = true;
        estado.modalInicio = false;
        el.quizContainer.classList.replace("opacity-0", "opacity-1");
        if (estado.preguntasContestadas <= 1) {
            number = 1;
        } else {
            number = estado.preguntasContestadas;
        }
        setTextToNodes(el.numeroDePregunta, number);
        sincronizarState();
        iniciarJuego();
    }, 500);

}
function iniciarJuego() {
    estado.vidas = 5;
    estado.preguntasContestadas = 0;
    estado.progreso = 0;
    estado.preguntasGuardadas = filtrarPreguntas(estado.grado, estado.dificultad);

    if (estado.preguntasGuardadas.length < 12) {
        const cercanas = BANCO.filter(q => q.grado === estado.grado && q.dificultad !== estado.dificultad);
        mezclarEn(estado.preguntasGuardadas, cercanas);
        if (estado.preguntasGuardadas.length < 12) { mezclarEn(estado.preguntasGuardadas, BANCO); }
        estado.preguntasGuardadas = estado.preguntasGuardadas.slice(0, 16);
    }

    el.gradoLabel.innerText = el.seletGrado.value + "°";
    el.dificultadLabel.innerText = el.selectDificultad.value;
    el.quizContainer.classList.replace("opacity-0", "opacity-1")
    actualizarVidasUI();
    siguientePregunta();
}

function filtrarPreguntas(grado, dificultad) {
    const exactas = BANCO.filter(q => q.grado === grado && q.dificultad === dificultad);
    if (exactas.length >= 12) return shuffle(exactas);
    const porDificultad = BANCO.filter(q => q.dificultad === dificultad && q.grado === grado);
    const porGrado = BANCO.filter(q => q.grado === grado);
    const mix = [...exactas];
    mezclarEn(mix, porDificultad); mezclarEn(mix, porGrado); mezclarEn(mix, BANCO);
    return shuffle(mix).slice(0, 16);
}
