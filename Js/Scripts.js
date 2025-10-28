
/* -------------------------------------------------
   BANCO DE PREGUNTAS (ampliado por grado y dificultad)
   {materia, grado, dificultad, pregunta, opciones[], correcta}
   ------------------------------------------------- */
const BANCO = [
    // MATEMÁTICAS 5°
    { materia: "Matemáticas", grado: "5", dificultad: "facil", pregunta: "¿Cuánto es 7 × 6?", opciones: ["42", "36", "48", "40"], correcta: 0 },
    { materia: "Matemáticas", grado: "5", dificultad: "facil", pregunta: "Resuelve: 12 + 15", opciones: ["27", "26", "28", "25"], correcta: 0 },
    { materia: "Matemáticas", grado: "5", dificultad: "media", pregunta: "¿Cuál es la mitad de 36?", opciones: ["12", "16", "18", "20"], correcta: 2 },
    { materia: "Matemáticas", grado: "5", dificultad: "dificil", pregunta: "Encuentra el perímetro de un rectángulo 8×5", opciones: ["26", "40", "16", "13"], correcta: 1 },

    // MATEMÁTICAS 6°
    { materia: "Matemáticas", grado: "6", dificultad: "facil", pregunta: "¿Cuánto es 9 × 4?", opciones: ["36", "28", "32", "40"], correcta: 0 },
    { materia: "Matemáticas", grado: "6", dificultad: "media", pregunta: "Simplifica: 12/18", opciones: ["2/3", "4/6", "6/9", "1/3"], correcta: 0 },
    { materia: "Matemáticas", grado: "6", dificultad: "dificil", pregunta: "Resuelve: 3(2x − 1) = 15", opciones: ["x = 3", "x = 4", "x = 2", "x = 5"], correcta: 0 },

    // MATEMÁTICAS 7°
    { materia: "Matemáticas", grado: "7", dificultad: "facil", pregunta: "¿Cuál es el resultado de 8²?", opciones: ["16", "64", "32", "8"], correcta: 1 },
    { materia: "Matemáticas", grado: "7", dificultad: "media", pregunta: "Si x=3, ¿cuánto es 2x + 5?", opciones: ["11", "9", "10", "8"], correcta: 0 },
    { materia: "Matemáticas", grado: "7", dificultad: "dificil", pregunta: "Resuelve: 5x − 7 = 18", opciones: ["x=5", "x=4", "x=3", "x=2"], correcta: 0 },

    // MATEMÁTICAS 8°
    { materia: "Matemáticas", grado: "8", dificultad: "facil", pregunta: "Convierte 0,25 en fracción", opciones: ["1/2", "1/4", "3/4", "2/5"], correcta: 1 },
    { materia: "Matemáticas", grado: "8", dificultad: "media", pregunta: "Calcula: (−3)² + 4", opciones: ["13", "−5", "7", "10"], correcta: 0 },
    { materia: "Matemáticas", grado: "8", dificultad: "dificil", pregunta: "Raíz cuadrada de 256", opciones: ["12", "16", "14", "18"], correcta: 1 },

    // MATEMÁTICAS 9°
    { materia: "Matemáticas", grado: "9", dificultad: "facil", pregunta: "Factoriza: x² − 9", opciones: ["(x−3)(x+3)", "(x−9)(x+1)", "(x−3)²", "x(x−9)"], correcta: 0 },
    { materia: "Matemáticas", grado: "9", dificultad: "media", pregunta: "Resuelve: 2x + 5 = 19", opciones: ["x=7", "x=6", "x=8", "x=5"], correcta: 1 },
    { materia: "Matemáticas", grado: "9", dificultad: "dificil", pregunta: "Pendiente entre (1,2) y (4,11)", opciones: ["3", "2", "\n9", "\n\n\n"], correcta: 0 },

    // MATEMÁTICAS 10°
    { materia: "Matemáticas", grado: "10", dificultad: "facil", pregunta: "Valor de f(x)=2x+1 en x=4", opciones: ["9", "8", "7", "10"], correcta: 0 },
    { materia: "Matemáticas", grado: "10", dificultad: "media", pregunta: "Resuelve: \nlog₂ 8", opciones: ["2", "3", "4", "8"], correcta: 1 },
    { materia: "Matemáticas", grado: "10", dificultad: "dificil", pregunta: "Solución de x² − 5x + 6 = 0", opciones: ["x=2 y x=3", "x=−2 y 3", "x=−2 y −3", "x=6 y 0"], correcta: 0 },

    // MATEMÁTICAS 11°
    { materia: "Matemáticas", grado: "11", dificultad: "facil", pregunta: "Derivada de x²", opciones: ["2x", "x", "x²", "2"], correcta: 0 },
    { materia: "Matemáticas", grado: "11", dificultad: "media", pregunta: "Límite: lim_{x→0} (sen x)/x", opciones: ["0", "1", "No existe", "x"], correcta: 1 },
    { materia: "Matemáticas", grado: "11", dificultad: "dificil", pregunta: "Área bajo y=2x en [0,3]", opciones: ["9", "6", "3", "12"], correcta: 0 },

    // LENGUA CASTELLANA 5°–11°
    { materia: "Lengua Castellana", grado: "5", dificultad: "facil", pregunta: "¿Cuál es un sinónimo de ‘alegre’?", opciones: ["triste", "contento", "enojado", "cansado"], correcta: 1 },
    { materia: "Lengua Castellana", grado: "6", dificultad: "media", pregunta: "¿Qué es un adjetivo?", opciones: ["Acción", "Califica al sustantivo", "Conjunción", "Artículo"], correcta: 1 },
    { materia: "Lengua Castellana", grado: "7", dificultad: "media", pregunta: "¿Qué es un verbo?", opciones: ["Palabra que nombra", "Indica acción o estado", "Describe cualidad", "Conecta oraciones"], correcta: 1 },
    { materia: "Lengua Castellana", grado: "8", dificultad: "dificil", pregunta: "Identifica la oración compuesta", opciones: ["El perro ladra", "María estudia y trabaja", "Corre rápido", "Vuela alto"], correcta: 1 },
    { materia: "Lengua Castellana", grado: "9", dificultad: "dificil", pregunta: "Figura ‘hipérbole’ en:", opciones: ["Te llamé ayer", "Tengo mil cosas que hacer", "Juan es alto", "Llueve"], correcta: 1 },
    { materia: "Lengua Castellana", grado: "10", dificultad: "media", pregunta: "El narrador omnisciente…", opciones: ["Desconoce todo", "Conoce pensamientos de personajes", "Habla en 2ª persona siempre", "Solo describe acciones"], correcta: 1 },
    { materia: "Lengua Castellana", grado: "11", dificultad: "dificil", pregunta: "‘Sujeto tácito’ es:", opciones: ["Sujeto ausente", "Sujeto elíptico pero recuperable", "Sujeto compuesto explícito", "Ninguna"], correcta: 1 },

    // INGLÉS A2 5°–11°
    { materia: "Inglés A2", grado: "5", dificultad: "facil", pregunta: "How do you say ‘hola’ in English?", opciones: ["Bye", "Hello", "Please", "Thanks"], correcta: 1 },
    { materia: "Inglés A2", grado: "6", dificultad: "facil", pregunta: "Choose: ‘I ___ a book.’", opciones: ["has", "have", "am", "is"], correcta: 1 },
    { materia: "Inglés A2", grado: "7", dificultad: "media", pregunta: "Translate: ‘I have a book’", opciones: ["Tengo un libro", "Yo libro", "Libro yo", "Es un libro"], correcta: 0 },
    { materia: "Inglés A2", grado: "8", dificultad: "media", pregunta: "Choose: ‘She ___ to school every day.’", opciones: ["go", "goes", "going", "gone"], correcta: 1 },
    { materia: "Inglés A2", grado: "9", dificultad: "dificil", pregunta: "Past simple of ‘buy’ is…", opciones: ["buyed", "bought", "buied", "buought"], correcta: 1 },
    { materia: "Inglés A2", grado: "10", dificultad: "media", pregunta: "Complete: ‘If it rains, I ___ at home.’", opciones: ["will stay", "stayed", "stays", "am stay"], correcta: 0 },
    { materia: "Inglés A2", grado: "11", dificultad: "dificil", pregunta: "Choose the correct order (question):", opciones: ["You are where?", "Where are you?", "Where you are?", "Are where you?"], correcta: 1 },

    // CULTURA CIUDADANA 5°–11°
    { materia: "Cultura Ciudadana", grado: "5", dificultad: "facil", pregunta: "¿Qué hace la policía?", opciones: ["Cura enfermos", "Protege a la comunidad", "Vende comida", "Enseña"], correcta: 1 },
    { materia: "Cultura Ciudadana", grado: "6", dificultad: "facil", pregunta: "La norma de tránsito peatonal es:", opciones: ["Cruzar en cualquier lugar", "Usar la cebra", "Correr entre autos", "Ignorar semáforo"], correcta: 1 },
    { materia: "Cultura Ciudadana", grado: "8", dificultad: "media", pregunta: "¿Qué es el voto?", opciones: ["Una compra", "Decisión ciudadana", "Un impuesto", "Una fiesta"], correcta: 1 },
    { materia: "Cultura Ciudadana", grado: "9", dificultad: "media", pregunta: "La ‘separación de poderes’ significa:", opciones: ["Mantener el orden", "Dividir funciones del Estado", "Compartir dinero", "Organizar elecciones"], correcta: 1 },
    { materia: "Cultura Ciudadana", grado: "10", dificultad: "dificil", pregunta: "La participación ciudadana NO incluye:", opciones: ["Cabildo abierto", "Plebiscito", "Acción de tutela", "Revocatoria del mandato"], correcta: 2 },
    { materia: "Cultura Ciudadana", grado: "11", dificultad: "dificil", pregunta: "La Constitución colombiana vigente es de:", opciones: ["1886", "1991", "2000", "2010"], correcta: 1 },
];

