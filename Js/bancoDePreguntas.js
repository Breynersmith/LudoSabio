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
