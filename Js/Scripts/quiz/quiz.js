function siguientePregunta() {
    if (estado.preguntasContestadas === totalPreguntasBase) {
        setTimeout(() => {
            el.quizContainer.classList.add("blur-sm");
            estado.quiz = false;
            toggleViewWithTransition(el.finQuiz, true);
            sincronizarState();
        }, 500);
        return
    }
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
        label.className = " flex items-center gap-4 rounded-lg border-2 border-solid border-gray-400 dark:border-gray-600 p-2 cursor-pointer hover:border-primary dark:hover:border-primary transition-all duration-300 ease-in  has-[:checked]:border-primary has-[:checked]:bg-primary/10 text-sm";
        // Añadir 'opcion' para que la lógica de verificación (verificarRespuesta) pueda aplicar las clases 'correct'/'wrong'.
        label.classList.add("opcion");

        // 2. Crear el <input type="radio">
        const input = document.createElement("input");
        input.type = "radio";
        input.name = "quiz-option";
        input.value = idx; // Usamos el índice como valor para identificación
        input.className = "opacity-0 transition-all duration-300 ease-in-out h-4 w-4 border-2 border-gray-400 dark:border-gray-500 bg-transparent text-transparent checked:border-primary checked:bg-[image:--radio-dot-svg] focus:outline-none focus:ring-0 focus:ring-offset-0 checked:focus:border-primary text-sm";

        // 3. Crear el <div> contenedor de texto
        const textContainer = document.createElement("div");
        textContainer.className = "opacity-0 transition-all duration-300 ease-in-out  flex grow flex-col";



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
        setTimeout(() => {
            setTimeout(() => {
                el.areaDePregunta.classList.replace("opacity-0", "opacity-100");
                el.quizQuestion.classList.replace("opacity-0", "opacity-100")
            }, 150);
            ;
            input.classList.replace("opacity-0", "opacity-100");
            textContainer.classList.replace("opacity-0", "opacity-100");
        }, 150);
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
        "has-[:checked]:border-primary", "has-[:checked]:bg-primary/10", "opacity-100",
    ];





    // Limpia estilos anteriores
    opcionesNodes.forEach(n => n.classList.remove(...classesToClear));


    // Verifica si la respuesta es correcta
    const esCorrecta = indice === pregunta.correcta;

    if (esCorrecta) {
        opcionSeleccionada.classList.add("border-success", "bg-success/10");
        estado.preguntasAcertadas++;
        setTextToNodes(el.preguntasAcertadas, estado.preguntasAcertadas);
        sincronizarState();
        actualizarContadores();
        setTimeout(siguientePregunta, 800);

    } else {
        opcionSeleccionada.classList.add("border-danger", "bg-danger/10");
        opcionesNodes[pregunta.correcta].classList.add("border-success", "bg-success/10");

        estado.vidas--;
        estado.preguntasErradas++;

        el.preguntasErradas.innerText = estado.preguntasErradas;

        sincronizarState();
        actualizarVidasUI();
        actualizarContadores();

        if (estado.vidas <= 0) {
            temporizador(el.quizContainer, el.pantallaFin, true, 800);
        } else {
            setTimeout(siguientePregunta, 800);
        }

    }



    // Marca progreso total
    estado.preguntasContestadas++;
    estado.progreso++;
    if (estado.preguntasContestadas <= 0) {
        number = 1;
    } else {
        number = estado.preguntasContestadas + 1;
    }
    setTextToNodes(el.numeroDePregunta, number);
    actualizarContadores();
}


function saltarPregunta() {
    // ⭐ NO verificar vidas al inicio, solo restar y verificar después

    estado.preguntasSaltadas++;
    estado.preguntasContestadas++;
    estado.vidas--;

    // Actualizar UI inmediatamente
    setTextToNodes(el.numeroDePregunta, estado.preguntasContestadas + 1);
    el.preguntasSaltadas.innerText = estado.preguntasSaltadas;
    actualizarContadores();
    actualizarVidasUI();

    // ⭐ Sincronizar ANTES de mostrar modal
    sincronizarState();

    // ⭐ Verificar vidas DESPUÉS de restar
    if (estado.vidas > 0) {
        siguientePregunta();
    } else {
        // Sin vidas: mostrar modal con delay
        temporizador(el.quizContainer, el.pantallaFin, true, 800);
    }
}


