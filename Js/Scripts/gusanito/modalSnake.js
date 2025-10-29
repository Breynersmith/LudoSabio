function rangoSegunNivel() {
    const g = parseInt(estado.grado, 10); const d = estado.dificultad; // define rangos y operadores
    let max = 10, ops = ["+", "-"];
    if (g >= 6) { max = 20; ops = ["+", "-", "*"]; }
    if (g >= 8) { max = 40; ops = ["+", "-", "*", "/"]; }
    if (g >= 10) { max = 60; ops = ["+", "-", "*", "/", "mix"]; }
    if (d === "media") { max = Math.floor(max * 1.2); }
    if (d === "dificil") { max = Math.floor(max * 1.6); }
    return { max, ops };
}
function generarOperacionModalSegunNivel() {
    const { max, ops } = rangoSegunNivel();
    const a = Math.floor(Math.random() * max) + 1; const b = Math.floor(Math.random() * max) + 1;
    const op = ops[Math.floor(Math.random() * ops.length)];
    let texto = "", result = 0;
    if (op === "mix") { // pequeña mezcla con paréntesis
        const a1 = Math.floor(Math.random() * 10) + 1, b1 = Math.floor(Math.random() * 10) + 1;
        texto = `${a} + ${b} × (${a1} − ${b1})`;
        result = a + b * (a1 - b1);
    } else if (op === "+") { texto = `${a} + ${b}`; result = a + b; }
    else if (op === "-") { texto = `${a} − ${b}`; result = a - b; }
    else if (op === "*") { texto = `${a} × ${b}`; result = a * b; }
    else if (op === "/") { // división con 2 decimales
        texto = `${a} ÷ ${b}`; result = parseFloat((a / b).toFixed(2));
    }
    gusanito.currentResult = result;
    document.getElementById("modalOperacion").innerText = `${texto} = ?`;
    document.getElementById("modalRespuesta").value = "";
}

function modalEnviar() {
    const v = document.getElementById("modalRespuesta")?.value.trim();
    if (!v || v === "" || /^\s*$/.test(v)) return;

    const respuesta = Number(v.replace(",", "."));
    if (isNaN(respuesta)) {
        console.error('Valor numérico inválido');
        return;
    }

    if (respuesta === gusanito.currentResult) {
        btnResolver.classList.add("hidden");
        btnResolver.disabled = true;

        gusanito.aciertos++;
        document.getElementById("aciertosG").innerText = gusanito.aciertos;
        estado.juegoGusanito = true;
        estado.gusanito_mensaje_corecto = true;
        estado.gusanito_mensaje_de_error = false;

        sincronizarState();

        setTimeout(() => {
            estado.gusanito_mensaje_corecto = false;
            sincronizarState();
        }, 2000);


        if (gusanito.aciertos % 3 === 0) {
            gusanito.streak++;
            el.racha.innerText = gusanito.streak;
            estado.vidas += 1;
            sincronizarState();
            actualizarVidasUI();

        }

    } else {
        gusanito.streak = 0;
        el.racha.innerText = gusanito.streak;
        estado.gusanito_mensaje_de_error = false;
        estado.gusanito_mensaje_corecto = false;
        sincronizarState();
    }

    for (let vidas = 0; vidas < gusanito.streak; vidas++) {
        el.vidasGanadas.innerHTML += `<span class="material-symbols-outlined text-red-500">favorite</span>`;
    }

    if (gusanito.streak >= 2) {
        let segundos = 3;
        estado.gusanito_mensaje_corecto = false;
        estado.mensajeDeGanar = true;
        actualizarVidasUI();


        setTimeout(() => {
            el.cuentaRegresiva.classList.remove("hidden");
        }, 800);

        let tempSegundos = setInterval(() => {
            segundos--;
            el.cuentaRegresiva.innerText = segundos;
            if (segundos === 0) {
                clearInterval(tempSegundos);
                estado.modalPantallaFin = false;
                gusanito.aciertos = 0;
                gusanito.streak = 0;
                el.racha.innerText = gusanito.streak;
                btnResolver.classList.remove("hidden");
                btnResolver.disabled = false;
                siguientePregunta();
                volverAlQuiz();
            }
        }, 800);
        sincronizarState();
    }
}

function modalCerrar() {
    document.getElementById("btnEnviar").disabled = false;
    document.getElementById("btnEnviar").classList.remove("hidden");
    estado.gusanito_modal_pregunta_rapida = false;
    estado.gusanito_mensaje_de_error = false;
    estado.gusanito_mensaje_corecto = false;
    gusanito.awaitingAnswer = false;

    sincronizarState();
    generarComidaGusanito();
}


function verificarOperacion() {
    const modalVisible = !document.getElementById("overlayOperacion").classList.contains("hidden");

    if (modalVisible) {
        modalEnviar();
    } else {
        alert("No hay operación activa. Come una manzana.");
    }
}