/* Estado del juego */
let estado = {
    //estado de Modal de Inicio
    modalInicio: false,
    // Estados de juegos
    juegoGusanito: false,
    juegoSopa: false,
    quiz: false,
    isPaused: false,
    // Estados de usuario y progreso
    preguntasAcertadas: 0,
    preguntasErradas: 0,
    vidas: 5,
    grado: "5",
    dificultad: "facil",
    preguntasContestadas: 0,
    progreso: 0,
    questionCurrent: null,
    preguntasGuardadas: [],
    modalPantallaFin: false,
    gusanito_mensaje_corecto: false,
    gusanito_mensaje_de_error: false,
    gusanito_modal_pregunta_rapida: false,
    mensajeDeGanar: false,
};
let btnResolver = document.getElementById("btnEnviar");
/* Elementos */
const el = {
    numeroDePregunta: document.getElementById("numeroDePregunta"),
    totalPreguntas: document.getElementById("totalDePreguntas"),
    seletName: document.getElementById("userName"),
    dataName: document.getElementById("usuarioNombre"),
    pantallaInicio: document.getElementById("login-view"),
    pantallaJuego: document.getElementById("quizContainer"),
    questionsContainer: document.querySelector(".quizContainer"),
    pantallaFin: document.getElementById("pantallaFin"),
    pantallaSopa: document.getElementById("pantallaSopa"),
    pantallaGusanito: document.getElementById("pantallaGusanito"),
    quizQuestion: document.getElementById("pregunta"),
    optionsQuestion: document.getElementById("opciones"),
    vidasEl: document.getElementById("vidas"),
    contadorPreguntas: document.getElementById("contadorPreguntas"),
    barraProgreso: document.getElementById("barraProgresoVisual"),
    seletGrado: document.getElementById("selectGrado"),
    gradoLabel: document.getElementById("spanGrado"),
    selectDificultad: document.getElementById("selectDificultad"),
    dificultadLabel: document.getElementById("spanDificultad"),
    materiaLabel: document.getElementById("materiaActual"),
    overlayOperacion: document.getElementById("overlayOperacion"),
    quizContainer: document.getElementById("quizContainer"),
    infoUser: document.querySelector(".infoUser"),
    successMessage: document.getElementById("successMessage"),
    errorMessage: document.getElementById("modalLoseVidas"),
    modal_de_celebracion: document.getElementById("modal-de-celebracion"),
    cuentaRegresiva: document.getElementById("cuentaRegresiva"),
    racha: document.getElementById("racha"),
    vidasGanadas: document.getElementById("vidasGanadas"),
    preguntasContestadas: document.getElementById("preguntasContestadas"),
    preguntasAcertadas: document.getElementById("preguntasAcertadas"),
    preguntasErradas: document.getElementById("preguntasEquivocadas"),
    vidasGanadas: document.getElementById("vidasDelJuego"),
    eventoPause: document.getElementById("pauseGusanito")
};


