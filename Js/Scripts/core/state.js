// Estado del juego y referencias al DOM

const totalPreguntasBase = 20;

// Botones principales
let btnResolver = document.getElementById("btnEnviar");
const btnReiniciar = document.getElementById("btnReiniciar");

// Referencias a elementos del DOM
const el = {
    areaDePregunta: document.getElementById("preguntaArea"),
    numeroDePregunta: document.querySelectorAll(".numeroDePregunta"),
    totalPreguntas: document.querySelectorAll(".totalDePreguntas"),
    seletName: document.getElementById("userName"),
    dataName: document.getElementById("usuarioNombre"),

    pantallaInicio: document.getElementById("login-view"),
    pantallaFin: document.getElementById("pantallaFin"),
    pantallaSopa: document.getElementById("pantallaSopa"),
    pantallaGusanito: document.getElementById("pantallaGusanito"),
    quizContainer: document.getElementById("quizContainer"),

    quizQuestion: document.getElementById("pregunta"),
    optionsQuestion: document.getElementById("opciones"),
    contadorPreguntas: document.getElementById("contadorPreguntas"),
    barraProgreso: document.getElementById("barraProgresoVisual"),

    seletGrado: document.getElementById("selectGrado"),
    gradoLabel: document.getElementById("spanGrado"),
    selectDificultad: document.getElementById("selectDificultad"),
    dificultadLabel: document.getElementById("spanDificultad"),
    materiaLabel: document.getElementById("materiaActual"),

    infoUser: document.querySelector(".infoUser"),

    successMessage: document.getElementById("successMessage"),
    errorMessage: document.getElementById("modalLoseVidas"),
    overlayOperacion: document.getElementById("overlayOperacion"),

    modal_de_celebracion: document.getElementById("modal-de-celebracion-gusanito"),
    celebracionSopa: document.getElementById("modal-de-celebracion-sopa"),

    cuentaRegresiva: document.getElementById("cuentaRegresiva-gusanito"),
    cuentaRegresivaSopa: document.getElementById("cuentaRegresiva-sopa"),


    racha: document.getElementById("racha"),
    preguntasContestadas: document.getElementById("preguntasContestadas"),
    preguntasAcertadas: document.querySelectorAll(".preguntasAcertadas"),
    preguntasErradas: document.getElementById("preguntasEquivocadas"),
    vidasGanadas: document.getElementById("vidasDelJuego"),
    preguntasSaltadas: document.getElementById("preguntasSaltadas"),
    porcentaje: document.getElementById("porcentaje"),

    eventoPause: document.getElementById("pauseGusanito"),
    finQuiz: document.getElementById("finQuiz")
};

// Estado General manejado por todos los módulos

let estado = {
    modalInicio: true,
    quiz: false,
    juegoGusanito: false,
    juegoSopa: false,
    isPaused: false,

    preguntasAcertadas: 0,
    preguntasErradas: 0,
    preguntasSaltadas: 0,
    vidas: 5,

    grado: el.seletGrado.value,
    dificultad: "facil",
    numeroDePregunta: 0,
    preguntasContestadas: 0,
    progreso: 0,

    questionCurrent: null,
    preguntasGuardadas: [],
    modalPantallaFin: false,

    // Estados del gusanito
    gusanito_mensaje_corecto: false,
    gusanito_mensaje_de_error: false,
    gusanito_modal_pregunta_rapida: false,

    // Estados de victoria
    mensajeDeGanar: false,
    celebracionSopa: false
};


