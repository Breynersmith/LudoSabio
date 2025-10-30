function iniciarGusanito() {
    estado.quiz = true;
    estado.modalPantallaFin = false;
    estado.juegoSopa = false;
    estado.juegoGusanito = true;
    setTimeout(() => {
        el.pantallaGusanito.classList.replace("opacity-0", "opacity-100")
    }, 300);
    gusanito.canvas = document.getElementById("gusanitoCanvas");
    gusanito.ctx = gusanito.canvas.getContext("2d");
    gusanito.box = 18;
    resetSnake();
    document.addEventListener("keydown", teclaGusanito); document.addEventListener("keydown", pausarJuego)
    sincronizarState();
}



function resetSnake() {
    if (gusanito.loopId) clearInterval(gusanito.loopId);
    gusanito.snake = [{ x: 5 * gusanito.box, y: 5 * gusanito.box }];
    gusanito.dir = "DOWN";
    gusanito.aciertos = 0;
    gusanito.streak = 0;
    document.getElementById("aciertosG").innerText = gusanito.aciertos;
    generarComidaGusanito();
    gusanito.awaitingAnswer = false;
    document.getElementById("overlayOperacion").classList.add("hidden");
    gusanito.loopId = setInterval(loopGusanito, 250);
}

function forzarSalirGusanito() {
    if (gusanito.loopId) clearInterval(gusanito.loopId);
    document.removeEventListener("keydown", teclaGusanito); mostrarPantalla("juego");
}

function teclaGusanito(e) {
    if (gusanito.awaitingAnswer) return;
    if (e.key === "ArrowLeft" && gusanito.dir !== "RIGHT") gusanito.dir = "LEFT";
    if (e.key === "ArrowRight" && gusanito.dir !== "LEFT") gusanito.dir = "RIGHT";
    if (e.key === "ArrowUp" && gusanito.dir !== "DOWN") gusanito.dir = "UP";
    if (e.key === "ArrowDown" && gusanito.dir !== "UP") gusanito.dir = "DOWN";
}

function pausarJuego(evento) {
    if (evento.code === 'Space' && estado.juegoGusanito && estado.gusanito_modal_pregunta_rapida == false) {
        // Prevenir el scroll del navegador al presionar espacio
        evento.preventDefault();

        estado.isPaused = !estado.isPaused;
        sincronizarState();
        if (estado.isPaused) {
            // PAUSAR: detener el loop y mostrar mensaje
            if (gusanito.loopId) {
                clearInterval(gusanito.loopId);
                gusanito.loopId = null; // Marcar como detenido
            }

        } else {
            gusanito.awaitingAnswer = false;
            // Solo iniciar si no hay un loop activo
            if (gusanito.loopId === null) {
                gusanito.loopId = setInterval(loopGusanito, 250);
            }
        }

    }
}