function sincronizarState() {

    el.vidasGanadas.innerHTML = '';
    for (let vida = 1; vida <= estado.vidas; vida++) {

        el.vidasGanadas.innerHTML += `<span class="material-symbols-outlined text-red-400 dark:text-red-200 text-xl">favorite_border</span>`

        function perderVida() {
            if (estado.vidas > 0) {
                estado.vidas--;
                // Obtener todos los corazones
                const corazones = el.vidasGanadas.querySelectorAll('span');
                // Eliminar el último corazón
                if (corazones.length > 0) {
                    corazones[corazones.length - 1].remove();
                }
            }
        }

    }


    // Estados de modales y mensajes
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
    estado.modalPantallaFin === false ? el.pantallaFin.classList.add("hidden") : el.pantallaFin.classList.remove("hidden");

}
function volverAlQuiz() {
    estado.quiz = true;
    estado.mensajeDeGanar = false;
    estado.gusanito_modal_pregunta_rapida = false;
    estado.gusanito_mensaje_corecto = false;
    estado.gusanito_mensaje_de_error = false;
    estado.juegoGusanito = false;
    el.infoUser.classList.remove("hidden");
    el.questionsContainer.classList.remove("blur-sm");
    el.pantallaJuego.classList.add("hidden");
    el.pantallaInicio.classList.replace("opacity-0", "opacity-1");
    el.questionsContainer.classList.remove("hidden");
    sincronizarState();
    siguientePregunta();
}
/* ---------- Flujo principal ---------- */


function entrar() {
    el.dataName.innerText = el.seletName.value || "Invitado";
    spanGrado.innerText = el.seletGrado.value;
    spanDificultad.innerText = el.selectDificultad.value;
    el.numeroDePregunta.innerText = estado.preguntasContestadas == 0 || estado.preguntasContestadas == 1 ? '1' : estado.preguntasContestadas + 1;
    setTimeout(() => {
        document.getElementById("header").classList.remove("hidden");
        estado.quiz = true;
        estado.modalInicio = false;
        el.pantallaJuego.classList.replace("opacity-0", "opacity-1");
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

function siguientePregunta() {
    if (estado.preguntasGuardadas.length === 0) {
        estado.preguntasGuardadas = filtrarPreguntas(estado.grado, estado.dificultad);
    }
    const q = estado.preguntasGuardadas.shift();
    estado.questionCurrent = q;
    el.materiaLabel.innerText = q.materia;
    el.quizQuestion.innerText = q.pregunta;
    el.optionsQuestion.innerHTML = "";
    q.opciones.forEach((opt, idx) => {
        if (idx === -1) {
            el.pantallaFin.classList.replace('opacity-0', 'opacity-100');
        }
        // 1. Crear el <label> (contenedor principal de la opción)
        const label = document.createElement("label");
        label.className = "flex items-center gap-4 rounded-lg border-2 border-solid border-gray-400 dark:border-gray-600 p-2 cursor-pointer hover:border-primary dark:hover:border-primary transition-all duration-300 ease-in-out transform hover:scale-105 has-[:checked]:border-primary has-[:checked]:bg-primary/10 text-sm";
        // Añadir 'opcion' para que la lógica de verificación (verificarRespuesta) pueda aplicar las clases 'correct'/'wrong'.
        label.classList.add("opcion");

        // 2. Crear el <input type="radio">
        const input = document.createElement("input");
        input.type = "radio";
        input.name = "quiz-option";
        input.value = idx; // Usamos el índice como valor para identificación
        input.className = "h-4 w-4 border-2 border-gray-400 dark:border-gray-500 bg-transparent text-transparent checked:border-primary checked:bg-[image:--radio-dot-svg] focus:outline-none focus:ring-0 focus:ring-offset-0 checked:focus:border-primary text-sm";

        // 3. Crear el <div> contenedor de texto
        const textContainer = document.createElement("div");
        textContainer.className = "flex grow flex-col";

        // 4. Crear el <p> con el texto de la opción
        const textP = document.createElement("p");
        textP.className = "text-sm font-medium";
        textP.innerText = `${String.fromCharCode(65 + idx)}. ${opt}`; // Ejemplo: A. 42

        // 5. Ensamblar los elementos
        textContainer.appendChild(textP);
        label.appendChild(input);
        label.appendChild(textContainer);

        // 6. Asignar el evento. Usamos 'onchange' en el input, que se dispara cuando se
        // selecciona al hacer clic en el label, manteniendo el flujo de verificación inmediata.
        input.onchange = () => verificarRespuesta(idx, q);

        // 7. Adjuntar la opción completa al contenedor principal
        el.optionsQuestion.appendChild(label);
    });

}

function verificarRespuesta(indice, pregunta) {
    const radios = el.optionsQuestion.querySelectorAll('input[type="radio"]');
    radios.forEach(radio => radio.disabled = true);

    const opcionesNodes = Array.from(el.optionsQuestion.children);
    const opcionSeleccionada = opcionesNodes[indice];

    const classesToClear = [
        "border-success", "bg-success/10", "border-danger", "bg-danger/10",
        "hover:border-primary", "dark:hover:border-primary",
        "has-[:checked]:border-primary", "has-[:checked]:bg-primary/10"
    ];

    opcionesNodes.forEach(n => {
        n.classList.remove(...classesToClear);
    });

    estado.preguntasContestadas++;
    estado.progreso++;

    if (indice === pregunta.correcta) {
        opcionSeleccionada.classList.add("border-success", "bg-success/10");
        estado.preguntasAcertadas++;
        el.preguntasAcertadas.innerText = estado.preguntasAcertadas;
        sincronizarState();
        actualizarContadores();
        setTimeout(siguientePregunta, 600);
    } else {
        opcionSeleccionada.classList.add("border-danger", "bg-danger/10");
        opcionesNodes[pregunta.correcta].classList.add("border-success", "bg-success/10");
        estado.vidas--;
        estado.preguntasErradas++;
        el.preguntasErradas.innerText = estado.preguntasErradas;
        sincronizarState();
        actualizarVidasUI();
        actualizarContadores();

        setTimeout(() => {
            if (estado.vidas <= 0) {
                el.questionsContainer.classList.add('blur-sm');
                el.pantallaFin.classList.replace('hidden', 'block');
            } else {
                siguientePregunta();
            }
        }, 800);
    }
    actualizarContadores();
}

function saltarPregunta() {
    estado.vidas--; actualizarVidasUI(); estado.preguntasContestadas++; actualizarContadores();
    (estado.vidas <= 0) ? mostrarPantalla("fin") : siguientePregunta();
}


function actualizarContadores() {
    // Tu juego limita a 16 preguntas, por lo que este es el total base.
    const totalPreguntas = 16;

    // Calcula el porcentaje de progreso (limitado a un máximo de 100%)
    const porcentaje = Math.min(100, (estado.progreso / totalPreguntas) * 100);

    // 1. Actualiza los contadores numéricos (texto: 5 de 20, etc.)
    document.getElementById("contadorPreguntas").innerText = estado.preguntasContestadas;
    el.totalPreguntas.innerText = totalPreguntas;
    el.numeroDePregunta.innerText = estado.preguntasContestadas == 0 ? '1' : estado.preguntasContestadas + 1;

    // 2. Actualiza la barra de progreso visual
    if (el.barraProgreso) {
        el.barraProgreso.style.width = `${porcentaje}%`;
    }
}
function actualizarVidasUI() {
    el.vidasEl.innerText = estado.vidas;
}

function reiniciarTodo() {
    estado = { vidas: 5, grado: "5", dificultad: "facil", preguntasContestadas: 0, progreso: 0, questionCurrent: null, preguntasGuardadas: [] };
    mostrarPantalla("inicio"); actualizarVidasUI(); actualizarContadores();
}



/* ---------- Utilidades ---------- */
function shuffle(a) { for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1));[a[i], a[j]] = [a[j], a[i]]; } return a; }
function mezclarEn(dest, src) { src.forEach(q => { if (!dest.includes(q)) dest.push(q); }); }

/* ===================== SOPA DE LETRAS ===================== */
let sopa = {
    canvas: null, ctx: null,
    gridSize: 12, grid: [],
    cellSize: 34, padding: 12,
    palabrasBase: [
        { en: "CAT", es: "gato" }, { en: "DOG", es: "perro" }, { en: "HOUSE", es: "casa" }, { en: "BOOK", es: "libro" },
        { en: "APPLE", es: "manzana" }, { en: "SCHOOL", es: "escuela" }, { en: "WATER", es: "agua" }, { en: "TABLE", es: "mesa" },
        { en: "CHAIR", es: "silla" }, { en: "TEACHER", es: "profesor" }, { en: "PENCIL", es: "lápiz" }, { en: "FAMILY", es: "familia" }
    ],
    palabras: [], found: [],
    startCell: null, endCell: null, dragging: false
};


function generarSopa() {
    sopa.grid = Array.from({ length: sopa.gridSize }, () => Array(sopa.gridSize).fill(''));
    sopa.palabras.forEach(w => colocarPalabraSopa(w.en));
    const letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    for (let r = 0; r < sopa.gridSize; r++) for (let c = 0; c < sopa.gridSize; c++) if (!sopa.grid[r][c]) sopa.grid[r][c] = letras[Math.floor(Math.random() * letras.length)];
}

function colocarPalabraSopa(word) {
    const L = word.length; const dirs = [{ dx: 1, dy: 0 }, { dx: -1, dy: 0 }, { dx: 0, dy: 1 }, { dx: 0, dy: -1 }, { dx: 1, dy: 1 }, { dx: -1, dy: -1 }, { dx: 1, dy: -1 }, { dx: -1, dy: 1 }];
    for (let attempt = 0; attempt < 400; attempt++) {
        const dir = dirs[Math.floor(Math.random() * dirs.length)];
        const startR = Math.floor(Math.random() * sopa.gridSize);
        const startC = Math.floor(Math.random() * sopa.gridSize);
        const endR = startR + dir.dy * (L - 1); const endC = startC + dir.dx * (L - 1);
        if (endR < 0 || endR >= sopa.gridSize || endC < 0 || endC >= sopa.gridSize) continue;
        let ok = true; for (let i = 0; i < L; i++) { const r = startR + dir.dy * i, c = startC + dir.dx * i; if (sopa.grid[r][c] && sopa.grid[r][c] !== word[i]) { ok = false; break; } }
        if (!ok) continue;
        for (let i = 0; i < L; i++) { const r = startR + dir.dy * i, c = startC + dir.dx * i; sopa.grid[r][c] = word[i]; }
        return true;
    }
    return false;
}

function dibujarSopa(showSelection = false) {
    const ctx = sopa.ctx, size = sopa.cellSize; ctx.clearRect(0, 0, sopa.canvas.width, sopa.canvas.height);
    ctx.fillStyle = "#f8fafc"; ctx.fillRect(0, 0, sopa.canvas.width, sopa.canvas.height);
    for (let r = 0; r < sopa.gridSize; r++) {
        for (let c = 0; c < sopa.gridSize; c++) {
            const x = sopa.padding + c * size, y = sopa.padding + r * size;
            ctx.fillStyle = "#ffffff"; ctx.fillRect(x, y, size - 1, size - 1);
            ctx.strokeStyle = "#d1d5db"; ctx.strokeRect(x, y, size - 1, size - 1);
            ctx.fillStyle = "#0b1724"; ctx.font = `${Math.floor(size * 0.55)}px Inter, Arial`; ctx.textAlign = "center"; ctx.textBaseline = "middle";
            ctx.fillText(sopa.grid[r][c], x + size / 2, y + size / 2);
        }
    }
    // palabras encontradas → persistentes
    sopa.found.forEach(f => { const cells = f.cells; ctx.fillStyle = "rgba(34,197,94,0.45)"; cells.forEach(cell => { const x = sopa.padding + cell.c * size, y = sopa.padding + cell.r * size; ctx.fillRect(x, y, size - 1, size - 1); }); });

    if (showSelection && sopa.startCell && sopa.endCell) {
        const lineCells = getLineCellsSopa(sopa.startCell, sopa.endCell);
        if (lineCells.length > 0) { ctx.fillStyle = "rgba(59,130,246,0.35)"; lineCells.forEach(cell => { const x = sopa.padding + cell.c * size, y = sopa.padding + cell.r * size; ctx.fillRect(x, y, size - 1, size - 1); }); }
    }
}

function clampCelda(e) {
    const rect = sopa.canvas.getBoundingClientRect();
    const x = e.clientX - rect.left - sopa.padding; const y = e.clientY - rect.top - sopa.padding;
    const c = Math.max(0, Math.min(sopa.gridSize - 1, Math.floor(x / sopa.cellSize)));
    const r = Math.max(0, Math.min(sopa.gridSize - 1, Math.floor(y / sopa.cellSize)));
    return { r, c };
}

function snapCelda(start, rawEnd) {
    const dr = rawEnd.r - start.r, dc = rawEnd.c - start.c;
    if (dr === 0 && dc === 0) return rawEnd;
    const sR = Math.sign(dr), sC = Math.sign(dc);
    const adr = Math.abs(dr), adc = Math.abs(dc);
    if (adr === adc) { return { r: start.r + sR * adr, c: start.c + sC * adc }; } // diagonal exacta
    if (adr > adc) { return { r: start.r + sR * adr, c: start.c }; } // vertical
    return { r: start.r, c: start.c + sC * adc }; // horizontal
}

function getLineCellsSopa(start, end) {
    const dr = end.r - start.r, dc = end.c - start.c; const stepR = Math.sign(dr), stepC = Math.sign(dc);
    if (stepR !== 0 && stepC !== 0 && Math.abs(dr) !== Math.abs(dc)) return [];
    const steps = Math.max(Math.abs(dr), Math.abs(dc)); if (steps === 0) return [{ r: start.r, c: start.c }];
    const cells = []; let r = start.r, c = start.c; for (let i = 0; i <= steps; i++) { cells.push({ r, c }); r += stepR; c += stepC; }
    return cells;
}

function procesarSeleccionSopa() {
    if (!sopa.startCell || !sopa.endCell) return;
    const cells = getLineCellsSopa(sopa.startCell, sopa.endCell); if (cells.length === 0) return;
    const palabra = cells.map(cell => sopa.grid[cell.r][cell.c]).join("");
    const palabraRev = palabra.split("").reverse().join("");
    const idx = sopa.palabras.findIndex(p => (p.en === palabra || p.en === palabraRev) && !sopa.found.some(f => f.word === p.en));
    if (idx >= 0) { const obj = sopa.palabras[idx]; sopa.found.push({ word: obj.en, cells }); dibujarSopa(); if (sopa.found.length >= sopa.palabras.length) { alert("¡Completaste la sopa! +2 vidas"); estado.vidas += 2; actualizarVidasUI(); mostrarPantalla("juego"); } }
}


/* ===================== GUSANITO (Snake) ===================== */
let gusanito = { canvas: null, ctx: null, box: 24, snake: [], dir: "DOWN", food: {}, loopId: null, aciertos: 0, awaitingAnswer: false, currentResult: null, streak: 0 };

let stateAnswer = false;
function iniciarGusanito() {
    el.infoUser.classList.add("hidden");
    estado.quiz = true;
    estado.modalPantallaFin = false;
    estado.juegoSopa = false;
    estado.juegoGusanito = true;
    el.pantallaGusanito.classList.replace("opacity-0", "opacity-1")
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

function generarComidaGusanito() {
    const cols = Math.floor(gusanito.canvas.width / gusanito.box), rows = Math.floor(gusanito.canvas.height / gusanito.box); gusanito.food = { x: Math.floor(Math.random() * cols) * gusanito.box, y: Math.floor(Math.random() * rows) * gusanito.box }
}


const headLeftImg = new Image();
headLeftImg.src = "./assets/head-left.png";

const headRightImg = new Image();
headRightImg.src = "./assets/head-right.png";

const headUpImg = new Image();
headUpImg.src = "./assets/head-up.png";

const headDownImg = new Image();
headDownImg.src = "./assets/head-down.png";

const bodyHorizontalImg = new Image();
bodyHorizontalImg.src = "./assets/body_horizontal.png";

const bodyVerticalImg = new Image();
bodyVerticalImg.src = "./assets/body_vertical.png";

const appleImg = new Image();
appleImg.src = "./assets/appleImg.png";

let estadoAnswer = false;
function loopGusanito() {
    const ctx = gusanito.ctx;
    ctx.fillStyle = "#e6fffa";
    ctx.fillRect(0, 0, gusanito.canvas.width, gusanito.canvas.height);

    // Dibujar manzana
    ctx.drawImage(appleImg, gusanito.food.x, gusanito.food.y, gusanito.box, gusanito.box);

    // Dibujar serpiente
    for (let i = 0; i < gusanito.snake.length; i++) {
        let segment = gusanito.snake[i];
        let isHead = i === 0;

        if (isHead) {
            ctx.save();
            ctx.translate(segment.x + gusanito.box / 2, segment.y + gusanito.box / 2);


            let headImg;
            let bodyImg;

            gusanito.dir == "RIGHT" ? headImg = headRightImg : gusanito.dir == "LEFT" ? headImg = headLeftImg : gusanito.dir == "UP" ? headImg = headUpImg : headImg = headDownImg;
            gusanito.dir == "RIGHT" ? bodyImg = bodyHorizontalImg : gusanito.dir == "LEFT" ? bodyImg = bodyHorizontalImg : gusanito.dir == "UP" ? bodyImg = bodyVerticalImg : bodyImg = bodyVerticalImg;

            ctx.drawImage(headImg, -gusanito.box / 2, -gusanito.box / 2, gusanito.box, gusanito.box);

            ctx.restore();
        } else {
            // Determinar orientación del cuerpo
            let previous = gusanito.snake[i - 1];
            let next = gusanito.snake[i + 1];
            let bodyImg; // ← Variable correcta

            if (previous && next) {
                // Verificar si es movimiento VERTICAL (misma columna X)
                if (previous.x === segment.x && next.x === segment.x) {
                    bodyImg = bodyVerticalImg;
                }
                // Verificar si es movimiento HORIZONTAL (misma fila Y)
                else if (previous.y === segment.y && next.y === segment.y) {
                    bodyImg = bodyHorizontalImg;
                }
                // Curva (esquina)
                else {
                    bodyImg = bodyHorizontalImg;
                }
            }
            // Último segmento (cola) - verificar con el anterior
            else if (previous) {
                // Si el segmento anterior está en la misma FILA (mismo Y) → horizontal
                if (previous.y === segment.y) {
                    bodyImg = bodyHorizontalImg;
                }
                // Si el segmento anterior está en la misma COLUMNA (mismo X) → vertical
                else if (previous.x === segment.x) {
                    bodyImg = bodyVerticalImg;
                }
                // Fallback
                else {
                    bodyImg = bodyHorizontalImg;
                }
            }
            // Fallback final
            else {
                bodyImg = bodyHorizontalImg;
            }

            // Dibujar el segmento del cuerpo
            ctx.drawImage(bodyImg, segment.x, segment.y, gusanito.box, gusanito.box);
        }
    }

    if (gusanito.awaitingAnswer) return;

    // Movimiento cabeza
    let head = { ...gusanito.snake[0] };
    if (gusanito.dir === "RIGHT") head.x += gusanito.box;
    if (gusanito.dir === "LEFT") head.x -= gusanito.box;
    if (gusanito.dir === "UP") head.y -= gusanito.box;
    if (gusanito.dir === "DOWN") head.y += gusanito.box;


    // Colisión paredes o cuerpo
    if (head.x < 0 || head.y < 0 || head.x >= gusanito.canvas.width || head.y >= gusanito.canvas.height
        || gusanito.snake.some(s => s.x === head.x && s.y === head.y)) {
        const choque = document.getElementById("divChoque");
        choque.classList.remove("hidden");
        setTimeout(() => {
            choque.classList.add("hidden");
            resetSnake();
        }, 1500);
        return;
    }

    gusanito.snake.unshift(head);

    // Comer
    if (head.x === gusanito.food.x && head.y === gusanito.food.y) {
        estado.gusanito_modal_pregunta_rapida = true;
        estado.gusanito_modal_pregunta_rapida == true ? gusanito.awaitingAnswer = true : gusanito.awaitingAnswer = false;
        generarOperacionModalSegunNivel();
        el.overlayOperacion.classList.remove("hidden");
    } else {
        gusanito.snake.pop();
    }
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


/* Operaciones adaptadas por grado y dificultad */
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


        if (gusanito.aciertos >= 3) {
            gusanito.streak++;
            el.racha.innerText = gusanito.streak;
            estado.vidas += 2;

        }

    } else {
        gusanito.streak = 0;
        el.racha.innerText = gusanito.streak;
        estado.gusanito_mensaje_de_error = true;
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
                estado.vidas = 2
                el.vidasEl.innerText = estado.vidas;
                btnResolver.classList.remove("hidden");
                btnResolver.disabled = false;
                siguientePregunta();
                volverAlQuiz();
            }
        }, 600);
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

// Variables para la Sopa de Letras
const SopaConfig = {
    words: ["CAT", "DOG", "BOOK", "HOUSE", "TEACHER"],
    gridSize: 10,
    grid: [],
    foundWords: new Set(),
    isSelecting: false,
    startCell: null,
    endCell: null,
    currentSelection: []
};

// Referencias de UI de Sopa de Letras (se inicializan en iniciarSopa())
let wordGrid, wordList;

/* ===================== SOPA DE LETRAS - LÓGICA ===================== */

// Función para inicializar la Sopa de Letras
function iniciarSopa() {
    // 1. Obtener referencias de la UI
    wordGrid = document.getElementById("wordGrid");
    wordList = document.getElementById("wordList");

    // 2. Limpiar estados y UI anteriores
    SopaConfig.grid = [];
    SopaConfig.foundWords.clear();
    SopaConfig.isSelecting = false;
    SopaConfig.startCell = null;
    SopaConfig.endCell = null;
    wordGrid.innerHTML = '';
    wordList.innerHTML = '';

    // 3. Generar la cuadrícula y rellenarla
    SopaConfig.grid = generateWordSearch(SopaConfig.words, SopaConfig.gridSize);
    renderWordGrid(SopaConfig.grid, SopaConfig.gridSize);
    renderWordList(SopaConfig.words);

    // 4. Configurar eventos de mouse para la selección
    setupGridEvents();

    // 5. Mostrar la pantalla
    setTimeout(() => {
        el.quizContainer.classList.add("blur-sm");
        el.pantallaFin.classList.replace("block", "hidden");
        el.pantallaSopa.classList.replace("hidden", "flex");
    }, 200);
}

// Función para renderizar la cuadrícula en el HTML
function renderWordGrid(grid, size) {
    wordGrid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    grid.forEach((row, rowIndex) => {
        row.forEach((cell, colIndex) => {
            const cellDiv = document.createElement('div');
            cellDiv.classList.add(
                'grid-cell', 'flex', 'items-center', 'justify-center', 'dark:bg-gray-800', 'rounded-lg',
                'text-md', 'font-bold', 'cursor-pointer', 'transition-colors', 'duration-100', 'ease-in-out'
            );
            cellDiv.textContent = cell.letter;
            cellDiv.dataset.row = rowIndex;
            cellDiv.dataset.col = colIndex;
            wordGrid.appendChild(cellDiv);
        });
    });
}

// Función para renderizar la lista de palabras
function renderWordList(words) {
    words.forEach(word => {
        const label = document.createElement('label');
        label.classList.add('flex', 'gap-x-1', 'flex-row-reverse', 'justify-between', 'items-center', 'word-item');
        label.dataset.word = word;

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.disabled = true;
        checkbox.classList.add('h-3', 'w-3', 'rounded', 'border-2', 'bg-transparent', 'text-primary', 'checked:bg-primary', 'checked:border-primary', 'checked:bg-no-repeat', 'checked:bg-center', 'focus:ring-0', 'focus:ring-offset-0', 'focus:border-gray-300', 'dark:border-gray-600', 'dark:focus:border-gray-500', 'transition-all', 'duration-300');
        checkbox.style.setProperty('--checkbox-tick-svg', "url('data:image/svg+xml,%3csvg viewBox=%270 0 16 16%27 fill=%27rgb(255,255,255)%27 xmlns=%27http://www.w3.org/2000/svg%27%3e%3cpath d=%27M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z%27/%3e%3c/svg%3e')");

        const p = document.createElement('p');
        p.classList.add('text-sm', 'font-normal', 'leading-normal', 'transition-all', 'duration-300');
        p.textContent = word;

        label.appendChild(checkbox);
        label.appendChild(p);
        wordList.appendChild(label);
    });
}

// Función para configurar los eventos de selección del usuario
function setupGridEvents() {
    wordGrid.addEventListener('mousedown', handleMouseDown);
    wordGrid.addEventListener('mousemove', handleMouseMove);
    wordGrid.addEventListener('mouseup', handleMouseUp);
}

// Manejadores de eventos
function handleMouseDown(e) {
    const cell = e.target.closest('.grid-cell');
    if (cell && !SopaConfig.foundWords.has(cell.dataset.word)) {
        SopaConfig.isSelecting = true;
        SopaConfig.startCell = cell;
        SopaConfig.endCell = cell;
        updateSelectionHighlight();
    }
}

function handleMouseMove(e) {
    if (!SopaConfig.isSelecting) return;
    const cell = e.target.closest('.grid-cell');
    if (cell) {
        SopaConfig.endCell = cell;
        updateSelectionHighlight();
    }
}

function handleMouseUp() {
    if (!SopaConfig.isSelecting) return;
    SopaConfig.isSelecting = false;

    // Verificar si la palabra seleccionada es válida
    checkSelectedWord();

    // Limpiar el estado de selección
    SopaConfig.startCell = null;
    SopaConfig.endCell = null;
    updateSelectionHighlight();
}

// Función para actualizar el resaltado visual
function updateSelectionHighlight() {
    // Limpiar el resaltado anterior
    SopaConfig.currentSelection.forEach(cell => cell.classList.remove('bg-yellow-300/50', 'dark:bg-yellow-600/50'));
    SopaConfig.currentSelection = [];

    if (!SopaConfig.startCell || !SopaConfig.endCell) return;

    const start = {
        r: parseInt(SopaConfig.startCell.dataset.row),
        c: parseInt(SopaConfig.startCell.dataset.col)
    };
    const end = {
        r: parseInt(SopaConfig.endCell.dataset.row),
        c: parseInt(SopaConfig.endCell.dataset.col)
    };

    const deltaR = Math.sign(end.r - start.r);
    const deltaC = Math.sign(end.c - start.c);

    // Solo permitir movimientos rectos o diagonales
    if (Math.abs(end.r - start.r) !== Math.abs(end.c - start.c) && deltaR !== 0 && deltaC !== 0) {
        return;
    }

    let r = start.r;
    let c = start.c;

    // Recorrer las celdas en la dirección de la selección
    while (r !== end.r + deltaR || c !== end.c + deltaC) {
        const cell = document.querySelector(`.grid-cell[data-row="${r}"][data-col="${c}"]`);
        if (cell) {
            cell.classList.add('bg-yellow-300/50', 'dark:bg-yellow-600/50');
            SopaConfig.currentSelection.push(cell);
        }

        if (r === end.r && c === end.c) break; // Salir si ya llegamos al final

        r += deltaR;
        c += deltaC;
    }
}

// Función para verificar la palabra seleccionada
function checkSelectedWord() {
    if (SopaConfig.currentSelection.length === 0) return;

    let selectedWord = SopaConfig.currentSelection.map(cell => cell.textContent).join('');

    // Verificar si la palabra es una de las palabras objetivo
    let foundWord = SopaConfig.words.find(w => w === selectedWord);

    // Si no es encontrada, verificar la palabra invertida
    if (!foundWord) {
        const reversedWord = selectedWord.split('').reverse().join('');
        foundWord = SopaConfig.words.find(w => w === reversedWord);
        if (foundWord) {
            // Invertir la selección para que el resaltado final sea correcto
            SopaConfig.currentSelection.reverse();
        }
    }

    if (foundWord && !SopaConfig.foundWords.has(foundWord)) {
        SopaConfig.foundWords.add(foundWord);

        // 1. Aplicar estilo de palabra encontrada
        SopaConfig.currentSelection.forEach(cell => {
            cell.classList.remove('bg-yellow-300/50', 'dark:bg-yellow-600/50');
            cell.classList.add('bg-green-500/70', 'text-white', 'cell-found');
        });

        // 2. Actualizar la lista de palabras
        const listItem = document.querySelector(`.word-item[data-word="${foundWord}"]`);
        if (listItem) {
            listItem.querySelector('input').checked = true;
            listItem.querySelector('p').classList.add('line-through', 'text-gray-400', 'dark:text-gray-500');
        }

        // 3. Verificar si el juego terminó
        if (SopaConfig.foundWords.size === SopaConfig.words.length) {
            alert("¡Felicidades! Encontraste todas las palabras. Ganaste +2 vidas.");
            estado.vidas += 2;
            actualizarVidasUI();
            forzarSalirSopa(); // Vuelve al juego principal
        }
    }
}

// Función para generar la cuadrícula con palabras
function generateWordSearch(words, size) {
    const grid = Array.from({ length: size }, () =>
        Array.from({ length: size }, () => ({ letter: '', used: false }))
    );
    const directions = [
        [0, 1], [1, 0], [1, 1], // Horizontal, Vertical, Diagonal (abajo-derecha)
        [0, -1], [-1, 0], [-1, -1], // Inverso
        [-1, 1], [1, -1] // Diagonales restantes
    ];

    function placeWord(word) {
        const wordLength = word.length;
        const availablePositions = [];

        // Encontrar todas las posibles posiciones para la palabra
        for (let r = 0; r < size; r++) {
            for (let c = 0; c < size; c++) {
                for (const [dr, dc] of directions) {
                    let canPlace = true;
                    for (let k = 0; k < wordLength; k++) {
                        const nr = r + k * dr;
                        const nc = c + k * dc;

                        if (nr < 0 || nr >= size || nc < 0 || nc >= size) {
                            canPlace = false;
                            break;
                        }

                        const cell = grid[nr][nc];
                        if (cell.used && cell.letter !== word[k]) {
                            canPlace = false;
                            break;
                        }
                    }

                    if (canPlace) {
                        availablePositions.push({ r, c, dr, dc });
                    }
                }
            }
        }

        if (availablePositions.length === 0) return false;

        // Seleccionar una posición al azar
        const { r, c, dr, dc } = availablePositions[Math.floor(Math.random() * availablePositions.length)];

        // Colocar la palabra
        for (let k = 0; k < wordLength; k++) {
            const nr = r + k * dr;
            const nc = c + k * dc;
            grid[nr][nc] = { letter: word[k], used: true };
        }
        return true;
    }

    // Intentar colocar todas las palabras
    words.forEach(word => {
        let placed = placeWord(word.toUpperCase());
        if (!placed) {
            console.warn(`No se pudo colocar la palabra: ${word}.`);
        }
    });

    // Rellenar los espacios vacíos con letras aleatorias
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    for (let r = 0; r < size; r++) {
        for (let c = 0; c < size; c++) {
            if (!grid[r][c].used) {
                const randomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
                grid[r][c].letter = randomLetter;
            }
        }
    }

    return grid;
}

// Función para volver al quiz principal
function forzarSalirSopa() {
    // Desactivar eventos
    wordGrid.removeEventListener('mousedown', handleMouseDown);
    wordGrid.removeEventListener('mousemove', handleMouseMove);
    wordGrid.removeEventListener('mouseup', handleMouseUp);

}

/* ===================== INIT ===================== */
window.addEventListener("DOMContentLoaded", () => { actualizarVidasUI(); actualizarContadores(); });
