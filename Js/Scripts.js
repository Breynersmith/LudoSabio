
/* -------------------------------------------------
   BANCO DE PREGUNTAS (ampliado por grado y dificultad)
   {materia, grado, dificultad, pregunta, opciones[], correcta}
   ------------------------------------------------- */
const BANCO = [
    // ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    // MATEMÁTICAS - GRADO 6 - FÁCIL (20 Preguntas)
    // ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    { materia: "Matemáticas", grado: "6", dificultad: "facil", pregunta: "¿Cuánto es $345 + 187$?", opciones: ["522", "532", "432", "542"], correcta: 1 },
    { materia: "Matemáticas", grado: "6", dificultad: "facil", pregunta: "¿Cuál es el resultado de $1200 - 450$?", opciones: ["750", "850", "650", "950"], correcta: 0 },
    { materia: "Matemáticas", grado: "6", dificultad: "facil", pregunta: "¿Cuánto es $25 \\times 15$?", opciones: ["350", "375", "325", "400"], correcta: 1 },
    { materia: "Matemáticas", grado: "6", dificultad: "facil", pregunta: "¿Cuánto es $96 \\div 8$?", opciones: ["10", "11", "12", "13"], correcta: 2 },
    { materia: "Matemáticas", grado: "6", dificultad: "facil", pregunta: "¿Cuál es el valor posicional del '6' en $46.520$?", opciones: ["Unidades", "Decenas", "Centenas", "Unidades de mil"], correcta: 3 },
    { materia: "Matemáticas", grado: "6", dificultad: "facil", pregunta: "Sigue la secuencia: $5, 10, 15, 20, \\dots$ ¿Cuál es el siguiente número?", opciones: ["22", "25", "30", "21"], correcta: 1 },
    { materia: "Matemáticas", grado: "6", dificultad: "facil", pregunta: "¿Cuál es la fracción que representa la mitad de una pizza?", opciones: ["$1/4$", "$1/3$", "$2/4$", "$1/2$"], correcta: 3 },
    { materia: "Matemáticas", grado: "6", dificultad: "facil", pregunta: "Convierte la fracción $1/10$ a número decimal.", opciones: ["$1.0$", "$0.1$", "$0.01$", "$10.0$"], correcta: 1 },
    { materia: "Matemáticas", grado: "6", dificultad: "facil", pregunta: "¿Cuál es el perímetro de un cuadrado de lado $6$ cm?", opciones: ["$12$ cm", "$24$ cm", "$36$ cm", "$18$ cm"], correcta: 1 },
    { materia: "Matemáticas", grado: "6", dificultad: "facil", pregunta: "¿Cuál es el área de un rectángulo con lados de $5$ m y $8$ m?", opciones: ["$13 \\text{ m}^2$", "$26 \\text{ m}^2$", "$40 \\text{ m}^2$", "$30 \\text{ m}^2$"], correcta: 2 },
    { materia: "Matemáticas", grado: "6", dificultad: "facil", pregunta: "¿Qué tipo de ángulo mide más de $0^{\\circ}$ y menos de $90^{\\circ}$?", opciones: ["Recto", "Obtuso", "Agudo", "Llano"], correcta: 2 },
    { materia: "Matemáticas", grado: "6", dificultad: "facil", pregunta: "Redondea el número $15.7$ a la unidad más cercana.", opciones: ["15", "16", "10", "20"], correcta: 1 },
    { materia: "Matemáticas", grado: "6", dificultad: "facil", pregunta: "¿Cuál de estos números es un múltiplo de $5$?", opciones: ["32", "47", "55", "13"], correcta: 2 },
    { materia: "Matemáticas", grado: "6", dificultad: "facil", pregunta: "¿Cuál es el $10\\%$ de $80$?", opciones: ["80", "18", "8", "70"], correcta: 2 },
    { materia: "Matemáticas", grado: "6", dificultad: "facil", pregunta: "Convierte $3$ kilómetros a metros.", opciones: ["$300 \\text{ m}$", "$30 \\text{ m}$", "$3000 \\text{ m}$", "$30.000 \\text{ m}$"], correcta: 2 },
    { materia: "Matemáticas", grado: "6", dificultad: "facil", pregunta: "Si un reloj marca las $3:00$ p.m., ¿cuántos grados mide el ángulo entre sus manecillas?", opciones: ["$30^{\\circ}$", "$90^{\\circ}$", "$120^{\\circ}$", "$180^{\\circ}$"], correcta: 1 },
    { materia: "Matemáticas", grado: "6", dificultad: "facil", pregunta: "¿Qué número completa la igualdad? $4 \\times \\square = 36$", opciones: ["8", "9", "7", "6"], correcta: 1 },
    { materia: "Matemáticas", grado: "6", dificultad: "facil", pregunta: "El cociente de la división $49 \\div 5$ es:", opciones: ["9", "10", "8", "5"], correcta: 0 },
    { materia: "Matemáticas", grado: "6", dificultad: "facil", pregunta: "La suma de tres números consecutivos que empiezan en $10$ es:", opciones: ["30", "33", "34", "36"], correcta: 1 },
    { materia: "Matemáticas", grado: "6", dificultad: "facil", pregunta: "¿Cómo se escribe el número setecientos mil doscientos cinco?", opciones: ["$702.005$", "$700.250$", "$700.205$", "$720.005$"], correcta: 2 },

    // ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    // MATEMÁTICAS - GRADO 6 - MEDIA (20 Preguntas)
    // ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    { materia: "Matemáticas", grado: "6", dificultad: "media", pregunta: "Simplifica la fracción $12/18$ a su mínima expresión.", opciones: ["$6/9$", "$4/6$", "$2/3$", "$1/2$"], correcta: 2 },
    { materia: "Matemáticas", grado: "6", dificultad: "media", pregunta: "Calcula: $1.5 + 0.75 + 2.25$.", opciones: ["$4.25$", "$4.50$", "$4.75$", "$5.00$"], correcta: 1 },
    { materia: "Matemáticas", grado: "6", dificultad: "media", pregunta: "Resuelve la ecuación: $x + 12 = 35$.", opciones: ["$x=47$", "$x=23$", "$x=25$", "$x=37$"], correcta: 1 },
    { materia: "Matemáticas", grado: "6", dificultad: "media", pregunta: "¿Cuál es el m.c.d. (máximo común divisor) de $12$ y $30$?", opciones: ["2", "3", "6", "12"], correcta: 2 },
    { materia: "Matemáticas", grado: "6", dificultad: "media", pregunta: "¿Cuál es el m.c.m. (mínimo común múltiplo) de $4$ y $6$?", opciones: ["2", "12", "18", "24"], correcta: 1 },
    { materia: "Matemáticas", grado: "6", dificultad: "media", pregunta: "El área de un triángulo con base $8$ cm y altura $5$ cm es:", opciones: ["$40 \\text{ cm}^2$", "$20 \\text{ cm}^2$", "$13 \\text{ cm}^2$", "$26 \\text{ cm}^2$"], correcta: 1 },
    { materia: "Matemáticas", grado: "6", dificultad: "media", pregunta: "Calcula $3/5 + 1/10$.", opciones: ["$4/15$", "$7/10$", "$8/10$", "$5/10$"], correcta: 1 },
    { materia: "Matemáticas", grado: "6", dificultad: "media", pregunta: "¿Cuál es el volumen de un cubo con arista de $3$ m?", opciones: ["$9 \\text{ m}^3$", "$12 \\text{ m}^3$", "$18 \\text{ m}^3$", "$27 \\text{ m}^3$"], correcta: 3 },
    { materia: "Matemáticas", grado: "6", dificultad: "media", pregunta: "Si $3$ kg de manzanas cuestan $\\$15.000$, ¿cuánto cuesta $1$ kg?", opciones: ["$\\$3.000$", "$\\$5.000$", "$\\$6.000$", "$\\$4.500$"], correcta: 1 },
    { materia: "Matemáticas", grado: "6", dificultad: "media", pregunta: "Calcula la media (promedio) de los números $10, 15, 20$.", opciones: ["10", "15", "45", "12"], correcta: 1 },
    { materia: "Matemáticas", grado: "6", dificultad: "media", pregunta: "En la expresión $5^3$, la base es:", opciones: ["3", "5", "8", "15"], correcta: 1 },
    { materia: "Matemáticas", grado: "6", dificultad: "media", pregunta: "¿Cuál es el número primo más pequeño?", opciones: ["1", "2", "3", "4"], correcta: 1 },
    { materia: "Matemáticas", grado: "6", dificultad: "media", pregunta: "Convierte el porcentaje $25\\%$ a fracción simplificada.", opciones: ["$1/2$", "$1/4$", "$2/5$", "$3/4$"], correcta: 1 },
    { materia: "Matemáticas", grado: "6", dificultad: "media", pregunta: "Resuelve: $4 \\times (6 - 2) + 1$.", opciones: ["17", "20", "25", "28"], correcta: 0 },
    { materia: "Matemáticas", grado: "6", dificultad: "media", pregunta: "Una caja tiene $4$ bolas rojas y $6$ bolas azules. ¿Cuál es la probabilidad de sacar una roja?", opciones: ["$4/6$", "$6/10$", "$4/10$", "$1/4$"], correcta: 2 },
    { materia: "Matemáticas", grado: "6", dificultad: "media", pregunta: "¿Cómo se llama un polígono de $8$ lados?", opciones: ["Hexágono", "Heptágono", "Nonágono", "Octágono"], correcta: 3 },
    { materia: "Matemáticas", grado: "6", dificultad: "media", pregunta: "Si $5x = 45$, ¿cuánto vale $x$?", opciones: ["7", "8", "9", "10"], correcta: 2 },
    { materia: "Matemáticas", grado: "6", dificultad: "media", pregunta: "Calcula la raíz cuadrada de $64$.", opciones: ["6", "7", "8", "16"], correcta: 2 },
    { materia: "Matemáticas", grado: "6", dificultad: "media", pregunta: "El número $\\pi$ (pi) es aproximadamente $3.14$. ¿A qué conjunto de números pertenece?", opciones: ["Naturales", "Enteros", "Racionales", "Irracionales"], correcta: 3 },
    { materia: "Matemáticas", grado: "6", dificultad: "media", pregunta: "Convierte $1/5$ a porcentaje.", opciones: ["$5\\%$", "$10\\%$", "$20\\%$", "$50\\%$"], correcta: 2 },

    // ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    // MATEMÁTICAS - GRADO 6 - DIFÍCIL (20 Preguntas)
    // ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    { materia: "Matemáticas", grado: "6", dificultad: "dificil", pregunta: "Resuelve: $3x - 5 = 10$.", opciones: ["$x=3$", "$x=5$", "$x=2$", "$x=4$"], correcta: 1 },
    { materia: "Matemáticas", grado: "6", dificultad: "dificil", pregunta: "¿Cuál es el resultado de $-15 + 8$?", opciones: ["7", "-7", "23", "-23"], correcta: 1 },
    { materia: "Matemáticas", grado: "6", dificultad: "dificil", pregunta: "Calcula $\\frac{2}{3} \\times \\frac{9}{4}$.", opciones: ["$3/2$", "$18/12$", "$6/7$", "$1/2$"], correcta: 0 },
    { materia: "Matemáticas", grado: "6", dificultad: "dificil", pregunta: "En un mapa con escala $1:1000$, $5$ cm de papel, ¿cuántos metros reales representan?", opciones: ["$5 \\text{ m}$", "$50 \\text{ m}$", "$500 \\text{ m}$", "$5 \\text{ km}$"], correcta: 1 },
    { materia: "Matemáticas", grado: "6", dificultad: "dificil", pregunta: "Si un pantalón de $\\$80.000$ tiene un descuento del $20\\%$, ¿cuál es su precio final?", opciones: ["$\\$16.000$", "$\\$64.000$", "$\\$72.000$", "$\\$80.000$"], correcta: 1 },
    { materia: "Matemáticas", grado: "6", dificultad: "dificil", pregunta: "Resuelve la inecuación: $x - 3 < 5$.", opciones: ["$x > 8$", "$x < 8$", "$x > 2$", "$x < 2$"], correcta: 1 },
    { materia: "Matemáticas", grado: "6", dificultad: "dificil", pregunta: "¿Cuántos litros son $2500$ mililitros?", opciones: ["$25 \\text{ L}$", "$2.5 \\text{ L}$", "$0.25 \\text{ L}$", "$250 \\text{ L}$"], correcta: 1 },
    { materia: "Matemáticas", grado: "6", dificultad: "dificil", pregunta: "El área de un círculo con radio $4$ cm (usa $\\pi \\approx 3.14$) es aproximadamente:", opciones: ["$12.56 \\text{ cm}^2$", "$50.24 \\text{ cm}^2$", "$25.12 \\text{ cm}^2$", "$16 \\text{ cm}^2$"], correcta: 1 },
    { materia: "Matemáticas", grado: "6", dificultad: "dificil", pregunta: "Calcula $4.5 \\div 0.9$.", opciones: ["4", "5", "0.5", "50"], correcta: 1 },
    { materia: "Matemáticas", grado: "6", dificultad: "dificil", pregunta: "Si una razón es $2:5$ y el primer término es $10$, ¿cuál es el segundo término?", opciones: ["20", "25", "30", "50"], correcta: 1 },
    { materia: "Matemáticas", grado: "6", dificultad: "dificil", pregunta: "¿Qué porcentaje de $50$ es $15$?", opciones: ["$15\\%$", "$25\\%$", "$30\\%$", "$45\\%$"], correcta: 2 },
    { materia: "Matemáticas", grado: "6", dificultad: "dificil", pregunta: "Un ángulo de $120^{\\circ}$ se clasifica como:", opciones: ["Agudo", "Recto", "Obtuso", "Llano"], correcta: 2 },
    { materia: "Matemáticas", grado: "6", dificultad: "dificil", pregunta: "Resuelve: $\\frac{x}{2} + 4 = 9$.", opciones: ["$x=10$", "$x=5$", "$x=26$", "$x=18$"], correcta: 0 },
    { materia: "Matemáticas", grado: "6", dificultad: "dificil", pregunta: "Si el perímetro de un hexágono regular es $48$ cm, ¿cuánto mide cada lado?", opciones: ["$6 \\text{ cm}$", "$8 \\text{ cm}$", "$12 \\text{ cm}$", "$4 \\text{ cm}$"], correcta: 1 },
    { materia: "Matemáticas", grado: "6", dificultad: "dificil", pregunta: "¿Cuál es el resultado de $(-2)^3$?", opciones: ["6", "-6", "8", "-8"], correcta: 3 },
    { materia: "Matemáticas", grado: "6", dificultad: "dificil", pregunta: "En una encuesta, $1/3$ de los estudiantes prefiere fútbol y $1/6$ prefiere baloncesto. ¿Qué fracción prefiere otros deportes?", opciones: ["$1/2$", "$1/3$", "$2/3$", "$5/6$"], correcta: 0 },
    { materia: "Matemáticas", grado: "6", dificultad: "dificil", pregunta: "La moda de la serie de datos $5, 7, 8, 7, 5, 7, 6$ es:", opciones: ["5", "6", "7", "8"], correcta: 2 },
    { materia: "Matemáticas", grado: "6", dificultad: "dificil", pregunta: "Convierte la hora $10:30$ p.m. al formato de $24$ horas.", opciones: ["$10:30$", "$20:30$", "$22:30$", "$14:30$"], correcta: 2 },
    { materia: "Matemáticas", grado: "6", dificultad: "dificil", pregunta: "El punto $(-3, 5)$ se ubica en el cuadrante:", opciones: ["I", "II", "III", "IV"], correcta: 1 },
    { materia: "Matemáticas", grado: "6", dificultad: "dificil", pregunta: "¿Cuánto es $\\frac{3}{4} - \\frac{1}{2}$?", opciones: ["$2/4$", "$1/4$", "$1/2$", "$1/8$"], correcta: 1 },

    // ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    // LENGUA CASTELLANA - GRADO 6 - FÁCIL (20 Preguntas)
    // ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    { materia: "Lengua Castellana", grado: "6", dificultad: "facil", pregunta: "¿Cuál es la función principal de un sustantivo?", opciones: ["Expresar una acción", "Nombrar personas, animales o cosas", "Describir una cualidad", "Conectar oraciones"], correcta: 1 },
    { materia: "Lengua Castellana", grado: "6", dificultad: "facil", pregunta: "En la oración 'El perro ladra fuerte', ¿cuál es el verbo?", opciones: ["El", "perro", "ladra", "fuerte"], correcta: 2 },
    { materia: "Lengua Castellana", grado: "6", dificultad: "facil", pregunta: "¿Qué tipo de palabra describe a un sustantivo? (Ejemplo: casa *bonita*)", opciones: ["Artículo", "Verbo", "Adjetivo", "Adverbio"], correcta: 2 },
    { materia: "Lengua Castellana", grado: "6", dificultad: "facil", pregunta: "¿Cuál de las siguientes es una oración exclamativa?", opciones: ["¿Vienes mañana?", "El sol es amarillo.", "¡Qué hermoso día!", "No sé la respuesta."], correcta: 2 },
    { materia: "Lengua Castellana", grado: "6", dificultad: "facil", pregunta: "¿Cuál es el sujeto en la oración 'Los niños juegan en el parque'?", opciones: ["juegan", "en el parque", "Los niños", "parque"], correcta: 2 },
    { materia: "Lengua Castellana", grado: "6", dificultad: "facil", pregunta: "¿Cuál de estas palabras es un sustantivo común?", opciones: ["Juan", "Colombia", "mesa", "Amazonas"], correcta: 2 },
    { materia: "Lengua Castellana", grado: "6", dificultad: "facil", pregunta: "La palabra 'feliz' es un:", opciones: ["Verbo", "Adverbio", "Adjetivo", "Sustantivo"], correcta: 2 },
    { materia: "Lengua Castellana", grado: "6", dificultad: "facil", pregunta: "¿Qué signo de puntuación se usa al final de una oración declarativa?", opciones: ["Coma", "Dos puntos", "Punto final", "Punto y coma"], correcta: 2 },
    { materia: "Lengua Castellana", grado: "6", dificultad: "facil", pregunta: "El plural de la palabra 'lápiz' es:", opciones: ["lápices", "lápizs", "los lápiz", "lápiz"], correcta: 0 },
    { materia: "Lengua Castellana", grado: "6", dificultad: "facil", pregunta: "¿Qué parte de la narración presenta a los personajes y el lugar?", opciones: ["Desenlace", "Nudo", "Clímax", "Introducción"], correcta: 3 },
    { materia: "Lengua Castellana", grado: "6", dificultad: "facil", pregunta: "La palabra 'rapidez' lleva tilde.", opciones: ["Verdadero", "Falso", "Depende", "A veces"], correcta: 1 },
    { materia: "Lengua Castellana", grado: "6", dificultad: "facil", pregunta: "¿Cuál de estas palabras es un pronombre personal?", opciones: ["rápidamente", "yo", "grande", "leer"], correcta: 1 },
    { materia: "Lengua Castellana", grado: "6", dificultad: "facil", pregunta: "En la conjugación 'yo *como*', el tiempo verbal es:", opciones: ["Pasado", "Futuro", "Presente", "Condicional"], correcta: 2 },
    { materia: "Lengua Castellana", grado: "6", dificultad: "facil", pregunta: "¿Qué palabra es un antónimo de 'subir'?", opciones: ["alzar", "elevar", "ascender", "bajar"], correcta: 3 },
    { materia: "Lengua Castellana", grado: "6", dificultad: "facil", pregunta: "¿Cómo se llama la primera persona del singular?", opciones: ["Tú", "Él", "Nosotros", "Yo"], correcta: 3 },
    { materia: "Lengua Castellana", grado: "6", dificultad: "facil", pregunta: "La palabra 'vaca' se escribe con 'v'. ¿Qué palabra similar se escribe con 'b' y significa 'tubo'?", opciones: ["vaso", "botella", "vasija", "bazo"], correcta: 3 },
    { materia: "Lengua Castellana", grado: "6", dificultad: "facil", pregunta: "Un texto que busca convencer al lector es:", opciones: ["Narrativo", "Expositivo", "Descriptivo", "Argumentativo"], correcta: 3 },
    { materia: "Lengua Castellana", grado: "6", dificultad: "facil", pregunta: "El conjunto de palabras que tiene un sentido completo es una:", opciones: ["Frase", "Párrafo", "Oración", "Estrofa"], correcta: 2 },
    { materia: "Lengua Castellana", grado: "6", dificultad: "facil", pregunta: "En 'Ellos comen manzana', ¿cuál es el predicado?", opciones: ["Ellos", "comen", "manzana", "comen manzana"], correcta: 3 },
    { materia: "Lengua Castellana", grado: "6", dificultad: "facil", pregunta: "Una 'biografía' es un texto que cuenta la vida de:", opciones: ["Una ciudad", "Un animal", "Una persona", "Un objeto"], correcta: 2 },

    // ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    // LENGUA CASTELLANA - GRADO 6 - MEDIA (20 Preguntas)
    // ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    { materia: "Lengua Castellana", grado: "6", dificultad: "media", pregunta: "¿Cuál es el objeto directo en 'María compró flores para su mamá'?", opciones: ["María", "compró", "flores", "para su mamá"], correcta: 2 },
    { materia: "Lengua Castellana", grado: "6", dificultad: "media", pregunta: "La palabra 'cantábamos' está conjugada en qué tiempo verbal:", opciones: ["Presente", "Pretérito perfecto simple", "Pretérito imperfecto (Copretérito)", "Futuro"], correcta: 2 },
    { materia: "Lengua Castellana", grado: "6", dificultad: "media", pregunta: "¿Cuál de las siguientes palabras es grave (llana) y lleva tilde?", opciones: ["canción", "árbol", "fácil", "pared"], correcta: 1 },
    { materia: "Lengua Castellana", grado: "6", dificultad: "media", pregunta: "¿Qué tipo de narrador cuenta la historia desde su propia experiencia (usa 'yo')?", opciones: ["Omnisciente", "Testigo", "Protagonista", "Secundario"], correcta: 2 },
    { materia: "Lengua Castellana", grado: "6", dificultad: "media", pregunta: "¿Cuál de las siguientes palabras es un sustantivo abstracto?", opciones: ["computador", "justicia", "perro", "casa"], correcta: 1 },
    { materia: "Lengua Castellana", grado: "6", dificultad: "media", pregunta: "Usa 'B' antes de cualquier consonante, excepto 'L' o 'R'.", opciones: ["Verdadero", "Falso", "Solo para verbos", "Solo para sustantivos"], correcta: 0 },
    { materia: "Lengua Castellana", grado: "6", dificultad: "media", pregunta: "¿Qué tipo de texto se usa para dar instrucciones o recetas?", opciones: ["Descriptivo", "Lírico", "Expositivo", "Instructivo"], correcta: 3 },
    { materia: "Lengua Castellana", grado: "6", dificultad: "media", pregunta: "¿Cómo se llama la figura literaria que compara dos cosas usando 'como' o 'parece'?", opciones: ["Metáfora", "Símil (o comparación)", "Hipérbole", "Personificación"], correcta: 1 },
    { materia: "Lengua Castellana", grado: "6", dificultad: "media", pregunta: "El objeto indirecto en 'Le di un regalo a mi hermano' es:", opciones: ["Le", "di", "un regalo", "a mi hermano"], correcta: 3 },
    { materia: "Lengua Castellana", grado: "6", dificultad: "media", pregunta: "¿Cuál es el adverbio en la oración 'Ella corrió muy rápido'?", opciones: ["Ella", "corrió", "muy", "rápido"], correcta: 3 },
    { materia: "Lengua Castellana", grado: "6", dificultad: "media", pregunta: "¿Cuál de las siguientes palabras es esdrújula?", opciones: ["camino", "teléfono", "país", "avión"], correcta: 1 },
    { materia: "Lengua Castellana", grado: "6", dificultad: "media", pregunta: "La conjugación 'nosotros *jugaremos*' se encuentra en modo:", opciones: ["Indicativo", "Subjuntivo", "Imperativo", "Condicional"], correcta: 0 },
    { materia: "Lengua Castellana", grado: "6", dificultad: "media", pregunta: "Palabra homófona de 'vaca' (animal) es:", opciones: ["baca (portaequipaje)", "bazo", "vaso", "vasca"], correcta: 0 },
    { materia: "Lengua Castellana", grado: "6", dificultad: "media", pregunta: "El significado de 'biblioteca' es 'lugar donde se guarda':", opciones: ["Comida", "Ropa", "Libros", "Dinero"], correcta: 2 },
    { materia: "Lengua Castellana", grado: "6", dificultad: "media", pregunta: "El uso de la coma se emplea para separar elementos de una:", opciones: ["Conjunción", "Interjección", "Enumeración", "Exclamación"], correcta: 2 },
    { materia: "Lengua Castellana", grado: "6", dificultad: "media", pregunta: "¿Qué recurso usa un poema para crear musicalidad y ritmo?", opciones: ["Prosa", "Párrafo", "Rima", "Diálogo"], correcta: 2 },
    { materia: "Lengua Castellana", grado: "6", dificultad: "media", pregunta: "El prefijo 'sub-' significa:", opciones: ["Sobre", "Debajo", "Junto a", "Después"], correcta: 1 },
    { materia: "Lengua Castellana", grado: "6", dificultad: "media", pregunta: "La palabra 'aún' lleva tilde cuando es sinónimo de:", opciones: ["Incluso", "También", "Todavía", "Siquiera"], correcta: 2 },
    { materia: "Lengua Castellana", grado: "6", dificultad: "media", pregunta: "¿Cuál es la función del punto y coma?", opciones: ["Introducir un diálogo", "Indicar una pausa larga entre ideas relacionadas", "Cerrar una pregunta", "Separar el sujeto del predicado"], correcta: 1 },
    { materia: "Lengua Castellana", grado: "6", dificultad: "media", pregunta: "Un 'microrrelato' se caracteriza por ser un texto muy:", opciones: ["Largo y detallado", "Corto y conciso", "Escrito en verso", "Solo de ciencia ficción"], correcta: 1 },

    // ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    // LENGUA CASTELLANA - GRADO 6 - DIFÍCIL (20 Preguntas)
    // ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    { materia: "Lengua Castellana", grado: "6", dificultad: "dificil", pregunta: "¿En qué tipo de oración se omite el sujeto, pero se sobreentiende? (Ejemplo: 'Comieron pastel'.)", opciones: ["Impersonal", "Compuesta", "Tácito o Elíptico", "Simple"], correcta: 2 },
    { materia: "Lengua Castellana", grado: "6", dificultad: "dificil", pregunta: "La palabra 'dígale' es un ejemplo de verbo en modo:", opciones: ["Indicativo", "Subjuntivo", "Imperativo", "Condicional"], correcta: 2 },
    { materia: "Lengua Castellana", grado: "6", dificultad: "dificil", pregunta: "¿Cómo se llama la figura literaria que atribuye cualidades humanas a objetos o animales?", opciones: ["Metáfora", "Símil", "Personificación", "Hipérbole"], correcta: 2 },
    { materia: "Lengua Castellana", grado: "6", dificultad: "dificil", pregunta: "¿Qué oración es coordinada adversativa (usa 'pero', 'sin embargo')?", opciones: ["Comió y bebió.", "Estudia, pero no entiende.", "O vienes o te quedas.", "Dijo que vendría."], correcta: 1 },
    { materia: "Lengua Castellana", grado: "6", dificultad: "dificil", pregunta: "¿Cuál es la regla de acentuación para las palabras terminadas en '-mente' (adverbios)?", opciones: ["Siempre llevan tilde", "Nunca llevan tilde", "Conservan la tilde del adjetivo original", "Llevan tilde solo si son agudas"], correcta: 2 },
    { materia: "Lengua Castellana", grado: "6", dificultad: "dificil", pregunta: "La palabra 'hice' es del verbo hacer. ¿Cuál es su homófona que significa 'planta'?", opciones: ["hiso", "asé", "ice", "hiedra"], correcta: 2 },
    { materia: "Lengua Castellana", grado: "6", dificultad: "dificil", pregunta: "Un 'epíteto' es un adjetivo que:", opciones: ["Se usa solo en poesía", "Es indispensable para el sustantivo", "Destaca una cualidad propia e inherente del sustantivo", "Se usa solo para describir personas"], correcta: 2 },
    { materia: "Lengua Castellana", grado: "6", dificultad: "dificil", pregunta: "¿Qué conector lógico se usa para expresar una causa o razón?", opciones: ["Además", "Aunque", "Por lo tanto", "Porque"], correcta: 3 },
    { materia: "Lengua Castellana", grado: "6", dificultad: "dificil", pregunta: "La palabra 'vaya' (del verbo ir) tiene como homófona a 'valla' que significa:", opciones: ["Objeto para saltar o separar", "Flor", "Algo bonito", "Persona que va"], correcta: 0 },
    { materia: "Lengua Castellana", grado: "6", dificultad: "dificil", pregunta: "¿Qué figura literaria es 'Sus cabellos eran de oro'?", opciones: ["Símil", "Metáfora", "Hipérbole", "Prosopopeya"], correcta: 1 },
    { materia: "Lengua Castellana", grado: "6", dificultad: "dificil", pregunta: "Los dos puntos (:) se usan antes de una:", opciones: ["Pregunta directa", "Cita textual", "Interjección", "Conjuncíon"], correcta: 1 },
    { materia: "Lengua Castellana", grado: "6", dificultad: "dificil", pregunta: "¿Cuál es el objeto indirecto en la voz pasiva de 'El profesor explicó la lección a los alumnos'?", opciones: ["El profesor", "la lección", "a los alumnos", "fue explicada"], correcta: 2 },
    { materia: "Lengua Castellana", grado: "6", dificultad: "dificil", pregunta: "El 'pretérito pluscuamperfecto' se forma con el auxiliar:", opciones: ["Ser/Estar", "Haber", "Tener", "Soler"], correcta: 1 },
    { materia: "Lengua Castellana", grado: "6", dificultad: "dificil", pregunta: "¿Qué tipo de texto lírico tiene estructura fija de $14$ versos endecasílabos?", opciones: ["Oda", "Romance", "Soneto", "Acróstico"], correcta: 2 },
    { materia: "Lengua Castellana", grado: "6", dificultad: "dificil", pregunta: "El 'neologismo' se refiere a:", opciones: ["Una palabra antigua", "Una palabra inventada o nueva", "Un error gramatical", "Un sinónimo"], correcta: 1 },
    { materia: "Lengua Castellana", grado: "6", dificultad: "dificil", pregunta: "La concordancia nominal se da entre:", opciones: ["Verbo y adverbio", "Sujeto y predicado", "Sustantivo y adjetivo", "Preposición y conjunción"], correcta: 2 },
    { materia: "Lengua Castellana", grado: "6", dificultad: "dificil", pregunta: "Palabra homófona de 'echo' (del verbo echar) es:", opciones: ["hecho (del verbo hacer)", "echo", "echar", "hico"], correcta: 0 },
    { materia: "Lengua Castellana", grado: "6", dificultad: "dificil", pregunta: "¿Cuál es la función del punto aparte?", opciones: ["Separar elementos de una lista", "Cerrar una idea dentro de un párrafo", "Separar párrafos distintos", "Indicar una pausa breve"], correcta: 2 },
    { materia: "Lengua Castellana", grado: "6", dificultad: "dificil", pregunta: "Un 'lexema' es:", opciones: ["La parte variable de la palabra", "La parte que indica el género", "La raíz o parte invariable de la palabra", "El tipo de acento"], correcta: 2 },
    { materia: "Lengua Castellana", grado: "6", dificultad: "dificil", pregunta: "En 'Ellos dijeron que estaban cansados', la subordinada es de tipo:", opciones: ["Adjetiva", "Adverbial", "Sustantiva", "Coordinada"], correcta: 2 },

    // ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    // INGLÉS A2 - GRADO 6 - FÁCIL (20 Preguntas)
    // ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    { materia: "Inglés A2", grado: "6", dificultad: "facil", pregunta: "What is the English word for 'perro'?", opciones: ["cat", "dog", "horse", "bird"], correcta: 1 },
    { materia: "Inglés A2", grado: "6", dificultad: "facil", pregunta: "The plural of 'apple' is:", opciones: ["apples", "applees", "applus", "apple's"], correcta: 0 },
    { materia: "Inglés A2", grado: "6", dificultad: "facil", pregunta: "Which preposition is used for something *on top* of a table?", opciones: ["under", "in", "on", "next to"], correcta: 2 },
    { materia: "Inglés A2", grado: "6", dificultad: "facil", pregunta: "Complete the sentence: 'She ___ happy.'", opciones: ["am", "is", "are", "be"], correcta: 1 },
    { materia: "Inglés A2", grado: "6", dificultad: "facil", pregunta: "What time is it if the clock says $5:00$?", opciones: ["five past ten", "five o'clock", "fifteen to five", "half past five"], correcta: 1 },
    { materia: "Inglés A2", grado: "6", dificultad: "facil", pregunta: "The opposite of 'big' is:", opciones: ["tall", "small", "long", "fat"], correcta: 1 },
    { materia: "Inglés A2", grado: "6", dificultad: "facil", pregunta: "What is the past tense of the verb 'to play'?", opciones: ["play", "played", "playing", "plaid"], correcta: 1 },
    { materia: "Inglés A2", grado: "6", dificultad: "facil", pregunta: "Choose the correct question word: '___ is your name?'", opciones: ["Where", "What", "When", "How"], correcta: 1 },
    { materia: "Inglés A2", grado: "6", dificultad: "facil", pregunta: "Complete: 'I have ___ brother and one sister.'", opciones: ["a", "an", "some", "the"], correcta: 0 },
    { materia: "Inglés A2", grado: "6", dificultad: "facil", pregunta: "Which word is a color?", opciones: ["table", "book", "blue", "run"], correcta: 2 },
    { materia: "Inglés A2", grado: "6", dificultad: "facil", pregunta: "Translate 'Yo tengo' into English.", opciones: ["I are", "I am", "I has", "I have"], correcta: 3 },
    { materia: "Inglés A2", grado: "6", dificultad: "facil", pregunta: "The short form of 'is not' is:", opciones: ["isn't", "arent", "not's", "n't is"], correcta: 0 },
    { materia: "Inglés A2", grado: "6", dificultad: "facil", pregunta: "Which word means 'lunes'?", opciones: ["Sunday", "Tuesday", "Monday", "Friday"], correcta: 2 },
    { materia: "Inglés A2", grado: "6", dificultad: "facil", pregunta: "What do you say to greet someone in the morning?", opciones: ["Good night", "Good evening", "Good morning", "Good afternoon"], correcta: 2 },
    { materia: "Inglés A2", grado: "6", dificultad: "facil", pregunta: "Choose the correct possessive adjective: 'This is ___ pen (my pen).'", opciones: ["I", "mine", "my", "me"], correcta: 2 },
    { materia: "Inglés A2", grado: "6", dificultad: "facil", pregunta: "The object 'chair' is a:", opciones: ["furniture", "vegetable", "drink", "animal"], correcta: 0 },
    { materia: "Inglés A2", grado: "6", dificultad: "facil", pregunta: "The verb 'to read' means:", opciones: ["escribir", "caminar", "leer", "hablar"], correcta: 2 },
    { materia: "Inglés A2", grado: "6", dificultad: "facil", pregunta: "Which sentence is in Present Simple?", opciones: ["I am eating now.", "He worked yesterday.", "They go to school every day.", "She will travel."], correcta: 2 },
    { materia: "Inglés A2", grado: "6", dificultad: "facil", pregunta: "The number after twelve is:", opciones: ["eleven", "twenty", "thirteen", "fourteen"], correcta: 2 },
    { materia: "Inglés A2", grado: "6", dificultad: "facil", pregunta: "Complete the sentence: 'We ___ students.'", opciones: ["is", "am", "are", "be"], correcta: 2 },

    // ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    // INGLÉS A2 - GRADO 6 - MEDIA (20 Preguntas)
    // ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    { materia: "Inglés A2", grado: "6", dificultad: "media", pregunta: "Complete the sentence: 'I am ___ (estudiando) English right now.'", opciones: ["study", "studies", "studying", "studied"], correcta: 2 },
    { materia: "Inglés A2", grado: "6", dificultad: "media", pregunta: "The Past Simple of the irregular verb 'to go' is:", opciones: ["goed", "go", "gone", "went"], correcta: 3 },
    { materia: "Inglés A2", grado: "6", dificultad: "media", pregunta: "Use the comparative form: 'My car is ___ than yours (más rápido).'", opciones: ["fast", "faster", "fastest", "more fast"], correcta: 1 },
    { materia: "Inglés A2", grado: "6", dificultad: "media", pregunta: "Which word is a countable noun?", opciones: ["water", "money", "books", "air"], correcta: 2 },
    { materia: "Inglés A2", grado: "6", dificultad: "media", pregunta: "Choose the correct form of the future with 'going to': 'We ___ visit our grandparents tomorrow.'", opciones: ["go to", "are going to", "will going to", "going to"], correcta: 1 },
    { materia: "Inglés A2", grado: "6", dificultad: "media", pregunta: "The superlative of 'tall' is:", opciones: ["taller", "tallest", "most tall", "more tall"], correcta: 1 },
    { materia: "Inglés A2", grado: "6", dificultad: "media", pregunta: "Complete the sentence with a negative: 'There isn't ___ milk in the fridge.'", opciones: ["a", "some", "any", "many"], correcta: 2 },
    { materia: "Inglés A2", grado: "6", dificultad: "media", pregunta: "Which of these is a preposition of time?", opciones: ["under", "at", "through", "behind"], correcta: 1 },
    { materia: "Inglés A2", grado: "6", dificultad: "media", pregunta: "What is the question for: 'She saw her friend *yesterday*.'", opciones: ["What did she see?", "When did she see her friend?", "Who saw her friend?", "Did she see her friend?"], correcta: 1 },
    { materia: "Inglés A2", grado: "6", dificultad: "media", pregunta: "The adjective 'dangerous' means:", opciones: ["tranquilo", "grande", "peligroso", "divertido"], correcta: 2 },
    { materia: "Inglés A2", grado: "6", dificultad: "media", pregunta: "Translate 'Deberías estudiar' (obligation/advice):", opciones: ["You must study", "You should study", "You can study", "You will study"], correcta: 1 },
    { materia: "Inglés A2", grado: "6", dificultad: "media", pregunta: "Complete: 'My parents ___ live in an apartment last year.' (negative past simple)", opciones: ["doesn't", "didn't", "haven't", "won't"], correcta: 1 },
    { materia: "Inglés A2", grado: "6", dificultad: "media", pregunta: "Which verb describes a routine?", opciones: ["am swimming", "is raining", "drink", "will sleep"], correcta: 2 },
    { materia: "Inglés A2", grado: "6", dificultad: "media", pregunta: "Complete: 'I like apples ___ I don't like oranges.' (conjunction)", opciones: ["and", "or", "but", "so"], correcta: 2 },
    { materia: "Inglés A2", grado: "6", dificultad: "media", pregunta: "The phrase 'take off' (phrasal verb) means:", opciones: ["ponerse", "quitarse", "llegar", "estar"], correcta: 1 },
    { materia: "Inglés A2", grado: "6", dificultad: "media", pregunta: "Choose the correct sequence of adverbs: 'I woke up, ___ ate breakfast, and ___ went to school.'", opciones: ["then / finally", "finally / then", "never / always", "often / sometimes"], correcta: 0 },
    { materia: "Inglés A2", grado: "6", dificultad: "media", pregunta: "What is 'half past eight'?", opciones: ["8:00", "7:30", "8:30", "9:30"], correcta: 2 },
    { materia: "Inglés A2", grado: "6", dificultad: "media", pregunta: "The possessive form of 'the dog of the boy' is:", opciones: ["the dog's boy", "the boy's dog", "the boys dog", "the dog of the boy's"], correcta: 1 },
    { materia: "Inglés A2", grado: "6", dificultad: "media", pregunta: "The verb 'to visit' means:", opciones: ["viajar", "visitar", "ver", "vivir"], correcta: 1 },
    { materia: "Inglés A2", grado: "6", dificultad: "media", pregunta: "Translate 'Hay muchos carros' (existence):", opciones: ["There is a lot of cars", "There are many cars", "It has many cars", "There were many cars"], correcta: 1 },

    // ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    // INGLÉS A2 - GRADO 6 - DIFÍCIL (20 Preguntas)
    // ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    { materia: "Inglés A2", grado: "6", dificultad: "dificil", pregunta: "Complete the first conditional: 'If it ___, we will stay home.'", opciones: ["rains", "rained", "will rain", "rain"], correcta: 0 },
    { materia: "Inglés A2", grado: "6", dificultad: "dificil", pregunta: "Which modal verb expresses strong necessity/obligation?", opciones: ["can", "should", "must", "might"], correcta: 2 },
    { materia: "Inglés A2", grado: "6", dificultad: "dificil", pregunta: "The sentence 'I have lived here for two years' is in:", opciones: ["Present Simple", "Past Simple", "Present Continuous", "Present Perfect"], correcta: 3 },
    { materia: "Inglés A2", grado: "6", dificultad: "dificil", pregunta: "Complete the sentence with an adverb of manner: 'He drives very ___.'", opciones: ["careful", "carefully", "carefuller", "carefull"], correcta: 1 },
    { materia: "Inglés A2", grado: "6", dificultad: "dificil", pregunta: "The word 'although' is used to express:", opciones: ["reason", "contrast", "addition", "result"], correcta: 1 },
    { materia: "Inglés A2", grado: "6", dificultad: "dificil", pregunta: "Which of these is an example of an uncountable noun?", opciones: ["coin", "table", "information", "bottle"], correcta: 2 },
    { materia: "Inglés A2", grado: "6", dificultad: "dificil", pregunta: "What is the difference between 'since' and 'for' in Present Perfect?", opciones: ["They are the same.", "'Since' is for a period; 'for' is for a point in time.", "'Since' is for a point in time; 'for' is for a period.", "'For' is only for questions."], correcta: 2 },
    { materia: "Inglés A2", grado: "6", dificultad: "dificil", pregunta: "Change to Passive Voice: 'The children clean the room.'", opciones: ["The room cleans the children.", "The room is cleaned by the children.", "The children are cleaned by the room.", "The room clean the children."], correcta: 1 },
    { materia: "Inglés A2", grado: "6", dificultad: "dificil", pregunta: "The meaning of the idiom 'break a leg' is:", opciones: ["to injure yourself", "to wish good luck", "to stop doing something", "to run fast"], correcta: 1 },
    { materia: "Inglés A2", grado: "6", dificultad: "dificil", pregunta: "Which relative pronoun is used for *things*?", opciones: ["who", "whose", "where", "which"], correcta: 3 },
    { materia: "Inglés A2", grado: "6", dificultad: "dificil", pregunta: "Complete the sentence: 'If I were you, I ___ (would) study more.'", opciones: ["will", "would", "do", "must"], correcta: 1 },
    { materia: "Inglés A2", grado: "6", dificultad: "dificil", pregunta: "The pronunciation of the '-ed' ending in 'walked' is:", opciones: ["/id/", "/t/", "/d/", "it is silent"], correcta: 1 },
    { materia: "Inglés A2", grado: "6", dificultad: "dificil", pregunta: "Which sentence uses the third conditional?", opciones: ["If I study, I will pass.", "If I studied, I would pass.", "If I had studied, I would have passed.", "I study and I pass."], correcta: 2 },
    { materia: "Inglés A2", grado: "6", dificultad: "dificil", pregunta: "Translate 'A pesar de que hacía frío' (connector):", opciones: ["Because it was cold", "In spite of the cold", "So it was cold", "Although it was cold"], correcta: 3 },
    { materia: "Inglés A2", grado: "6", dificultad: "dificil", pregunta: "The verb 'to look forward to' expresses:", opciones: ["anger", "excitement about the future", "boredom", "a strong wish"], correcta: 1 },
    { materia: "Inglés A2", grado: "6", dificultad: "dificil", pregunta: "Which word is a synonym for 'lovely'?", opciones: ["ugly", "horrible", "beautiful", "rude"], correcta: 2 },
    { materia: "Inglés A2", grado: "6", dificultad: "dificil", pregunta: "In Reported Speech, 'I am tired' changes to:", opciones: ["He said he is tired.", "He said I am tired.", "He said he was tired.", "He said he had been tired."], correcta: 2 },
    { materia: "Inglés A2", grado: "6", dificultad: "dificil", pregunta: "The correct sequence for a passive voice sentence is:", opciones: ["Subject + Verb to be + Main Verb (past participle)", "Subject + Main Verb + Object", "Object + Subject + Verb", "Subject + Have + Past Participle"], correcta: 0 },
    { materia: "Inglés A2", grado: "6", dificultad: "dificil", pregunta: "Which question uses a Tag Question correctly?", opciones: ["You like pizza, doesn't you?", "You like pizza, is you?", "You like pizza, don't you?", "You like pizza, not you?"], correcta: 2 },
    { materia: "Inglés A2", grado: "6", dificultad: "dificil", pregunta: "The difference between 'too' and 'enough' is:", opciones: ["'Too' means more than necessary; 'enough' means sufficient.", "They have the same meaning.", "'Too' is always at the end; 'enough' is at the beginning.", "'Enough' means more than necessary."], correcta: 0 },

    // ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    // CULTURA CIUDADANA - GRADO 6 - FÁCIL (20 Preguntas)
    // ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    { materia: "Cultura Ciudadana", grado: "6", dificultad: "facil", pregunta: "¿Cuál es el documento de identidad que tienen los niños en Colombia antes de los $7$ años?", opciones: ["Cédula de ciudadanía", "Registro civil de nacimiento", "Tarjeta de identidad", "Pasaporte"], correcta: 1 },
    { materia: "Cultura Ciudadana", grado: "6", dificultad: "facil", pregunta: "Un derecho fundamental de todos los niños es el derecho a la:", opciones: ["Libertad", "Propiedad", "Educación", "Firma de contratos"], correcta: 2 },
    { materia: "Cultura Ciudadana", grado: "6", dificultad: "facil", pregunta: "¿Cuál de estos es un deber en el colegio?", opciones: ["Jugar todo el tiempo", "Respetar a los compañeros y profesores", "No hacer tareas", "Usar el celular en clase"], correcta: 1 },
    { materia: "Cultura Ciudadana", grado: "6", dificultad: "facil", pregunta: "El valor de reconocer y apreciar las diferencias de otras personas es la:", opciones: ["Uniformidad", "Indiferencia", "Diversidad", "Obediencia"], correcta: 2 },
    { materia: "Cultura Ciudadana", grado: "6", dificultad: "facil", pregunta: "La máxima autoridad del gobierno de un municipio o ciudad es el/la:", opciones: ["Presidente/a", "Gobernador/a", "Juez/a", "Alcalde/sa"], correcta: 3 },
    { materia: "Cultura Ciudadana", grado: "6", dificultad: "facil", pregunta: "¿Qué se debe hacer con la basura para cuidar el medio ambiente?", opciones: ["Tirarla en la calle", "Quemar todo", "Reciclar y separar", "Enterrarla en el jardín"], correcta: 2 },
    { materia: "Cultura Ciudadana", grado: "6", dificultad: "facil", pregunta: "Una forma de resolver un conflicto *sin* pelear es:", opciones: ["Ignorar a la persona", "Gritar más fuerte", "Dialogar y escuchar", "Buscar un aliado"], correcta: 2 },
    { materia: "Cultura Ciudadana", grado: "6", dificultad: "facil", pregunta: "¿Cuál es la función principal de las señales de tránsito?", opciones: ["Decorar la ciudad", "Indicar dónde parquear", "Organizar y dar seguridad en la vía", "Vender productos"], correcta: 2 },
    { materia: "Cultura Ciudadana", grado: "6", dificultad: "facil", pregunta: "La 'responsabilidad' implica que debes:", opciones: ["Echarle la culpa a otros", "Cumplir tus deberes y responder por tus actos", "Hacer solo lo que te gusta", "Tener muchos amigos"], correcta: 1 },
    { materia: "Cultura Ciudadana", grado: "6", dificultad: "facil", pregunta: "¿Qué significa ser un 'ciudadano'?", opciones: ["Ser mayor de edad", "Ser habitante de un país con derechos y deberes", "Ser solo un turista", "Tener un carro"], correcta: 1 },
    { materia: "Cultura Ciudadana", grado: "6", dificultad: "facil", pregunta: "La rama del poder público encargada de *crear* las leyes es la:", opciones: ["Ejecutiva", "Judicial", "Legislativa", "De control"], correcta: 2 },
    { materia: "Cultura Ciudadana", grado: "6", dificultad: "facil", pregunta: "¿Cuál es el símbolo patrio más representativo de Colombia?", opciones: ["El cóndor", "El himno nacional", "La bandera", "El escudo"], correcta: 2 },
    { materia: "Cultura Ciudadana", grado: "6", dificultad: "facil", pregunta: "El 'interés general' debe estar por encima del:", opciones: ["Interés particular", "Interés familiar", "Interés económico", "Interés educativo"], correcta: 0 },
    { materia: "Cultura Ciudadana", grado: "6", dificultad: "facil", pregunta: "El valor de la 'tolerancia' significa:", opciones: ["Aceptar todo sin opinión", "Soportar sin quejarse", "Respetar ideas y creencias diferentes a las propias", "Imponer las propias ideas"], correcta: 2 },
    { materia: "Cultura Ciudadana", grado: "6", dificultad: "facil", pregunta: "¿En qué documento están consagrados los derechos fundamentales de los colombianos?", opciones: ["El Código Civil", "La Constitución Política de Colombia", "El Código Penal", "El Plan de Desarrollo"], correcta: 1 },
    { materia: "Cultura Ciudadana", grado: "6", dificultad: "facil", pregunta: "Los servicios públicos (agua, luz, gas) son un ejemplo de bienes:", opciones: ["Privados", "Personales", "Públicos", "Exclusivos"], correcta: 2 },
    { materia: "Cultura Ciudadana", grado: "6", dificultad: "facil", pregunta: "¿Qué significa la 'honestidad'?", opciones: ["Decir solo verdades a medias", "Ser transparente y decir la verdad", "Esconder errores", "Hacer trampa"], correcta: 1 },
    { materia: "Cultura Ciudadana", grado: "6", dificultad: "facil", pregunta: "El derecho a la libre expresión permite a las personas:", opciones: ["Gritar a los demás", "Publicar secretos", "Decir lo que piensan sin dañar a otros", "Insultar a las autoridades"], correcta: 2 },
    { materia: "Cultura Ciudadana", grado: "6", dificultad: "facil", pregunta: "¿Cuál es un lugar público que debemos cuidar?", opciones: ["Mi casa", "El baño personal", "Un parque", "Mi habitación"], correcta: 2 },
    { materia: "Cultura Ciudadana", grado: "6", dificultad: "facil", pregunta: "La 'solidaridad' es el valor de:", opciones: ["Solo pensar en sí mismo", "Ayudar sin esperar nada a cambio", "Criticar a los demás", "Competir por todo"], correcta: 1 },

    // ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    // CULTURA CIUDADANA - GRADO 6 - MEDIA (20 Preguntas)
    // ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    { materia: "Cultura Ciudadana", grado: "6", dificultad: "media", pregunta: "¿Cómo se llama el mecanismo de participación ciudadana para elegir gobernantes?", opciones: ["Plebiscito", "Voto o Elecciones", "Consulta popular", "Cabildo abierto"], correcta: 1 },
    { materia: "Cultura Ciudadana", grado: "6", dificultad: "media", pregunta: "El 'Debido Proceso' (Artículo 29 C.P.) es un derecho relacionado con:", opciones: ["La libertad de prensa", "Un juicio justo y transparente", "El derecho a la huelga", "El derecho a la salud"], correcta: 1 },
    { materia: "Cultura Ciudadana", grado: "6", dificultad: "media", pregunta: "El concepto de 'territorio' en un Estado incluye:", opciones: ["Solo la tierra firme", "El subsuelo, el espacio aéreo y el mar territorial", "Solo las ciudades", "Solo las fronteras"], correcta: 1 },
    { materia: "Cultura Ciudadana", grado: "6", dificultad: "media", pregunta: "¿Quién ejerce el poder *ejecutivo* a nivel nacional en Colombia?", opciones: ["La Corte Suprema", "El Congreso", "El Presidente de la República", "La Procuraduría"], correcta: 2 },
    { materia: "Cultura Ciudadana", grado: "6", dificultad: "media", pregunta: "La 'Dignidad Humana' significa que todas las personas merecen:", opciones: ["Ser millonarios", "Un trato digno y respetuoso", "Tener un cargo político", "Viajar por el mundo"], correcta: 1 },
    { materia: "Cultura Ciudadana", grado: "6", dificultad: "media", pregunta: "Un ejemplo de 'bien público' *no* renovable es:", opciones: ["El aire", "El agua", "El petróleo", "La luz solar"], correcta: 2 },
    { materia: "Cultura Ciudadana", grado: "6", dificultad: "media", pregunta: "El 'Cabildo Abierto' es un mecanismo que permite a los ciudadanos:", opciones: ["Elegir al alcalde", "Opinar y debatir sobre asuntos de interés público local", "Derogar una ley", "Hacer una protesta"], correcta: 1 },
    { materia: "Cultura Ciudadana", grado: "6", dificultad: "media", pregunta: "La 'igualdad' ante la ley significa que:", opciones: ["Todos deben tener la misma cantidad de dinero.", "Todos son iguales y se les aplica la ley de la misma forma.", "Solo los hombres son iguales.", "Las leyes solo se aplican a los adultos."], correcta: 1 },
    { materia: "Cultura Ciudadana", grado: "6", dificultad: "media", pregunta: "¿Qué tipo de resolución de conflictos implica la intervención de un tercero imparcial que ayuda a llegar a un acuerdo?", opciones: ["Negociación", "Confrontación", "Mediación", "Votación"], correcta: 2 },
    { materia: "Cultura Ciudadana", grado: "6", dificultad: "media", pregunta: "¿Qué garantiza el derecho a la 'intimidad personal y familiar'?", opciones: ["Que nadie puede entrar a mi casa sin permiso", "Que puedo hacer lo que quiera sin límites", "Que el gobierno puede saber todo de mí", "Que puedo publicar la vida de otros"], correcta: 0 },
    { materia: "Cultura Ciudadana", grado: "6", dificultad: "media", pregunta: "Una 'norma' o 'regla' social se establece principalmente para:", opciones: ["Castigar a la gente", "Ordenar la convivencia y el comportamiento", "Favorecer a un grupo", "Limitar la creatividad"], correcta: 1 },
    { materia: "Cultura Ciudadana", grado: "6", dificultad: "media", pregunta: "Los tres colores de la bandera de Colombia (amarillo, azul y rojo) simbolizan:", opciones: ["Las montañas, los ríos y el mar", "La riqueza, el océano y la sangre derramada", "La religión, la paz y la guerra", "El oro, la plata y el cobre"], correcta: 1 },
    { materia: "Cultura Ciudadana", grado: "6", dificultad: "media", pregunta: "El 'servicio militar obligatorio' es un:", opciones: ["Derecho fundamental", "Mecanismo de participación", "Deber ciudadano", "Beneficio laboral"], correcta: 2 },
    { materia: "Cultura Ciudadana", grado: "6", dificultad: "media", pregunta: "El 'Estado Social de Derecho' se caracteriza por buscar:", opciones: ["Solo la seguridad militar", "El bienestar general de sus ciudadanos", "La dictadura de un líder", "La privatización total de servicios"], correcta: 1 },
    { materia: "Cultura Ciudadana", grado: "6", dificultad: "media", pregunta: "El respeto a la vida y la integridad física son:", opciones: ["Derechos económicos", "Derechos de primera generación (Fundamentales)", "Deberes políticos", "Derechos de última generación"], correcta: 1 },
    { materia: "Cultura Ciudadana", grado: "6", dificultad: "media", pregunta: "¿Cuál es el propósito de un 'presupuesto municipal'?", opciones: ["Solo pagar salarios", "Definir cómo se gastarán los recursos de la ciudad", "Crear una nueva ley", "Elegir al concejo"], correcta: 1 },
    { materia: "Cultura Ciudadana", grado: "6", dificultad: "media", pregunta: "El 'patrimonio cultural' de una nación incluye:", opciones: ["Solo los edificios antiguos", "Las costumbres, tradiciones, monumentos y obras de arte", "Solo el dinero del gobierno", "Solo los vehículos oficiales"], correcta: 1 },
    { materia: "Cultura Ciudadana", grado: "6", dificultad: "media", pregunta: "Un ejemplo de 'acción u omisión' que afecta el bien común es:", opciones: ["Pagar impuestos", "Participar en elecciones", "Hacer fila", "Arrojar basura en un río"], correcta: 3 },
    { materia: "Cultura Ciudadana", grado: "6", dificultad: "media", pregunta: "La 'Constitución' establece la forma del Estado y:", opciones: ["El precio de los alimentos", "Las reglas para un juego", "La estructura del gobierno y los derechos de los ciudadanos", "Los códigos de vestimenta"], correcta: 2 },
    { materia: "Cultura Ciudadana", grado: "6", dificultad: "media", pregunta: "El valor de la 'paz' se construye a partir de:", opciones: ["La violencia", "El diálogo y el respeto mutuo", "La imposición", "La indiferencia"], correcta: 1 },

    // ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    // CULTURA CIUDADANA - GRADO 6 - DIFÍCIL (20 Preguntas)
    // ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    { materia: "Cultura Ciudadana", grado: "6", dificultad: "dificil", pregunta: "¿Cuál es la diferencia entre 'Estado' y 'Gobierno'?", opciones: ["Son lo mismo.", "El Estado es la nación y el Gobierno es quien la administra temporalmente.", "El Gobierno es permanente y el Estado es temporal.", "El Estado solo incluye el territorio."], correcta: 1 },
    { materia: "Cultura Ciudadana", grado: "6", dificultad: "dificil", pregunta: "La 'Democracia Representativa' se basa en:", opciones: ["La participación directa de todos.", "La elección de representantes que toman decisiones.", "El poder hereditario.", "El voto obligatorio en todo momento."], correcta: 1 },
    { materia: "Cultura Ciudadana", grado: "6", dificultad: "dificil", pregunta: "Un ejemplo de 'derecho colectivo y del ambiente' es:", opciones: ["El derecho a la vida", "El derecho a un ambiente sano", "El derecho al voto", "El derecho a la propiedad"], correcta: 1 },
    { materia: "Cultura Ciudadana", grado: "6", dificultad: "dificil", pregunta: "¿Cómo se denomina al derecho que tienen los ciudadanos de solicitar información y acceder a documentos públicos?", opciones: ["Habeas Data", "Derecho de Petición", "Acción de Tutela", "Plebiscito"], correcta: 1 },
    { materia: "Cultura Ciudadana", grado: "6", dificultad: "dificil", pregunta: "Los 'Objetivos de Desarrollo Sostenible (ODS)' de la ONU buscan:", opciones: ["Aumentar la pobreza mundial.", "Solo objetivos económicos.", "Equilibrar el desarrollo social, económico y ambiental.", "Frenar todo el desarrollo."], correcta: 2 },
    { materia: "Cultura Ciudadana", grado: "6", dificultad: "dificil", pregunta: "El principio de 'Separación de Poderes' tiene como objetivo principal:", opciones: ["Que un solo líder tenga todo el control.", "Evitar la concentración de poder y garantizar el equilibrio.", "Hacer el gobierno más rápido.", "Eliminar la rama judicial."], correcta: 1 },
    { materia: "Cultura Ciudadana", grado: "6", dificultad: "dificil", pregunta: "¿Qué valor es fundamental para que la 'Democracia' funcione correctamente?", opciones: ["Individualismo extremo", "Autoritarismo", "Transparencia y rendición de cuentas", "Nepotismo"], correcta: 2 },
    { materia: "Cultura Ciudadana", grado: "6", dificultad: "dificil", pregunta: "La 'Tiranía' se caracteriza por:", opciones: ["Un gobierno justo y honesto.", "El ejercicio del poder de forma arbitraria e ilimitada.", "El respeto a las leyes.", "La división de poderes."], correcta: 1 },
    { materia: "Cultura Ciudadana", grado: "6", dificultad: "dificil", pregunta: "El 'Habeas Corpus' es una garantía para el derecho a la:", opciones: ["Vivienda", "Educación", "Libertad personal", "Información"], correcta: 2 },
    { materia: "Cultura Ciudadana", grado: "6", dificultad: "dificil", pregunta: "Los 'impuestos' que pagan los ciudadanos se destinan principalmente a:", opciones: ["El ahorro personal del presidente.", "Financiar los gastos y servicios públicos del Estado.", "Comprar acciones de empresas privadas.", "Pagar solo las deudas externas."], correcta: 1 },
    { materia: "Cultura Ciudadana", grado: "6", dificultad: "dificil", pregunta: "El 'Servicio Comunitario' puede ser una forma de:", opciones: ["Castigo irremediable.", "Participación ciudadana y reparación de daños.", "Evadir responsabilidades.", "Solo una actividad de ocio."], correcta: 1 },
    { materia: "Cultura Ciudadana", grado: "6", dificultad: "dificil", pregunta: "¿Qué significa el término 'cosmopolita' en el contexto de ciudadanía?", opciones: ["Que solo se interesa en su país.", "Que se siente ciudadano del mundo y respeta culturas diversas.", "Que solo vive en ciudades grandes.", "Que desprecia las culturas extranjeras."], correcta: 1 },
    { materia: "Cultura Ciudadana", grado: "6", dificultad: "dificil", pregunta: "La 'Acción de Tutela' en Colombia es un mecanismo para proteger:", opciones: ["Los bienes materiales.", "Los derechos fundamentales de forma inmediata.", "Las propiedades del Estado.", "Los intereses de los partidos políticos."], correcta: 1 },
    { materia: "Cultura Ciudadana", grado: "6", dificultad: "dificil", pregunta: "La 'Corrupción' afecta la cultura ciudadana porque:", opciones: ["Crea empleos.", "Reduce la confianza en las instituciones y malgasta recursos.", "Hace el gobierno más eficiente.", "Acelera las obras públicas."], correcta: 1 },
    { materia: "Cultura Ciudadana", grado: "6", dificultad: "dificil", pregunta: "El 'Plebiscito' es una consulta al pueblo para:", opciones: ["Elegir un nuevo congresista.", "Apoyar o rechazar una decisión del poder ejecutivo.", "Derogar una ley.", "Elegir un nuevo alcalde."], correcta: 1 },
    { materia: "Cultura Ciudadana", grado: "6", dificultad: "dificil", pregunta: "La 'libertad de culto' es un derecho que garantiza:", opciones: ["Que solo haya una religión oficial.", "Que cada persona pueda elegir su religión o no tener ninguna.", "Que la iglesia gobierne el país.", "Que todas las religiones paguen impuestos."], correcta: 1 },
    { materia: "Cultura Ciudadana", grado: "6", dificultad: "dificil", pregunta: "¿Cuál es la función del 'Defensor del Pueblo' en Colombia?", opciones: ["Defender al presidente.", "Defender los derechos humanos de los habitantes.", "Crear nuevas leyes.", "Juzgar a los delincuentes."], correcta: 1 },
    { materia: "Cultura Ciudadana", grado: "6", dificultad: "dificil", pregunta: "El concepto de 'Bien Común' se refiere a:", opciones: ["El beneficio de la mayoría sin importar los demás.", "Aquello que beneficia a toda la sociedad, incluyendo a las minorías.", "Solo el beneficio del Estado.", "Los intereses de los empresarios."], correcta: 1 },
    { materia: "Cultura Ciudadana", grado: "6", dificultad: "dificil", pregunta: "Una 'Ley Orgánica' se diferencia de una 'Ley Ordinaria' en que:", opciones: ["La Ley Ordinaria regula materias básicas y la Orgánica no.", "La Ley Orgánica regula la estructura del Estado y sus procedimientos.", "La Ley Ordinaria necesita más votos para ser aprobada.", "Son exactamente lo mismo."], correcta: 1 },
    { materia: "Cultura Ciudadana", grado: "6", dificultad: "dificil", pregunta: "La 'Justicia Restaurativa' busca, principalmente:", opciones: ["Solo castigar al culpable.", "Centrarse en la víctima y la reparación del daño.", "Ignorar el delito.", "Aumentar las penas de prisión."], correcta: 1 },



    // ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    // MATEMÁTICAS - GRADO 7 - FÁCIL (20 Preguntas)
    // ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    { materia: "Matemáticas", grado: "7", dificultad: "facil", pregunta: "¿Cuánto es $1500 + 750$?", opciones: ["2150", "2250", "2350", "2400"], correcta: 1 },
    { materia: "Matemáticas", grado: "7", dificultad: "facil", pregunta: "¿Cuál es la fracción irreducible de $10/25$?", opciones: ["$1/5$", "$2/5$", "$5/10$", "$1/2$"], correcta: 1 },
    { materia: "Matemáticas", grado: "7", dificultad: "facil", pregunta: "Convierte $0.45$ a fracción.", opciones: ["$45/100$", "$4/5$", "$45/10$", "$4.5/10$"], correcta: 0 },
    { materia: "Matemáticas", grado: "7", dificultad: "facil", pregunta: "¿Cuál es el resultado de $3/4 + 1/4$?", opciones: ["$4/8$", "1", "$3/8$", "$2/4$"], correcta: 1 },
    { materia: "Matemáticas", grado: "7", dificultad: "facil", pregunta: "Si $5x = 30$, ¿cuánto vale $x$?", opciones: ["5", "6", "7", "8"], correcta: 1 },
    { materia: "Matemáticas", grado: "7", dificultad: "facil", pregunta: "¿Qué número completa la serie? $1, 4, 9, 16, \\dots$", opciones: ["20", "22", "25", "36"], correcta: 2 },
    { materia: "Matemáticas", grado: "7", dificultad: "facil", pregunta: "¿Cuál es el perímetro de un rectángulo de $10$ cm de largo y $4$ cm de ancho?", opciones: ["$14$ cm", "$28$ cm", "$40$ cm", "$20$ cm"], correcta: 1 },
    { materia: "Matemáticas", grado: "7", dificultad: "facil", pregunta: "¿Cuál es la raíz cuadrada de $49$?", opciones: ["6", "7", "8", "9"], correcta: 1 },
    { materia: "Matemáticas", grado: "7", dificultad: "facil", pregunta: "El $20\\%$ de $100$ es:", opciones: ["10", "20", "40", "50"], correcta: 1 },
    { materia: "Matemáticas", grado: "7", dificultad: "facil", pregunta: "¿Cuántos lados tiene un pentágono?", opciones: ["4", "5", "6", "8"], correcta: 1 },
    { materia: "Matemáticas", grado: "7", dificultad: "facil", pregunta: "El resultado de $2^3$ es:", opciones: ["5", "6", "8", "16"], correcta: 2 },
    { materia: "Matemáticas", grado: "7", dificultad: "facil", pregunta: "¿Qué tipo de número es $-5$?", opciones: ["Natural", "Entero", "Racional", "Irracional"], correcta: 1 },
    { materia: "Matemáticas", grado: "7", dificultad: "facil", pregunta: "Si $3$ kg de arroz valen $\\$9.000$, ¿cuánto vale $1$ kg?", opciones: ["$\\$2.000$", "$\\$3.000$", "$\\$4.000$", "$\\$2.500$"], correcta: 1 },
    { materia: "Matemáticas", grado: "7", dificultad: "facil", pregunta: "El área de un triángulo con base $6$ y altura $4$ es:", opciones: ["10", "12", "24", "20"], correcta: 1 },
    { materia: "Matemáticas", grado: "7", dificultad: "facil", pregunta: "¿Cuál es el m.c.m. de $3$ y $5$?", opciones: ["1", "8", "15", "30"], correcta: 2 },
    { materia: "Matemáticas", grado: "7", dificultad: "facil", pregunta: "Calcula $1.25 \\times 4$.", opciones: ["5.0", "4.8", "4.25", "5.25"], correcta: 0 },
    { materia: "Matemáticas", grado: "7", dificultad: "facil", pregunta: "¿Cómo se llama el ángulo que mide $180^{\\circ}$?", opciones: ["Recto", "Agudo", "Obtuso", "Llano"], correcta: 3 },
    { materia: "Matemáticas", grado: "7", dificultad: "facil", pregunta: "¿Cuál es la moda de los datos $2, 3, 3, 5, 7$?", opciones: ["2", "3", "5", "7"], correcta: 1 },
    { materia: "Matemáticas", grado: "7", dificultad: "facil", pregunta: "Un número divisible por $2$ y por $3$ es:", opciones: ["10", "15", "18", "25"], correcta: 2 },
    { materia: "Matemáticas", grado: "7", dificultad: "facil", pregunta: "El valor absoluto de $-12$ es:", opciones: ["12", "-12", "0", "24"], correcta: 0 },

    // ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    // MATEMÁTICAS - GRADO 7 - MEDIA (20 Preguntas)
    // ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    { materia: "Matemáticas", grado: "7", dificultad: "media", pregunta: "Resuelve: $(-8) + 5 - (-2)$.", opciones: ["-5", "-11", "15", "-1"], correcta: 3 },
    { materia: "Matemáticas", grado: "7", dificultad: "media", pregunta: "Simplifica la expresión: $3x + 5y - x + 2y$.", opciones: ["$4x + 7y$", "$2x + 7y$", "$4x + 3y$", "$2x + 3y$"], correcta: 1 },
    { materia: "Matemáticas", grado: "7", dificultad: "media", pregunta: "¿Cuál es el resultado de $\\frac{2}{5} \\times \\frac{15}{4}$?", opciones: ["$3/2$", "$1/2$", "$3/4$", "$1/4$"], correcta: 0 },
    { materia: "Matemáticas", grado: "7", dificultad: "media", pregunta: "Si $\\frac{x}{6} = \\frac{5}{3}$, ¿cuánto vale $x$?", opciones: ["10", "5", "15", "18"], correcta: 0 },
    { materia: "Matemáticas", grado: "7", dificultad: "media", pregunta: "El resultado de $(\\frac{1}{2})^3$ es:", opciones: ["$1/6$", "$1/8$", "$3/2$", "$1/4$"], correcta: 1 },
    { materia: "Matemáticas", grado: "7", dificultad: "media", pregunta: "El área de un trapecio con bases $6$ y $10$ y altura $4$ es:", opciones: ["16", "32", "20", "48"], correcta: 1 },
    { materia: "Matemáticas", grado: "7", dificultad: "media", pregunta: "¿Qué coordenada corresponde al punto en el **segundo cuadrante** del plano cartesiano?", opciones: ["$(+, +)$", "$(-, +)$", "$(-, -)$", "$$(+, -)$"], correcta: 1 },
    { materia: "Matemáticas", grado: "7", dificultad: "media", pregunta: "Si una camiseta vale $\\$50.000$ con IVA del $19\\%$. ¿Cuánto se paga de IVA?", opciones: ["$\\$9.500$", "$\\$19.000$", "$\\$5.000$", "$\\$40.500$"], correcta: 0 },
    { materia: "Matemáticas", grado: "7", dificultad: "media", pregunta: "Calcula: $\\sqrt{100} - \\sqrt{25}$.", opciones: ["15", "75", "5", "10"], correcta: 2 },
    { materia: "Matemáticas", grado: "7", dificultad: "media", pregunta: "Si $x + 2 = -7$, ¿cuál es el valor de $x$?", opciones: ["9", "5", "-9", "-5"], correcta: 2 },
    { materia: "Matemáticas", grado: "7", dificultad: "media", pregunta: "La mediana de los números $1, 3, 5, 8, 9$ es:", opciones: ["1", "5", "8", "3"], correcta: 1 },
    { materia: "Matemáticas", grado: "7", dificultad: "media", pregunta: "Un ciclista recorre $20$ km en $1$ hora. ¿Cuántos km recorre en $30$ minutos?", opciones: ["$10 \\text{ km}$", "$5 \\text{ km}$", "$15 \\text{ km}$", "$40 \\text{ km}$"], correcta: 0 },
    { materia: "Matemáticas", grado: "7", dificultad: "media", pregunta: "El cociente de la división de $24$ entre $-6$ es:", opciones: ["4", "-4", "18", "-18"], correcta: 1 },
    { materia: "Matemáticas", grado: "7", dificultad: "media", pregunta: "¿Cuál es el valor de 'a' en $3a - 1 = 11$?", opciones: ["3", "4", "5", "6"], correcta: 1 },
    { materia: "Matemáticas", grado: "7", dificultad: "media", pregunta: "El resultado de $(-3)^2$ es:", opciones: ["-9", "9", "-6", "6"], correcta: 1 },
    { materia: "Matemáticas", grado: "7", dificultad: "media", pregunta: "Si un círculo tiene diámetro de $10$ cm, ¿cuánto mide su radio?", opciones: ["$20 \\text{ cm}$", "$5 \\text{ cm}$", "$10 \\text{ cm}$", "$25 \\text{ cm}$"], correcta: 1 },
    { materia: "Matemáticas", grado: "7", dificultad: "media", pregunta: "Convierte $3/8$ a número decimal.", opciones: ["$0.3$", "$0.375$", "$0.25$", "$0.83$"], correcta: 1 },
    { materia: "Matemáticas", grado: "7", dificultad: "media", pregunta: "Resuelve: $2(x - 3) = 10$.", opciones: ["$x=8$", "$x=5$", "$x=4$", "$x=13$"], correcta: 0 },
    { materia: "Matemáticas", grado: "7", dificultad: "media", pregunta: "¿Qué propiedad de los números enteros indica que $a \\times b = b \\times a$?", opciones: ["Asociativa", "Distributiva", "Conmutativa", "Clausurativa"], correcta: 2 },
    { materia: "Matemáticas", grado: "7", dificultad: "media", pregunta: "Un ángulo de $150^{\\circ}$ es de tipo:", opciones: ["Agudo", "Recto", "Obtuso", "Llano"], correcta: 2 },

    // ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    // MATEMÁTICAS - GRADO 7 - DIFÍCIL (20 Preguntas)
    // ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    { materia: "Matemáticas", grado: "7", dificultad: "dificil", pregunta: "Calcula el resultado de $\\frac{1}{2} + \\frac{1}{3} - \\frac{1}{6}$.", opciones: ["$1/2$", "$2/3$", "$5/6$", "$1/6$"], correcta: 1 },
    { materia: "Matemáticas", grado: "7", dificultad: "dificil", pregunta: "Resuelve la inecuación: $-2x + 4 < 10$.", opciones: ["$x > -3$", "$x < -3$", "$x > 3$", "$x < 3$"], correcta: 0 },
    { materia: "Matemáticas", grado: "7", dificultad: "dificil", pregunta: "¿Cuál es la distancia entre los puntos $(1, 3)$ y $(4, 3)$ en el plano cartesiano?", opciones: ["3", "4", "5", "6"], correcta: 0 },
    { materia: "Matemáticas", grado: "7", dificultad: "dificil", pregunta: "Si $5$ obreros tardan $6$ horas en pintar una casa, ¿cuánto tardan $10$ obreros (**proporcionalidad inversa**)?", opciones: ["12 horas", "3 horas", "4 horas", "6 horas"], correcta: 1 },
    { materia: "Matemáticas", grado: "7", dificultad: "dificil", pregunta: "¿Qué porcentaje de $160$ es $40$?", opciones: ["$20\\%$", "$25\\%$", "$40\\%$", "$15\\%$"], correcta: 1 },
    { materia: "Matemáticas", grado: "7", dificultad: "dificil", pregunta: "Si el área de un círculo es $9\\pi \\text{ cm}^2$, ¿cuánto mide su radio?", opciones: ["$3 \\text{ cm}$", "$9 \\text{ cm}$", "$18 \\text{ cm}$", "$4.5 \\text{ cm}$"], correcta: 0 },
    { materia: "Matemáticas", grado: "7", dificultad: "dificil", pregunta: "El m.c.d. de $48$ y $72$ es:", opciones: ["8", "12", "24", "16"], correcta: 2 },
    { materia: "Matemáticas", grado: "7", dificultad: "dificil", pregunta: "Calcula la media ponderada de: Notas $4, 3, 5$ con pesos $20\\%, 30\\%, 50\\%$ respectivamente.", opciones: ["$4.0$", "$4.1$", "$4.2$", "$4.3$"], correcta: 1 },
    { materia: "Matemáticas", grado: "7", dificultad: "dificil", pregunta: "¿Cuál es el valor de $x$ en $5(x - 2) - 3x = 8$?", opciones: ["$x=9$", "$x=5$", "$x=10$", "$x=4$"], correcta: 1 },
    { materia: "Matemáticas", grado: "7", dificultad: "dificil", pregunta: "Si la probabilidad de que llueva es $0.65$, ¿cuál es la probabilidad de que *no* llueva?", opciones: ["$0.35$", "$0.65$", "$0.5$", "$0.45$"], correcta: 0 },
    { materia: "Matemáticas", grado: "7", dificultad: "dificil", pregunta: "En un triángulo rectángulo, si los catetos miden $6$ y $8$, la hipotenusa mide (**Teorema de Pitágoras**):", opciones: ["10", "12", "14", "16"], correcta: 0 },
    { materia: "Matemáticas", grado: "7", dificultad: "dificil", pregunta: "Resuelve: $\\frac{x}{3} - 1 = \\frac{x}{6} + 2$.", opciones: ["$x=18$", "$x=9$", "$x=6$", "$x=24$"], correcta: 1 },
    { materia: "Matemáticas", grado: "7", dificultad: "dificil", pregunta: "¿Cuántas diagonales tiene un hexágono?", opciones: ["6", "7", "8", "9"], correcta: 3 },
    { materia: "Matemáticas", grado: "7", dificultad: "dificil", pregunta: "La expresión $\\sqrt[3]{8} + 4^0$ es igual a:", opciones: ["3", "4", "5", "9"], correcta: 0 },
    { materia: "Matemáticas", grado: "7", dificultad: "dificil", pregunta: "Si $A = \\{1, 2, 3\\}$ y $B = \\{3, 4, 5\\}$, ¿cuál es $A \\cap B$ (**intersección**)?", opciones: ["$\{1, 2, 3, 4, 5\}$", "$\{3\}$", "$\{1, 2, 4, 5\}$", "$\{ \\}$"], correcta: 1 },
    { materia: "Matemáticas", grado: "7", dificultad: "dificil", pregunta: "¿Cuál de estos números es **irracional**?", opciones: ["$\sqrt{9}$", "$1/3$", "$0.5$", "$\pi$"], correcta: 3 },
    { materia: "Matemáticas", grado: "7", dificultad: "dificil", pregunta: "La suma de los ángulos internos de un cuadrilátero es:", opciones: ["$180^{\\circ}$", "$360^{\\circ}$", "$90^{\\circ}$", "$540^{\\circ}$"], correcta: 1 },
    { materia: "Matemáticas", grado: "7", dificultad: "dificil", pregunta: "Convierte el número periódico $0.\\overline{3}$ a fracción.", opciones: ["$3/10$", "$1/3$", "$3/99$", "$3/100$"], correcta: 1 },
    { materia: "Matemáticas", grado: "7", dificultad: "dificil", pregunta: "Si el precio de un artículo subió un $10\\%$ y luego bajó un $10\\%$, ¿cuál es el cambio neto?", opciones: ["Aumentó $1\\%$", "Disminuyó $1\\%$", "No cambió", "Disminuyó $0.1\\%$"], correcta: 1 },
    { materia: "Matemáticas", grado: "7", dificultad: "dificil", pregunta: "La expresión $3(x - 5) + 2x$ simplificada es:", opciones: ["$5x - 5$", "$5x - 15$", "$5x - 10$", "$3x - 15$"], correcta: 1 },

    // ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    // LENGUA CASTELLANA - GRADO 7 - FÁCIL (20 Preguntas)
    // ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    { materia: "Lengua Castellana", grado: "7", dificultad: "facil", pregunta: "¿Cuál es el elemento de la comunicación que recibe el mensaje?", opciones: ["Emisor", "Código", "Receptor", "Canal"], correcta: 2 },
    { materia: "Lengua Castellana", grado: "7", dificultad: "facil", pregunta: "Los textos que buscan informar sobre un tema de forma objetiva son:", opciones: ["Narrativos", "Líricos", "Expositivos", "Argumentativos"], correcta: 2 },
    { materia: "Lengua Castellana", grado: "7", dificultad: "facil", pregunta: "¿Qué figura literaria es '*tus ojos son dos luceros*' (reemplaza un término por otro)?", opciones: ["Símil", "Metáfora", "Hipérbole", "Personificación"], correcta: 1 },
    { materia: "Lengua Castellana", grado: "7", dificultad: "facil", pregunta: "La función del lenguaje que se centra en el propio mensaje (belleza, forma) es:", opciones: ["Referencial", "Fática", "Poética", "Emotiva"], correcta: 2 },
    { materia: "Lengua Castellana", grado: "7", dificultad: "facil", pregunta: "¿Cuál de estas palabras es un **adjetivo calificativo**?", opciones: ["rápidamente", "grande", "allí", "escribir"], correcta: 1 },
    { materia: "Lengua Castellana", grado: "7", dificultad: "facil", pregunta: "El género literario que narra hazañas de héroes y dioses es el:", opciones: ["Lírico", "Dramático", "Épico o Narrativo", "Didáctico"], correcta: 2 },
    { materia: "Lengua Castellana", grado: "7", dificultad: "facil", pregunta: "¿Qué tipo de palabra es '**con**'?", opciones: ["Sustantivo", "Verbo", "Preposición", "Adverbio"], correcta: 2 },
    { materia: "Lengua Castellana", grado: "7", dificultad: "facil", pregunta: "El signo de puntuación que indica la interrupción de una idea o enumeración incompleta es:", opciones: ["Coma", "Punto", "Puntos suspensivos", "Paréntesis"], correcta: 2 },
    { materia: "Lengua Castellana", grado: "7", dificultad: "facil", pregunta: "El 'lexema' o raíz de la palabra 'panadero' es:", opciones: ["panadero", "panad", "pan", "ero"], correcta: 2 },
    { materia: "Lengua Castellana", grado: "7", dificultad: "facil", pregunta: "La conjugación 'yo *iré*' está en tiempo:", opciones: ["Presente", "Pasado", "Futuro", "Condicional"], correcta: 2 },
    { materia: "Lengua Castellana", grado: "7", dificultad: "facil", pregunta: "¿Cuál de estas palabras es aguda y lleva tilde?", opciones: ["cántaro", "fácil", "pared", "balón"], correcta: 3 },
    { materia: "Lengua Castellana", grado: "7", dificultad: "facil", pregunta: "El sinónimo de 'contento' es:", opciones: ["triste", "alegre", "enojado", "aburrido"], correcta: 1 },
    { materia: "Lengua Castellana", grado: "7", dificultad: "facil", pregunta: "¿Cuál de los siguientes es un **medio de comunicación masiva**?", opciones: ["Una carta personal", "Un mensaje de texto", "Un libro de historia", "La televisión"], correcta: 3 },
    { materia: "Lengua Castellana", grado: "7", dificultad: "facil", pregunta: "El conjunto de reglas que rigen la correcta escritura de una lengua es la:", opciones: ["Sintaxis", "Morfología", "Ortografía", "Semántica"], correcta: 2 },
    { materia: "Lengua Castellana", grado: "7", dificultad: "facil", pregunta: "La palabra 'coche' y 'carro' son:", opciones: ["Antónimos", "Homónimos", "Sinónimos", "Parónimos"], correcta: 2 },
    { materia: "Lengua Castellana", grado: "7", dificultad: "facil", pregunta: "¿Cómo se llama el texto que cuenta la vida de una persona escrita por ella misma?", opciones: ["Biografía", "Novela", "Autobiografía", "Cuento"], correcta: 2 },
    { materia: "Lengua Castellana", grado: "7", dificultad: "facil", pregunta: "El nexo que une dos oraciones simples para formar una compuesta es una:", opciones: ["Preposición", "Conjunción", "Interjección", "Adjetivo"], correcta: 1 },
    { materia: "Lengua Castellana", grado: "7", dificultad: "facil", pregunta: "En 'El niño *es* inteligente', el verbo *es* es:", opciones: ["Transitivo", "Intransitivo", "Copulativo", "Auxiliar"], correcta: 2 },
    { materia: "Lengua Castellana", grado: "7", dificultad: "facil", pregunta: "La palabra 'había' lleva 'h' y 'b'. ¿A qué verbo pertenece?", opciones: ["Haber", "Abrir", "Hablar", "Escribir"], correcta: 0 },
    { materia: "Lengua Castellana", grado: "7", dificultad: "facil", pregunta: "¿Cuál es la función del **diálogo** en un texto narrativo o dramático?", opciones: ["Describir el ambiente", "Mostrar el pensamiento del narrador", "Reproducir la conversación entre personajes", "Dar la opinión del autor"], correcta: 2 },

    // ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    // LENGUA CASTELLANA - GRADO 7 - MEDIA (20 Preguntas)
    // ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    { materia: "Lengua Castellana", grado: "7", dificultad: "media", pregunta: "¿Cuál de las siguientes es una oración compuesta *subordinada*?", opciones: ["Leo y escribo.", "Vino, pero se fue rápido.", "Te llamaré *cuando* llegue.", "O estudias o trabajas."], correcta: 2 },
    { materia: "Lengua Castellana", grado: "7", dificultad: "media", pregunta: "La figura literaria que **exagera** una cualidad o acción es la:", opciones: ["Metáfora", "Símil", "Hipérbole", "Personificación"], correcta: 2 },
    { materia: "Lengua Castellana", grado: "7", dificultad: "media", pregunta: "¿Qué función del lenguaje se centra en el **receptor** para influir en su conducta (órdenes, ruegos)?", opciones: ["Apelativa o Conativa", "Referencial", "Expresiva", "Metalingüística"], correcta: 0 },
    { materia: "Lengua Castellana", grado: "7", dificultad: "media", pregunta: "El género literario al que pertenece la obra *Romeo y Julieta* es:", opciones: ["Épico", "Lírico", "Narrativo", "Dramático"], correcta: 3 },
    { materia: "Lengua Castellana", grado: "7", dificultad: "media", pregunta: "En la oración 'Compró un libro *interesante*', la palabra 'interesante' es:", opciones: ["Sustantivo", "Verbo", "Adjetivo", "Adverbio"], correcta: 2 },
    { materia: "Lengua Castellana", grado: "7", dificultad: "media", pregunta: "La palabra 'policía' es grave, pero lleva tilde porque:", opciones: ["Es una excepción", "Termina en vocal", "Contiene un **hiato (í-a)**", "Es esdrújula"], correcta: 2 },
    { materia: "Lengua Castellana", grado: "7", dificultad: "media", pregunta: "¿Qué significa el prefijo '**tele-**'?", opciones: ["Grande", "Pequeño", "Lejos", "Cerca"], correcta: 2 },
    { materia: "Lengua Castellana", grado: "7", dificultad: "media", pregunta: "El modo verbal que expresa duda, deseo o posibilidad (Ejemplo: *Quizás estudie*) es el:", opciones: ["Indicativo", "Subjuntivo", "Imperativo", "Condicional"], correcta: 1 },
    { materia: "Lengua Castellana", grado: "7", dificultad: "media", pregunta: "¿Cuál es el **complemento circunstancial de lugar** en 'Fuimos al cine *con mi hermana* ayer'?", opciones: ["Fuimos", "al cine", "con mi hermana", "ayer"], correcta: 1 },
    { materia: "Lengua Castellana", grado: "7", dificultad: "media", pregunta: "La diferencia entre *ha* (del verbo haber) y *a* (preposición) se basa en:", opciones: ["El sonido", "La gramática", "La ortografía (uso de 'h')", "La pronunciación"], correcta: 2 },
    { materia: "Lengua Castellana", grado: "7", dificultad: "media", pregunta: "Una **'crónica'** es un tipo de texto periodístico que se caracteriza por:", opciones: ["Ser muy breve", "Narrar hechos en **orden cronológico**", "Ser siempre de opinión", "Estar en verso"], correcta: 1 },
    { materia: "Lengua Castellana", grado: "7", dificultad: "media", pregunta: "¿Cuál de las siguientes palabras es un **diptongo**?", opciones: ["país", "cielo", "poeta", "maíz"], correcta: 1 },
    { materia: "Lengua Castellana", grado: "7", dificultad: "media", pregunta: "La **'anáfora'** es una figura retórica que consiste en la repetición de:", opciones: ["Una idea", "Una palabra o grupo de palabras **al inicio de versos/frases**", "Un sonido", "Un personaje"], correcta: 1 },
    { materia: "Lengua Castellana", grado: "7", dificultad: "media", pregunta: "El verbo 'ver' en **pretérito perfecto simple** (Ejemplo: *Yo __ la película*):", opciones: ["veo", "vi", "visto", "veía"], correcta: 1 },
    { materia: "Lengua Castellana", grado: "7", dificultad: "media", pregunta: "Una oración con **sujeto *múltiple*** es:", opciones: ["Ella baila bien.", "Yo voy.", "María y Juan leen.", "La casa es grande."], correcta: 2 },
    { materia: "Lengua Castellana", grado: "7", dificultad: "media", pregunta: "¿Qué diferencia hay entre '**por qué**' y '**porque**'?", opciones: ["Uno es conjunción y el otro es preposición.", "Uno es para pregunta y el otro es para respuesta/causa.", "No hay diferencia.", "Solo cambia la tilde."], correcta: 1 },
    { materia: "Lengua Castellana", grado: "7", dificultad: "media", pregunta: "El 'teatro' o género dramático se caracteriza por el uso de:", opciones: ["Narrador omnisciente", "**Diálogos y acotaciones**", "Versos endecasílabos", "Descripciones detalladas"], correcta: 1 },
    { materia: "Lengua Castellana", grado: "7", dificultad: "media", pregunta: "¿Qué parte de la palabra 'librito' indica su diminutivo?", opciones: ["libr", "**ito**", "l", "librito"], correcta: 1 },
    { materia: "Lengua Castellana", grado: "7", dificultad: "media", pregunta: "La **'coherencia'** en un texto se refiere a:", opciones: ["La ausencia de errores ortográficos.", "La **conexión lógica de las ideas y el sentido global**.", "El uso de muchas comas.", "La longitud del párrafo."], correcta: 1 },
    { materia: "Lengua Castellana", grado: "7", dificultad: "media", pregunta: "Un 'adverbio de **duda**' es:", opciones: ["siempre", "jamás", "**quizás**", "bien"], correcta: 2 },

    // ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    // LENGUA CASTELLANA - GRADO 7 - DIFÍCIL (20 Preguntas)
    // ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    { materia: "Lengua Castellana", grado: "7", dificultad: "dificil", pregunta: "¿Cómo se llama la oración en la que el sujeto realiza la acción y es el agente de la misma?", opciones: ["Voz Pasiva", "Voz Reflexiva", "**Voz Activa**", "Voz Impersonal"], correcta: 2 },
    { materia: "Lengua Castellana", grado: "7", dificultad: "dificil", pregunta: "La figura literaria '**un silencio *atronador***' (unión de términos contradictorios) es:", opciones: ["Metáfora", "Ironía", "**Oxímoron**", "Paradoja"], correcta: 2 },
    { materia: "Lengua Castellana", grado: "7", dificultad: "dificil", pregunta: "En la oración 'La casa *fue vendida* por la inmobiliaria', el verbo está en:", opciones: ["Voz Activa", "**Voz Pasiva**", "Voz Reflexiva", "Voz Impersonal"], correcta: 1 },
    { materia: "Lengua Castellana", grado: "7", dificultad: "dificil", pregunta: "La '**ironía**' es una figura retórica que consiste en:", opciones: ["Exagerar un hecho.", "**Decir lo contrario de lo que se piensa**.", "Hacer preguntas retóricas.", "Atribuir vida a objetos inanimados."], correcta: 1 },
    { materia: "Lengua Castellana", grado: "7", dificultad: "dificil", pregunta: "¿Cuál de estos nexos introduce una subordinada **adverbial causal**?", opciones: ["aunque", "si", "**porque**", "entonces"], correcta: 2 },
    { materia: "Lengua Castellana", grado: "7", dificultad: "dificil", pregunta: "Un '**neologismo**' es una palabra:", opciones: ["Que ya no se usa.", "**Nueva en la lengua**.", "Mal escrita.", "Que tiene doble significado."], correcta: 1 },
    { materia: "Lengua Castellana", grado: "7", dificultad: "dificil", pregunta: "La '**polisemia**' se refiere a:", opciones: ["Palabras que suenan igual.", "**Palabras con varios significados**.", "Palabras que se escriben igual.", "Palabras antónimas."], correcta: 1 },
    { materia: "Lengua Castellana", grado: "7", dificultad: "dificil", pregunta: "¿Qué tipo de oración es 'Llueve mucho' (no tiene sujeto gramatical)?", opciones: ["Personal", "Unimembre", "**Impersonal**", "Compuesta"], correcta: 2 },
    { materia: "Lengua Castellana", grado: "7", dificultad: "dificil", pregunta: "En 'El libro que *me regalaste* es bueno', la proposición subordinada es:", opciones: ["Sustantiva", "Adverbial", "**Adjetiva (o de relativo)**", "Coordinada"], correcta: 2 },
    { materia: "Lengua Castellana", grado: "7", dificultad: "dificil", pregunta: "El término '**verosímil**' en literatura significa:", opciones: ["Que es verdadero.", "**Que parece real o creíble**.", "Que tiene muchos versos.", "Que es muy largo."], correcta: 1 },
    { materia: "Lengua Castellana", grado: "7", dificultad: "dificil", pregunta: "¿Cómo se denomina al signo (;) que separa elementos complejos en una enumeración?", opciones: ["Coma", "Punto y seguido", "**Punto y coma**", "Dos puntos"], correcta: 2 },
    { materia: "Lengua Castellana", grado: "7", dificultad: "dificil", pregunta: "La conjugación '**hubiera amado**' pertenece al tiempo:", opciones: ["Condicional simple", "Pretérito perfecto simple", "**Pretérito pluscuamperfecto de subjuntivo**", "Futuro simple"], correcta: 2 },
    { materia: "Lengua Castellana", grado: "7", dificultad: "dificil", pregunta: "El '**monólogo**' en el teatro es la forma de expresión donde un personaje:", opciones: ["Dialoga con otro.", "**Habla a un público imaginario o a sí mismo**.", "Canta una canción.", "Describe la escena."], correcta: 1 },
    { materia: "Lengua Castellana", grado: "7", dificultad: "dificil", pregunta: "¿Qué es un '**gerundio**'?", opciones: ["La terminación del infinitivo.", "La forma verbal que termina en **-ndo** y funciona como adverbio.", "Un tipo de sustantivo.", "Un tiempo futuro."], correcta: 1 },
    { materia: "Lengua Castellana", grado: "7", dificultad: "dificil", pregunta: "La función **Metalingüística** del lenguaje se centra en:", opciones: ["El contexto.", "Las emociones.", "**El código (el idioma, la gramática)**.", "El canal."], correcta: 2 },
    { materia: "Lengua Castellana", grado: "7", dificultad: "dificil", pregunta: "¿Cuál es el **sujeto *paciente*** en la voz pasiva de 'El carro fue arreglado por el mecánico'?", opciones: ["**El carro**", "fue arreglado", "por el mecánico", "el mecánico"], correcta: 0 },
    { materia: "Lengua Castellana", grado: "7", dificultad: "dificil", pregunta: "Una '**paradoja**' es una figura que expresa:", opciones: ["Una verdad obvia.", "**Una contradicción aparente que encierra una verdad profunda**.", "Un refrán.", "Una descripción detallada."], correcta: 1 },
    { materia: "Lengua Castellana", grado: "7", dificultad: "dificil", pregunta: "La palabra '**huso**' (instrumento para hilar) es homófona de:", opciones: ["**uso (del verbo usar)**", "huso", "oso", "luso"], correcta: 0 },
    { materia: "Lengua Castellana", grado: "7", dificultad: "dificil", pregunta: "La '**cohesión**' textual se logra mediante el uso de:", opciones: ["Mayúsculas", "Diálogos", "**Conectores y pronombres (referencia interna)**", "Párrafos muy largos"], correcta: 2 },
    { materia: "Lengua Castellana", grado: "7", dificultad: "dificil", pregunta: "Los '**versos de arte mayor**' son aquellos que tienen:", opciones: ["Menos de $8$ sílabas.", "Exactamente $8$ sílabas.", "**Más de $8$ sílabas**.", "Sílaba libre."], correcta: 2 },

    // ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    // INGLÉS A2 - GRADO 7 - FÁCIL (20 Preguntas)
    // ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    { materia: "Inglés A2", grado: "7", dificultad: "facil", pregunta: "Complete: 'She is ___ (más alta) than her brother.'", opciones: ["tall", "**taller**", "tallest", "most tall"], correcta: 1 },
    { materia: "Inglés A2", grado: "7", dificultad: "facil", pregunta: "The **Past Simple** of 'to see' is:", opciones: ["**saw**", "seed", "seen", "seeing"], correcta: 0 },
    { materia: "Inglés A2", grado: "7", dificultad: "facil", pregunta: "Which preposition means '**encima de**' (touching the surface)?", opciones: ["under", "in", "over", "**on**"], correcta: 3 },
    { materia: "Inglés A2", grado: "7", dificultad: "facil", pregunta: "The comparative of '**good**' is:", opciones: ["gooder", "best", "**better**", "more good"], correcta: 2 },
    { materia: "Inglés A2", grado: "7", dificultad: "facil", pregunta: "Complete the sentence: 'I ___ (no puedo) swim.'", opciones: ["not can", "**can't**", "don't can", "can not to"], correcta: 1 },
    { materia: "Inglés A2", grado: "7", dificultad: "facil", pregunta: "The superlative of 'interesting' is:", opciones: ["interestinger", "**most interesting**", "more interesting", "the interestingest"], correcta: 1 },
    { materia: "Inglés A2", grado: "7", dificultad: "facil", pregunta: "Which word means '**ayer**'?", opciones: ["tomorrow", "today", "now", "**yesterday**"], correcta: 3 },
    { materia: "Inglés A2", grado: "7", dificultad: "facil", pregunta: "Choose the correct modal verb for *permission*: '___ I go to the bathroom?'", opciones: ["Must", "Should", "**May**", "Will"], correcta: 2 },
    { materia: "Inglés A2", grado: "7", dificultad: "facil", pregunta: "Complete: 'There are ___ (**muchos**) people here.'", opciones: ["much", "**a lot of**", "little", "any"], correcta: 1 },
    { materia: "Inglés A2", grado: "7", dificultad: "facil", pregunta: "What is the correct structure for the **Present Continuous**?", opciones: ["Subject + Main Verb + -ing", "**Subject + Be + Main Verb + -ing**", "Subject + Do + Main Verb", "Subject + Have + Past Participle"], correcta: 1 },
    { materia: "Inglés A2", grado: "7", dificultad: "facil", pregunta: "Translate 'Yo estaba corriendo' (**Past Continuous**):", opciones: ["I run", "I was run", "**I was running**", "I ran"], correcta: 2 },
    { materia: "Inglés A2", grado: "7", dificultad: "facil", pregunta: "The question for 'She lives *in London*' is:", opciones: ["When does she live?", "**Where does she live?**", "Why does she live?", "How does she live?"], correcta: 1 },
    { materia: "Inglés A2", grado: "7", dificultad: "facil", pregunta: "The opposite of 'early' is:", opciones: ["soon", "**late**", "fast", "slow"], correcta: 1 },
    { materia: "Inglés A2", grado: "7", dificultad: "facil", pregunta: "Which word is a connector of ***sequence***?", opciones: ["because", "although", "**finally**", "but"], correcta: 2 },
    { materia: "Inglés A2", grado: "7", dificultad: "facil", pregunta: "Complete: 'I have ___ (**algunos**) money.'", opciones: ["a", "many", "**some**", "any"], correcta: 2 },
    { materia: "Inglés A2", grado: "7", dificultad: "facil", pregunta: "The phrase '**look up**' (phrasal verb) means:", opciones: ["mirar abajo", "**buscar información (en un diccionario)**", "levantarse", "mirar al techo"], correcta: 1 },
    { materia: "Inglés A2", grado: "7", dificultad: "facil", pregunta: "The difference between 'say' and 'tell' is often that 'tell' needs a/an:", opciones: ["**object**", "preposition", "adverb", "adjective"], correcta: 0 },
    { materia: "Inglés A2", grado: "7", dificultad: "facil", pregunta: "The number 100 is: ", opciones: ["ten", "**hundred**", "thousand", "million"], correcta: 1 },
    { materia: "Inglés A2", grado: "7", dificultad: "facil", pregunta: "Choose the correct possessive pronoun: 'That book is ___ (**mío**).'", opciones: ["my", "**mine**", "me", "I"], correcta: 1 },
    { materia: "Inglés A2", grado: "7", dificultad: "facil", pregunta: "Translate 'Nosotros queremos comer' (want + infinitive):", opciones: ["We want eat", "**We want to eat**", "We want eating", "We wanting eat"], correcta: 1 },

    // ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    // INGLÉS A2 - GRADO 7 - MEDIA (20 Preguntas)
    // ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    { materia: "Inglés A2", grado: "7", dificultad: "media", pregunta: "Complete with **Past Continuous**: 'While I ___ (**estaba durmiendo**), the phone rang.'", opciones: ["sleep", "slept", "**was sleeping**", "am sleeping"], correcta: 2 },
    { materia: "Inglés A2", grado: "7", dificultad: "media", pregunta: "What is the difference in use between '**will**' and '**going to**' for the future?", opciones: ["No difference.", "'Will' is for plans; 'going to' is for spontaneous decisions.", "**'Will' is for spontaneous decisions; 'going to' is for pre-planned actions.**", "'Going to' is only for questions."], correcta: 2 },
    { materia: "Inglés A2", grado: "7", dificultad: "media", pregunta: "Which quantifiers are generally used for ***uncountable*** nouns?", opciones: ["many, few", "**much, little**", "a lot of, many", "some, any"], correcta: 1 },
    { materia: "Inglés A2", grado: "7", dificultad: "media", pregunta: "The verb 'to have' in the **Present Perfect** form (affirmative, 3rd person singular) is:", opciones: ["have had", "**has had**", "had had", "have having"], correcta: 1 },
    { materia: "Inglés A2", grado: "7", dificultad: "media", pregunta: "Choose the correct phrase for '**media hora**' (time):", opciones: ["**half an hour**", "a half hour", "half hour", "one half hour"], correcta: 0 },
    { materia: "Inglés A2", grado: "7", dificultad: "media", pregunta: "Form the **Zero Conditional**: 'If you heat water, it ___.'", opciones: ["boil", "will boil", "**boils**", "is boiling"], correcta: 2 },
    { materia: "Inglés A2", grado: "7", dificultad: "media", pregunta: "Which **relative pronoun** is used to talk about ***possession***?", opciones: ["who", "which", "**whose**", "where"], correcta: 2 },
    { materia: "Inglés A2", grado: "7", dificultad: "media", pregunta: "Complete: 'I have never ___ (**visto**) a ghost.' (Present Perfect)", opciones: ["saw", "see", "**seen**", "seeing"], correcta: 2 },
    { materia: "Inglés A2", grado: "7", dificultad: "media", pregunta: "The phrase '**put up with**' (phrasal verb) means:", opciones: ["**tolerar**", "levantar", "dejar", "poner"], correcta: 0 },
    { materia: "Inglés A2", grado: "7", dificultad: "media", pregunta: "In **Reported Speech**, the statement 'I am happy' changes to 'He said that he ___ happy.'", opciones: ["is", "**was**", "has been", "will be"], correcta: 1 },
    { materia: "Inglés A2", grado: "7", dificultad: "media", pregunta: "Complete: 'It is important ___ (**comer**) healthy food.'", opciones: ["eat", "**to eat**", "eating", "eats"], correcta: 1 },
    { materia: "Inglés A2", grado: "7", dificultad: "media", pregunta: "The **modal verb 'must'** expresses:", opciones: ["suggestion", "possibility", "**strong obligation/necessity**", "future plan"], correcta: 2 },
    { materia: "Inglés A2", grado: "7", dificultad: "media", pregunta: "Translate '**Aunque** estaba lloviendo' (connector):", opciones: ["Because it was raining", "In spite of the rain", "**Although it was raining**", "So it was raining"], correcta: 2 },
    { materia: "Inglés A2", grado: "7", dificultad: "media", pregunta: "Which verb tense is used to describe an action that happened ***before*** another action in the past?", opciones: ["Past Simple", "Present Perfect", "**Past Perfect**", "Future Simple"], correcta: 2 },
    { materia: "Inglés A2", grado: "7", dificultad: "media", pregunta: "The adjective '**exhausted**' means:", opciones: ["triste", "**muy cansado**", "enojado", "emocionado"], correcta: 1 },
    { materia: "Inglés A2", grado: "7", dificultad: "media", pregunta: "Complete the **Passive Voice (Present Simple)**: 'The letters ___ (are delivered) every day.'", opciones: ["deliver", "is delivered", "**are delivered**", "delivered"], correcta: 2 },
    { materia: "Inglés A2", grado: "7", dificultad: "media", pregunta: "The difference between '**few**' and '**a few**' with countable nouns is:", opciones: ["**'Few' means a small number (negative); 'a few' means some (positive).**", "No difference.", "'Few' is formal; 'a few' is informal.", "'A few' is only for questions."], correcta: 0 },
    { materia: "Inglés A2", grado: "7", dificultad: "media", pregunta: "What is '**quarter past eleven**'?", opciones: ["11:00", "**11:15**", "11:30", "11:45"], correcta: 1 },
    { materia: "Inglés A2", grado: "7", dificultad: "media", pregunta: "The verb 'to be used to' means:", opciones: ["**soler hacer algo (hábito)**", "estar en uso", "ser útil", "acostumbrarse a algo"], correcta: 0 },
    { materia: "Inglés A2", grado: "7", dificultad: "media", pregunta: "Complete: 'I wish I ___ (**fui**) taller.' (**Wish for the present**)", opciones: ["am", "**were**", "had been", "will be"], correcta: 1 },

    // ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    // INGLÉS A2 - GRADO 7 - DIFÍCIL (20 Preguntas)
    // ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    { materia: "Inglés A2", grado: "7", dificultad: "dificil", pregunta: "Form the **Second Conditional (hypothetical)**: 'If I had money, I ___ travel the world.'", opciones: ["will", "**would**", "had", "can"], correcta: 1 },
    { materia: "Inglés A2", grado: "7", dificultad: "dificil", pregunta: "Which modal verb expresses **low possibility**?", opciones: ["must", "can", "**might**", "should"], correcta: 2 },
    { materia: "Inglés A2", grado: "7", dificultad: "dificil", pregunta: "The sentence 'I have been studying for three hours' is in:", opciones: ["Present Perfect Simple", "**Present Perfect Continuous**", "Past Continuous", "Future Perfect"], correcta: 1 },
    { materia: "Inglés A2", grado: "7", dificultad: "dificil", pregunta: "Change to **Passive Voice (Past Simple)**: 'The police arrested the thief.'", opciones: ["The thief arrested the police.", "**The thief was arrested by the police.**", "The thief is arrested by the police.", "The police was arrested by the thief."], correcta: 1 },
    { materia: "Inglés A2", grado: "7", dificultad: "dificil", pregunta: "Which option is an appropriate **question tag** for: 'He is studying, ___?'", opciones: ["is he", "**isn't he**", "does he", "doesn't he"], correcta: 1 },
    { materia: "Inglés A2", grado: "7", dificultad: "dificil", pregunta: "The phrasal verb '**call off**' means:", opciones: ["llamar a alguien", "**cancelar**", "gritar", "desconectar"], correcta: 1 },
    { materia: "Inglés A2", grado: "7", dificultad: "dificil", pregunta: "Complete the sentence using the **Gerund**: 'I enjoy ___ (**cantar**) in the shower.'", opciones: ["to sing", "sing", "**singing**", "sang"], correcta: 2 },
    { materia: "Inglés A2", grado: "7", dificultad: "dificil", pregunta: "In **Reported Speech**, 'Where do you live?' changes to 'He asked me where I ___.'", opciones: ["live", "**lived**", "do live", "am living"], correcta: 1 },
    { materia: "Inglés A2", grado: "7", dificultad: "dificil", pregunta: "The word '**regardless**' is used to express:", opciones: ["reason", "contrast", "condition", "**disregard/without taking into account**"], correcta: 3 },
    { materia: "Inglés A2", grado: "7", dificultad: "dificil", pregunta: "The difference between 'must' and 'have to' is that 'must' often implies:", opciones: ["external obligation", "**internal obligation/speaker's strong feeling**", "permission", "low possibility"], correcta: 1 },
    { materia: "Inglés A2", grado: "7", dificultad: "dificil", pregunta: "Complete the sentence with an **Adverb of Frequency**: 'He is late. He ___ arrives on time.'", opciones: ["always", "often", "**never**", "sometimes"], correcta: 2 },
    { materia: "Inglés A2", grado: "7", dificultad: "dificil", pregunta: "The pronunciation of the '-ed' ending in '**decided**' is:", opciones: ["/d/", "/t/", "***/id/***", "it is silent"], correcta: 2 },
    { materia: "Inglés A2", grado: "7", dificultad: "dificil", pregunta: "The meaning of the idiom '**cost an arm and a leg**' is:", opciones: ["ser muy barato", "**ser muy caro**", "estar roto", "ser fácil"], correcta: 1 },
    { materia: "Inglés A2", grado: "7", dificultad: "dificil", pregunta: "The relative pronoun '**where**' is used for:", opciones: ["people", "objects", "**places**", "time"], correcta: 2 },
    { materia: "Inglés A2", grado: "7", dificultad: "dificil", pregunta: "Complete the phrase: 'The concert was canceled ___ of the rain.'", opciones: ["because", "due", "**because of**", "so"], correcta: 2 },
    { materia: "Inglés A2", grado: "7", dificultad: "dificil", pregunta: "Which of these words is a synonym for '**essential**'?", opciones: ["unimportant", "optional", "**necessary**", "rare"], correcta: 2 },
    { materia: "Inglés A2", grado: "7", dificultad: "dificil", pregunta: "The structure 'Subject + **Should + Have + Past Participle**' expresses:", opciones: ["a past habit", "**a regret/criticism about a past action**", "a future possibility", "a zero conditional"], correcta: 1 },
    { materia: "Inglés A2", grado: "7", dificultad: "dificil", pregunta: "Translate 'Yo **habría comido**' (**Conditional Perfect**):", opciones: ["I would eat", "I will eat", "**I would have eaten**", "I had eaten"], correcta: 2 },
    { materia: "Inglés A2", grado: "7", dificultad: "dificil", pregunta: "The word '**whom**' is a formal substitute for the relative pronoun 'who' when it functions as the:", opciones: ["subject", "**object**", "verb", "adjective"], correcta: 1 },
    { materia: "Inglés A2", grado: "7", dificultad: "dificil", pregunta: "Complete the question: '___ have you been waiting?' (**duration**)", opciones: ["How much", "How many", "**How long**", "How far"], correcta: 2 },

    // ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    // CULTURA CIUDADANA - GRADO 7 - FÁCIL (20 Preguntas)
    // ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    { materia: "Cultura Ciudadana", grado: "7", dificultad: "facil", pregunta: "¿Qué significa el valor de la ***tolerancia***?", opciones: ["Estar de acuerdo con todo.", "**Aceptar y respetar las diferencias de los demás.**", "Ignorar las diferencias.", "Imponer mi opinión."], correcta: 1 },
    { materia: "Cultura Ciudadana", grado: "7", dificultad: "facil", pregunta: "El respeto a la ***diversidad*** en un país implica valorar:", opciones: ["Solo la raza mayoritaria.", "**Las diferentes culturas, etnias y formas de pensar.**", "Solo la economía.", "La uniformidad."], correcta: 1 },
    { materia: "Cultura Ciudadana", grado: "7", dificultad: "facil", pregunta: "¿Cuál es el propósito principal de la **ONU** (Organización de las Naciones Unidas)?", opciones: ["Organizar torneos deportivos.", "**Promover la paz, la cooperación y los derechos humanos a nivel global.**", "Crear nuevas fronteras.", "Regular el comercio en Asia."], correcta: 1 },
    { materia: "Cultura Ciudadana", grado: "7", dificultad: "facil", pregunta: "Los **'derechos sociales'** incluyen el derecho a:", opciones: ["La vida", "**La salud y la seguridad social**", "La libre expresión", "El voto"], correcta: 1 },
    { materia: "Cultura Ciudadana", grado: "7", dificultad: "facil", pregunta: "¿Cómo se llama al conjunto de costumbres, creencias y tradiciones de un grupo social?", opciones: ["Política", "Economía", "**Cultura**", "Geografía"], correcta: 2 },
    { materia: "Cultura Ciudadana", grado: "7", dificultad: "facil", pregunta: "Un deber fundamental del ciudadano para con la nación es:", opciones: ["Viajar al extranjero.", "**Respetar la Constitución y las leyes.**", "Solo pagar deudas.", "Ignorar los problemas públicos."], correcta: 1 },
    { materia: "Cultura Ciudadana", grado: "7", dificultad: "facil", pregunta: "La '**paz**' se construye fundamentalmente a través del:", opciones: ["Conflicto armado.", "**Diálogo y la solución pacífica de conflictos.**", "Silencio total.", "Autoritarismo."], correcta: 1 },
    { materia: "Cultura Ciudadana", grado: "7", dificultad: "facil", pregunta: "¿Cuál de estos es un **símbolo patrio** de Colombia?", opciones: ["La bandera de EEUU", "El dólar", "**El cóndor**", "El himno de otro país"], correcta: 2 },
    { materia: "Cultura Ciudadana", grado: "7", dificultad: "facil", pregunta: "El '**interés colectivo**' se refiere al beneficio de:", opciones: ["Solo una persona.", "El Estado.", "**Toda la sociedad.**", "Solo los políticos."], correcta: 2 },
    { materia: "Cultura Ciudadana", grado: "7", dificultad: "facil", pregunta: "La rama del poder público que ***administra*** los recursos y ejecuta las leyes es la:", opciones: ["Judicial", "Legislativa", "**Ejecutiva**", "De Control"], correcta: 2 },
    { materia: "Cultura Ciudadana", grado: "7", dificultad: "facil", pregunta: "El concepto de '**ética**' se relaciona con:", opciones: ["Las reglas de un deporte.", "**El estudio de la moral y la conducta correcta.**", "La economía.", "La tecnología."], correcta: 1 },
    { materia: "Cultura Ciudadana", grado: "7", dificultad: "facil", pregunta: "El '**Derecho a la Alimentación**' es un derecho:", opciones: ["Civil y Político", "**Económico, Social y Cultural**", "De primera generación", "De última generación"], correcta: 1 },
    { materia: "Cultura Ciudadana", grado: "7", dificultad: "facil", pregunta: "¿Qué valor es la base de la convivencia ciudadana?", opciones: ["Egoísmo", "Competencia desleal", "**Respeto**", "Individualismo"], correcta: 2 },
    { materia: "Cultura Ciudadana", grado: "7", dificultad: "facil", pregunta: "El '**medio ambiente**' es un bien:", opciones: ["Privado", "**Público**", "Exclusivo del gobierno", "Solo de las empresas"], correcta: 1 },
    { materia: "Cultura Ciudadana", grado: "7", dificultad: "facil", pregunta: "Una '**norma de tránsito**' es un ejemplo de regla:", opciones: ["Moral", "Religiosa", "**Social/Jurídica**", "Personal"], correcta: 2 },
    { materia: "Cultura Ciudadana", grado: "7", dificultad: "facil", pregunta: "¿Qué son los '**derechos humanos**'?", opciones: ["Privilegios para algunos.", "**Normas que tienen todos por el simple hecho de ser personas.**", "Reglas del colegio.", "Leyes creadas por el alcalde."], correcta: 1 },
    { materia: "Cultura Ciudadana", grado: "7", dificultad: "facil", pregunta: "La '**libertad de conciencia**' es el derecho a:", opciones: ["**Creer en lo que se quiera, sin imposición.**", "Hacer todo sin pensar.", "Mentir.", "Ser siempre el líder."], correcta: 0 },
    { materia: "Cultura Ciudadana", grado: "7", dificultad: "facil", pregunta: "El documento que se usa para resolver un conflicto en la comunidad es a menudo un:", opciones: ["Cheque", "Contrato de venta", "**Acta de mediación o acuerdo**", "Pasaporte"], correcta: 2 },
    { materia: "Cultura Ciudadana", grado: "7", dificultad: "facil", pregunta: "La 'región Andina' en Colombia es un ejemplo de:", opciones: ["Uniformidad cultural", "**Diversidad geográfica y cultural**", "Un país diferente", "Un desierto"], correcta: 1 },
    { materia: "Cultura Ciudadana", grado: "7", dificultad: "facil", pregunta: "La '**honestidad**' es importante porque genera:", opciones: ["Duda", "**Confianza**", "Riqueza", "Aislamiento"], correcta: 1 },

    // ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    // CULTURA CIUDADANA - GRADO 7 - MEDIA (20 Preguntas)
    // ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    { materia: "Cultura Ciudadana", grado: "7", dificultad: "media", pregunta: "¿Cómo se llama el mecanismo de protección de derechos fundamentales en Colombia (**respuesta inmediata**)?", opciones: ["Habeas Data", "**Acción de Tutela**", "Plebiscito", "Referendo"], correcta: 1 },
    { materia: "Cultura Ciudadana", grado: "7", dificultad: "media", pregunta: "El derecho a la ***vivienda digna*** es un derecho de:", opciones: ["Primera generación (Civiles y Políticos)", "**Segunda generación (Económicos, Sociales y Culturales)**", "Tercera generación (Colectivos)", "Cuarta generación"], correcta: 1 },
    { materia: "Cultura Ciudadana", grado: "7", dificultad: "media", pregunta: "La '**Soberanía Nacional**' reside en:", opciones: ["El Congreso", "El Presidente", "**El pueblo**", "Los militares"], correcta: 2 },
    { materia: "Cultura Ciudadana", grado: "7", dificultad: "media", pregunta: "¿Cuál es la función del **Defensor del Pueblo**?", opciones: ["Juzgar a criminales.", "**Defender y promover los derechos humanos.**", "Recaudar impuestos.", "Crear leyes."], correcta: 1 },
    { materia: "Cultura Ciudadana", grado: "7", dificultad: "media", pregunta: "La **'Organización de los Estados Americanos (OEA)'** agrupa a países del continente:", opciones: ["Africano", "Europeo", "Asiático", "**Americano**"], correcta: 3 },
    { materia: "Cultura Ciudadana", grado: "7", dificultad: "media", pregunta: "La ***inclusión*** social busca garantizar la participación de:", opciones: ["Solo los más ricos.", "**Todas las personas, especialmente las minorías y vulnerables.**", "Solo los adultos.", "Solo los hombres."], correcta: 1 },
    { materia: "Cultura Ciudadana", grado: "7", dificultad: "media", pregunta: "¿Qué implica la **'responsabilidad social'** de una empresa?", opciones: ["Solo generar ganancias.", "**Contribuir al bienestar social y ambiental.**", "No pagar impuestos.", "Ignorar a los empleados."], correcta: 1 },
    { materia: "Cultura Ciudadana", grado: "7", dificultad: "media", pregunta: "El concepto de '**justicia conmutativa**' se refiere a la igualdad en:", opciones: ["El reparto de bienes públicos.", "**Las relaciones de intercambio entre individuos (dar lo equivalente a lo que se recibe).**", "Las penas de prisión.", "El derecho al voto."], correcta: 1 },
    { materia: "Cultura Ciudadana", grado: "7", dificultad: "media", pregunta: "Un '**Referendo**' es un mecanismo de participación para que el pueblo:", opciones: ["Elija a un nuevo presidente.", "**Apruebe o rechace una norma constitucional o legal.**", "Solicite información.", "Haga una huelga."], correcta: 1 },
    { materia: "Cultura Ciudadana", grado: "7", dificultad: "media", pregunta: "La **'Declaración Universal de los Derechos Humanos'** fue proclamada en el año:", opciones: ["1918", "**1948**", "2000", "1980"], correcta: 1 },
    { materia: "Cultura Ciudadana", grado: "7", dificultad: "media", pregunta: "¿Cuál es la principal diferencia entre '**ética**' y '**moral**'?", opciones: ["Son lo mismo.", "**Ética es la reflexión filosófica; Moral es el conjunto de normas y costumbres.**", "Moral es individual; Ética es social.", "Ética es solo para adultos; Moral es para niños."], correcta: 1 },
    { materia: "Cultura Ciudadana", grado: "7", dificultad: "media", pregunta: "La **'Rama Judicial'** tiene la función de:", opciones: ["Crear las leyes.", "**Administrar la justicia y aplicar las leyes.**", "Ejecutar el presupuesto nacional.", "Representar al país internacionalmente."], correcta: 1 },
    { materia: "Cultura Ciudadana", grado: "7", dificultad: "media", pregunta: "¿Qué implica el '**pluralismo**' político?", opciones: ["Que solo hay un partido.", "**La existencia de diversos partidos e ideologías políticas.**", "La dictadura.", "El poder militar."], correcta: 1 },
    { materia: "Cultura Ciudadana", grado: "7", dificultad: "media", pregunta: "Los '**servicios públicos esenciales**' (agua, luz) son garantizados por:", opciones: ["Solo empresas privadas.", "**El Estado.**", "Organizaciones de caridad.", "La policía."], correcta: 1 },
    { materia: "Cultura Ciudadana", grado: "7", dificultad: "media", pregunta: "El '**Presupuesto Nacional**' es el plan financiero del Estado para:", opciones: ["Un mes.", "**Un año.**", "Diez años.", "Toda la vida."], correcta: 1 },
    { materia: "Cultura Ciudadana", grado: "7", dificultad: "media", pregunta: "¿Qué busca la **'Justicia Transicional'**?", opciones: ["Olvidar los conflictos.", "**Lograr la verdad, justicia, reparación y no repetición tras un conflicto armado.**", "Solo castigar a los culpables.", "Solo perdonar."], correcta: 1 },
    { materia: "Cultura Ciudadana", grado: "7", dificultad: "media", pregunta: "El '**patrimonio inmaterial**' incluye:", opciones: ["Edificios antiguos.", "**Las lenguas, tradiciones orales y festividades.**", "El dinero del Estado.", "Los carros oficiales."], correcta: 1 },
    { materia: "Cultura Ciudadana", grado: "7", dificultad: "media", pregunta: "El **'Habeas Data'** es un derecho para conocer, actualizar y rectificar información que se tiene de la persona en:", opciones: ["Periódicos.", "**Bases de datos y archivos (públicos o privados).**", "Redes sociales.", "Conversaciones privadas."], correcta: 1 },
    { materia: "Cultura Ciudadana", grado: "7", dificultad: "media", pregunta: "Un **'municipio'** es la unidad político-administrativa básica del Estado en el nivel:", opciones: ["Nacional", "Departamental", "**Local**", "Internacional"], correcta: 2 },
    { materia: "Cultura Ciudadana", grado: "7", dificultad: "media", pregunta: "¿Qué es el '**lobby**' o '**cabildeo**' en política?", opciones: ["Un acto ilegal.", "**La influencia organizada para promover intereses ante el poder público.**", "Una votación secreta.", "Un debate presidencial."], correcta: 1 },

    // ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    // CULTURA CIUDADANA - GRADO 7 - DIFÍCIL (20 Preguntas)
    // ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    { materia: "Cultura Ciudadana", grado: "7", dificultad: "dificil", pregunta: "¿Qué diferencia hay entre un Estado ***Unitario*** y un Estado ***Federal***?", opciones: ["El Unitario es más rico.", "**El Unitario centraliza el poder; el Federal lo distribuye entre regiones autónomas.**", "El Federal es más pequeño.", "El Unitario no tiene leyes."], correcta: 1 },
    { materia: "Cultura Ciudadana", grado: "7", dificultad: "dificil", pregunta: "La '**Globalización**' en términos de ciudadanía implica:", opciones: ["El aislamiento cultural.", "**Una interdependencia económica, política y cultural creciente entre países.**", "Solo el aumento de impuestos.", "El fin de la democracia."], correcta: 1 },
    { materia: "Cultura Ciudadana", grado: "7", dificultad: "dificil", pregunta: "El '**Principio de Legalidad**' en un Estado de Derecho implica que:", opciones: ["El presidente puede hacer lo que quiera.", "**Los ciudadanos solo están obligados a hacer lo que la ley exige.**", "Solo hay una ley.", "La ley la hace el juez."], correcta: 1 },
    { materia: "Cultura Ciudadana", grado: "7", dificultad: "dificil", pregunta: "¿Qué concepto se refiere al derecho de un pueblo a decidir libremente su forma de gobierno (**autodeterminación**)?", opciones: ["Patriotismo", "**Soberanía**", "Imperialismo", "Neoliberalismo"], correcta: 1 },
    { materia: "Cultura Ciudadana", grado: "7", dificultad: "dificil", pregunta: "La **'Justicia Distributiva'** se refiere a la igualdad en:", opciones: ["El reparto de premios.", "**La distribución equitativa de las cargas y beneficios sociales.**", "La cantidad de votos.", "El número de amigos."], correcta: 1 },
    { materia: "Cultura Ciudadana", grado: "7", dificultad: "dificil", pregunta: "¿Cuál es la función del **Control Fiscal** (Ej. Contraloría)?", opciones: ["Vigilar la conducta de los funcionarios.", "**Vigilar la correcta administración de los recursos públicos.**", "Crear el presupuesto.", "Juzgar a los criminales."], correcta: 1 },
    { materia: "Cultura Ciudadana", grado: "7", dificultad: "dificil", pregunta: "El '**Bien Común**' se diferencia del 'Interés General' en que el Bien Común busca:", opciones: ["Solo la satisfacción individual.", "**Las condiciones necesarias para que todas las personas logren su perfección.**", "El beneficio de solo un sector.", "El aumento del poder militar."], correcta: 1 },
    { materia: "Cultura Ciudadana", grado: "7", dificultad: "dificil", pregunta: "¿Qué significa el término '**Apatía Política**'?", opciones: ["Alto interés en política.", "**Falta de interés o indiferencia hacia la política y el voto.**", "Un nuevo partido político.", "El estudio de la política."], correcta: 1 },
    { materia: "Cultura Ciudadana", grado: "7", dificultad: "dificil", pregunta: "La **'Corte Penal Internacional' (CPI)** tiene competencia para juzgar:", opciones: ["Cualquier delito en cualquier país.", "**Genocidio, crímenes de guerra y de lesa humanidad.**", "Solo delitos de tránsito.", "Conflictos entre empresas."], correcta: 1 },
    { materia: "Cultura Ciudadana", grado: "7", dificultad: "dificil", pregunta: "La '**Multiculturalidad**' se diferencia de la '**Interculturalidad**' en que la Interculturalidad promueve:", opciones: ["La separación de culturas.", "**La interacción, el diálogo y el enriquecimiento mutuo entre culturas.**", "La dominación de una cultura sobre otra.", "El desconocimiento de otras culturas."], correcta: 1 },
    { materia: "Cultura Ciudadana", grado: "7", dificultad: "dificil", pregunta: "Un **'Tratado Internacional'** en Colombia debe ser aprobado por:", opciones: ["El Presidente sin más.", "**El Congreso y luego revisado por la Corte Constitucional.**", "Solo la Rama Judicial.", "El Alcalde de la capital."], correcta: 1 },
    { materia: "Cultura Ciudadana", grado: "7", dificultad: "dificil", pregunta: "El concepto de '**Ciudadanía Activa**' implica:", opciones: ["Solo obedecer al gobierno.", "**Participar en la toma de decisiones, fiscalizar y proponer soluciones a problemas públicos.**", "Votar una vez en la vida.", "Ser solo un espectador."], correcta: 1 },
    { materia: "Cultura Ciudadana", grado: "7", dificultad: "dificil", pregunta: "La **'Democracia Deliberativa'** se centra en:", opciones: ["El voto secreto.", "**La calidad del debate y la argumentación pública antes de tomar una decisión.**", "La velocidad de las decisiones.", "El poder militar."], correcta: 1 },
    { materia: "Cultura Ciudadana", grado: "7", dificultad: "dificil", pregunta: "El **'Control Social'** ejercido por la ciudadanía se refiere a:", opciones: ["La policía controlando el orden.", "**La vigilancia ciudadana a la gestión pública y la conducta de los funcionarios.**", "El control de precios.", "La censura de medios."], correcta: 1 },
    { materia: "Cultura Ciudadana", grado: "7", dificultad: "dificil", pregunta: "La **'Acción Popular'** protege los derechos e intereses:", opciones: ["De los niños.", "**De carácter colectivo (ej. ambiente, espacio público).**", "Individuales y políticos.", "De los empresarios."], correcta: 1 },
    { materia: "Cultura Ciudadana", grado: "7", dificultad: "dificil", pregunta: "La **'Teoría de las Tres Generaciones'** de DD.HH. clasifica los derechos económicos, sociales y culturales (ESCs) como:", opciones: ["Primera generación.", "**Segunda generación.**", "Tercera generación.", "Cuarta generación."], correcta: 1 },
    { materia: "Cultura Ciudadana", grado: "7", dificultad: "dificil", pregunta: "¿Qué busca el **'Principio de Subsidiariedad'** en la administración pública?", opciones: ["Centralizar todo el poder.", "**Que las tareas las realicen las instancias inferiores, y la superior solo intervenga si es necesario.**", "Que el Estado no intervenga nunca.", "Eliminar la burocracia."], correcta: 1 },
    { materia: "Cultura Ciudadana", grado: "7", dificultad: "dificil", pregunta: "La '**Legitimidad**' de un gobierno se deriva de:", opciones: ["La fuerza militar.", "**El respeto al Estado de Derecho y el apoyo/consentimiento del pueblo.**", "La riqueza de sus líderes.", "El tamaño del país."], correcta: 1 },
    { materia: "Cultura Ciudadana", grado: "7", dificultad: "dificil", pregunta: "El '**Etnocentrismo**' es la tendencia a:", opciones: ["Respetar otras culturas.", "**Juzgar otras culturas basándose en los propios estándares culturales.**", "Aceptar todas las ideas políticas.", "Solo estudiar la propia historia."], correcta: 1 },
    { materia: "Cultura Ciudadana", grado: "7", dificultad: "dificil", pregunta: "¿Qué implica la **'Rendición de Cuentas'** por parte de los gobernantes?", opciones: ["Solo publicar los gastos.", "**Informar y justificar sus decisiones y uso de recursos a la ciudadanía.**", "Pedir permiso para hacer algo.", "Crear una nueva ley."], correcta: 1 },



    // ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    // MATEMÁTICAS - GRADO 7 - FÁCIL (20 Preguntas)
    // ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    { materia: "Matemáticas", grado: "7", dificultad: "facil", pregunta: "¿Cuánto es $1500 + 750$?", opciones: ["2150", "2250", "2350", "2400"], correcta: 1 },
    { materia: "Matemáticas", grado: "7", dificultad: "facil", pregunta: "¿Cuál es la fracción irreducible de $10/25$?", opciones: ["$1/5$", "$2/5$", "$5/10$", "$1/2$"], correcta: 1 },
    { materia: "Matemáticas", grado: "7", dificultad: "facil", pregunta: "Convierte $0.45$ a fracción.", opciones: ["$45/100$", "$4/5$", "$45/10$", "$4.5/10$"], correcta: 0 },
    { materia: "Matemáticas", grado: "7", dificultad: "facil", pregunta: "¿Cuál es el resultado de $3/4 + 1/4$?", opciones: ["$4/8$", "1", "$3/8$", "$2/4$"], correcta: 1 },
    { materia: "Matemáticas", grado: "7", dificultad: "facil", pregunta: "Si $5x = 30$, ¿cuánto vale $x$?", opciones: ["5", "6", "7", "8"], correcta: 1 },
    { materia: "Matemáticas", grado: "7", dificultad: "facil", pregunta: "¿Qué número completa la serie? $1, 4, 9, 16, \\dots$", opciones: ["20", "22", "25", "36"], correcta: 2 },
    { materia: "Matemáticas", grado: "7", dificultad: "facil", pregunta: "¿Cuál es el perímetro de un rectángulo de $10$ cm de largo y $4$ cm de ancho?", opciones: ["$14$ cm", "$28$ cm", "$40$ cm", "$20$ cm"], correcta: 1 },
    { materia: "Matemáticas", grado: "7", dificultad: "facil", pregunta: "¿Cuál es la raíz cuadrada de $49$?", opciones: ["6", "7", "8", "9"], correcta: 1 },
    { materia: "Matemáticas", grado: "7", dificultad: "facil", pregunta: "El $20\\%$ de $100$ es:", opciones: ["10", "20", "40", "50"], correcta: 1 },
    { materia: "Matemáticas", grado: "7", dificultad: "facil", pregunta: "¿Cuántos lados tiene un pentágono?", opciones: ["4", "5", "6", "8"], correcta: 1 },
    { materia: "Matemáticas", grado: "7", dificultad: "facil", pregunta: "El resultado de $2^3$ es:", opciones: ["5", "6", "8", "16"], correcta: 2 },
    { materia: "Matemáticas", grado: "7", dificultad: "facil", pregunta: "¿Qué tipo de número es $-5$?", opciones: ["Natural", "Entero", "Racional", "Irracional"], correcta: 1 },
    { materia: "Matemáticas", grado: "7", dificultad: "facil", pregunta: "Si $3$ kg de arroz valen $\\$9.000$, ¿cuánto vale $1$ kg?", opciones: ["$\\$2.000$", "$\\$3.000$", "$\\$4.000$", "$\\$2.500$"], correcta: 1 },
    { materia: "Matemáticas", grado: "7", dificultad: "facil", pregunta: "El área de un triángulo con base $6$ y altura $4$ es:", opciones: ["10", "12", "24", "20"], correcta: 1 },
    { materia: "Matemáticas", grado: "7", dificultad: "facil", pregunta: "¿Cuál es el m.c.m. de $3$ y $5$?", opciones: ["1", "8", "15", "30"], correcta: 2 },
    { materia: "Matemáticas", grado: "7", dificultad: "facil", pregunta: "Calcula $1.25 \\times 4$.", opciones: ["5.0", "4.8", "4.25", "5.25"], correcta: 0 },
    { materia: "Matemáticas", grado: "7", dificultad: "facil", pregunta: "¿Cómo se llama el ángulo que mide $180^{\\circ}$?", opciones: ["Recto", "Agudo", "Obtuso", "Llano"], correcta: 3 },
    { materia: "Matemáticas", grado: "7", dificultad: "facil", pregunta: "¿Cuál es la moda de los datos $2, 3, 3, 5, 7$?", opciones: ["2", "3", "5", "7"], correcta: 1 },
    { materia: "Matemáticas", grado: "7", dificultad: "facil", pregunta: "Un número divisible por $2$ y por $3$ es:", opciones: ["10", "15", "18", "25"], correcta: 2 },
    { materia: "Matemáticas", grado: "7", dificultad: "facil", pregunta: "El valor absoluto de $-12$ es:", opciones: ["12", "-12", "0", "24"], correcta: 0 },

    // ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    // MATEMÁTICAS - GRADO 7 - MEDIA (20 Preguntas)
    // ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    { materia: "Matemáticas", grado: "7", dificultad: "media", pregunta: "Resuelve: $(-8) + 5 - (-2)$.", opciones: ["-5", "-11", "15", "-1"], correcta: 3 },
    { materia: "Matemáticas", grado: "7", dificultad: "media", pregunta: "Simplifica la expresión: $3x + 5y - x + 2y$.", opciones: ["$4x + 7y$", "$2x + 7y$", "$4x + 3y$", "$2x + 3y$"], correcta: 1 },
    { materia: "Matemáticas", grado: "7", dificultad: "media", pregunta: "¿Cuál es el resultado de $\\frac{2}{5} \\times \\frac{15}{4}$?", opciones: ["$3/2$", "$1/2$", "$3/4$", "$1/4$"], correcta: 0 },
    { materia: "Matemáticas", grado: "7", dificultad: "media", pregunta: "Si $\\frac{x}{6} = \\frac{5}{3}$, ¿cuánto vale $x$?", opciones: ["10", "5", "15", "18"], correcta: 0 },
    { materia: "Matemáticas", grado: "7", dificultad: "media", pregunta: "El resultado de $(\\frac{1}{2})^3$ es:", opciones: ["$1/6$", "$1/8$", "$3/2$", "$1/4$"], correcta: 1 },
    { materia: "Matemáticas", grado: "7", dificultad: "media", pregunta: "El área de un trapecio con bases $6$ y $10$ y altura $4$ es:", opciones: ["16", "32", "20", "48"], correcta: 1 },
    { materia: "Matemáticas", grado: "7", dificultad: "media", pregunta: "¿Qué coordenada corresponde al punto en el **segundo cuadrante** del plano cartesiano?", opciones: ["$(+, +)$", "$(-, +)$", "$(-, -)$", "$$(+, -)$"], correcta: 1 },
    { materia: "Matemáticas", grado: "7", dificultad: "media", pregunta: "Si una camiseta vale $\\$50.000$ con IVA del $19\\%$. ¿Cuánto se paga de IVA?", opciones: ["$\\$9.500$", "$\\$19.000$", "$\\$5.000$", "$\\$40.500$"], correcta: 0 },
    { materia: "Matemáticas", grado: "7", dificultad: "media", pregunta: "Calcula: $\\sqrt{100} - \\sqrt{25}$.", opciones: ["15", "75", "5", "10"], correcta: 2 },
    { materia: "Matemáticas", grado: "7", dificultad: "media", pregunta: "Si $x + 2 = -7$, ¿cuál es el valor de $x$?", opciones: ["9", "5", "-9", "-5"], correcta: 2 },
    { materia: "Matemáticas", grado: "7", dificultad: "media", pregunta: "La mediana de los números $1, 3, 5, 8, 9$ es:", opciones: ["1", "5", "8", "3"], correcta: 1 },
    { materia: "Matemáticas", grado: "7", dificultad: "media", pregunta: "Un ciclista recorre $20$ km en $1$ hora. ¿Cuántos km recorre en $30$ minutos?", opciones: ["$10 \\text{ km}$", "$5 \\text{ km}$", "$15 \\text{ km}$", "$40 \\text{ km}$"], correcta: 0 },
    { materia: "Matemáticas", grado: "7", dificultad: "media", pregunta: "El cociente de la división de $24$ entre $-6$ es:", opciones: ["4", "-4", "18", "-18"], correcta: 1 },
    { materia: "Matemáticas", grado: "7", dificultad: "media", pregunta: "¿Cuál es el valor de 'a' en $3a - 1 = 11$?", opciones: ["3", "4", "5", "6"], correcta: 1 },
    { materia: "Matemáticas", grado: "7", dificultad: "media", pregunta: "El resultado de $(-3)^2$ es:", opciones: ["-9", "9", "-6", "6"], correcta: 1 },
    { materia: "Matemáticas", grado: "7", dificultad: "media", pregunta: "Si un círculo tiene diámetro de $10$ cm, ¿cuánto mide su radio?", opciones: ["$20 \\text{ cm}$", "$5 \\text{ cm}$", "$10 \\text{ cm}$", "$25 \\text{ cm}$"], correcta: 1 },
    { materia: "Matemáticas", grado: "7", dificultad: "media", pregunta: "Convierte $3/8$ a número decimal.", opciones: ["$0.3$", "$0.375$", "$0.25$", "$0.83$"], correcta: 1 },
    { materia: "Matemáticas", grado: "7", dificultad: "media", pregunta: "Resuelve: $2(x - 3) = 10$.", opciones: ["$x=8$", "$x=5$", "$x=4$", "$x=13$"], correcta: 0 },
    { materia: "Matemáticas", grado: "7", dificultad: "media", pregunta: "¿Qué propiedad de los números enteros indica que $a \\times b = b \\times a$?", opciones: ["Asociativa", "Distributiva", "Conmutativa", "Clausurativa"], correcta: 2 },
    { materia: "Matemáticas", grado: "7", dificultad: "media", pregunta: "Un ángulo de $150^{\\circ}$ es de tipo:", opciones: ["Agudo", "Recto", "Obtuso", "Llano"], correcta: 2 },

    // ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    // MATEMÁTICAS - GRADO 7 - DIFÍCIL (20 Preguntas)
    // ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    { materia: "Matemáticas", grado: "7", dificultad: "dificil", pregunta: "Calcula el resultado de $\\frac{1}{2} + \\frac{1}{3} - \\frac{1}{6}$.", opciones: ["$1/2$", "$2/3$", "$5/6$", "$1/6$"], correcta: 1 },
    { materia: "Matemáticas", grado: "7", dificultad: "dificil", pregunta: "Resuelve la inecuación: $-2x + 4 < 10$.", opciones: ["$x > -3$", "$x < -3$", "$x > 3$", "$x < 3$"], correcta: 0 },
    { materia: "Matemáticas", grado: "7", dificultad: "dificil", pregunta: "¿Cuál es la distancia entre los puntos $(1, 3)$ y $(4, 3)$ en el plano cartesiano?", opciones: ["3", "4", "5", "6"], correcta: 0 },
    { materia: "Matemáticas", grado: "7", dificultad: "dificil", pregunta: "Si $5$ obreros tardan $6$ horas en pintar una casa, ¿cuánto tardan $10$ obreros (**proporcionalidad inversa**)?", opciones: ["12 horas", "3 horas", "4 horas", "6 horas"], correcta: 1 },
    { materia: "Matemáticas", grado: "7", dificultad: "dificil", pregunta: "¿Qué porcentaje de $160$ es $40$?", opciones: ["$20\\%$", "$25\\%$", "$40\\%$", "$15\\%$"], correcta: 1 },
    { materia: "Matemáticas", grado: "7", dificultad: "dificil", pregunta: "Si el área de un círculo es $9\\pi \\text{ cm}^2$, ¿cuánto mide su radio?", opciones: ["$3 \\text{ cm}$", "$9 \\text{ cm}$", "$18 \\text{ cm}$", "$4.5 \\text{ cm}$"], correcta: 0 },
    { materia: "Matemáticas", grado: "7", dificultad: "dificil", pregunta: "El m.c.d. de $48$ y $72$ es:", opciones: ["8", "12", "24", "16"], correcta: 2 },
    { materia: "Matemáticas", grado: "7", dificultad: "dificil", pregunta: "Calcula la media ponderada de: Notas $4, 3, 5$ con pesos $20\\%, 30\\%, 50\\%$ respectivamente.", opciones: ["$4.0$", "$4.1$", "$4.2$", "$4.3$"], correcta: 1 },
    { materia: "Matemáticas", grado: "7", dificultad: "dificil", pregunta: "¿Cuál es el valor de $x$ en $5(x - 2) - 3x = 8$?", opciones: ["$x=9$", "$x=5$", "$x=10$", "$x=4$"], correcta: 1 },
    { materia: "Matemáticas", grado: "7", dificultad: "dificil", pregunta: "Si la probabilidad de que llueva es $0.65$, ¿cuál es la probabilidad de que *no* llueva?", opciones: ["$0.35$", "$0.65$", "$0.5$", "$0.45$"], correcta: 0 },
    { materia: "Matemáticas", grado: "7", dificultad: "dificil", pregunta: "En un triángulo rectángulo, si los catetos miden $6$ y $8$, la hipotenusa mide (**Teorema de Pitágoras**):", opciones: ["10", "12", "14", "16"], correcta: 0 },
    { materia: "Matemáticas", grado: "7", dificultad: "dificil", pregunta: "Resuelve: $\\frac{x}{3} - 1 = \\frac{x}{6} + 2$.", opciones: ["$x=18$", "$x=9$", "$x=6$", "$x=24$"], correcta: 1 },
    { materia: "Matemáticas", grado: "7", dificultad: "dificil", pregunta: "¿Cuántas diagonales tiene un hexágono?", opciones: ["6", "7", "8", "9"], correcta: 3 },
    { materia: "Matemáticas", grado: "7", dificultad: "dificil", pregunta: "La expresión $\\sqrt[3]{8} + 4^0$ es igual a:", opciones: ["3", "4", "5", "9"], correcta: 0 },
    { materia: "Matemáticas", grado: "7", dificultad: "dificil", pregunta: "Si $A = \\{1, 2, 3\\}$ y $B = \\{3, 4, 5\\}$, ¿cuál es $A \\cap B$ (**intersección**)?", opciones: ["$\{1, 2, 3, 4, 5\}$", "$\{3\}$", "$\{1, 2, 4, 5\}$", "$\{ \\}$"], correcta: 1 },
    { materia: "Matemáticas", grado: "7", dificultad: "dificil", pregunta: "¿Cuál de estos números es **irracional**?", opciones: ["$\sqrt{9}$", "$1/3$", "$0.5$", "$\pi$"], correcta: 3 },
    { materia: "Matemáticas", grado: "7", dificultad: "dificil", pregunta: "La suma de los ángulos internos de un cuadrilátero es:", opciones: ["$180^{\\circ}$", "$360^{\\circ}$", "$90^{\\circ}$", "$540^{\\circ}$"], correcta: 1 },
    { materia: "Matemáticas", grado: "7", dificultad: "dificil", pregunta: "Convierte el número periódico $0.\\overline{3}$ a fracción.", opciones: ["$3/10$", "$1/3$", "$3/99$", "$3/100$"], correcta: 1 },
    { materia: "Matemáticas", grado: "7", dificultad: "dificil", pregunta: "Si el precio de un artículo subió un $10\\%$ y luego bajó un $10\\%$, ¿cuál es el cambio neto?", opciones: ["Aumentó $1\\%$", "Disminuyó $1\\%$", "No cambió", "Disminuyó $0.1\\%$"], correcta: 1 },
    { materia: "Matemáticas", grado: "7", dificultad: "dificil", pregunta: "La expresión $3(x - 5) + 2x$ simplificada es:", opciones: ["$5x - 5$", "$5x - 15$", "$5x - 10$", "$3x - 15$"], correcta: 1 },

    // ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    // LENGUA CASTELLANA - GRADO 7 - FÁCIL (20 Preguntas)
    // ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    { materia: "Lengua Castellana", grado: "7", dificultad: "facil", pregunta: "¿Cuál es el elemento de la comunicación que recibe el mensaje?", opciones: ["Emisor", "Código", "Receptor", "Canal"], correcta: 2 },
    { materia: "Lengua Castellana", grado: "7", dificultad: "facil", pregunta: "Los textos que buscan informar sobre un tema de forma objetiva son:", opciones: ["Narrativos", "Líricos", "Expositivos", "Argumentativos"], correcta: 2 },
    { materia: "Lengua Castellana", grado: "7", dificultad: "facil", pregunta: "¿Qué figura literaria es '*tus ojos son dos luceros*' (reemplaza un término por otro)?", opciones: ["Símil", "Metáfora", "Hipérbole", "Personificación"], correcta: 1 },
    { materia: "Lengua Castellana", grado: "7", dificultad: "facil", pregunta: "La función del lenguaje que se centra en el propio mensaje (belleza, forma) es:", opciones: ["Referencial", "Fática", "Poética", "Emotiva"], correcta: 2 },
    { materia: "Lengua Castellana", grado: "7", dificultad: "facil", pregunta: "¿Cuál de estas palabras es un **adjetivo calificativo**?", opciones: ["rápidamente", "grande", "allí", "escribir"], correcta: 1 },
    { materia: "Lengua Castellana", grado: "7", dificultad: "facil", pregunta: "El género literario que narra hazañas de héroes y dioses es el:", opciones: ["Lírico", "Dramático", "Épico o Narrativo", "Didáctico"], correcta: 2 },
    { materia: "Lengua Castellana", grado: "7", dificultad: "facil", pregunta: "¿Qué tipo de palabra es '**con**'?", opciones: ["Sustantivo", "Verbo", "Preposición", "Adverbio"], correcta: 2 },
    { materia: "Lengua Castellana", grado: "7", dificultad: "facil", pregunta: "El signo de puntuación que indica la interrupción de una idea o enumeración incompleta es:", opciones: ["Coma", "Punto", "Puntos suspensivos", "Paréntesis"], correcta: 2 },
    { materia: "Lengua Castellana", grado: "7", dificultad: "facil", pregunta: "El 'lexema' o raíz de la palabra 'panadero' es:", opciones: ["panadero", "panad", "pan", "ero"], correcta: 2 },
    { materia: "Lengua Castellana", grado: "7", dificultad: "facil", pregunta: "La conjugación 'yo *iré*' está en tiempo:", opciones: ["Presente", "Pasado", "Futuro", "Condicional"], correcta: 2 },
    { materia: "Lengua Castellana", grado: "7", dificultad: "facil", pregunta: "¿Cuál de estas palabras es aguda y lleva tilde?", opciones: ["cántaro", "fácil", "pared", "balón"], correcta: 3 },
    { materia: "Lengua Castellana", grado: "7", dificultad: "facil", pregunta: "El sinónimo de 'contento' es:", opciones: ["triste", "alegre", "enojado", "aburrido"], correcta: 1 },
    { materia: "Lengua Castellana", grado: "7", dificultad: "facil", pregunta: "¿Cuál de los siguientes es un **medio de comunicación masiva**?", opciones: ["Una carta personal", "Un mensaje de texto", "Un libro de historia", "La televisión"], correcta: 3 },
    { materia: "Lengua Castellana", grado: "7", dificultad: "facil", pregunta: "El conjunto de reglas que rigen la correcta escritura de una lengua es la:", opciones: ["Sintaxis", "Morfología", "Ortografía", "Semántica"], correcta: 2 },
    { materia: "Lengua Castellana", grado: "7", dificultad: "facil", pregunta: "La palabra 'coche' y 'carro' son:", opciones: ["Antónimos", "Homónimos", "Sinónimos", "Parónimos"], correcta: 2 },
    { materia: "Lengua Castellana", grado: "7", dificultad: "facil", pregunta: "¿Cómo se llama el texto que cuenta la vida de una persona escrita por ella misma?", opciones: ["Biografía", "Novela", "Autobiografía", "Cuento"], correcta: 2 },
    { materia: "Lengua Castellana", grado: "7", dificultad: "facil", pregunta: "El nexo que une dos oraciones simples para formar una compuesta es una:", opciones: ["Preposición", "Conjunción", "Interjección", "Adjetivo"], correcta: 1 },
    { materia: "Lengua Castellana", grado: "7", dificultad: "facil", pregunta: "En 'El niño *es* inteligente', el verbo *es* es:", opciones: ["Transitivo", "Intransitivo", "Copulativo", "Auxiliar"], correcta: 2 },
    { materia: "Lengua Castellana", grado: "7", dificultad: "facil", pregunta: "La palabra 'había' lleva 'h' y 'b'. ¿A qué verbo pertenece?", opciones: ["Haber", "Abrir", "Hablar", "Escribir"], correcta: 0 },
    { materia: "Lengua Castellana", grado: "7", dificultad: "facil", pregunta: "¿Cuál es la función del **diálogo** en un texto narrativo o dramático?", opciones: ["Describir el ambiente", "Mostrar el pensamiento del narrador", "Reproducir la conversación entre personajes", "Dar la opinión del autor"], correcta: 2 },

    // ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    // LENGUA CASTELLANA - GRADO 7 - MEDIA (20 Preguntas)
    // ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    { materia: "Lengua Castellana", grado: "7", dificultad: "media", pregunta: "¿Cuál de las siguientes es una oración compuesta *subordinada*?", opciones: ["Leo y escribo.", "Vino, pero se fue rápido.", "Te llamaré *cuando* llegue.", "O estudias o trabajas."], correcta: 2 },
    { materia: "Lengua Castellana", grado: "7", dificultad: "media", pregunta: "La figura literaria que **exagera** una cualidad o acción es la:", opciones: ["Metáfora", "Símil", "Hipérbole", "Personificación"], correcta: 2 },
    { materia: "Lengua Castellana", grado: "7", dificultad: "media", pregunta: "¿Qué función del lenguaje se centra en el **receptor** para influir en su conducta (órdenes, ruegos)?", opciones: ["Apelativa o Conativa", "Referencial", "Expresiva", "Metalingüística"], correcta: 0 },
    { materia: "Lengua Castellana", grado: "7", dificultad: "media", pregunta: "El género literario al que pertenece la obra *Romeo y Julieta* es:", opciones: ["Épico", "Lírico", "Narrativo", "Dramático"], correcta: 3 },
    { materia: "Lengua Castellana", grado: "7", dificultad: "media", pregunta: "En la oración 'Compró un libro *interesante*', la palabra 'interesante' es:", opciones: ["Sustantivo", "Verbo", "Adjetivo", "Adverbio"], correcta: 2 },
    { materia: "Lengua Castellana", grado: "7", dificultad: "media", pregunta: "La palabra 'policía' es grave, pero lleva tilde porque:", opciones: ["Es una excepción", "Termina en vocal", "Contiene un **hiato (í-a)**", "Es esdrújula"], correcta: 2 },
    { materia: "Lengua Castellana", grado: "7", dificultad: "media", pregunta: "¿Qué significa el prefijo '**tele-**'?", opciones: ["Grande", "Pequeño", "Lejos", "Cerca"], correcta: 2 },
    { materia: "Lengua Castellana", grado: "7", dificultad: "media", pregunta: "El modo verbal que expresa duda, deseo o posibilidad (Ejemplo: *Quizás estudie*) es el:", opciones: ["Indicativo", "Subjuntivo", "Imperativo", "Condicional"], correcta: 1 },
    { materia: "Lengua Castellana", grado: "7", dificultad: "media", pregunta: "¿Cuál es el **complemento circunstancial de lugar** en 'Fuimos al cine *con mi hermana* ayer'?", opciones: ["Fuimos", "al cine", "con mi hermana", "ayer"], correcta: 1 },
    { materia: "Lengua Castellana", grado: "7", dificultad: "media", pregunta: "La diferencia entre *ha* (del verbo haber) y *a* (preposición) se basa en:", opciones: ["El sonido", "La gramática", "La ortografía (uso de 'h')", "La pronunciación"], correcta: 2 },
    { materia: "Lengua Castellana", grado: "7", dificultad: "media", pregunta: "Una **'crónica'** es un tipo de texto periodístico que se caracteriza por:", opciones: ["Ser muy breve", "Narrar hechos en **orden cronológico**", "Ser siempre de opinión", "Estar en verso"], correcta: 1 },
    { materia: "Lengua Castellana", grado: "7", dificultad: "media", pregunta: "¿Cuál de las siguientes palabras es un **diptongo**?", opciones: ["país", "cielo", "poeta", "maíz"], correcta: 1 },
    { materia: "Lengua Castellana", grado: "7", dificultad: "media", pregunta: "La **'anáfora'** es una figura retórica que consiste en la repetición de:", opciones: ["Una idea", "Una palabra o grupo de palabras **al inicio de versos/frases**", "Un sonido", "Un personaje"], correcta: 1 },
    { materia: "Lengua Castellana", grado: "7", dificultad: "media", pregunta: "El verbo 'ver' en **pretérito perfecto simple** (Ejemplo: *Yo __ la película*):", opciones: ["veo", "vi", "visto", "veía"], correcta: 1 },
    { materia: "Lengua Castellana", grado: "7", dificultad: "media", pregunta: "Una oración con **sujeto *múltiple*** es:", opciones: ["Ella baila bien.", "Yo voy.", "María y Juan leen.", "La casa es grande."], correcta: 2 },
    { materia: "Lengua Castellana", grado: "7", dificultad: "media", pregunta: "¿Qué diferencia hay entre '**por qué**' y '**porque**'?", opciones: ["Uno es conjunción y el otro es preposición.", "Uno es para pregunta y el otro es para respuesta/causa.", "No hay diferencia.", "Solo cambia la tilde."], correcta: 1 },
    { materia: "Lengua Castellana", grado: "7", dificultad: "media", pregunta: "El 'teatro' o género dramático se caracteriza por el uso de:", opciones: ["Narrador omnisciente", "**Diálogos y acotaciones**", "Versos endecasílabos", "Descripciones detalladas"], correcta: 1 },
    { materia: "Lengua Castellana", grado: "7", dificultad: "media", pregunta: "¿Qué parte de la palabra 'librito' indica su diminutivo?", opciones: ["libr", "**ito**", "l", "librito"], correcta: 1 },
    { materia: "Lengua Castellana", grado: "7", dificultad: "media", pregunta: "La **'coherencia'** en un texto se refiere a:", opciones: ["La ausencia de errores ortográficos.", "La **conexión lógica de las ideas y el sentido global**.", "El uso de muchas comas.", "La longitud del párrafo."], correcta: 1 },
    { materia: "Lengua Castellana", grado: "7", dificultad: "media", pregunta: "Un 'adverbio de **duda**' es:", opciones: ["siempre", "jamás", "**quizás**", "bien"], correcta: 2 },

    // ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    // LENGUA CASTELLANA - GRADO 7 - DIFÍCIL (20 Preguntas)
    // ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    { materia: "Lengua Castellana", grado: "7", dificultad: "dificil", pregunta: "¿Cómo se llama la oración en la que el sujeto realiza la acción y es el agente de la misma?", opciones: ["Voz Pasiva", "Voz Reflexiva", "**Voz Activa**", "Voz Impersonal"], correcta: 2 },
    { materia: "Lengua Castellana", grado: "7", dificultad: "dificil", pregunta: "La figura literaria '**un silencio *atronador***' (unión de términos contradictorios) es:", opciones: ["Metáfora", "Ironía", "**Oxímoron**", "Paradoja"], correcta: 2 },
    { materia: "Lengua Castellana", grado: "7", dificultad: "dificil", pregunta: "En la oración 'La casa *fue vendida* por la inmobiliaria', el verbo está en:", opciones: ["Voz Activa", "**Voz Pasiva**", "Voz Reflexiva", "Voz Impersonal"], correcta: 1 },
    { materia: "Lengua Castellana", grado: "7", dificultad: "dificil", pregunta: "La '**ironía**' es una figura retórica que consiste en:", opciones: ["Exagerar un hecho.", "**Decir lo contrario de lo que se piensa**.", "Hacer preguntas retóricas.", "Atribuir vida a objetos inanimados."], correcta: 1 },
    { materia: "Lengua Castellana", grado: "7", dificultad: "dificil", pregunta: "¿Cuál de estos nexos introduce una subordinada **adverbial causal**?", opciones: ["aunque", "si", "**porque**", "entonces"], correcta: 2 },
    { materia: "Lengua Castellana", grado: "7", dificultad: "dificil", pregunta: "Un '**neologismo**' es una palabra:", opciones: ["Que ya no se usa.", "**Nueva en la lengua**.", "Mal escrita.", "Que tiene doble significado."], correcta: 1 },
    { materia: "Lengua Castellana", grado: "7", dificultad: "dificil", pregunta: "La '**polisemia**' se refiere a:", opciones: ["Palabras que suenan igual.", "**Palabras con varios significados**.", "Palabras que se escriben igual.", "Palabras antónimas."], correcta: 1 },
    { materia: "Lengua Castellana", grado: "7", dificultad: "dificil", pregunta: "¿Qué tipo de oración es 'Llueve mucho' (no tiene sujeto gramatical)?", opciones: ["Personal", "Unimembre", "**Impersonal**", "Compuesta"], correcta: 2 },
    { materia: "Lengua Castellana", grado: "7", dificultad: "dificil", pregunta: "En 'El libro que *me regalaste* es bueno', la proposición subordinada es:", opciones: ["Sustantiva", "Adverbial", "**Adjetiva (o de relativo)**", "Coordinada"], correcta: 2 },
    { materia: "Lengua Castellana", grado: "7", dificultad: "dificil", pregunta: "El término '**verosímil**' en literatura significa:", opciones: ["Que es verdadero.", "**Que parece real o creíble**.", "Que tiene muchos versos.", "Que es muy largo."], correcta: 1 },
    { materia: "Lengua Castellana", grado: "7", dificultad: "dificil", pregunta: "¿Cómo se denomina al signo (;) que separa elementos complejos en una enumeración?", opciones: ["Coma", "Punto y seguido", "**Punto y coma**", "Dos puntos"], correcta: 2 },
    { materia: "Lengua Castellana", grado: "7", dificultad: "dificil", pregunta: "La conjugación '**hubiera amado**' pertenece al tiempo:", opciones: ["Condicional simple", "Pretérito perfecto simple", "**Pretérito pluscuamperfecto de subjuntivo**", "Futuro simple"], correcta: 2 },
    { materia: "Lengua Castellana", grado: "7", dificultad: "dificil", pregunta: "El '**monólogo**' en el teatro es la forma de expresión donde un personaje:", opciones: ["Dialoga con otro.", "**Habla a un público imaginario o a sí mismo**.", "Canta una canción.", "Describe la escena."], correcta: 1 },
    { materia: "Lengua Castellana", grado: "7", dificultad: "dificil", pregunta: "¿Qué es un '**gerundio**'?", opciones: ["La terminación del infinitivo.", "La forma verbal que termina en **-ndo** y funciona como adverbio.", "Un tipo de sustantivo.", "Un tiempo futuro."], correcta: 1 },
    { materia: "Lengua Castellana", grado: "7", dificultad: "dificil", pregunta: "La función **Metalingüística** del lenguaje se centra en:", opciones: ["El contexto.", "Las emociones.", "**El código (el idioma, la gramática)**.", "El canal."], correcta: 2 },
    { materia: "Lengua Castellana", grado: "7", dificultad: "dificil", pregunta: "¿Cuál es el **sujeto *paciente*** en la voz pasiva de 'El carro fue arreglado por el mecánico'?", opciones: ["**El carro**", "fue arreglado", "por el mecánico", "el mecánico"], correcta: 0 },
    { materia: "Lengua Castellana", grado: "7", dificultad: "dificil", pregunta: "Una '**paradoja**' es una figura que expresa:", opciones: ["Una verdad obvia.", "**Una contradicción aparente que encierra una verdad profunda**.", "Un refrán.", "Una descripción detallada."], correcta: 1 },
    { materia: "Lengua Castellana", grado: "7", dificultad: "dificil", pregunta: "La palabra '**huso**' (instrumento para hilar) es homófona de:", opciones: ["**uso (del verbo usar)**", "huso", "oso", "luso"], correcta: 0 },
    { materia: "Lengua Castellana", grado: "7", dificultad: "dificil", pregunta: "La '**cohesión**' textual se logra mediante el uso de:", opciones: ["Mayúsculas", "Diálogos", "**Conectores y pronombres (referencia interna)**", "Párrafos muy largos"], correcta: 2 },
    { materia: "Lengua Castellana", grado: "7", dificultad: "dificil", pregunta: "Los '**versos de arte mayor**' son aquellos que tienen:", opciones: ["Menos de $8$ sílabas.", "Exactamente $8$ sílabas.", "**Más de $8$ sílabas**.", "Sílaba libre."], correcta: 2 },

    // ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    // INGLÉS A2 - GRADO 7 - FÁCIL (20 Preguntas)
    // ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    { materia: "Inglés A2", grado: "7", dificultad: "facil", pregunta: "Complete: 'She is ___ (más alta) than her brother.'", opciones: ["tall", "**taller**", "tallest", "most tall"], correcta: 1 },
    { materia: "Inglés A2", grado: "7", dificultad: "facil", pregunta: "The **Past Simple** of 'to see' is:", opciones: ["**saw**", "seed", "seen", "seeing"], correcta: 0 },
    { materia: "Inglés A2", grado: "7", dificultad: "facil", pregunta: "Which preposition means '**encima de**' (touching the surface)?", opciones: ["under", "in", "over", "**on**"], correcta: 3 },
    { materia: "Inglés A2", grado: "7", dificultad: "facil", pregunta: "The comparative of '**good**' is:", opciones: ["gooder", "best", "**better**", "more good"], correcta: 2 },
    { materia: "Inglés A2", grado: "7", dificultad: "facil", pregunta: "Complete the sentence: 'I ___ (no puedo) swim.'", opciones: ["not can", "**can't**", "don't can", "can not to"], correcta: 1 },
    { materia: "Inglés A2", grado: "7", dificultad: "facil", pregunta: "The superlative of 'interesting' is:", opciones: ["interestinger", "**most interesting**", "more interesting", "the interestingest"], correcta: 1 },
    { materia: "Inglés A2", grado: "7", dificultad: "facil", pregunta: "Which word means '**ayer**'?", opciones: ["tomorrow", "today", "now", "**yesterday**"], correcta: 3 },
    { materia: "Inglés A2", grado: "7", dificultad: "facil", pregunta: "Choose the correct modal verb for *permission*: '___ I go to the bathroom?'", opciones: ["Must", "Should", "**May**", "Will"], correcta: 2 },
    { materia: "Inglés A2", grado: "7", dificultad: "facil", pregunta: "Complete: 'There are ___ (**muchos**) people here.'", opciones: ["much", "**a lot of**", "little", "any"], correcta: 1 },
    { materia: "Inglés A2", grado: "7", dificultad: "facil", pregunta: "What is the correct structure for the **Present Continuous**?", opciones: ["Subject + Main Verb + -ing", "**Subject + Be + Main Verb + -ing**", "Subject + Do + Main Verb", "Subject + Have + Past Participle"], correcta: 1 },
    { materia: "Inglés A2", grado: "7", dificultad: "facil", pregunta: "Translate 'Yo estaba corriendo' (**Past Continuous**):", opciones: ["I run", "I was run", "**I was running**", "I ran"], correcta: 2 },
    { materia: "Inglés A2", grado: "7", dificultad: "facil", pregunta: "The question for 'She lives *in London*' is:", opciones: ["When does she live?", "**Where does she live?**", "Why does she live?", "How does she live?"], correcta: 1 },
    { materia: "Inglés A2", grado: "7", dificultad: "facil", pregunta: "The opposite of 'early' is:", opciones: ["soon", "**late**", "fast", "slow"], correcta: 1 },
    { materia: "Inglés A2", grado: "7", dificultad: "facil", pregunta: "Which word is a connector of ***sequence***?", opciones: ["because", "although", "**finally**", "but"], correcta: 2 },
    { materia: "Inglés A2", grado: "7", dificultad: "facil", pregunta: "Complete: 'I have ___ (**algunos**) money.'", opciones: ["a", "many", "**some**", "any"], correcta: 2 },
    { materia: "Inglés A2", grado: "7", dificultad: "facil", pregunta: "The phrase '**look up**' (phrasal verb) means:", opciones: ["mirar abajo", "**buscar información (en un diccionario)**", "levantarse", "mirar al techo"], correcta: 1 },
    { materia: "Inglés A2", grado: "7", dificultad: "facil", pregunta: "The difference between 'say' and 'tell' is often that 'tell' needs a/an:", opciones: ["**object**", "preposition", "adverb", "adjective"], correcta: 0 },
    { materia: "Inglés A2", grado: "7", dificultad: "facil", pregunta: "The number 100 is: ", opciones: ["ten", "**hundred**", "thousand", "million"], correcta: 1 },
    { materia: "Inglés A2", grado: "7", dificultad: "facil", pregunta: "Choose the correct possessive pronoun: 'That book is ___ (**mío**).'", opciones: ["my", "**mine**", "me", "I"], correcta: 1 },
    { materia: "Inglés A2", grado: "7", dificultad: "facil", pregunta: "Translate 'Nosotros queremos comer' (want + infinitive):", opciones: ["We want eat", "**We want to eat**", "We want eating", "We wanting eat"], correcta: 1 },

    // ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    // INGLÉS A2 - GRADO 7 - MEDIA (20 Preguntas)
    // ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    { materia: "Inglés A2", grado: "7", dificultad: "media", pregunta: "Complete with **Past Continuous**: 'While I ___ (**estaba durmiendo**), the phone rang.'", opciones: ["sleep", "slept", "**was sleeping**", "am sleeping"], correcta: 2 },
    { materia: "Inglés A2", grado: "7", dificultad: "media", pregunta: "What is the difference in use between '**will**' and '**going to**' for the future?", opciones: ["No difference.", "'Will' is for plans; 'going to' is for spontaneous decisions.", "**'Will' is for spontaneous decisions; 'going to' is for pre-planned actions.**", "'Going to' is only for questions."], correcta: 2 },
    { materia: "Inglés A2", grado: "7", dificultad: "media", pregunta: "Which quantifiers are generally used for ***uncountable*** nouns?", opciones: ["many, few", "**much, little**", "a lot of, many", "some, any"], correcta: 1 },
    { materia: "Inglés A2", grado: "7", dificultad: "media", pregunta: "The verb 'to have' in the **Present Perfect** form (affirmative, 3rd person singular) is:", opciones: ["have had", "**has had**", "had had", "have having"], correcta: 1 },
    { materia: "Inglés A2", grado: "7", dificultad: "media", pregunta: "Choose the correct phrase for '**media hora**' (time):", opciones: ["**half an hour**", "a half hour", "half hour", "one half hour"], correcta: 0 },
    { materia: "Inglés A2", grado: "7", dificultad: "media", pregunta: "Form the **Zero Conditional**: 'If you heat water, it ___.'", opciones: ["boil", "will boil", "**boils**", "is boiling"], correcta: 2 },
    { materia: "Inglés A2", grado: "7", dificultad: "media", pregunta: "Which **relative pronoun** is used to talk about ***possession***?", opciones: ["who", "which", "**whose**", "where"], correcta: 2 },
    { materia: "Inglés A2", grado: "7", dificultad: "media", pregunta: "Complete: 'I have never ___ (**visto**) a ghost.' (Present Perfect)", opciones: ["saw", "see", "**seen**", "seeing"], correcta: 2 },
    { materia: "Inglés A2", grado: "7", dificultad: "media", pregunta: "The phrase '**put up with**' (phrasal verb) means:", opciones: ["**tolerar**", "levantar", "dejar", "poner"], correcta: 0 },
    { materia: "Inglés A2", grado: "7", dificultad: "media", pregunta: "In **Reported Speech**, the statement 'I am happy' changes to 'He said that he ___ happy.'", opciones: ["is", "**was**", "has been", "will be"], correcta: 1 },
    { materia: "Inglés A2", grado: "7", dificultad: "media", pregunta: "Complete: 'It is important ___ (**comer**) healthy food.'", opciones: ["eat", "**to eat**", "eating", "eats"], correcta: 1 },
    { materia: "Inglés A2", grado: "7", dificultad: "media", pregunta: "The **modal verb 'must'** expresses:", opciones: ["suggestion", "possibility", "**strong obligation/necessity**", "future plan"], correcta: 2 },
    { materia: "Inglés A2", grado: "7", dificultad: "media", pregunta: "Translate '**Aunque** estaba lloviendo' (connector):", opciones: ["Because it was raining", "In spite of the rain", "**Although it was raining**", "So it was raining"], correcta: 2 },
    { materia: "Inglés A2", grado: "7", dificultad: "media", pregunta: "Which verb tense is used to describe an action that happened ***before*** another action in the past?", opciones: ["Past Simple", "Present Perfect", "**Past Perfect**", "Future Simple"], correcta: 2 },
    { materia: "Inglés A2", grado: "7", dificultad: "media", pregunta: "The adjective '**exhausted**' means:", opciones: ["triste", "**muy cansado**", "enojado", "emocionado"], correcta: 1 },
    { materia: "Inglés A2", grado: "7", dificultad: "media", pregunta: "Complete the **Passive Voice (Present Simple)**: 'The letters ___ (are delivered) every day.'", opciones: ["deliver", "is delivered", "**are delivered**", "delivered"], correcta: 2 },
    { materia: "Inglés A2", grado: "7", dificultad: "media", pregunta: "The difference between '**few**' and '**a few**' with countable nouns is:", opciones: ["**'Few' means a small number (negative); 'a few' means some (positive).**", "No difference.", "'Few' is formal; 'a few' is informal.", "'A few' is only for questions."], correcta: 0 },
    { materia: "Inglés A2", grado: "7", dificultad: "media", pregunta: "What is '**quarter past eleven**'?", opciones: ["11:00", "**11:15**", "11:30", "11:45"], correcta: 1 },
    { materia: "Inglés A2", grado: "7", dificultad: "media", pregunta: "The verb 'to be used to' means:", opciones: ["**soler hacer algo (hábito)**", "estar en uso", "ser útil", "acostumbrarse a algo"], correcta: 0 },
    { materia: "Inglés A2", grado: "7", dificultad: "media", pregunta: "Complete: 'I wish I ___ (**fui**) taller.' (**Wish for the present**)", opciones: ["am", "**were**", "had been", "will be"], correcta: 1 },

    // ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    // INGLÉS A2 - GRADO 7 - DIFÍCIL (20 Preguntas)
    // ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    { materia: "Inglés A2", grado: "7", dificultad: "dificil", pregunta: "Form the **Second Conditional (hypothetical)**: 'If I had money, I ___ travel the world.'", opciones: ["will", "**would**", "had", "can"], correcta: 1 },
    { materia: "Inglés A2", grado: "7", dificultad: "dificil", pregunta: "Which modal verb expresses **low possibility**?", opciones: ["must", "can", "**might**", "should"], correcta: 2 },
    { materia: "Inglés A2", grado: "7", dificultad: "dificil", pregunta: "The sentence 'I have been studying for three hours' is in:", opciones: ["Present Perfect Simple", "**Present Perfect Continuous**", "Past Continuous", "Future Perfect"], correcta: 1 },
    { materia: "Inglés A2", grado: "7", dificultad: "dificil", pregunta: "Change to **Passive Voice (Past Simple)**: 'The police arrested the thief.'", opciones: ["The thief arrested the police.", "**The thief was arrested by the police.**", "The thief is arrested by the police.", "The police was arrested by the thief."], correcta: 1 },
    { materia: "Inglés A2", grado: "7", dificultad: "dificil", pregunta: "Which option is an appropriate **question tag** for: 'He is studying, ___?'", opciones: ["is he", "**isn't he**", "does he", "doesn't he"], correcta: 1 },
    { materia: "Inglés A2", grado: "7", dificultad: "dificil", pregunta: "The phrasal verb '**call off**' means:", opciones: ["llamar a alguien", "**cancelar**", "gritar", "desconectar"], correcta: 1 },
    { materia: "Inglés A2", grado: "7", dificultad: "dificil", pregunta: "Complete the sentence using the **Gerund**: 'I enjoy ___ (**cantar**) in the shower.'", opciones: ["to sing", "sing", "**singing**", "sang"], correcta: 2 },
    { materia: "Inglés A2", grado: "7", dificultad: "dificil", pregunta: "In **Reported Speech**, 'Where do you live?' changes to 'He asked me where I ___.'", opciones: ["live", "**lived**", "do live", "am living"], correcta: 1 },
    { materia: "Inglés A2", grado: "7", dificultad: "dificil", pregunta: "The word '**regardless**' is used to express:", opciones: ["reason", "contrast", "condition", "**disregard/without taking into account**"], correcta: 3 },
    { materia: "Inglés A2", grado: "7", dificultad: "dificil", pregunta: "The difference between 'must' and 'have to' is that 'must' often implies:", opciones: ["external obligation", "**internal obligation/speaker's strong feeling**", "permission", "low possibility"], correcta: 1 },
    { materia: "Inglés A2", grado: "7", dificultad: "dificil", pregunta: "Complete the sentence with an **Adverb of Frequency**: 'He is late. He ___ arrives on time.'", opciones: ["always", "often", "**never**", "sometimes"], correcta: 2 },
    { materia: "Inglés A2", grado: "7", dificultad: "dificil", pregunta: "The pronunciation of the '-ed' ending in '**decided**' is:", opciones: ["/d/", "/t/", "***/id/***", "it is silent"], correcta: 2 },
    { materia: "Inglés A2", grado: "7", dificultad: "dificil", pregunta: "The meaning of the idiom '**cost an arm and a leg**' is:", opciones: ["ser muy barato", "**ser muy caro**", "estar roto", "ser fácil"], correcta: 1 },
    { materia: "Inglés A2", grado: "7", dificultad: "dificil", pregunta: "The relative pronoun '**where**' is used for:", opciones: ["people", "objects", "**places**", "time"], correcta: 2 },
    { materia: "Inglés A2", grado: "7", dificultad: "dificil", pregunta: "Complete the phrase: 'The concert was canceled ___ of the rain.'", opciones: ["because", "due", "**because of**", "so"], correcta: 2 },
    { materia: "Inglés A2", grado: "7", dificultad: "dificil", pregunta: "Which of these words is a synonym for '**essential**'?", opciones: ["unimportant", "optional", "**necessary**", "rare"], correcta: 2 },
    { materia: "Inglés A2", grado: "7", dificultad: "dificil", pregunta: "The structure 'Subject + **Should + Have + Past Participle**' expresses:", opciones: ["a past habit", "**a regret/criticism about a past action**", "a future possibility", "a zero conditional"], correcta: 1 },
    { materia: "Inglés A2", grado: "7", dificultad: "dificil", pregunta: "Translate 'Yo **habría comido**' (**Conditional Perfect**):", opciones: ["I would eat", "I will eat", "**I would have eaten**", "I had eaten"], correcta: 2 },
    { materia: "Inglés A2", grado: "7", dificultad: "dificil", pregunta: "The word '**whom**' is a formal substitute for the relative pronoun 'who' when it functions as the:", opciones: ["subject", "**object**", "verb", "adjective"], correcta: 1 },
    { materia: "Inglés A2", grado: "7", dificultad: "dificil", pregunta: "Complete the question: '___ have you been waiting?' (**duration**)", opciones: ["How much", "How many", "**How long**", "How far"], correcta: 2 },

    // ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    // CULTURA CIUDADANA - GRADO 7 - FÁCIL (20 Preguntas)
    // ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    { materia: "Cultura Ciudadana", grado: "7", dificultad: "facil", pregunta: "¿Qué significa el valor de la ***tolerancia***?", opciones: ["Estar de acuerdo con todo.", "**Aceptar y respetar las diferencias de los demás.**", "Ignorar las diferencias.", "Imponer mi opinión."], correcta: 1 },
    { materia: "Cultura Ciudadana", grado: "7", dificultad: "facil", pregunta: "El respeto a la ***diversidad*** en un país implica valorar:", opciones: ["Solo la raza mayoritaria.", "**Las diferentes culturas, etnias y formas de pensar.**", "Solo la economía.", "La uniformidad."], correcta: 1 },
    { materia: "Cultura Ciudadana", grado: "7", dificultad: "facil", pregunta: "¿Cuál es el propósito principal de la **ONU** (Organización de las Naciones Unidas)?", opciones: ["Organizar torneos deportivos.", "**Promover la paz, la cooperación y los derechos humanos a nivel global.**", "Crear nuevas fronteras.", "Regular el comercio en Asia."], correcta: 1 },
    { materia: "Cultura Ciudadana", grado: "7", dificultad: "facil", pregunta: "Los **'derechos sociales'** incluyen el derecho a:", opciones: ["La vida", "**La salud y la seguridad social**", "La libre expresión", "El voto"], correcta: 1 },
    { materia: "Cultura Ciudadana", grado: "7", dificultad: "facil", pregunta: "¿Cómo se llama al conjunto de costumbres, creencias y tradiciones de un grupo social?", opciones: ["Política", "Economía", "**Cultura**", "Geografía"], correcta: 2 },
    { materia: "Cultura Ciudadana", grado: "7", dificultad: "facil", pregunta: "Un deber fundamental del ciudadano para con la nación es:", opciones: ["Viajar al extranjero.", "**Respetar la Constitución y las leyes.**", "Solo pagar deudas.", "Ignorar los problemas públicos."], correcta: 1 },
    { materia: "Cultura Ciudadana", grado: "7", dificultad: "facil", pregunta: "La '**paz**' se construye fundamentalmente a través del:", opciones: ["Conflicto armado.", "**Diálogo y la solución pacífica de conflictos.**", "Silencio total.", "Autoritarismo."], correcta: 1 },
    { materia: "Cultura Ciudadana", grado: "7", dificultad: "facil", pregunta: "¿Cuál de estos es un **símbolo patrio** de Colombia?", opciones: ["La bandera de EEUU", "El dólar", "**El cóndor**", "El himno de otro país"], correcta: 2 },
    { materia: "Cultura Ciudadana", grado: "7", dificultad: "facil", pregunta: "El '**interés colectivo**' se refiere al beneficio de:", opciones: ["Solo una persona.", "El Estado.", "**Toda la sociedad.**", "Solo los políticos."], correcta: 2 },
    { materia: "Cultura Ciudadana", grado: "7", dificultad: "facil", pregunta: "La rama del poder público que ***administra*** los recursos y ejecuta las leyes es la:", opciones: ["Judicial", "Legislativa", "**Ejecutiva**", "De Control"], correcta: 2 },
    { materia: "Cultura Ciudadana", grado: "7", dificultad: "facil", pregunta: "El concepto de '**ética**' se relaciona con:", opciones: ["Las reglas de un deporte.", "**El estudio de la moral y la conducta correcta.**", "La economía.", "La tecnología."], correcta: 1 },
    { materia: "Cultura Ciudadana", grado: "7", dificultad: "facil", pregunta: "El '**Derecho a la Alimentación**' es un derecho:", opciones: ["Civil y Político", "**Económico, Social y Cultural**", "De primera generación", "De última generación"], correcta: 1 },
    { materia: "Cultura Ciudadana", grado: "7", dificultad: "facil", pregunta: "¿Qué valor es la base de la convivencia ciudadana?", opciones: ["Egoísmo", "Competencia desleal", "**Respeto**", "Individualismo"], correcta: 2 },
    { materia: "Cultura Ciudadana", grado: "7", dificultad: "facil", pregunta: "El '**medio ambiente**' es un bien:", opciones: ["Privado", "**Público**", "Exclusivo del gobierno", "Solo de las empresas"], correcta: 1 },
    { materia: "Cultura Ciudadana", grado: "7", dificultad: "facil", pregunta: "Una '**norma de tránsito**' es un ejemplo de regla:", opciones: ["Moral", "Religiosa", "**Social/Jurídica**", "Personal"], correcta: 2 },
    { materia: "Cultura Ciudadana", grado: "7", dificultad: "facil", pregunta: "¿Qué son los '**derechos humanos**'?", opciones: ["Privilegios para algunos.", "**Normas que tienen todos por el simple hecho de ser personas.**", "Reglas del colegio.", "Leyes creadas por el alcalde."], correcta: 1 },
    { materia: "Cultura Ciudadana", grado: "7", dificultad: "facil", pregunta: "La '**libertad de conciencia**' es el derecho a:", opciones: ["**Creer en lo que se quiera, sin imposición.**", "Hacer todo sin pensar.", "Mentir.", "Ser siempre el líder."], correcta: 0 },
    { materia: "Cultura Ciudadana", grado: "7", dificultad: "facil", pregunta: "El documento que se usa para resolver un conflicto en la comunidad es a menudo un:", opciones: ["Cheque", "Contrato de venta", "**Acta de mediación o acuerdo**", "Pasaporte"], correcta: 2 },
    { materia: "Cultura Ciudadana", grado: "7", dificultad: "facil", pregunta: "La 'región Andina' en Colombia es un ejemplo de:", opciones: ["Uniformidad cultural", "**Diversidad geográfica y cultural**", "Un país diferente", "Un desierto"], correcta: 1 },
    { materia: "Cultura Ciudadana", grado: "7", dificultad: "facil", pregunta: "La '**honestidad**' es importante porque genera:", opciones: ["Duda", "**Confianza**", "Riqueza", "Aislamiento"], correcta: 1 },

    // ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    // CULTURA CIUDADANA - GRADO 7 - MEDIA (20 Preguntas)
    // ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    { materia: "Cultura Ciudadana", grado: "7", dificultad: "media", pregunta: "¿Cómo se llama el mecanismo de protección de derechos fundamentales en Colombia (**respuesta inmediata**)?", opciones: ["Habeas Data", "**Acción de Tutela**", "Plebiscito", "Referendo"], correcta: 1 },
    { materia: "Cultura Ciudadana", grado: "7", dificultad: "media", pregunta: "El derecho a la ***vivienda digna*** es un derecho de:", opciones: ["Primera generación (Civiles y Políticos)", "**Segunda generación (Económicos, Sociales y Culturales)**", "Tercera generación (Colectivos)", "Cuarta generación"], correcta: 1 },
    { materia: "Cultura Ciudadana", grado: "7", dificultad: "media", pregunta: "La '**Soberanía Nacional**' reside en:", opciones: ["El Congreso", "El Presidente", "**El pueblo**", "Los militares"], correcta: 2 },
    { materia: "Cultura Ciudadana", grado: "7", dificultad: "media", pregunta: "¿Cuál es la función del **Defensor del Pueblo**?", opciones: ["Juzgar a criminales.", "**Defender y promover los derechos humanos.**", "Recaudar impuestos.", "Crear leyes."], correcta: 1 },
    { materia: "Cultura Ciudadana", grado: "7", dificultad: "media", pregunta: "La **'Organización de los Estados Americanos (OEA)'** agrupa a países del continente:", opciones: ["Africano", "Europeo", "Asiático", "**Americano**"], correcta: 3 },
    { materia: "Cultura Ciudadana", grado: "7", dificultad: "media", pregunta: "La ***inclusión*** social busca garantizar la participación de:", opciones: ["Solo los más ricos.", "**Todas las personas, especialmente las minorías y vulnerables.**", "Solo los adultos.", "Solo los hombres."], correcta: 1 },
    { materia: "Cultura Ciudadana", grado: "7", dificultad: "media", pregunta: "¿Qué implica la **'responsabilidad social'** de una empresa?", opciones: ["Solo generar ganancias.", "**Contribuir al bienestar social y ambiental.**", "No pagar impuestos.", "Ignorar a los empleados."], correcta: 1 },
    { materia: "Cultura Ciudadana", grado: "7", dificultad: "media", pregunta: "El concepto de '**justicia conmutativa**' se refiere a la igualdad en:", opciones: ["El reparto de bienes públicos.", "**Las relaciones de intercambio entre individuos (dar lo equivalente a lo que se recibe).**", "Las penas de prisión.", "El derecho al voto."], correcta: 1 },
    { materia: "Cultura Ciudadana", grado: "7", dificultad: "media", pregunta: "Un '**Referendo**' es un mecanismo de participación para que el pueblo:", opciones: ["Elija a un nuevo presidente.", "**Apruebe o rechace una norma constitucional o legal.**", "Solicite información.", "Haga una huelga."], correcta: 1 },
    { materia: "Cultura Ciudadana", grado: "7", dificultad: "media", pregunta: "La **'Declaración Universal de los Derechos Humanos'** fue proclamada en el año:", opciones: ["1918", "**1948**", "2000", "1980"], correcta: 1 },
    { materia: "Cultura Ciudadana", grado: "7", dificultad: "media", pregunta: "¿Cuál es la principal diferencia entre '**ética**' y '**moral**'?", opciones: ["Son lo mismo.", "**Ética es la reflexión filosófica; Moral es el conjunto de normas y costumbres.**", "Moral es individual; Ética es social.", "Ética es solo para adultos; Moral es para niños."], correcta: 1 },
    { materia: "Cultura Ciudadana", grado: "7", dificultad: "media", pregunta: "La **'Rama Judicial'** tiene la función de:", opciones: ["Crear las leyes.", "**Administrar la justicia y aplicar las leyes.**", "Ejecutar el presupuesto nacional.", "Representar al país internacionalmente."], correcta: 1 },
    { materia: "Cultura Ciudadana", grado: "7", dificultad: "media", pregunta: "¿Qué implica el '**pluralismo**' político?", opciones: ["Que solo hay un partido.", "**La existencia de diversos partidos e ideologías políticas.**", "La dictadura.", "El poder militar."], correcta: 1 },
    { materia: "Cultura Ciudadana", grado: "7", dificultad: "media", pregunta: "Los '**servicios públicos esenciales**' (agua, luz) son garantizados por:", opciones: ["Solo empresas privadas.", "**El Estado.**", "Organizaciones de caridad.", "La policía."], correcta: 1 },
    { materia: "Cultura Ciudadana", grado: "7", dificultad: "media", pregunta: "El '**Presupuesto Nacional**' es el plan financiero del Estado para:", opciones: ["Un mes.", "**Un año.**", "Diez años.", "Toda la vida."], correcta: 1 },
    { materia: "Cultura Ciudadana", grado: "7", dificultad: "media", pregunta: "¿Qué busca la **'Justicia Transicional'**?", opciones: ["Olvidar los conflictos.", "**Lograr la verdad, justicia, reparación y no repetición tras un conflicto armado.**", "Solo castigar a los culpables.", "Solo perdonar."], correcta: 1 },
    { materia: "Cultura Ciudadana", grado: "7", dificultad: "media", pregunta: "El '**patrimonio inmaterial**' incluye:", opciones: ["Edificios antiguos.", "**Las lenguas, tradiciones orales y festividades.**", "El dinero del Estado.", "Los carros oficiales."], correcta: 1 },
    { materia: "Cultura Ciudadana", grado: "7", dificultad: "media", pregunta: "El **'Habeas Data'** es un derecho para conocer, actualizar y rectificar información que se tiene de la persona en:", opciones: ["Periódicos.", "**Bases de datos y archivos (públicos o privados).**", "Redes sociales.", "Conversaciones privadas."], correcta: 1 },
    { materia: "Cultura Ciudadana", grado: "7", dificultad: "media", pregunta: "Un **'municipio'** es la unidad político-administrativa básica del Estado en el nivel:", opciones: ["Nacional", "Departamental", "**Local**", "Internacional"], correcta: 2 },
    { materia: "Cultura Ciudadana", grado: "7", dificultad: "media", pregunta: "¿Qué es el '**lobby**' o '**cabildeo**' en política?", opciones: ["Un acto ilegal.", "**La influencia organizada para promover intereses ante el poder público.**", "Una votación secreta.", "Un debate presidencial."], correcta: 1 },

    // ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    // CULTURA CIUDADANA - GRADO 7 - DIFÍCIL (20 Preguntas)
    // ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    { materia: "Cultura Ciudadana", grado: "7", dificultad: "dificil", pregunta: "¿Qué diferencia hay entre un Estado ***Unitario*** y un Estado ***Federal***?", opciones: ["El Unitario es más rico.", "**El Unitario centraliza el poder; el Federal lo distribuye entre regiones autónomas.**", "El Federal es más pequeño.", "El Unitario no tiene leyes."], correcta: 1 },
    { materia: "Cultura Ciudadana", grado: "7", dificultad: "dificil", pregunta: "La '**Globalización**' en términos de ciudadanía implica:", opciones: ["El aislamiento cultural.", "**Una interdependencia económica, política y cultural creciente entre países.**", "Solo el aumento de impuestos.", "El fin de la democracia."], correcta: 1 },
    { materia: "Cultura Ciudadana", grado: "7", dificultad: "dificil", pregunta: "El '**Principio de Legalidad**' en un Estado de Derecho implica que:", opciones: ["El presidente puede hacer lo que quiera.", "**Los ciudadanos solo están obligados a hacer lo que la ley exige.**", "Solo hay una ley.", "La ley la hace el juez."], correcta: 1 },
    { materia: "Cultura Ciudadana", grado: "7", dificultad: "dificil", pregunta: "¿Qué concepto se refiere al derecho de un pueblo a decidir libremente su forma de gobierno (**autodeterminación**)?", opciones: ["Patriotismo", "**Soberanía**", "Imperialismo", "Neoliberalismo"], correcta: 1 },
    { materia: "Cultura Ciudadana", grado: "7", dificultad: "dificil", pregunta: "La **'Justicia Distributiva'** se refiere a la igualdad en:", opciones: ["El reparto de premios.", "**La distribución equitativa de las cargas y beneficios sociales.**", "La cantidad de votos.", "El número de amigos."], correcta: 1 },
    { materia: "Cultura Ciudadana", grado: "7", dificultad: "dificil", pregunta: "¿Cuál es la función del **Control Fiscal** (Ej. Contraloría)?", opciones: ["Vigilar la conducta de los funcionarios.", "**Vigilar la correcta administración de los recursos públicos.**", "Crear el presupuesto.", "Juzgar a los criminales."], correcta: 1 },
    { materia: "Cultura Ciudadana", grado: "7", dificultad: "dificil", pregunta: "El '**Bien Común**' se diferencia del 'Interés General' en que el Bien Común busca:", opciones: ["Solo la satisfacción individual.", "**Las condiciones necesarias para que todas las personas logren su perfección.**", "El beneficio de solo un sector.", "El aumento del poder militar."], correcta: 1 },
    { materia: "Cultura Ciudadana", grado: "7", dificultad: "dificil", pregunta: "¿Qué significa el término '**Apatía Política**'?", opciones: ["Alto interés en política.", "**Falta de interés o indiferencia hacia la política y el voto.**", "Un nuevo partido político.", "El estudio de la política."], correcta: 1 },
    { materia: "Cultura Ciudadana", grado: "7", dificultad: "dificil", pregunta: "La **'Corte Penal Internacional' (CPI)** tiene competencia para juzgar:", opciones: ["Cualquier delito en cualquier país.", "**Genocidio, crímenes de guerra y de lesa humanidad.**", "Solo delitos de tránsito.", "Conflictos entre empresas."], correcta: 1 },
    { materia: "Cultura Ciudadana", grado: "7", dificultad: "dificil", pregunta: "La '**Multiculturalidad**' se diferencia de la '**Interculturalidad**' en que la Interculturalidad promueve:", opciones: ["La separación de culturas.", "**La interacción, el diálogo y el enriquecimiento mutuo entre culturas.**", "La dominación de una cultura sobre otra.", "El desconocimiento de otras culturas."], correcta: 1 },
    { materia: "Cultura Ciudadana", grado: "7", dificultad: "dificil", pregunta: "Un **'Tratado Internacional'** en Colombia debe ser aprobado por:", opciones: ["El Presidente sin más.", "**El Congreso y luego revisado por la Corte Constitucional.**", "Solo la Rama Judicial.", "El Alcalde de la capital."], correcta: 1 },
    { materia: "Cultura Ciudadana", grado: "7", dificultad: "dificil", pregunta: "El concepto de '**Ciudadanía Activa**' implica:", opciones: ["Solo obedecer al gobierno.", "**Participar en la toma de decisiones, fiscalizar y proponer soluciones a problemas públicos.**", "Votar una vez en la vida.", "Ser solo un espectador."], correcta: 1 },
    { materia: "Cultura Ciudadana", grado: "7", dificultad: "dificil", pregunta: "La **'Democracia Deliberativa'** se centra en:", opciones: ["El voto secreto.", "**La calidad del debate y la argumentación pública antes de tomar una decisión.**", "La velocidad de las decisiones.", "El poder militar."], correcta: 1 },
    { materia: "Cultura Ciudadana", grado: "7", dificultad: "dificil", pregunta: "El **'Control Social'** ejercido por la ciudadanía se refiere a:", opciones: ["La policía controlando el orden.", "**La vigilancia ciudadana a la gestión pública y la conducta de los funcionarios.**", "El control de precios.", "La censura de medios."], correcta: 1 },
    { materia: "Cultura Ciudadana", grado: "7", dificultad: "dificil", pregunta: "La **'Acción Popular'** protege los derechos e intereses:", opciones: ["De los niños.", "**De carácter colectivo (ej. ambiente, espacio público).**", "Individuales y políticos.", "De los empresarios."], correcta: 1 },
    { materia: "Cultura Ciudadana", grado: "7", dificultad: "dificil", pregunta: "La **'Teoría de las Tres Generaciones'** de DD.HH. clasifica los derechos económicos, sociales y culturales (ESCs) como:", opciones: ["Primera generación.", "**Segunda generación.**", "Tercera generación.", "Cuarta generación."], correcta: 1 },
    { materia: "Cultura Ciudadana", grado: "7", dificultad: "dificil", pregunta: "¿Qué busca el **'Principio de Subsidiariedad'** en la administración pública?", opciones: ["Centralizar todo el poder.", "**Que las tareas las realicen las instancias inferiores, y la superior solo intervenga si es necesario.**", "Que el Estado no intervenga nunca.", "Eliminar la burocracia."], correcta: 1 },
    { materia: "Cultura Ciudadana", grado: "7", dificultad: "dificil", pregunta: "La '**Legitimidad**' de un gobierno se deriva de:", opciones: ["La fuerza militar.", "**El respeto al Estado de Derecho y el apoyo/consentimiento del pueblo.**", "La riqueza de sus líderes.", "El tamaño del país."], correcta: 1 },
    { materia: "Cultura Ciudadana", grado: "7", dificultad: "dificil", pregunta: "El '**Etnocentrismo**' es la tendencia a:", opciones: ["Respetar otras culturas.", "**Juzgar otras culturas basándose en los propios estándares culturales.**", "Aceptar todas las ideas políticas.", "Solo estudiar la propia historia."], correcta: 1 },
    { materia: "Cultura Ciudadana", grado: "7", dificultad: "dificil", pregunta: "¿Qué implica la **'Rendición de Cuentas'** por parte de los gobernantes?", opciones: ["Solo publicar los gastos.", "**Informar y justificar sus decisiones y uso de recursos a la ciudadanía.**", "Pedir permiso para hacer algo.", "Crear una nueva ley."], correcta: 1 },


    // ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    // MATEMÁTICAS - GRADO 9 - FÁCIL (20 Preguntas)
    // ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    { materia: "Matemáticas", grado: "9", dificultad: "facil", pregunta: "¿Cuál es el resultado de la expresión $3^2 - 4^0$?", opciones: ["5", "8", "9", "6"], correcta: 1 },
    { materia: "Matemáticas", grado: "9", dificultad: "facil", pregunta: "Si $2x - 5 = 15$, ¿cuánto vale $x$?", opciones: ["5", "10", "20", "25"], correcta: 1 },
    { materia: "Matemáticas", grado: "9", dificultad: "facil", pregunta: "La expresión $(x + 3)^2$ es igual a:", opciones: ["$x^2 + 9$", "$x^2 + 6$", "$x^2 + 6x + 9$", "$x^2 + 3x + 9$"], correcta: 2 },
    { materia: "Matemáticas", grado: "9", dificultad: "facil", pregunta: "Factoriza el binomio $4x^2 - 9$.", opciones: ["$(4x - 9)(x + 1)$", "$(2x - 3)^2$", "$(4x - 3)(x + 3)$", "$(2x - 3)(2x + 3)$"], correcta: 3 },
    { materia: "Matemáticas", grado: "9", dificultad: "facil", pregunta: "¿Qué ángulo es el opuesto al lado más largo en un triángulo rectángulo?", opciones: ["$30^{\\circ}$", "$45^{\\circ}$", "$90^{\\circ}$", "Depende de la hipotenusa"], correcta: 2 },
    { materia: "Matemáticas", grado: "9", dificultad: "facil", pregunta: "En la ecuación $x^2 - 5x + 6 = 0$, el término cuadrático es:", opciones: ["$-5x$", "$6$", "$x^2$", "$0$"], correcta: 2 },
    { materia: "Matemáticas", grado: "9", dificultad: "facil", pregunta: "El cociente de $\\frac{x^5}{x^2}$ es:", opciones: ["$x^{10}$", "$x^3$", "$x^7$", "$x^{2.5}$"], correcta: 1 },
    { materia: "Matemáticas", grado: "9", dificultad: "facil", pregunta: "Resuelve la inecuación $x + 4 > 9$.", opciones: ["$x < 5$", "$x > 13$", "$x > 5$", "$x = 5$"], correcta: 2 },
    { materia: "Matemáticas", grado: "9", dificultad: "facil", pregunta: "Si $\\text{sen}(\\alpha) = 0.5$, ¿cuál es la medida del ángulo $\\alpha$?", opciones: ["$30^{\\circ}$", "$45^{\\circ}$", "$60^{\\circ}$", "$90^{\\circ}$"], correcta: 0 },
    { materia: "Matemáticas", grado: "9", dificultad: "facil", pregunta: "La mediana de los datos $10, 5, 20, 15, 30$ es:", opciones: ["10", "15", "20", "30"], correcta: 1 },
    { materia: "Matemáticas", grado: "9", dificultad: "facil", pregunta: "El área de un círculo con radio $3$ cm es:", opciones: ["$6\\pi \\text{ cm}^2$", "$9\\pi \\text{ cm}^2$", "$3\\pi \\text{ cm}^2$", "$18\\pi \\text{ cm}^2$"], correcta: 1 },
    { materia: "Matemáticas", grado: "9", dificultad: "facil", pregunta: "Si la pendiente de una recta es positiva, la recta es:", opciones: ["Horizontal", "Decreciente", "Vertical", "Creciente"], correcta: 3 },
    { materia: "Matemáticas", grado: "9", dificultad: "facil", pregunta: "La raíz cuadrada de $25a^2$ es:", opciones: ["$5a^2$", "$5a$", "$25a$", "$5$"], correcta: 1 },
    { materia: "Matemáticas", grado: "9", dificultad: "facil", pregunta: "Al despejar $y$ de $x + y = 7$, se obtiene:", opciones: ["$y = x + 7$", "$y = 7 - x$", "$y = 7x$", "$y = x/7$"], correcta: 1 },
    { materia: "Matemáticas", grado: "9", dificultad: "facil", pregunta: "¿Qué tipo de gráfica representa una función cuadrática $y = ax^2 + bx + c$?", opciones: ["Línea recta", "Hipérbola", "Elipse", "Parábola"], correcta: 3 },
    { materia: "Matemáticas", grado: "9", dificultad: "facil", pregunta: "Si $f(x) = x + 5$, ¿cuánto es $f(3)$?", opciones: ["3", "5", "8", "15"], correcta: 2 },
    { materia: "Matemáticas", grado: "9", dificultad: "facil", pregunta: "El Teorema de Pitágoras se aplica a triángulos:", opciones: ["Isósceles", "Equiláteros", "Obtusángulos", "Rectángulos"], correcta: 3 },
    { materia: "Matemáticas", grado: "9", dificultad: "facil", pregunta: "Simplifica la expresión $\\frac{1}{x} + \\frac{1}{x}$.", opciones: ["$1/x^2$", "$2/x$", "$2x$", "$x/2$"], correcta: 1 },
    { materia: "Matemáticas", grado: "9", dificultad: "facil", pregunta: "El eje horizontal en el plano cartesiano se llama:", opciones: ["Eje $y$", "Eje de las ordenadas", "Eje $x$", "Eje polar"], correcta: 2 },
    { materia: "Matemáticas", grado: "9", dificultad: "facil", pregunta: "Resuelve $2^x = 8$.", opciones: ["$x=2$", "$x=3$", "$x=4$", "$x=8$"], correcta: 1 },

    // ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    // MATEMÁTICAS - GRADO 9 - MEDIA (20 Preguntas)
    // ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    { materia: "Matemáticas", grado: "9", dificultad: "media", pregunta: "Resuelve el sistema de ecuaciones: $x + y = 10$ y $x - y = 2$.", opciones: ["$x=4, y=6$", "$x=6, y=4$", "$x=5, y=5$", "$x=8, y=2$"], correcta: 1 },
    { materia: "Matemáticas", grado: "9", dificultad: "media", pregunta: "¿Cuál es el valor de $x$ en la ecuación cuadrática $x^2 - 4x + 4 = 0$?", opciones: ["$x=-2$", "$x=4$", "$x=2$", "$x=0$"], correcta: 2 },
    { materia: "Matemáticas", grado: "9", dificultad: "media", pregunta: "Si $\\tan(\\theta) = 1$, ¿cuál es la medida del ángulo $\\theta$?", opciones: ["$30^{\\circ}$", "$45^{\\circ}$", "$60^{\\circ}$", "$90^{\\circ}$"], correcta: 1 },
    { materia: "Matemáticas", grado: "9", dificultad: "media", pregunta: "Calcula la distancia entre los puntos $(1, 2)$ y $(4, 6)$.", opciones: ["$\sqrt{13}$", "5", "7", "$\sqrt{37}$"], correcta: 1 },
    { materia: "Matemáticas", grado: "9", dificultad: "media", pregunta: "¿Qué se obtiene al racionalizar $\\frac{1}{\\sqrt{2}}$?", opciones: ["$1/2$", "$2\\sqrt{2}$", "$\\sqrt{2}/2$", "2"], correcta: 2 },
    { materia: "Matemáticas", grado: "9", dificultad: "media", pregunta: "La pendiente de la recta que pasa por $(1, 1)$ y $(3, 5)$ es:", opciones: ["1", "2", "3", "4"], correcta: 1 },
    { materia: "Matemáticas", grado: "9", dificultad: "media", pregunta: "Si un poste de $8$ m proyecta una sombra de $6$ m, y un árbol proyecta una sombra de $15$ m, ¿cuál es la altura del árbol (**Teorema de Tales**)?", opciones: ["10 m", "20 m", "12 m", "18 m"], correcta: 1 },
    { materia: "Matemáticas", grado: "9", dificultad: "media", pregunta: "El punto medio entre $A(-2, 5)$ y $B(4, 1)$ es:", opciones: ["$(1, 3)$", "$(2, 6)$", "$(3, 3)$", "$(-1, 2)$"], correcta: 0 },
    { materia: "Matemáticas", grado: "9", dificultad: "media", pregunta: "Despeja $h$ de la fórmula del área de un triángulo $A = \\frac{b \\cdot h}{2}$.", opciones: ["$h = 2A/b$", "$h = A/2b$", "$h = A - 2b$", "$h = A^2/b$"], correcta: 0 },
    { materia: "Matemáticas", grado: "9", dificultad: "media", pregunta: "Calcula la media de los números $1, 2, 3, 4, 5$.", opciones: ["2", "3", "3.5", "4"], correcta: 1 },
    { materia: "Matemáticas", grado: "9", dificultad: "media", pregunta: "Si $\\text{sen}(\\alpha) = 0.8$, ¿cuánto es $\\text{csc}(\\alpha)$?", opciones: ["$0.8$", "$1.25$", "$1/0.8^2$", "$1$"], correcta: 1 },
    { materia: "Matemáticas", grado: "9", dificultad: "media", pregunta: "El logaritmo $\\log_{2}(8)$ es igual a:", opciones: ["2", "3", "4", "8"], correcta: 1 },
    { materia: "Matemáticas", grado: "9", dificultad: "media", pregunta: "Simplifica la expresión $\\frac{x^2 - 1}{x - 1}$.", opciones: ["$x$", "$x + 1$", "$x - 1$", "$1$"], correcta: 1 },
    { materia: "Matemáticas", grado: "9", dificultad: "media", pregunta: "El dominio de la función $f(x) = \\sqrt{x - 3}$ es:", opciones: ["$x > 3$", "$x \\le 3$", "$x \\ge 3$", "Todos los Reales"], correcta: 2 },
    { materia: "Matemáticas", grado: "9", dificultad: "media", pregunta: "Si $4$ cuadernos cuestan $\\$12.000$, ¿cuánto cuestan $7$ cuadernos?", opciones: ["$\\$20.000$", "$\\$21.000$", "$\\$18.000$", "$\\$24.000$"], correcta: 1 },
    { materia: "Matemáticas", grado: "9", dificultad: "media", pregunta: "En una recta, la coordenada de un punto $P$ es $5$ y la de $Q$ es $-3$. La distancia entre ellos es:", opciones: ["2", "$-2$", "8", "$-8$"], correcta: 2 },
    { materia: "Matemáticas", grado: "9", dificultad: "media", pregunta: "La fórmula de la función lineal es:", opciones: ["$y = ax^2 + bx + c$", "$y = k/x$", "$y = mx + b$", "$y = \\text{sen}(x)$"], correcta: 2 },
    { materia: "Matemáticas", grado: "9", dificultad: "media", pregunta: "¿Qué propiedad indica que $a(b + c) = ab + ac$?", opciones: ["Asociativa", "Conmutativa", "Clausurativa", "Distributiva"], correcta: 3 },
    { materia: "Matemáticas", grado: "9", dificultad: "media", pregunta: "En un triángulo rectángulo, si el cateto adyacente es $3$ y el opuesto es $4$, la hipotenusa es:", opciones: ["$\sqrt{7}$", "5", "7", "$\sqrt{12}$"], correcta: 1 },
    { materia: "Matemáticas", grado: "9", dificultad: "media", pregunta: "¿Cuántas soluciones reales tiene la ecuación $x^2 + 1 = 0$?", opciones: ["Una", "Dos", "Infinitas", "Ninguna"], correcta: 3 },

    // ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    // MATEMÁTICAS - GRADO 9 - DIFÍCIL (20 Preguntas)
    // ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    { materia: "Matemáticas", grado: "9", dificultad: "dificil", pregunta: "¿Cuál es el valor de la **discriminante** de $2x^2 - 3x + 1 = 0$?", opciones: ["$-1$", "1", "4", "5"], correcta: 1 },
    { materia: "Matemáticas", grado: "9", dificultad: "dificil", pregunta: "Resuelve: $\\log_{10}(x) + \\log_{10}(2) = 1$.", opciones: ["$x=5$", "$x=2$", "$x=10$", "$x=0.5$"], correcta: 0 },
    { materia: "Matemáticas", grado: "9", dificultad: "dificil", pregunta: "Si $A = \\begin{pmatrix} 2 & 1 \\\\ 0 & 3 \\end{pmatrix}$ y $B = \\begin{pmatrix} 1 & 0 \\\\ 1 & 1 \\end{pmatrix}$, ¿cuál es $A + B$?", opciones: ["$\\begin{pmatrix} 3 & 1 \\\\ 1 & 4 \\end{pmatrix}$", "$\\begin{pmatrix} 2 & 0 \\\\ 0 & 3 \\end{pmatrix}$", "$\\begin{pmatrix} 3 & 1 \\\\ 0 & 4 \\end{pmatrix}$", "$\\begin{pmatrix} 3 & 0 \\\\ 0 & 4 \\end{pmatrix}$"], correcta: 0 },
    { materia: "Matemáticas", grado: "9", dificultad: "dificil", pregunta: "Calcula la **Varianza** de los datos $4, 4, 4, 4$.", opciones: ["4", "1", "0", "16"], correcta: 2 },
    { materia: "Matemáticas", grado: "9", dificultad: "dificil", pregunta: "¿Cuál es la solución a la inecuación cuadrática $x^2 - 4 > 0$?", opciones: ["$-2 < x < 2$", "$x > 2$", "$x < -2$ o $x > 2$", "Todos los Reales"], correcta: 2 },
    { materia: "Matemáticas", grado: "9", dificultad: "dificil", pregunta: "Si $f(x) = x - 1$ y $g(x) = x^2$, ¿cuál es $(g \\circ f)(x)$?", opciones: ["$x^2 - 1$", "$(x - 1)^2$", "$x^2 - 2x + 1$", "$x - 1$"], correcta: 1 },
    { materia: "Matemáticas", grado: "9", dificultad: "dificil", pregunta: "En un triángulo rectángulo, si la hipotenusa es $10$ y $\\cos(\\alpha) = 0.6$, el cateto adyacente es:", opciones: ["6", "8", "10", "12"], correcta: 0 },
    { materia: "Matemáticas", grado: "9", dificultad: "dificil", pregunta: "¿Qué función trigonométrica es la inversa del coseno?", opciones: ["Seno", "Tangente", "Cotangente", "Secante"], correcta: 3 },
    { materia: "Matemáticas", grado: "9", dificultad: "dificil", pregunta: "Simplifica la expresión radical $\\sqrt{50} - \\sqrt{8}$.", opciones: ["$3\\sqrt{2}$", "$\\sqrt{42}$", "$4\\sqrt{2}$", "$2\\sqrt{5}$"], correcta: 0 },
    { materia: "Matemáticas", grado: "9", dificultad: "dificil", pregunta: "Si $e^{2x} = 5$, ¿cuál es la expresión para $x$?", opciones: ["$x = \\ln(5) - 2$", "$x = 5/2$", "$x = 2\\ln(5)$", "$x = \\ln(5)/2$"], correcta: 3 },
    { materia: "Matemáticas", grado: "9", dificultad: "dificil", pregunta: "La ecuación de una circunferencia con centro en $(0, 0)$ y radio $5$ es:", opciones: ["$x^2 + y^2 = 5$", "$x + y = 25$", "$x^2 + y^2 = 25$", "$x^2 - y^2 = 25$"], correcta: 2 },
    { materia: "Matemáticas", grado: "9", dificultad: "dificil", pregunta: "La probabilidad de sacar un $4$ en un solo lanzamiento de dos dados es:", opciones: ["$1/12$", "$1/6$", "$1/36$", "$3/36$"], correcta: 0 }, // Casos: (1,3), (2,2), (3,1) -> 3/36 = 1/12
    { materia: "Matemáticas", grado: "9", dificultad: "dificil", pregunta: "¿Cuál es el $15\\%$ de $x$ aumentado en $20$?", opciones: ["$0.15(x + 20)$", "$1.15x + 20$", "$0.15x + 20$", "$x(0.15 + 20)$"], correcta: 2 },
    { materia: "Matemáticas", grado: "9", dificultad: "dificil", pregunta: "El rango de la función $f(x) = x^2 + 3$ es:", opciones: ["$y \\ge 0$", "$y \\ge 3$", "Todos los Reales", "$y = 3$"], correcta: 1 },
    { materia: "Matemáticas", grado: "9", dificultad: "dificil", pregunta: "La suma de las raíces de la ecuación $3x^2 - 6x + 1 = 0$ es:", opciones: ["$-2$", "2", "$1/3$", "$6$"], correcta: 1 }, // Fórmula: -b/a = -(-6)/3 = 2
    { materia: "Matemáticas", grado: "9", dificultad: "dificil", pregunta: "Si $A = 2x + 1$ y $B = x - 3$, ¿cuál es la diferencia $A - B$?", opciones: ["$x - 2$", "$x + 4$", "$3x - 2$", "$x + 2$"], correcta: 3 },
    { materia: "Matemáticas", grado: "9", dificultad: "dificil", pregunta: "La simplificación de $\\frac{x^2 - 5x + 6}{x - 3}$ es:", opciones: ["$x + 2$", "$x - 3$", "$x - 2$", "$x + 3$"], correcta: 2 },
    { materia: "Matemáticas", grado: "9", dificultad: "dificil", pregunta: "¿Cuál es el valor del ángulo central de un polígono regular de $8$ lados?", opciones: ["$60^{\\circ}$", "$45^{\\circ}$", "$30^{\\circ}$", "$72^{\\circ}$"], correcta: 1 },
    { materia: "Matemáticas", grado: "9", dificultad: "dificil", pregunta: "La forma polar del número complejo $z = 1 + i$ es:", opciones: ["$1(\\cos 45^{\\circ} + i \\text{sen} 45^{\\circ})$", "$\\sqrt{2}(\\cos 45^{\\circ} + i \\text{sen} 45^{\\circ})$", "$2(\\cos 90^{\\circ} + i \\text{sen} 90^{\\circ})$", "$1(\\cos 0^{\\circ} + i \\text{sen} 0^{\\circ})$"], correcta: 1 },
    { materia: "Matemáticas", grado: "9", dificultad: "dificil", pregunta: "Si la **desviación estándar** de un conjunto de datos es $4$, ¿cuál es su **Varianza**?", opciones: ["2", "4", "8", "16"], correcta: 3 },

    // ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    // LENGUA CASTELLANA - GRADO 9 - FÁCIL (20 Preguntas)
    // ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    { materia: "Lengua Castellana", grado: "9", dificultad: "facil", pregunta: "¿Qué género literario se caracteriza por expresar sentimientos y emociones en verso?", opciones: ["Narrativo", "Dramático", "Lírico", "Didáctico"], correcta: 2 },
    { materia: "Lengua Castellana", grado: "9", dificultad: "facil", pregunta: "¿Cómo se llama cada línea de un poema?", opciones: ["Estrofa", "Rima", "Metro", "Verso"], correcta: 3 },
    { materia: "Lengua Castellana", grado: "9", dificultad: "facil", pregunta: "La tesis en un texto argumentativo es:", opciones: ["Una opinión sin fundamento.", "Un resumen del texto.", "La **idea principal que se defiende**.", "Una conclusión final."], correcta: 2 },
    { materia: "Lengua Castellana", grado: "9", dificultad: "facil", pregunta: "El prefijo 'sub-' (como en *subterráneo*) significa:", opciones: ["Antes", "Después", "Sobre", "**Debajo de**"], correcta: 3 },
    { materia: "Lengua Castellana", grado: "9", dificultad: "facil", pregunta: "¿Qué es un '**parónimo**'?", opciones: ["Palabras con el mismo significado.", "Palabras que suenan igual.", "**Palabras con pronunciación y escritura similar, pero diferente significado**.", "Palabras opuestas."], correcta: 2 },
    { materia: "Lengua Castellana", grado: "9", dificultad: "facil", pregunta: "El 'yo poético' o 'yo lírico' es:", opciones: ["El autor del poema.", "**La voz que se expresa en el poema**.", "El personaje principal.", "El lector."], correcta: 1 },
    { materia: "Lengua Castellana", grado: "9", dificultad: "facil", pregunta: "¿Cuál es el principal objetivo de un texto **expositivo**?", opciones: ["Convencer al lector.", "Entretener.", "**Informar o explicar un tema**.", "Describir emociones."], correcta: 2 },
    { materia: "Lengua Castellana", grado: "9", dificultad: "facil", pregunta: "El vicio del lenguaje llamado **'redundancia'** es:", opciones: ["Usar palabras extranjeras.", "**Repetir ideas innecesariamente**.", "Escribir con mala ortografía.", "Usar un lenguaje muy formal."], correcta: 1 },
    { materia: "Lengua Castellana", grado: "9", dificultad: "facil", pregunta: "En la oración 'Ellos fueron al parque **y** compraron helado', el nexo 'y' es:", opciones: ["Subordinante", "**Coordinante (copulativo)**", "Adverbial", "Preposición"], correcta: 1 },
    { materia: "Lengua Castellana", grado: "9", dificultad: "facil", pregunta: "La rima que ocurre solo en las vocales a partir de la última sílaba acentuada es:", opciones: ["Consonante", "**Asonante**", "Libre", "Encadenada"], correcta: 1 },
    { materia: "Lengua Castellana", grado: "9", dificultad: "facil", pregunta: "¿Qué tipo de texto es una **biografía**?", opciones: ["Argumentativo", "Lírico", "**Narrativo**", "Descriptivo"], correcta: 2 },
    { materia: "Lengua Castellana", grado: "9", dificultad: "facil", pregunta: "El uso del punto y coma (;) es adecuado para separar elementos de una enumeración que ya contienen:", opciones: ["Comas", "Puntos", "Dos puntos", "**Guiones**"], correcta: 0 },
    { materia: "Lengua Castellana", grado: "9", dificultad: "facil", pregunta: "La palabra '**quizá**' es un adverbio de:", opciones: ["Lugar", "Tiempo", "**Duda**", "Cantidad"], correcta: 2 },
    { materia: "Lengua Castellana", grado: "9", dificultad: "facil", pregunta: "¿Cuál es la función del '**título**' en un ensayo?", opciones: ["Resumir la conclusión.", "Ser lo más largo posible.", "**Captar la atención e indicar el tema**.", "Describir el ambiente."], correcta: 2 },
    { materia: "Lengua Castellana", grado: "9", dificultad: "facil", pregunta: "El lenguaje utilizado en la poesía que busca la belleza y expresar emociones es:", opciones: ["Referencial", "Fática", "**Poético o Connotativo**", "Denotativo"], correcta: 2 },
    { materia: "Lengua Castellana", grado: "9", dificultad: "facil", pregunta: "El significado literal y objetivo de una palabra es el significado:", opciones: ["Connotativo", "Figurado", "**Denotativo**", "Simbólico"], correcta: 2 },
    { materia: "Lengua Castellana", grado: "9", dificultad: "facil", pregunta: "Un texto que defiende una posición sobre un tema controversial es un texto:", opciones: ["Informativo", "**Argumentativo**", "Descriptivo", "Instructivo"], correcta: 1 },
    { materia: "Lengua Castellana", grado: "9", dificultad: "facil", pregunta: "¿Cómo se llama al conflicto o problema central de una obra narrativa?", opciones: ["Clímax", "Desenlace", "Introducción", "**Nudo**"], correcta: 3 },
    { materia: "Lengua Castellana", grado: "9", dificultad: "facil", pregunta: "La concordancia debe darse entre el **núcleo del sujeto** y el:", opciones: ["Adjetivo", "Adverbio", "Objeto Directo", "**Verbo**"], correcta: 3 },
    { materia: "Lengua Castellana", grado: "9", dificultad: "facil", pregunta: "Un '**epíteto**' es una figura literaria que:", opciones: ["Exagera una idea.", "**Usa un adjetivo innecesario para resaltar una cualidad inherente**.", "Compara dos cosas.", "Atribuye cualidades humanas a objetos."], correcta: 1 },

    // ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    // LENGUA CASTELLANA - GRADO 9 - MEDIA (20 Preguntas)
    // ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    { materia: "Lengua Castellana", grado: "9", dificultad: "media", pregunta: "¿Cuál es el vicio del lenguaje que consiste en el uso incorrecto de la preposición *de* (Ejemplo: 'Pienso *de que* vendrá')?", opciones: ["Cacofonía", "Barbarismo", "**Dequeísmo**", "Ambigüedad"], correcta: 2 },
    { materia: "Lengua Castellana", grado: "9", dificultad: "media", pregunta: "En la Edad Media, el género lírico que se enfocaba en temas religiosos y morales era el:", opciones: ["Mester de Juglaría", "**Mester de Clerecía**", "Romancero", "Cantares de Gesta"], correcta: 1 },
    { materia: "Lengua Castellana", grado: "9", dificultad: "media", pregunta: "La oración 'El libro, **que está en la mesa**, es mío' contiene una proposición subordinada:", opciones: ["Sustantiva", "**Adjetiva (o de relativo)**", "Adverbial", "Coordinada"], correcta: 1 },
    { materia: "Lengua Castellana", grado: "9", dificultad: "media", pregunta: "¿Cómo se llama la figura literaria que apela a la mezcla de diferentes sentidos (Ejemplo: '*el color chillón*')?", opciones: ["Metáfora", "Hipérbole", "**Sinestesia**", "Ironía"], correcta: 2 },
    { materia: "Lengua Castellana", grado: "9", dificultad: "media", pregunta: "El **'argumento de autoridad'** se basa en:", opciones: ["La experiencia personal.", "**La opinión o cita de un experto reconocido**.", "El sentido común.", "La exageración."], correcta: 1 },
    { materia: "Lengua Castellana", grado: "9", dificultad: "media", pregunta: "La oración simple con **predicado nominal** se construye con verbos:", opciones: ["Transitivos", "Intransitivos", "**Copulativos (ser, estar, parecer)**", "Reflexivos"], correcta: 2 },
    { materia: "Lengua Castellana", grado: "9", dificultad: "media", pregunta: "¿Qué recurso utiliza la repetición de sonidos similares dentro de un mismo verso o frase (*El ruido con que rueda la ronca tempestad*)?", opciones: ["Rima", "Onomatopeya", "Paradoja", "**Aliteración**"], correcta: 3 },
    { materia: "Lengua Castellana", grado: "9", dificultad: "media", pregunta: "La **'etimología'** es el estudio de:", opciones: ["Los verbos.", "La pronunciación.", "**El origen e historia de las palabras**.", "Los sinónimos."], correcta: 2 },
    { materia: "Lengua Castellana", grado: "9", dificultad: "media", pregunta: "¿Cuál de estos nexos introduce una subordinada **adverbial concesiva**?", opciones: ["si", "**aunque**", "cuando", "por eso"], correcta: 1 },
    { materia: "Lengua Castellana", grado: "9", dificultad: "media", pregunta: "El '**ensayo**' se define como un texto:", opciones: ["Exclusivamente narrativo.", "**Argumentativo en prosa que aborda un tema de forma subjetiva y profunda**.", "Teatral.", "Con versos y rima."], correcta: 1 },
    { materia: "Lengua Castellana", grado: "9", dificultad: "media", pregunta: "El vicio de lenguaje llamado **'anfibología'** genera:", opciones: ["Malos sonidos.", "Errores de ortografía.", "**Doble sentido o ambigüedad**.", "Uso de extranjerismos."], correcta: 2 },
    { materia: "Lengua Castellana", grado: "9", dificultad: "media", pregunta: "¿Qué movimiento literario se caracteriza por el *idealismo*, el *amor cortés* y la *visión teocéntrica*?", opciones: ["Barroco", "**Medieval**", "Romanticismo", "Neoclasicismo"], correcta: 1 },
    { materia: "Lengua Castellana", grado: "9", dificultad: "media", pregunta: "El complemento verbal que recibe indirectamente la acción del verbo es el:", opciones: ["Objeto Directo", "**Objeto Indirecto**", "Complemento Circunstancial", "Atributo"], correcta: 1 },
    { materia: "Lengua Castellana", grado: "9", dificultad: "media", pregunta: "El término '**Barbarismo**' en lenguaje se refiere a:", opciones: ["El uso de palabras antiguas.", "**El uso de palabras o giros extraños, incorrectos o extranjeros innecesarios**.", "La repetición de palabras.", "El lenguaje muy culto."], correcta: 1 },
    { materia: "Lengua Castellana", grado: "9", dificultad: "media", pregunta: "Una oración con **predicado verbal** contiene un verbo:", opciones: ["Copulativo", "Auxiliar", "**No copulativo (predicativo)**", "Modal"], correcta: 2 },
    { materia: "Lengua Castellana", grado: "9", dificultad: "media", pregunta: "La métrica que utiliza versos de once sílabas es el:", opciones: ["Octosílabo", "Eneasilabo", "**Endecasílabo**", "Tridecasílabo"], correcta: 2 },
    { materia: "Lengua Castellana", grado: "9", dificultad: "media", pregunta: "¿Qué característica define principalmente a un '**microrrelato**'?", opciones: ["Su complejidad argumental.", "**Su extrema brevedad**.", "El uso exclusivo de rima.", "Su finalidad didáctica."], correcta: 1 },
    { materia: "Lengua Castellana", grado: "9", dificultad: "media", pregunta: "El participio del verbo 'escribir' es:", opciones: ["escribiendo", "**escrito**", "escribido", "escribir"], correcta: 1 },
    { materia: "Lengua Castellana", grado: "9", dificultad: "media", pregunta: "Un nexo de la oración compuesta que expresa **oposición o contraste** es:", opciones: ["y", "o", "**pero**", "así que"], correcta: 2 },
    { materia: "Lengua Castellana", grado: "9", dificultad: "media", pregunta: "El '**discurso directo**' se caracteriza por:", opciones: ["El narrador resume las palabras del personaje.", "**La reproducción literal de las palabras del personaje con comillas o guiones**.", "La descripción del ambiente.", "El uso de la voz pasiva."], correcta: 1 },

    // ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    // LENGUA CASTELLANA - GRADO 9 - DIFÍCIL (20 Preguntas)
    // ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    { materia: "Lengua Castellana", grado: "9", dificultad: "dificil", pregunta: "El proceso de formación de palabras que crea un sustantivo a partir de un verbo es la:", opciones: ["Composición", "Parasíntesis", "Derivación", "**Sustantivación**"], correcta: 3 },
    { materia: "Lengua Castellana", grado: "9", dificultad: "dificil", pregunta: "La figura literaria '**la vida es sueño**' (identificación de términos opuestos sin nexo) es una:", opciones: ["Símil", "Hipérbole", "Ironía", "**Metáfora Pura**"], correcta: 3 },
    { materia: "Lengua Castellana", grado: "9", dificultad: "dificil", pregunta: "La oración 'Dijo **que vendría pronto**' contiene una proposición subordinada:", opciones: ["Adjetiva", "**Sustantiva (función OD)**", "Adverbial", "Coordinada"], correcta: 1 },
    { materia: "Lengua Castellana", grado: "9", dificultad: "dificil", pregunta: "¿Qué figura literaria consiste en una exageración tan desmedida que es imposible o irreal (*Te amo un millón de años* )?", opciones: ["Ironía", "Símil", "Paradoja", "**Hipérbole**"], correcta: 3 },
    { materia: "Lengua Castellana", grado: "9", dificultad: "dificil", pregunta: "En el análisis sintáctico, la función principal de la proposición subordinada adverbial es la de:", opciones: ["Sujeto", "Atributo", "**Complemento Circunstancial**", "Objeto Directo"], correcta: 2 },
    { materia: "Lengua Castellana", grado: "9", dificultad: "dificil", pregunta: "El vicio del lenguaje llamado **'Cacofonía'** es:", opciones: ["La ambigüedad.", "**La repetición molesta de sonidos similares (mal sonido)**.", "El uso de laísmo.", "El exceso de adjetivos."], correcta: 1 },
    { materia: "Lengua Castellana", grado: "9", dificultad: "dificil", pregunta: "La estructura de un soneto clásico consta de:", opciones: ["Dos tercetos y dos cuartetos.", "**Dos cuartetos y dos tercetos**.", "Un cuarteto y tres tercetos.", "Cuatro cuartetos."], correcta: 1 },
    { materia: "Lengua Castellana", grado: "9", dificultad: "dificil", pregunta: "La función **metalingüística** se centra en el lenguaje cuando el código se usa para:", opciones: ["Expresar sentimientos.", "**Hablar sobre el propio código (gramática, léxico)**.", "Influir en el receptor.", "Comprobar el canal."], correcta: 1 },
    { materia: "Lengua Castellana", grado: "9", dificultad: "dificil", pregunta: "¿Cuál es el error gramatical en '**La dije** la verdad' (Uso de 'la' en lugar de 'le')?", opciones: ["Dequeísmo", "**Laísmo**", "Queísmo", "Cacofonía"], correcta: 1 },
    { materia: "Lengua Castellana", grado: "9", dificultad: "dificil", pregunta: "La **'paradoja'** (Ejemplo: *Al que poco tiene, le sobra todo*) consiste en:", opciones: ["Una comparación obvia.", "**La unión de ideas aparentemente contradictorias que encierran una verdad**.", "Una pregunta retórica.", "La exageración."], correcta: 1 },
    { materia: "Lengua Castellana", grado: "9", dificultad: "dificil", pregunta: "Un nexo de la oración compuesta que introduce una subordinada **condicional** es:", opciones: ["aunque", "**si**", "por lo tanto", "que"], correcta: 1 },
    { materia: "Lengua Castellana", grado: "9", dificultad: "dificil", pregunta: "La **'disyunción'** en la oración coordinada se expresa con los nexos:", opciones: ["y, e, ni", "**o, u, bien**", "pero, sino, sin embargo", "es decir, esto es"], correcta: 1 },
    { materia: "Lengua Castellana", grado: "9", dificultad: "dificil", pregunta: "En el Renacimiento, el tema central que reemplaza la visión teocéntrica es el:", opciones: ["El misticismo.", "**El humanismo (el hombre como centro)**.", "La crítica política.", "La épica de guerra."], correcta: 1 },
    { materia: "Lengua Castellana", grado: "9", dificultad: "dificil", pregunta: "El verbo '**haber**' es impersonal cuando se usa para indicar:", opciones: ["Posesión.", "Acción.", "**Existencia (ejemplo: 'Hay mucha gente')**.", "Modo."], correcta: 2 },
    { materia: "Lengua Castellana", grado: "9", dificultad: "dificil", pregunta: "¿Qué tipo de argumento se basa en el **uso de estadísticas o datos verificables**?", opciones: ["Autoridad", "De la mayoría", "**De hechos y datos**", "Analógico"], correcta: 2 },
    { materia: "Lengua Castellana", grado: "9", dificultad: "dificil", pregunta: "El término '**apócope**' se refiere a la pérdida de uno o más sonidos:", opciones: ["Al inicio de una palabra.", "**Al final de una palabra ('gran' por 'grande')**.", "En el medio de una palabra.", "En dos palabras separadas."], correcta: 1 },
    { materia: "Lengua Castellana", grado: "9", dificultad: "dificil", pregunta: "En la oración compuesta por **subordinación sustantiva**, la proposición subordinada funciona como:", opciones: ["Un Adjetivo", "Un Adverbio", "**Un Sustantivo (sujeto, OD, etc.)**", "Un Nexo"], correcta: 2 },
    { materia: "Lengua Castellana", grado: "9", dificultad: "dificil", pregunta: "¿Cuál es un ejemplo de **neologismo**?", opciones: ["caballo", "cantaba", "**tuitear**", "ayer"], correcta: 2 },
    { materia: "Lengua Castellana", grado: "9", dificultad: "dificil", pregunta: "El **'tono'** en un ensayo o texto argumentativo se refiere a:", opciones: ["La longitud de los párrafos.", "**La actitud o emoción del autor (formal, irónico, serio)**.", "El tema principal.", "La ortografía."], correcta: 1 },
    { materia: "Lengua Castellana", grado: "9", dificultad: "dificil", pregunta: "El '**diálogo polifónico**' en la novela contemporánea se refiere a:", opciones: ["Un diálogo entre dos personajes.", "**La multiplicidad de voces, perspectivas o narradores en la obra**.", "Un diálogo solo en verso.", "Un monólogo."], correcta: 1 },

    // ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    // INGLÉS B1 - GRADO 9 - FÁCIL (20 Preguntas)
    // ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    { materia: "Inglés B1", grado: "9", dificultad: "facil", pregunta: "Complete: 'I have lived here ___ (**durante**) five years.' (Present Perfect)", opciones: ["since", "**for**", "ago", "yet"], correcta: 1 },
    { materia: "Inglés B1", grado: "9", dificultad: "facil", pregunta: "The **Past Participle** of 'to break' is:", opciones: ["broke", "**broken**", "breaking", "breaked"], correcta: 1 },
    { materia: "Inglés B1", grado: "9", dificultad: "facil", pregunta: "Which modal verb expresses **obligation/necessity** (internal feeling)?", opciones: ["should", "**must**", "might", "could"], correcta: 1 },
    { materia: "Inglés B1", grado: "9", dificultad: "facil", pregunta: "Complete the **First Conditional**: 'If it rains, I ___ stay home.'", opciones: ["stay", "**will stay**", "would stay", "staying"], correcta: 1 },
    { materia: "Inglés B1", grado: "9", dificultad: "facil", pregunta: "Change to **Passive Voice (Present Simple)**: 'They build houses.'", opciones: ["Houses building.", "Houses built.", "**Houses are built.**", "Houses is built."], correcta: 2 },
    { materia: "Inglés B1", grado: "9", dificultad: "facil", pregunta: "The word '**although**' is used to express:", opciones: ["cause", "result", "**contrast**", "time"], correcta: 2 },
    { materia: "Inglés B1", grado: "9", dificultad: "facil", pregunta: "What is the meaning of the phrasal verb '**look after**'?", opciones: ["buscar", "**cuidar**", "parecerse a", "admirar"], correcta: 1 },
    { materia: "Inglés B1", grado: "9", dificultad: "facil", pregunta: "The adjective '**excited**' means:", opciones: ["cansado", "aburrido", "**emocionado**", "enojado"], correcta: 2 },
    { materia: "Inglés B1", grado: "9", dificultad: "facil", pregunta: "Complete: 'This is the book ___ (**que**) I read last week.' (Relative Pronoun)", opciones: ["who", "**which**", "where", "whose"], correcta: 1 },
    { materia: "Inglés B1", grado: "9", dificultad: "facil", pregunta: "The opposite of 'messy' is:", opciones: ["dirty", "**tidy**", "big", "fast"], correcta: 1 },
    { materia: "Inglés B1", grado: "9", dificultad: "facil", pregunta: "In **Reported Speech**, 'I work hard' changes to 'He said that he ___ hard.'", opciones: ["work", "**worked**", "will work", "was working"], correcta: 1 },
    { materia: "Inglés B1", grado: "9", dificultad: "facil", pregunta: "The verb tense used for actions that started in the past and continue in the present is:", opciones: ["Past Simple", "Present Simple", "**Present Perfect**", "Past Continuous"], correcta: 2 },
    { materia: "Inglés B1", grado: "9", dificultad: "facil", pregunta: "Complete the sentence: 'I am not ___ (**suficientemente**) tall.'", opciones: ["too", "so", "**enough**", "many"], correcta: 2 },
    { materia: "Inglés B1", grado: "9", dificultad: "facil", pregunta: "The word '**yet**' in the Present Perfect is usually placed:", opciones: ["at the beginning", "before the main verb", "**at the end of a negative/question sentence**", "after the main verb"], correcta: 2 },
    { materia: "Inglés B1", grado: "9", dificultad: "facil", pregunta: "The verb 'to deny' is usually followed by a:", opciones: ["to + infinitive", "**gerund (-ing)**", "past simple", "modal verb"], correcta: 1 },
    { materia: "Inglés B1", grado: "9", dificultad: "facil", pregunta: "Which phrase means '**a pesar de**'?", opciones: ["because of", "so that", "**in spite of**", "as a result"], correcta: 2 },
    { materia: "Inglés B1", grado: "9", dificultad: "facil", pregunta: "Complete: 'She ___ (**solía**) go to the cinema every week.' (Past habit)", opciones: ["used for", "**used to**", "is used to", "use to"], correcta: 1 },
    { materia: "Inglés B1", grado: "9", dificultad: "facil", pregunta: "The opposite of 'allow' is:", opciones: ["let", "enable", "**forbid**", "permit"], correcta: 2 },
    { materia: "Inglés B1", grado: "9", dificultad: "facil", pregunta: "The phrase '**make up**' (phrasal verb) can mean:", opciones: ["buscar", "cuidar", "**inventar/reconciliarse**", "apagar"], correcta: 2 },
    { materia: "Inglés B1", grado: "9", dificultad: "facil", pregunta: "Which word means '**además**' (to add information)?", opciones: ["however", "**furthermore**", "nevertheless", "consequently"], correcta: 1 },

    // ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    // INGLÉS B1 - GRADO 9 - MEDIA (20 Preguntas)
    // ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    { materia: "Inglés B1", grado: "9", dificultad: "media", pregunta: "Form the **Second Conditional**: 'If I won the lottery, I ___ buy a big house.'", opciones: ["will", "**would**", "buy", "had bought"], correcta: 1 },
    { materia: "Inglés B1", grado: "9", dificultad: "media", pregunta: "Change to **Reported Speech**: 'What time is it?'", opciones: ["He asked what time is it.", "He asked what time it was?", "**He asked what time it was.**", "He asked what time was it."], correcta: 2 },
    { materia: "Inglés B1", grado: "9", dificultad: "media", pregunta: "Which modal verb expresses **deduction/strong belief** (Ejemplo: *She *must be* tired*)?", opciones: ["may", "could", "**must**", "will"], correcta: 2 },
    { materia: "Inglés B1", grado: "9", dificultad: "media", pregunta: "Complete with **Past Perfect**: 'I ___ (**había terminado**) my homework before the movie started.'", opciones: ["finished", "have finished", "**had finished**", "was finished"], correcta: 2 },
    { materia: "Inglés B1", grado: "9", dificultad: "media", pregunta: "The phrasal verb '**run out of**' means:", opciones: ["correr rápido", "escapar de", "**quedarse sin (algo)**", "empezar a correr"], correcta: 2 },
    { materia: "Inglés B1", grado: "9", dificultad: "media", pregunta: "Which word is a connector of **purpose** (Ejemplo: *so that* / *in order to*)?", opciones: ["contrast", "reason", "**purpose**", "result"], correcta: 2 },
    { materia: "Inglés B1", grado: "9", dificultad: "media", pregunta: "Complete: 'He drove ___ (**cuidadosamente**) down the road.' (Adverb of manner)", opciones: ["careful", "**carefully**", "carefulness", "more careful"], correcta: 1 },
    { materia: "Inglés B1", grado: "9", dificultad: "media", pregunta: "Change to **Passive Voice (Past Simple)**: 'A dog bit him.'", opciones: ["He was bit by a dog.", "He is bitten by a dog.", "**He was bitten by a dog.**", "He bitten a dog."], correcta: 2 },
    { materia: "Inglés B1", grado: "9", dificultad: "media", pregunta: "The structure 'Subject + **Would rather + Verb**' expresses:", opciones: ["a wish", "a habit", "**a preference**", "a necessity"], correcta: 2 },
    { materia: "Inglés B1", grado: "9", dificultad: "media", pregunta: "Which **relative pronoun** can often be replaced by 'that' in a defining clause?", opciones: ["where", "whose", "**which/who**", "when"], correcta: 2 },
    { materia: "Inglés B1", grado: "9", dificultad: "media", pregunta: "The difference between '**since**' and '**for**' in the Present Perfect is:", opciones: ["Since is for an action; for is for a state.", "Since is for a quantity of time; for is for a starting point.", "**Since is for a starting point; for is for a duration of time.**", "They are interchangeable."], correcta: 2 },
    { materia: "Inglés B1", grado: "9", dificultad: "media", pregunta: "Complete: 'I regret ___ (**decir**) that I cannot go.' (Regret + Gerund)", opciones: ["to say", "said", "**saying**", "have said"], correcta: 2 },
    { materia: "Inglés B1", grado: "9", dificultad: "media", pregunta: "What does the idiom '**break the ice**' mean?", opciones: ["romper el vidrio", "**empezar una conversación o aliviar la tensión**", "congelar el agua", "terminar algo"], correcta: 1 },
    { materia: "Inglés B1", grado: "9", dificultad: "media", pregunta: "The structure 'Subject + **May/Might + Have + Past Participle**' expresses:", opciones: ["a strong deduction", "**a past possibility**", "a past ability", "a future obligation"], correcta: 1 },
    { materia: "Inglés B1", grado: "9", dificultad: "media", pregunta: "The word '**nevertheless**' is a formal synonym for:", opciones: ["therefore", "because", "**however**", "so"], correcta: 2 },
    { materia: "Inglés B1", grado: "9", dificultad: "media", pregunta: "Complete the sentence with a **Quantifier**: 'I have ___ (**poca**) money left.' (Uncountable, negative connotation)", opciones: ["a few", "many", "**little**", "a lot of"], correcta: 2 },
    { materia: "Inglés B1", grado: "9", dificultad: "media", pregunta: "The structure 'I wish I **were**...' expresses:", opciones: ["a wish about the past", "**a wish about the present (hypothetical)**", "a wish about the future", "a strong possibility"], correcta: 1 },
    { materia: "Inglés B1", grado: "9", dificultad: "media", pregunta: "The difference between 'job' and 'work' is that 'work' is usually an **uncountable** noun, while 'job' is:", opciones: ["an adjective", "**a countable noun**", "a verb", "a preposition"], correcta: 1 },
    { materia: "Inglés B1", grado: "9", dificultad: "media", pregunta: "Complete the **Question Tag**: 'You haven't been there, ___?'", opciones: ["didn't you", "are you", "**have you**", "do you"], correcta: 2 },
    { materia: "Inglés B1", grado: "9", dificultad: "media", pregunta: "The word '**delighted**' is a strong synonym for:", opciones: ["tired", "**happy**", "angry", "sad"], correcta: 1 },

    // ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    // INGLÉS B1 - GRADO 9 - DIFÍCIL (20 Preguntas)
    // ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    { materia: "Inglés B1", grado: "9", dificultad: "dificil", pregunta: "Form the **Third Conditional (Regret)**: 'If I had studied, I ___ passed the exam.'", opciones: ["would pass", "**would have passed**", "will pass", "passed"], correcta: 1 },
    { materia: "Inglés B1", grado: "9", dificultad: "dificil", pregunta: "Change to **Reported Speech (Command)**: 'Don't open the window!'", opciones: ["He asked me open the window.", "He told me not open the window.", "**He told me not to open the window.**", "He ordered me not opening the window."], correcta: 2 },
    { materia: "Inglés B1", grado: "9", dificultad: "dificil", pregunta: "The phrase '**get around to**' (phrasal verb) means:", opciones: ["evitar", "escapar", "**encontrar el tiempo para hacer algo**", "viajar"], correcta: 2 },
    { materia: "Inglés B1", grado: "9", dificultad: "dificil", pregunta: "Change to **Passive Voice (Present Perfect)**: 'Someone has stolen my bike.'", opciones: ["My bike is stolen.", "My bike was stolen.", "**My bike has been stolen.**", "My bike had stolen."], correcta: 2 },
    { materia: "Inglés B1", grado: "9", dificultad: "dificil", pregunta: "The modal structure '**Should + Have + Past Participle**' expresses:", opciones: ["past ability", "**past regret or criticism**", "future possibility", "present necessity"], correcta: 1 },
    { materia: "Inglés B1", grado: "9", dificultad: "dificil", pregunta: "Which is a non-defining **Relative Clause**?", opciones: ["The girl who is next to me is tall.", "**My brother, who is a doctor, lives in London.**", "The car that I bought is red.", "The book I read was long."], correcta: 1 },
    { materia: "Inglés B1", grado: "9", dificultad: "dificil", pregunta: "Complete the sentence using the **Infinitive without to**: 'She made me ___ (**limpiar**) the room.'", opciones: ["to clean", "**clean**", "cleaning", "cleaned"], correcta: 1 },
    { materia: "Inglés B1", grado: "9", dificultad: "dificil", pregunta: "The connector '**provided that**' is a formal way to express:", opciones: ["time", "result", "**condition**", "contrast"], correcta: 2 },
    { materia: "Inglés B1", grado: "9", dificultad: "dificil", pregunta: "The verb 'to suggest' is typically followed by a:", opciones: ["to + infinitive", "**gerund (-ing)**", "simple past", "modal verb"], correcta: 1 },
    { materia: "Inglés B1", grado: "9", dificultad: "dificil", pregunta: "In the sentence 'The film was much **more exciting** than the book,' the structure is used for:", opciones: ["equality", "superlative", "**comparison (adjective + much)**", "preference"], correcta: 2 },
    { materia: "Inglés B1", grado: "9", dificultad: "dificil", pregunta: "The phrase '**as if**' is used to introduce a:", opciones: ["reason", "**hypothetical/imaginary situation**", "fact", "time sequence"], correcta: 1 },
    { materia: "Inglés B1", grado: "9", dificultad: "dificil", pregunta: "Change to **Passive Voice (Modal)**: 'You must clean the house.'", opciones: ["The house must be clean.", "**The house must be cleaned.**", "The house is must clean.", "The house must cleaned."], correcta: 1 },
    { materia: "Inglés B1", grado: "9", dificultad: "dificil", pregunta: "Which **Inversion** is correct in the sentence: '___ did I know that he was lying.'", opciones: ["Never", "**Little**", "Soon", "Often"], correcta: 1 },
    { materia: "Inglés B1", grado: "9", dificultad: "dificil", pregunta: "The word '**nevertheless**' means:", opciones: ["as a result", "in addition to", "**in spite of that/however**", "similarly"], correcta: 2 },
    { materia: "Inglés B1", grado: "9", dificultad: "dificil", pregunta: "Complete the sentence: 'It's time you ___ (**te fueras**).' (Unreal past for advice)", opciones: ["go", "**went**", "going", "have gone"], correcta: 1 },
    { materia: "Inglés B1", grado: "9", dificultad: "dificil", pregunta: "The difference between 'couldn't have' and 'might not have' in past deduction is:", opciones: ["They are the same.", "Couldn't have is less certain.", "**Couldn't have expresses impossibility; Might not have expresses possibility.**", "Might not have is only for questions."], correcta: 2 },
    { materia: "Inglés B1", grado: "9", dificultad: "dificil", pregunta: "The phrasal verb '**fall out**' means:", opciones: ["caerse", "**pelearse/dejar de ser amigos**", "quedarse sin", "irse de viaje"], correcta: 1 },
    { materia: "Inglés B1", grado: "9", dificultad: "dificil", pregunta: "Which adverb of time usually comes **after** the main verb in the Present Perfect (affirmative)?", opciones: ["never", "yet", "**already**", "ever"], correcta: 2 },
    { materia: "Inglés B1", grado: "9", dificultad: "dificil", pregunta: "Complete the **Mixed Conditional**: 'If I were rich (present), I ___ bought that house (past).'", opciones: ["will have", "would", "**would have**", "bought"], correcta: 2 },
    { materia: "Inglés B1", grado: "9", dificultad: "dificil", pregunta: "The word '**imminent**' means:", opciones: ["far away", "unlikely", "**about to happen/coming soon**", "impossible"], correcta: 2 },

    // ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    // CULTURA CIUDADANA - GRADO 9 - FÁCIL (20 Preguntas)
    // ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    { materia: "Cultura Ciudadana", grado: "9", dificultad: "facil", pregunta: "Los **Derechos de Tercera Generación** (o de solidaridad) incluyen principalmente el derecho a:", opciones: ["La vida.", "**Un medio ambiente sano y la paz**.", "La educación.", "El voto."], correcta: 1 },
    { materia: "Cultura Ciudadana", grado: "9", dificultad: "facil", pregunta: "¿Cuál es el principal objetivo del **Desarrollo Sostenible**?", opciones: ["Solo el crecimiento económico.", "**Satisfacer las necesidades presentes sin comprometer las futuras.**", "Eliminar la agricultura.", "Reducir la población."], correcta: 1 },
    { materia: "Cultura Ciudadana", grado: "9", dificultad: "facil", pregunta: "El órgano de control que vigila la conducta de los funcionarios públicos en Colombia es la:", opciones: ["Contraloría General.", "Fiscalía General.", "**Procuraduría General de la Nación (Ministerio Público)**.", "Defensoría del Pueblo."], correcta: 2 },
    { materia: "Cultura Ciudadana", grado: "9", dificultad: "facil", pregunta: "¿Qué se busca con el mecanismo de la **'Veeduría Ciudadana'**?", opciones: ["Elegir alcaldes.", "**Vigilar la gestión pública y la inversión de recursos.**", "Derogar una ley.", "Juzgar a criminales."], correcta: 1 },
    { materia: "Cultura Ciudadana", grado: "9", dificultad: "facil", pregunta: "La **'Constitución Política'** de un país es la norma:", opciones: ["Ambiental más importante.", "**Máxima o Carta Magna.**", "De tránsito.", "La más antigua."], correcta: 1 },
    { materia: "Cultura Ciudadana", grado: "9", dificultad: "facil", pregunta: "La **'inflación'** es el aumento generalizado y sostenido de:", opciones: ["El empleo.", "**Los precios de bienes y servicios.**", "Las exportaciones.", "La calidad de vida."], correcta: 1 },
    { materia: "Cultura Ciudadana", grado: "9", dificultad: "facil", pregunta: "El **'Plebiscito'** es un mecanismo de participación para que el pueblo apoye o rechace una decisión del:", opciones: ["Congreso.", "Juez.", "**Ejecutivo (Presidente)**.", "Alcalde."], correcta: 2 },
    { materia: "Cultura Ciudadana", grado: "9", dificultad: "facil", pregunta: "¿Cuál de estos es un **recurso natural renovable**?", opciones: ["Petróleo", "Carbón", "**El viento**", "Gas natural"], correcta: 2 },
    { materia: "Cultura Ciudadana", grado: "9", dificultad: "facil", pregunta: "El órgano encargado de investigar y acusar a presuntos delincuentes es la:", opciones: ["Corte Suprema.", "Defensoría del Pueblo.", "**Fiscalía General de la Nación.**", "Contraloría."], correcta: 2 },
    { materia: "Cultura Ciudadana", grado: "9", dificultad: "facil", pregunta: "El concepto de **'democracia representativa'** implica que:", opciones: ["El pueblo decide todo directamente.", "**Los ciudadanos eligen representantes para que tomen decisiones por ellos.**", "Solo el presidente toma decisiones.", "El poder lo tiene el ejército."], correcta: 1 },
    { materia: "Cultura Ciudadana", grado: "9", dificultad: "facil", pregunta: "La **'Revocatoria del Mandato'** aplica a:", opciones: ["Jueces y Fiscales.", "**Alcaldes y Gobernadores**.", "Congresistas.", "Militares."], correcta: 1 },
    { materia: "Cultura Ciudadana", grado: "9", dificultad: "facil", pregunta: "El **'Patrimonio Cultural Inmaterial'** incluye:", opciones: ["Monumentos.", "**Tradiciones orales, lenguas y festividades**.", "Edificios de gobierno.", "Bienes raíces."], correcta: 1 },
    { materia: "Cultura Ciudadana", grado: "9", dificultad: "facil", pregunta: "La **'Exclusión Social'** se refiere a:", opciones: ["La participación activa.", "**La falta de participación y oportunidades de ciertos grupos en la sociedad.**", "El bienestar económico.", "La cohesión social."], correcta: 1 },
    { materia: "Cultura Ciudadana", grado: "9", dificultad: "facil", pregunta: "La **'Corte Constitucional'** tiene como principal función:", opciones: ["Juzgar al presidente.", "Crear nuevas leyes.", "**Velar por la supremacía e integridad de la Constitución.**", "Administrar el presupuesto."], correcta: 2 },
    { materia: "Cultura Ciudadana", grado: "9", dificultad: "facil", pregunta: "¿Qué valor es fundamental para la **solución no violenta de conflictos**?", opciones: ["Fuerza", "Egoísmo", "Imposición", "**Diálogo y Negociación**"], correcta: 3 },
    { materia: "Cultura Ciudadana", grado: "9", dificultad: "facil", pregunta: "Los **'Derechos Colectivos'** protegen intereses de:", opciones: ["Una persona.", "El presidente.", "**Toda la comunidad (ej. espacio público, ambiente)**.", "Los extranjeros."], correcta: 2 },
    { materia: "Cultura Ciudadana", grado: "9", dificultad: "facil", pregunta: "La **'equidad'** se refiere a:", opciones: ["Tratar a todos exactamente igual.", "**Dar a cada uno lo que necesita según sus circunstancias (justicia con igualdad).**", "Dar solo a los ricos.", "Eliminar la diversidad."], correcta: 1 },
    { materia: "Cultura Ciudadana", grado: "9", dificultad: "facil", pregunta: "La **'Personería'** es el órgano que ejerce el control disciplinario a nivel:", opciones: ["Nacional", "Departamental", "**Municipal o Local**", "Internacional"], correcta: 2 },
    { materia: "Cultura Ciudadana", grado: "9", dificultad: "facil", pregunta: "El término '**interculturalidad**' promueve:", opciones: ["La separación de culturas.", "**El diálogo y la interacción respetuosa entre diferentes culturas.**", "La asimilación de una cultura por otra.", "El etnocentrismo."], correcta: 1 },
    { materia: "Cultura Ciudadana", grado: "9", dificultad: "facil", pregunta: "La **'Globalización Económica'** implica una mayor:", opciones: ["Independencia nacional.", "**Integración de las economías nacionales a un mercado mundial.**", "Regulación local.", "Aislamiento comercial."], correcta: 1 },

    // ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    // CULTURA CIUDADANA - GRADO 9 - MEDIA (20 Preguntas)
    // ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    { materia: "Cultura Ciudadana", grado: "9", dificultad: "media", pregunta: "El **'Producto Interno Bruto (PIB)'** mide:", opciones: ["La cantidad de habitantes de un país.", "**El valor total de bienes y servicios producidos en un país en un periodo.**", "La deuda externa.", "El nivel de educación."], correcta: 1 },
    { materia: "Cultura Ciudadana", grado: "9", dificultad: "media", pregunta: "El mecanismo de participación ciudadana que busca **derogar una ley o un acto administrativo** es:", opciones: ["Referendo", "Plebiscito", "**Consulta Popular**", "Iniciativa popular"], correcta: 2 },
    { materia: "Cultura Ciudadana", grado: "9", dificultad: "media", pregunta: "Los tres deberes del Estado frente a los Derechos Humanos son:", opciones: ["Establecer, Eliminar, Controlar.", "**Respetar, Proteger y Garantizar.**", "Recaudar, Invertir, Distribuir.", "Legislar, Juzgar, Administrar."], correcta: 1 },
    { materia: "Cultura Ciudadana", grado: "9", dificultad: "media", pregunta: "La **'Corrupción'** se define como el abuso de poder o de la función pública para obtener:", opciones: ["Fama.", "**Beneficio privado.**", "Honores.", "Un mejor puesto."], correcta: 1 },
    { materia: "Cultura Ciudadana", grado: "9", dificultad: "media", pregunta: "El **'Principio de laicidad del Estado'** significa que:", opciones: ["El Estado apoya una sola religión.", "**El Estado no se adhiere ni financia ninguna religión, respetando la libertad de culto.**", "Todas las religiones están prohibidas.", "Solo se permite la religión tradicional."], correcta: 1 },
    { materia: "Cultura Ciudadana", grado: "9", dificultad: "media", pregunta: "¿Qué organismo internacional se encarga de promover la cooperación y la reducción de la pobreza global?", opciones: ["OTAN", "**Banco Mundial / FMI**", "OPEP", "UNASUR"], correcta: 1 },
    { materia: "Cultura Ciudadana", grado: "9", dificultad: "media", pregunta: "La **'Política Fiscal'** se relaciona con las decisiones gubernamentales sobre:", opciones: ["Tasa de interés.", "**Impuestos y gasto público.**", "Emisión de moneda.", "Comercio exterior."], correcta: 1 },
    { materia: "Cultura Ciudadana", grado: "9", dificultad: "media", pregunta: "El concepto de **'Cultura de la Legalidad'** implica que:", opciones: ["Solo la policía debe cumplir la ley.", "**Los ciudadanos asumen la ley como propia, no por miedo al castigo.**", "La ley es siempre justa.", "El gobierno es el único responsable."], correcta: 1 },
    { materia: "Cultura Ciudadana", grado: "9", dificultad: "media", pregunta: "La **'Justicia Ambiental'** busca:", opciones: ["Reducir el consumo de agua.", "**Una distribución equitativa de los costos y beneficios ambientales.**", "Solo sancionar a las empresas.", "Crear más parques."], correcta: 1 },
    { materia: "Cultura Ciudadana", grado: "9", dificultad: "media", pregunta: "El **'Tribunal Supremo'** de la Rama Judicial en la mayoría de los países es:", opciones: ["La Fiscalía.", "La Procuraduría.", "**La Corte Suprema de Justicia**.", "La Contraloría."], correcta: 2 },
    { materia: "Cultura Ciudadana", grado: "9", dificultad: "media", pregunta: "¿Qué busca el mecanismo de la **'Consulta Popular'**?", opciones: ["Revocar un cargo.", "**Someter un tema de importancia nacional, departamental o local a la decisión del pueblo.**", "Aprobar una ley.", "Pedir la palabra en el Congreso."], correcta: 1 },
    { materia: "Cultura Ciudadana", grado: "9", dificultad: "media", pregunta: "Los **'Objetivos de Desarrollo Sostenible (ODS)'** fueron establecidos por:", opciones: ["El Banco Mundial.", "La Unión Europea.", "**La Organización de las Naciones Unidas (ONU)**.", "La OEA."], correcta: 2 },
    { materia: "Cultura Ciudadana", grado: "9", dificultad: "media", pregunta: "El concepto de **'Transparencia'** en la gestión pública se relaciona con el derecho a:", opciones: ["Votar.", "**Acceder a la información pública (Habeas Data).**", "La educación.", "La vida."], correcta: 1 },
    { materia: "Cultura Ciudadana", grado: "9", dificultad: "media", pregunta: "La **'migración irregular'** es una consecuencia directa de la falta de acceso a derechos de tipo:", opciones: ["Civil y Político.", "Ambiental.", "**Económico y Social**.", "Cultural."], correcta: 2 },
    { materia: "Cultura Ciudadana", grado: "9", dificultad: "media", pregunta: "La **'Defensoría del Pueblo'** forma parte del:", opciones: ["Poder Ejecutivo.", "Poder Judicial.", "**Ministerio Público (junto con la Procuraduría)**.", "Poder Legislativo."], correcta: 2 },
    { materia: "Cultura Ciudadana", grado: "9", dificultad: "media", pregunta: "El **'Patrimonio Cultural Sumergido'** se refiere a:", opciones: ["Tradiciones orales.", "Festividades.", "**Restos arqueológicos o históricos bajo el agua.**", "Bienes terrestres."], correcta: 2 },
    { materia: "Cultura Ciudadana", grado: "9", dificultad: "media", pregunta: "El concepto de **'Estado Social de Derecho'** implica que el Estado no solo tiene límites, sino también un deber de:", opciones: ["Recaudar impuestos.", "**Garantizar los derechos fundamentales y el bienestar social.**", "Controlar la economía.", "Promover la guerra."], correcta: 1 },
    { materia: "Cultura Ciudadana", grado: "9", dificultad: "media", pregunta: "La **'Política Monetaria'** se relaciona con las decisiones gubernamentales sobre:", opciones: ["Gasto público.", "**Tasa de interés y cantidad de dinero en circulación.**", "Impuestos.", "Comercio internacional."], correcta: 1 },
    { materia: "Cultura Ciudadana", grado: "9", dificultad: "media", pregunta: "¿Qué busca la **'Acción de Cumplimiento'**?", opciones: ["Proteger derechos fundamentales.", "**Obligar al cumplimiento de una ley o acto administrativo.**", "Derogar una norma.", "Elegir un funcionario."], correcta: 1 },
    { materia: "Cultura Ciudadana", grado: "9", dificultad: "media", pregunta: "El mecanismo de **'Iniciativa Popular Normativa'** permite a los ciudadanos:", opciones: ["Revocar el mandato.", "Elegir el presidente.", "**Presentar proyectos de ley o acto administrativo.**", "Juzgar a un funcionario."], correcta: 2 },

    // ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    // CULTURA CIUDADANA - GRADO 9 - DIFÍCIL (20 Preguntas)
    // ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    { materia: "Cultura Ciudadana", grado: "9", dificultad: "dificil", pregunta: "¿Cuál es la diferencia entre el **'Referendo Derogatorio'** y la **'Revocatoria del Mandato'**?", opciones: ["Son lo mismo.", "**El Referendo deroga una Ley; la Revocatoria termina el mandato de un elegido (Alcalde/Gobernador).**", "El Referendo es del Presidente; la Revocatoria es del Congreso.", "La Revocatoria deroga una Ley; el Referendo termina el mandato."], correcta: 1 },
    { materia: "Cultura Ciudadana", grado: "9", dificultad: "dificil", pregunta: "El concepto de **'Soberanía Nacional'** se relaciona con la idea de que el poder político reside en:", opciones: ["El territorio.", "El ejército.", "**El pueblo o la nación.**", "El dinero."], correcta: 2 },
    { materia: "Cultura Ciudadana", grado: "9", dificultad: "dificil", pregunta: "El organismo de la ONU que se encarga de la **protección del patrimonio cultural y natural mundial** es:", opciones: ["UNICEF", "**UNESCO**", "OMS", "OIT"], correcta: 1 },
    { materia: "Cultura Ciudadana", grado: "9", dificultad: "dificil", pregunta: "La **'Justicia Restaurativa'** se enfoca principalmente en:", opciones: ["El castigo severo al delincuente.", "**La reparación del daño a la víctima y la reconciliación comunitaria.**", "La creación de nuevas cárceles.", "La eliminación de las penas."], correcta: 1 },
    { materia: "Cultura Ciudadana", grado: "9", dificultad: "dificil", pregunta: "El **'Balance de Poderes'** o **'Separación de Poderes'** en la democracia es fundamental para evitar:", opciones: ["La pobreza.", "**La concentración de poder y el autoritarismo.**", "La opinión pública.", "La inflación."], correcta: 1 },
    { materia: "Cultura Ciudadana", grado: "9", dificultad: "dificil", pregunta: "¿Cuál es la función del **'Consejo de Estado'** en Colombia?", opciones: ["Juzgar al Presidente.", "**Máximo tribunal de lo contencioso-administrativo y cuerpo consultivo del Gobierno.**", "Vigilar los recursos públicos.", "Crear el presupuesto."], correcta: 1 },
    { materia: "Cultura Ciudadana", grado: "9", dificultad: "dificil", pregunta: "La **'Agenda 2030'** de la ONU se centra en:", opciones: ["La exploración espacial.", "**Los Objetivos de Desarrollo Sostenible (ODS).**", "La historia de las guerras.", "El comercio internacional."], correcta: 1 },
    { materia: "Cultura Ciudadana", grado: "9", dificultad: "dificil", pregunta: "La **'Desobediencia Civil'** es una forma de participación que se caracteriza por ser:", opciones: ["Violenta e ilegal.", "**No violenta y pública, para apelar a la conciencia pública.**", "Secreta y privada.", "Siempre castigada con cárcel."], correcta: 1 },
    { materia: "Cultura Ciudadana", grado: "9", dificultad: "dificil", pregunta: "El concepto de **'Estado de Bienestar'** implica una alta intervención del Estado para garantizar:", opciones: ["Solo la seguridad.", "**Un nivel de vida mínimo y servicios esenciales a todos los ciudadanos.**", "La libertad económica total.", "La eliminación de impuestos."], correcta: 1 },
    { materia: "Cultura Ciudadana", grado: "9", dificultad: "dificil", pregunta: "¿Qué significa el término **'Pobreza Multidimensional'**?", opciones: ["Tener poco dinero.", "**Carencias en varios aspectos (salud, educación, vivienda, ingresos, etc.).**", "Vivir en un país pobre.", "La desigualdad de género."], correcta: 1 },
    { materia: "Cultura Ciudadana", grado: "9", dificultad: "dificil", pregunta: "La **'Opinión Consultiva'** de la Corte Constitucional o el Consejo de Estado es:", opciones: ["Una orden obligatoria.", "Un veredicto judicial.", "**Un concepto técnico no vinculante sobre un tema legal.**", "Una nueva ley."], correcta: 2 },
    { materia: "Cultura Ciudadana", grado: "9", dificultad: "dificil", pregunta: "La **'Xenofobia'** es una forma de discriminación basada en:", opciones: ["El género.", "**El miedo u odio hacia los extranjeros.**", "La clase social.", "La discapacidad."], correcta: 1 },
    { materia: "Cultura Ciudadana", grado: "9", dificultad: "dificil", pregunta: "El **'Principio de Progresividad'** en DD.HH. obliga al Estado a:", opciones: ["No intervenir.", "**Avanzar en la garantía de los derechos sin retroceder en lo ya logrado.**", "Solo proteger derechos civiles.", "Depender de la ayuda externa."], correcta: 1 },
    { materia: "Cultura Ciudadana", grado: "9", dificultad: "dificil", pregunta: "La **'Ciberciudadanía'** implica:", opciones: ["El uso de redes sociales para el ocio.", "**La participación y ejercicio de derechos/deberes en el entorno digital y redes.**", "La desconexión total.", "El uso exclusivo de la televisión."], correcta: 1 },
    { materia: "Cultura Ciudadana", grado: "9", dificultad: "dificil", pregunta: "¿Cuál es el principal objetivo de un **'Plan de Ordenamiento Territorial (POT)'**?", opciones: ["Regular el comercio.", "**Dirigir y administrar el desarrollo físico del territorio municipal/distrital.**", "Crear nuevas leyes.", "Fijar impuestos."], correcta: 1 },
    { materia: "Cultura Ciudadana", grado: "9", dificultad: "dificil", pregunta: "La **'Crisis de Representatividad'** en la democracia se refiere a:", opciones: ["El aumento de votantes.", "**La desconfianza del ciudadano en sus representantes e instituciones.**", "El exceso de partidos políticos.", "La falta de dinero."], correcta: 1 },
    { materia: "Cultura Ciudadana", grado: "9", dificultad: "dificil", pregunta: "Los **'Derechos de Cuarta Generación'** (en debate) se relacionan principalmente con:", opciones: ["El voto.", "La educación.", "**Tecnología, acceso a la información y bioética.**", "La propiedad privada."], correcta: 2 },
    { materia: "Cultura Ciudadana", grado: "9", dificultad: "dificil", pregunta: "El **'Cabildo Abierto'** es una instancia para que la ciudadanía:", opciones: ["Elija un funcionario.", "**Participe directamente en el debate sobre asuntos de interés local.**", "Demande al Estado.", "Apruebe un presupuesto."], correcta: 1 },
    { materia: "Cultura Ciudadana", grado: "9", dificultad: "dificil", pregunta: "La **'Teoría del Contrato Social'** (Rousseau, Hobbes) explica el origen del Estado como:", opciones: ["Un designio divino.", "**Un acuerdo voluntario entre los individuos para crear una autoridad.**", "Una imposición militar.", "Un fenómeno natural."], correcta: 1 },
    { materia: "Cultura Ciudadana", grado: "9", dificultad: "dificil", pregunta: "El concepto de **'Bienes Públicos Globales'** se refiere a recursos como:", opciones: ["El petróleo.", "**El clima estable, la paz y la salud pública global.**", "Las empresas privadas.", "Los edificios de gobierno."], correcta: 1 },


    // ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    // MATEMÁTICAS - GRADO 10 - FÁCIL (20 Preguntas: Trigonometría y Geometría Analítica Básica)
    // ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    { materia: "Matemáticas", grado: "10", dificultad: "facil", pregunta: "¿Cuál es la razón trigonométrica del **Seno** de un ángulo agudo en un triángulo rectángulo?", opciones: ["Adyacente/Hipotenusa", "Opuesto/Adyacente", "**Opuesto/Hipotenusa**", "Hipotenusa/Adyacente"], correcta: 2 },
    { materia: "Matemáticas", grado: "10", dificultad: "facil", pregunta: "Si en un triángulo rectángulo, el cateto opuesto es $3$ y la hipotenusa es $5$, ¿cuánto vale el cateto adyacente?", opciones: ["2", "3", "**4**", "6"], correcta: 2 },
    { materia: "Matemáticas", grado: "10", dificultad: "facil", pregunta: "¿A cuántos grados equivalen $\\pi/2$ radianes?", opciones: ["$30^{\\circ}$", "$90^{\\circ}$", "$180^{\\circ}$", "$360^{\\circ}$"], correcta: 1 },
    { materia: "Matemáticas", grado: "10", dificultad: "facil", pregunta: "La **pendiente** de una recta horizontal es:", opciones: ["1", "**0**", "Indefinida", "-1"], correcta: 1 },
    { materia: "Matemáticas", grado: "10", dificultad: "facil", pregunta: "La **secante** de un ángulo $\\theta$ es la recíproca de:", opciones: ["Seno", "**Coseno**", "Tangente", "Cotangente"], correcta: 1 },
    { materia: "Matemáticas", grado: "10", dificultad: "facil", pregunta: "El centro de la circunferencia con ecuación $(x-2)^2 + (y+3)^2 = 9$ es:", opciones: ["$(-2, 3)$", "$(2, 3)$", "$(-2, -3)$", "**$(2, -3)$**"], correcta: 3 },
    { materia: "Matemáticas", grado: "10", dificultad: "facil", pregunta: "El **dominio** de la función $f(x) = x^2 + 1$ es:", opciones: ["$x > 0$", "$x < 0$", "**Todos los números reales (R)**", "$y \\ge 1$"], correcta: 2 },
    { materia: "Matemáticas", grado: "10", dificultad: "facil", pregunta: "La identidad trigonométrica fundamental es $\\text{sen}^2(x) + \\cos^2(x) = $:", opciones: ["0", "$x$", "**1**", "$2$"], correcta: 2 },
    { materia: "Matemáticas", grado: "10", dificultad: "facil", pregunta: "¿Qué tipo de ángulo mide más de $90^{\\circ}$ y menos de $180^{\\circ}$?", opciones: ["Agudo", "Recto", "**Obtuso**", "Llano"], correcta: 2 },
    { materia: "Matemáticas", grado: "10", dificultad: "facil", pregunta: "La **raíz** de una función $f(x)$ es el valor de $x$ donde $f(x)$ es igual a:", opciones: ["1", "**0**", "La pendiente", "El vértice"], correcta: 1 },
    { materia: "Matemáticas", grado: "10", dificultad: "facil", pregunta: "Para que dos rectas sean **paralelas**, sus pendientes deben ser:", opciones: ["Recíprocas", "Opuestas", "**Iguales**", "Inversas"], correcta: 2 },
    { materia: "Matemáticas", grado: "10", dificultad: "facil", pregunta: "Si $\\text{cos}(\\alpha) = 1$, ¿cuál es la medida del ángulo $\\alpha$ en el intervalo $[0^{\\circ}, 360^{\\circ})$?", opciones: ["$90^{\\circ}$", "$180^{\\circ}$", "**$0^{\\circ}$**", "$270^{\\circ}$"], correcta: 2 },
    { materia: "Matemáticas", grado: "10", dificultad: "facil", pregunta: "¿Cuál es la **longitud del radio** de la circunferencia $(x-1)^2 + (y-1)^2 = 16$?", opciones: ["1", "4", "8", "16"], correcta: 1 },
    { materia: "Matemáticas", grado: "10", dificultad: "facil", pregunta: "Un ángulo en **posición normal** o estándar tiene su vértice en:", opciones: ["El eje $x$", "El eje $y$", "**El origen (0, 0)**", "El cuadrante I"], correcta: 2 },
    { materia: "Matemáticas", grado: "10", dificultad: "facil", pregunta: "La fórmula para calcular la **distancia** entre dos puntos $(x_1, y_1)$ y $(x_2, y_2)$ usa:", opciones: ["Suma de coordenadas.", "**Teorema de Pitágoras.**", "Área del círculo.", "Logaritmos."], correcta: 1 },
    { materia: "Matemáticas", grado: "10", dificultad: "facil", pregunta: "En una función trigonométrica, la **Amplitud** se relaciona con:", opciones: ["El periodo.", "**La altura máxima y mínima de la onda.**", "La frecuencia.", "El desfase."], correcta: 1 },
    { materia: "Matemáticas", grado: "10", dificultad: "facil", pregunta: "Al resolver $\\text{sen}(x) = 1/2$ en el cuadrante I, $x$ es igual a:", opciones: ["$45^{\\circ}$", "**$30^{\\circ}$**", "$60^{\\circ}$", "$90^{\\circ}$"], correcta: 1 },
    { materia: "Matemáticas", grado: "10", dificultad: "facil", pregunta: "El valor de $\\tan(45^{\\circ})$ es:", opciones: ["$0$", "**$1$**", "$\\sqrt{3}$", "$\\infty$"], correcta: 1 },
    { materia: "Matemáticas", grado: "10", dificultad: "facil", pregunta: "¿Qué forma tiene la gráfica de la función $y = \\text{sen}(x)$?", opciones: ["Parábola", "Hipérbola", "**Onda (sinusoide)**", "Línea recta"], correcta: 2 },
    { materia: "Matemáticas", grado: "10", dificultad: "facil", pregunta: "Para calcular el lado de un triángulo **no** rectángulo, la Ley del Seno requiere al menos conocer:", opciones: ["Solo un lado.", "Solo un ángulo.", "**Un lado y dos ángulos (A-L-A) o dos lados y un ángulo opuesto (L-L-A).**", "Solo el perímetro."], correcta: 2 },

    // ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    // MATEMÁTICAS - GRADO 10 - MEDIA (20 Preguntas: Ecuaciones, Leyes Trigonométricas, Cónicas)
    // ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    { materia: "Matemáticas", grado: "10", dificultad: "media", pregunta: "La Ley del Coseno se utiliza para encontrar el lado $c$ si se conocen los lados $a$ y $b$, y el ángulo $\\gamma$ (**L-A-L**). La fórmula es $c^2 = a^2 + b^2 - 2ab \\cos(\\gamma)$. ¿Cuál es el valor de $\\cos(60^{\\circ})$?", opciones: ["$\\sqrt{3}/2$", "**$1/2$**", "$\\sqrt{2}/2$", "$0$"], correcta: 1 },
    { materia: "Matemáticas", grado: "10", dificultad: "media", pregunta: "¿Cuál es la **ecuación general de la recta** con pendiente $m=2$ que pasa por el punto $(1, 3)$?", opciones: ["$y = 2x + 1$", "$2x + y = 5$", "**$2x - y + 1 = 0$**", "$y = 2x - 1$"], correcta: 2 },
    { materia: "Matemáticas", grado: "10", dificultad: "media", pregunta: "La **Ecuación de la Parábola** con vértice en el origen, que abre hacia arriba, es de la forma:", opciones: ["$x^2 = 4py$", "**$y^2 = 4px$**", "$x = y^2$", "$y = k/x$"], correcta: 1 },
    { materia: "Matemáticas", grado: "10", dificultad: "media", pregunta: "Resuelve la ecuación $\\sin(2x) = 1$ en el intervalo $[0^{\\circ}, 360^{\\circ})$.", opciones: ["$90^{\\circ}$ y $270^{\\circ}$", "$45^{\\circ}$", "**$45^{\\circ}$ y $225^{\\circ}$**", "$30^{\\circ}$ y $150^{\\circ}$"], correcta: 2 },
    { materia: "Matemáticas", grado: "10", dificultad: "media", pregunta: "¿Qué valor de $x$ hace que la inecuación $\\frac{x}{2} + 1 \\ge 5$ sea verdadera?", opciones: ["$x = 6$", "$x < 8$", "**$x \\ge 8$**", "$x = 4$"], correcta: 2 },
    { materia: "Matemáticas", grado: "10", dificultad: "media", pregunta: "La **Excentricidad** de una elipse es un valor que cumple:", opciones: ["$e = 1$", "$e = 0$", "**$0 < e < 1$**", "$e > 1$"], correcta: 2 },
    { materia: "Matemáticas", grado: "10", dificultad: "media", pregunta: "Si el **período** de una función trigonométrica $y = A \\sin(Bx)$ es $\\pi$, el valor de $B$ es:", opciones: ["1", "1/2", "**2**", "$2\\pi$"], correcta: 2 },
    { materia: "Matemáticas", grado: "10", dificultad: "media", pregunta: "La ecuación general de la línea recta es:", opciones: ["$y = mx + b$", "$(x-h)^2 + (y-k)^2 = r^2$", "**$Ax + By + C = 0$**", "$y = ax^2 + bx + c$"], correcta: 2 },
    { materia: "Matemáticas", grado: "10", dificultad: "media", pregunta: "En el círculo unitario, el **punto** $P(x, y)$ en el primer cuadrante tiene coordenadas $( \\cos(\\theta), \\text{sen}(\\theta) )$. Si $\\text{sen}(\\theta) = 3/5$, ¿cuánto es $\\cos(\\theta)$?", opciones: ["$3/4$", "**$4/5$**", "$5/3$", "$1$"], correcta: 1 },
    { materia: "Matemáticas", grado: "10", dificultad: "media", pregunta: "La **asíntota vertical** de $y = \\tan(x)$ ocurre en:", opciones: ["$0$", "**$90^{\\circ}$ y sus múltiplos impares de $90^{\\circ}$**", "$180^{\\circ}$", "$360^{\\circ}$"], correcta: 1 },
    { materia: "Matemáticas", grado: "10", dificultad: "media", pregunta: "El conjunto solución de la inecuación $|x - 1| < 3$ es:", opciones: ["$x > 4$", "$x < -2$", "**$(-2, 4)$**", "$(-4, 2)$"], correcta: 2 },
    { materia: "Matemáticas", grado: "10", dificultad: "media", pregunta: "Para calcular la **altura** de un edificio sabiendo el ángulo de elevación ($30^{\\circ}$) y la distancia horizontal ($50$ m), ¿qué razón trigonométrica es la más adecuada?", opciones: ["Seno", "Coseno", "**Tangente**", "Cotangente"], correcta: 2 },
    { materia: "Matemáticas", grado: "10", dificultad: "media", pregunta: "El vértice de la parábola $y = x^2 - 4x + 3$ se encuentra en el punto:", opciones: ["$(-2, 15)$", "$(1, 0)$", "**$(2, -1)$**", "$(0, 3)$"], correcta: 2 },
    { materia: "Matemáticas", grado: "10", dificultad: "media", pregunta: "La **cotangente** de $\\pi/4$ radianes es:", opciones: ["$0$", "$1/2$", "$\\sqrt{3}$", "**$1$**"], correcta: 3 },
    { materia: "Matemáticas", grado: "10", dificultad: "media", pregunta: "Las **asíntotas** de una **hipérbola** se intersecan en:", opciones: ["Los focos.", "Los vértices.", "**El centro.**", "El eje mayor."], correcta: 2 },
    { materia: "Matemáticas", grado: "10", dificultad: "media", pregunta: "El valor de $\\text{sen}(150^{\\circ})$ usando ángulos de referencia es igual a $\\text{sen}(\\theta)$, donde $\\theta$ es:", opciones: ["$\\text{sen}(30^{\\circ})$", "$\\text{sen}(60^{\\circ})$", "$\\text{sen}(210^{\\circ})$", "$\\text{sen}(330^{\\circ})$"], correcta: 0 },
    { materia: "Matemáticas", grado: "10", dificultad: "media", pregunta: "Si $f(x) = 2x$ y $g(x) = x + 3$, ¿cuál es la función compuesta $(f \\circ g)(x)$?", opciones: ["$2x + 1$", "$2x + 3$", "**$2x + 6$**", "$x^2 + 6x$"], correcta: 2 },
    { materia: "Matemáticas", grado: "10", dificultad: "media", pregunta: "El punto medio entre $A(5, 5)$ y $B(1, 1)$ es:", opciones: ["$(4, 4)$", "$(5, 1)$", "**$(3, 3)$**", "$(2, 2)$"], correcta: 2 },
    { materia: "Matemáticas", grado: "10", dificultad: "media", pregunta: "La Ley del Seno se usa cuando se conoce un ángulo y su lado opuesto, y:", opciones: ["Solo un lado adyacente.", "Solo un ángulo más.", "**Otro ángulo o lado (A-A-L, L-L-A).**", "Solo los tres lados."], correcta: 2 },
    { materia: "Matemáticas", grado: "10", dificultad: "media", pregunta: "La gráfica de $y = -\\cos(x)$ es la misma que $y = \\cos(x)$ pero:", opciones: ["Desplazada.", "Comprimida.", "Expandida.", "**Reflejada (respecto al eje $x$).**"], correcta: 3 },

    // ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    // MATEMÁTICAS - GRADO 10 - DIFÍCIL (20 Preguntas: Identidades, Sistemas de Inecuaciones, Cónicas Avanzadas)
    // ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    { materia: "Matemáticas", grado: "10", dificultad: "dificil", pregunta: "¿Cuál es la simplificación de la expresión trigonométrica $\\frac{\\text{sen}(\\theta)}{\\tan(\\theta)}$?", opciones: ["$\\tan(\\theta)$", "$\\sec(\\theta)$", "**$\\cos(\\theta)$**", "$1$"], correcta: 2 },
    { materia: "Matemáticas", grado: "10", dificultad: "dificil", pregunta: "La ecuación de una **elipse** con centro en $(0, 0)$, eje mayor vertical $10$ y eje menor horizontal $6$ es:", opciones: ["$\\frac{x^2}{25} + \\frac{y^2}{9} = 1$", "**$\\frac{x^2}{9} + \\frac{y^2}{25} = 1$**", "$x^2 + y^2 = 25$", "$9x^2 + 25y^2 = 1$"], correcta: 1 },
    { materia: "Matemáticas", grado: "10", dificultad: "dificil", pregunta: "Si $\\cos(\\theta) = -1/2$ y $\\theta$ está en el cuadrante III, el valor de $\\tan(\\theta)$ es:", opciones: ["$\\sqrt{3}$", "$-\\sqrt{3}$", "**$1/\\sqrt{3}$**", "$-1/\\sqrt{3}$"], correcta: 0 },
    { materia: "Matemáticas", grado: "10", dificultad: "dificil", pregunta: "Al despejar $x$ de la ecuación $\\log_{2}(x) - \\log_{2}(3) = 1$, se obtiene:", opciones: ["$x = 2$", "$x = 3$", "**$x = 6$**", "$x = 4$"], correcta: 2 },
    { materia: "Matemáticas", grado: "10", dificultad: "dificil", pregunta: "¿Qué tipo de función es $f(x) = \\frac{1}{x^2 - 4}$?", opciones: ["Lineal", "**Racional**", "Polinómica", "Trigonométrica"], correcta: 1 },
    { materia: "Matemáticas", grado: "10", dificultad: "dificil", pregunta: "En una hipérbola con ecuación $\\frac{x^2}{a^2} - \\frac{y^2}{b^2} = 1$, los focos se encuentran en una distancia $c$ del centro, donde $c^2 = $:", opciones: ["$a^2 - b^2$", "**$a^2 + b^2$**", "$a^2/b^2$", "$\\sqrt{a^2 + b^2}$"], correcta: 1 },
    { materia: "Matemáticas", grado: "10", dificultad: "dificil", pregunta: "El valor exacto de $\\cos(15^{\\circ})$ se calcula usando la identidad:", opciones: ["Suma de ángulos.", "Doble ángulo.", "**Diferencia de ángulos (ej. $45^{\\circ} - 30^{\\circ}$).**", "Triple ángulo."], correcta: 2 },
    { materia: "Matemáticas", grado: "10", dificultad: "dificil", pregunta: "La solución del sistema de inecuaciones: $x \\ge 0$ y $y \\ge 0$ y $x + y \\le 4$ es un área de un triángulo con vértices:", opciones: ["$(-4, 0), (0, -4), (0, 0)$", "$(4, 0), (-4, 0), (0, 0)$", "**$(0, 0), (4, 0), (0, 4)$**", "$(1, 1), (2, 2), (0, 0)$"], correcta: 2 },
    { materia: "Matemáticas", grado: "10", dificultad: "dificil", pregunta: "La **forma polar** del número complejo $z = -1 + i$ es:", opciones: ["$\\sqrt{2} \\text{cis}(45^{\\circ})$", "$1 \\text{cis}(135^{\\circ})$", "**$\\sqrt{2} \\text{cis}(135^{\\circ})$**", "$2 \\text{cis}(225^{\\circ})$"], correcta: 2 },
    { materia: "Matemáticas", grado: "10", dificultad: "dificil", pregunta: "¿Cuál es la **ecuación paramétrica** que describe un movimiento circular con radio $3$?", opciones: ["$x = t, y = 3t$", "**$x = 3\\cos(t), y = 3\\text{sen}(t)$**", "$x = 3t^2, y = 3t$", "$x + y = 3$"], correcta: 1 },
    { materia: "Matemáticas", grado: "10", dificultad: "dificil", pregunta: "La ecuación $\\cos(x) = 2$ no tiene solución porque el **rango** de la función $\\cos(x)$ es:", opciones: ["$[0, 1]$", "$[0, \\infty)$", "**$[-1, 1]$**", "$[0, 2]$"], correcta: 2 },
    { materia: "Matemáticas", grado: "10", dificultad: "dificil", pregunta: "La recta **perpendicular** a $y = 3x + 5$ debe tener una pendiente de:", opciones: ["3", "-3", "**$-1/3$**", "$1/3$"], correcta: 2 },
    { materia: "Matemáticas", grado: "10", dificultad: "dificil", pregunta: "La transformación de $\\sec^2(\\theta) - 1$ es igual a:", opciones: ["$\\sin^2(\\theta)$", "$\\cos^2(\\theta)$", "**$\\tan^2(\\theta)$**", "$\\csc^2(\\theta)$"], correcta: 2 },
    { materia: "Matemáticas", grado: "10", dificultad: "dificil", pregunta: "El lugar geométrico de los puntos cuya suma de distancias a dos puntos fijos (focos) es constante se llama:", opciones: ["Parábola", "Hipérbola", "**Elipse**", "Circunferencia"], correcta: 2 },
    { materia: "Matemáticas", grado: "10", dificultad: "dificil", pregunta: "En un triángulo con lados $a=2, b=3$ y $c=4$, para hallar el ángulo opuesto a $c$ se usa la Ley del Coseno, obteniendo $\\cos(\\gamma) = $:", opciones: ["$1/2$", "$1/4$", "**$-1/4$**", "$0$"], correcta: 2 },
    { materia: "Matemáticas", grado: "10", dificultad: "dificil", pregunta: "Si $f(x) = x^3$, la función **inversa** $f^{-1}(x)$ es:", opciones: ["$1/x^3$", "$3x$", "**$\\sqrt[3]{x}$**", "$x^{-3}$"], correcta: 2 },
    { materia: "Matemáticas", grado: "10", dificultad: "dificil", pregunta: "El valor de $\\text{sen}(2A)$ se expande a:", opciones: ["$\\text{sen}(A)\\cos(A)$", "$\\cos^2(A) - \\text{sen}^2(A)$", "**$2\\text{sen}(A)\\cos(A)$**", "$\\frac{2\\tan(A)}{1 + \\tan^2(A)}$"], correcta: 2 },
    { materia: "Matemáticas", grado: "10", dificultad: "dificil", pregunta: "La **directriz** es una línea recta fundamental para la definición de la:", opciones: ["Elipse", "Circunferencia", "**Parábola**", "Hipérbola"], correcta: 2 },
    { materia: "Matemáticas", grado: "10", dificultad: "dificil", pregunta: "¿Cuántas soluciones tiene la ecuación $\\text{tan}^2(x) - 1 = 0$ en el intervalo $[0^{\\circ}, 360^{\\circ})$?", opciones: ["1", "2", "3", "**4**"], correcta: 3 }, // 45, 135, 225, 315
    { materia: "Matemáticas", grado: "10", dificultad: "dificil", pregunta: "Una **cónica** se obtiene al cortar un cono con un plano. ¿Qué se obtiene si el plano es paralelo a la generatriz?", opciones: ["Elipse", "Circunferencia", "**Parábola**", "Hipérbola"], correcta: 2 },

    // ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    // LENGUA CASTELLANA - GRADO 10 - FÁCIL (20 Preguntas: Barroco/Neoclasicismo Introducción)
    // ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    { materia: "Lengua Castellana", grado: "10", dificultad: "facil", pregunta: "¿Qué movimiento literario se caracteriza por el **contraste, la exageración y el pesimismo** (Desengaño)?", opciones: ["Romanticismo", "**Barroco**", "Neoclasicismo", "Renacimiento"], correcta: 1 },
    { materia: "Lengua Castellana", grado: "10", dificultad: "facil", pregunta: "El objetivo principal del **Neoclasicismo** fue:", opciones: ["La expresión de sentimientos.", "**La razón, la claridad y la didáctica (enseñanza).**", "El caos y la oscuridad.", "La libertad total de forma."], correcta: 1 },
    { materia: "Lengua Castellana", grado: "10", dificultad: "facil", pregunta: "La figura literaria que consiste en la **oposición de dos ideas** (Ejemplo: *es tan corto el amor, y tan largo el olvido*) es:", opciones: ["Metáfora", "Hipérbole", "**Antítesis**", "Anáfora"], correcta: 2 },
    { materia: "Lengua Castellana", grado: "10", dificultad: "facil", pregunta: "El género más cultivado durante el Neoclasicismo, usado para la enseñanza moral, fue:", opciones: ["La Novela", "**El Ensayo / La Fábula**", "La Poesía Lírica", "El Teatro Épico"], correcta: 1 },
    { materia: "Lengua Castellana", grado: "10", dificultad: "facil", pregunta: "El escritor español conocido por su obra *El ingenioso hidalgo Don Quijote de la Mancha* es:", opciones: ["Lope de Vega", "**Miguel de Cervantes Saavedra**", "Francisco de Quevedo", "Tirso de Molina"], correcta: 1 },
    { materia: "Lengua Castellana", grado: "10", dificultad: "facil", pregunta: "¿Cuál es el vicio del lenguaje que consiste en repetir sonidos al inicio de las palabras (*ejemplo: Pedro Pérez partió*)?", opciones: ["Anáfora", "**Aliteración**", "Redundancia", "Cacofonía"], correcta: 1 },
    { materia: "Lengua Castellana", grado: "10", dificultad: "facil", pregunta: "En la oración compuesta, el nexo '**aunque**' introduce una proposición:", opciones: ["Causal", "Temporal", "Condicional", "**Concesiva**"], correcta: 3 },
    { materia: "Lengua Castellana", grado: "10", dificultad: "facil", pregunta: "El **'Objeto Directo'** de la oración es el elemento que recibe la acción del verbo de forma:", opciones: ["Indirecta", "**Directa**", "Circunstancial", "Predicativa"], correcta: 1 },
    { materia: "Lengua Castellana", grado: "10", dificultad: "facil", pregunta: "El objetivo del **'Argumento de Causa-Efecto'** en un ensayo es:", opciones: ["Apelar a los sentimientos.", "**Establecer una relación lógica entre un fenómeno y sus consecuencias.**", "Citar a un experto.", "Describir un objeto."], correcta: 1 },
    { materia: "Lengua Castellana", grado: "10", dificultad: "facil", pregunta: "El Barroco se desarrolló en España durante el llamado:", opciones: ["Siglo de Oro.", "**Siglo XVII (y parte del XVIII).**", "Siglo de las Luces.", "Siglo XIX."], correcta: 1 },
    { materia: "Lengua Castellana", grado: "10", dificultad: "facil", pregunta: "La oración 'El árbol fue talado **por el leñador**' está en voz:", opciones: ["Activa", "**Pasiva**", "Refleja", "Nominal"], correcta: 1 },
    { materia: "Lengua Castellana", grado: "10", dificultad: "facil", pregunta: "La palabra '**cuando**' puede funcionar como un nexo de proposición subordinada:", opciones: ["Sustantiva", "Adjetiva", "**Adverbial Temporal**", "Coordinada"], correcta: 2 },
    { materia: "Lengua Castellana", grado: "10", dificultad: "facil", pregunta: "La figura literaria que consiste en una **exageración desmedida** (Ejemplo: *lloró un río de lágrimas*) es:", opciones: ["Símil", "Metáfora", "Antítesis", "**Hipérbole**"], correcta: 3 },
    { materia: "Lengua Castellana", grado: "10", dificultad: "facil", pregunta: "El **'Quien'** o **'Quienes'** son pronombres relativos que siempre refieren a:", opciones: ["Cosas", "**Personas**", "Lugares", "Tiempo"], correcta: 1 },
    { materia: "Lengua Castellana", grado: "10", dificultad: "facil", pregunta: "¿Qué tipo de texto es un **Tratado Científico** o una **Enciclopedia** (Neoclasicismo)?", opciones: ["Lírico", "Narrativo Ficticio", "**Expositivo-Didáctico**", "Dramático"], correcta: 2 },
    { materia: "Lengua Castellana", grado: "10", dificultad: "facil", pregunta: "El **'Sujeto Tácito'** en una oración es aquel que:", opciones: ["No existe.", "**Se omite, pero se deduce por la forma verbal (ej. 'Comimos' -> 'Nosotros').**", "Es muy largo.", "Funciona como Objeto Directo."], correcta: 1 },
    { materia: "Lengua Castellana", grado: "10", dificultad: "facil", pregunta: "La principal crítica del Barroco se centra en:", opciones: ["La belleza.", "La fe.", "**La vanidad de la vida y el paso del tiempo.**", "La razón humana."], correcta: 2 },
    { materia: "Lengua Castellana", grado: "10", dificultad: "facil", pregunta: "El uso de la palabra '**apenas**' en una oración subordinada introduce una idea de:", opciones: ["Lugar", "Modo", "Causa", "**Tiempo**"], correcta: 3 },
    { materia: "Lengua Castellana", grado: "10", dificultad: "facil", pregunta: "La **'Ironía'** consiste en:", opciones: ["Exagerar una idea.", "**Decir lo contrario de lo que se piensa, con tono de burla.**", "Usar palabras cultas.", "Repetir una palabra."], correcta: 1 },
    { materia: "Lengua Castellana", grado: "10", dificultad: "facil", pregunta: "La tendencia barroca que se enfoca en la **forma y el uso excesivo de cultismos** es el:", opciones: ["Conceptismo", "**Culteranismo**", "Neoclasicismo", "Misticismo"], correcta: 1 },

    // ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    // LENGUA CASTELLANA - GRADO 10 - MEDIA (20 Preguntas: Figuras y Sintaxis Intermedia)
    // ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    { materia: "Lengua Castellana", grado: "10", dificultad: "media", pregunta: "La figura literaria conocida como '**Retruécano**' se basa en:", opciones: ["La repetición de una palabra.", "**Intercambiar las funciones sintácticas de dos oraciones para contrastar ('ni son todos los que están, ni están todos los que son').**", "Una comparación.", "Una pregunta retórica."], correcta: 1 },
    { materia: "Lengua Castellana", grado: "10", dificultad: "media", pregunta: "En la oración 'La casa **donde vivo** es grande', la proposición subordinada funciona como:", opciones: ["Sustantivo", "Adverbio", "**Adjetivo (modificador del sustantivo 'casa').**", "Verbo"], correcta: 2 },
    { materia: "Lengua Castellana", grado: "10", dificultad: "media", pregunta: "El movimiento barroco conocido como **'Conceptismo'** se centra en:", opciones: ["La belleza formal.", "**La sutileza del pensamiento y la agudeza conceptual.**", "La sencillez.", "La razón y la didáctica."], correcta: 1 },
    { materia: "Lengua Castellana", grado: "10", dificultad: "media", pregunta: "El nexo que introduce una proposición subordinada **sustantiva** de Objeto Directo es:", opciones: ["como", "cuando", "**que (precedido de verbo de decir/pensar)**", "porque"], correcta: 2 },
    { materia: "Lengua Castellana", grado: "10", dificultad: "media", pregunta: "La figura literaria '**Perífrasis**' consiste en:", opciones: ["La eliminación de palabras.", "El uso de una palabra por otra.", "**Usar un rodeo de palabras para referirse a algo.**", "La repetición de palabras."], correcta: 2 },
    { materia: "Lengua Castellana", grado: "10", dificultad: "media", pregunta: "La oración 'El examen **que hiciste** es importante' se llama **compleja** porque:", opciones: ["Es muy larga.", "**Contiene más de un verbo y una proposición subordinada.**", "Tiene Objeto Directo.", "El sujeto está oculto."], correcta: 1 },
    { materia: "Lengua Castellana", grado: "10", dificultad: "media", pregunta: "El autor barroco conocido por su estilo culterano, lleno de hipérbaton y cultismos, fue:", opciones: ["Francisco de Quevedo (Conceptista).", "**Luis de Góngora y Argote (Culterano).**", "Calderón de la Barca.", "Lope de Vega."], correcta: 1 },
    { materia: "Lengua Castellana", grado: "10", dificultad: "media", pregunta: "El **'Complemento Agente'** en la voz pasiva ('fue escrito *por el autor*') se convierte en la voz activa en:", opciones: ["Objeto Indirecto", "**Sujeto**", "Objeto Directo", "Complemento Circunstancial"], correcta: 1 },
    { materia: "Lengua Castellana", grado: "10", dificultad: "media", pregunta: "En el Neoclasicismo, la **'Regla de las tres unidades'** (tiempo, lugar, acción) es fundamental para el género:", opciones: ["Lírico", "Narrativo (Novela)", "**Dramático (Teatro)**", "Ensayo"], correcta: 2 },
    { materia: "Lengua Castellana", grado: "10", dificultad: "media", pregunta: "El nexo '**con tal que**' introduce una proposición subordinada de tipo:", opciones: ["Causal", "Concesiva", "**Condicional**", "Final"], correcta: 2 },
    { materia: "Lengua Castellana", grado: "10", dificultad: "media", pregunta: "La figura literaria conocida como '**Encabalgamiento**' se produce cuando:", opciones: ["Se repite el primer verso.", "**El sentido de un verso se completa en el verso siguiente.**", "Se usa una palabra opuesta.", "Se exagera una idea."], correcta: 1 },
    { materia: "Lengua Castellana", grado: "10", dificultad: "media", pregunta: "El fenómeno sintáctico donde la subordinada sustantiva funciona como el sujeto de la oración principal es:", opciones: ["Aposición", "Objeto Directo", "**Sujeto de la Principal (ej. *Me gusta *que sonrías*).**", "Atributo"], correcta: 2 },
    { materia: "Lengua Castellana", grado: "10", dificultad: "media", pregunta: "La diferencia principal entre la **Novela Barroca** y la **Novela Neoclásica** es:", opciones: ["La extensión.", "**Barroca: pesimista, compleja; Neoclásica: didáctica, sencilla.**", "El tema (amoroso vs. guerrero).", "El uso de verso o prosa."], correcta: 1 },
    { materia: "Lengua Castellana", grado: "10", dificultad: "media", pregunta: "La figura literaria que consiste en la omisión de un elemento gramatical que se sobreentiende (ejemplo: *Si yo (tengo) un perro, tú un gato*) es:", opciones: ["Hipérbaton", "**Elipsis**", "Pleonasmo", "Etopeya"], correcta: 1 },
    { materia: "Lengua Castellana", grado: "10", dificultad: "media", pregunta: "La forma verbal '**Hubiera dicho**' pertenece al modo:", opciones: ["Indicativo", "**Subjuntivo (Pretérito Pluscuamperfecto).**", "Imperativo", "Condicional"], correcta: 1 },
    { materia: "Lengua Castellana", grado: "10", dificultad: "media", pregunta: "El término '**Locus Amoenus**' (lugar agradable) es característico del Renacimiento, pero fue **rechazado/distorsionado** por el Barroco para reflejar:", opciones: ["La grandeza del paisaje.", "El amor eterno.", "**El *Ubi Sunt* (dónde están) y el pesimismo.**", "La razón y el orden."], correcta: 2 },
    { materia: "Lengua Castellana", grado: "10", dificultad: "media", pregunta: "En la oración 'Se venden libros', el '**Se**' indica una voz:", opciones: ["Pasiva perifrástica.", "Activa.", "**Pasiva Refleja (o Impersonal).**", "Nominal."], correcta: 2 },
    { materia: "Lengua Castellana", grado: "10", dificultad: "media", pregunta: "La **'fase del desarrollo'** en un texto expositivo-argumentativo es donde se presentan:", opciones: ["El resumen.", "**Los argumentos, datos y pruebas que apoyan la tesis.**", "La tesis solamente.", "Las conclusiones."], correcta: 1 },
    { materia: "Lengua Castellana", grado: "10", dificultad: "media", pregunta: "El nexo que introduce una proposición subordinada **adverbial final** es:", opciones: ["tan... que", "si", "por más que", "**para que / a fin de que**"], correcta: 3 },
    { materia: "Lengua Castellana", grado: "10", dificultad: "media", pregunta: "El autor de la obra de teatro *La vida es sueño* (Barroco), que reflexiona sobre la libertad y el destino, es:", opciones: ["Miguel de Cervantes.", "Francisco de Quevedo.", "**Pedro Calderón de la Barca.**", "Lope de Vega."], correcta: 2 },

    // ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    // LENGUA CASTELLANA - GRADO 10 - DIFÍCIL (20 Preguntas: Retórica y Análisis Sintáctico Profundo)
    // ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    { materia: "Lengua Castellana", grado: "10", dificultad: "dificil", pregunta: "¿Qué figura literaria es: '**Cual** si de noche un cielo **negro y roto** a un tiempo se cayese?' (Uso de 'cual' para comparar, y adjetivo oscuro)", opciones: ["Metáfora impura", "**Símil complejo / Adjetivación intensiva**", "Paradoja", "Antítesis"], correcta: 1 },
    { materia: "Lengua Castellana", grado: "10", dificultad: "dificil", pregunta: "La oración 'Se **le** dio el premio a Juan' contiene un vicio del lenguaje llamado:", opciones: ["Laísmo", "Dequeísmo", "**Leísmo (uso de *le* por *lo* si es OD masculino)**", "Cacofonía"], correcta: 2 },
    { materia: "Lengua Castellana", grado: "10", dificultad: "dificil", pregunta: "La figura retórica que consiste en alterar el orden lógico de las palabras en una oración (Ejemplo: *Volverán las oscuras golondrinas en tu balcón sus nidos a colgar*) se llama:", opciones: ["Anáfora", "Elipsis", "**Hipérbaton**", "Paradoja"], correcta: 2 },
    { materia: "Lengua Castellana", grado: "10", dificultad: "dificil", pregunta: "El término **'Culteranismo'** deriva del latín: la *culta latinidad*, y busca imitar su:", opciones: ["Pensamiento.", "Temática.", "**Sintaxis y vocabulario (cultismos).**", "Métrica."], correcta: 2 },
    { materia: "Lengua Castellana", grado: "10", dificultad: "dificil", pregunta: "El nexo '**mientras que**' en una oración coordinada se usa para expresar:", opciones: ["Suma", "**Contraste o simultaneidad**", "Consecuencia", "Explicación"], correcta: 1 },
    { materia: "Lengua Castellana", grado: "10", dificultad: "dificil", pregunta: "La proposición subordinada en la oración 'El temor de **que fracase** lo atormenta' funciona como:", opciones: ["Sujeto", "Objeto Directo", "**Complemento del Nombre**", "Atributo"], correcta: 2 },
    { materia: "Lengua Castellana", grado: "10", dificultad: "dificil", pregunta: "La forma verbal '**Si hubiese llegado**' expresa:", opciones: ["Una acción real.", "**Una condición irreal o imposible del pasado.**", "Una orden.", "Una duda presente."], correcta: 1 },
    { materia: "Lengua Castellana", grado: "10", dificultad: "dificil", pregunta: "El vicio de la construcción que consiste en el uso innecesario de un pronombre (Ejemplo: '*Me* se cayó') se llama:", opciones: ["Anacoluto", "**Pleonasmo (gramatical)**", "Anfibología", "Barbarismo"], correcta: 1 },
    { materia: "Lengua Castellana", grado: "10", dificultad: "dificil", pregunta: "El tipo de argumento que apela a los sentimientos o emociones del receptor (pathos) es el argumento:", opciones: ["De Autoridad", "Lógico", "De Analogía", "**Emocional o *Ad Misericordiam***"], correcta: 3 },
    { materia: "Lengua Castellana", grado: "10", dificultad: "dificil", pregunta: "La oración '**El que vino tarde** no aprobó' contiene una subordinada sustantiva de función:", opciones: ["Objeto Indirecto", "**Sujeto**", "Complemento Circunstancial", "Predicado"], correcta: 1 },
    { materia: "Lengua Castellana", grado: "10", dificultad: "dificil", pregunta: "El nexo '**así que**' introduce una proposición coordinada:", opciones: ["Disyuntiva", "Adversativa", "Copulativa", "**Consecutiva**"], correcta: 3 },
    { materia: "Lengua Castellana", grado: "10", dificultad: "dificil", pregunta: "El concepto de **'Catarsis'** en el teatro (principalmente griego, revivido en Neoclasicismo) se refiere a:", opciones: ["El final feliz.", "**La purificación emocional del espectador a través de la tragedia.**", "El uso de máscaras.", "La comedia."], correcta: 1 },
    { materia: "Lengua Castellana", grado: "10", dificultad: "dificil", pregunta: "El autor de la sátira barroca *Sueños y discursos*, conocido por su ingenio y estilo conceptista, es:", opciones: ["Lope de Vega.", "Cervantes.", "Góngora.", "**Francisco de Quevedo y Villegas.**"], correcta: 3 },
    { materia: "Lengua Castellana", grado: "10", dificultad: "dificil", pregunta: "La figura literaria que consiste en la repetición de una palabra o frase al inicio de varios versos o frases es:", opciones: ["Epífora", "**Anáfora**", "Paralelismo", "Reduplicación"], correcta: 1 },
    { materia: "Lengua Castellana", grado: "10", dificultad: "dificil", pregunta: "En la oración 'Juan y María, **que son amigos**, llegaron', la proposición subordinada es:", opciones: ["Sustantiva (OD).", "**Adjetiva (Explicativa o no restrictiva).**", "Adverbial de modo.", "Coordinada."], correcta: 1 },
    { materia: "Lengua Castellana", grado: "10", dificultad: "dificil", pregunta: "La diferencia entre la voz pasiva perifrástica ('ser + participio') y la pasiva refleja ('se + verbo') es:", opciones: ["Son iguales.", "**Perifrástica: indica agente; Refleja: omite el agente o lo generaliza.**", "Perifrástica: solo en pasado; Refleja: solo en presente.", "La pasiva refleja no tiene complemento agente."], correcta: 1 },
    { materia: "Lengua Castellana", grado: "10", dificultad: "dificil", pregunta: "La función del lenguaje que se centra en el **canal de comunicación** para verificar que funcione (Ejemplo: *¿Me oyes?*) es la función:", opciones: ["Emotiva", "Referencial", "Poética", "**Fática**"], correcta: 3 },
    { materia: "Lengua Castellana", grado: "10", dificultad: "dificil", pregunta: "El término '**Topos**' en retórica se refiere a:", opciones: ["Una figura literaria.", "Un vicio del lenguaje.", "**Un lugar común o tema recurrente en la literatura.**", "Un tipo de rima."], correcta: 2 },
    { materia: "Lengua Castellana", grado: "10", dificultad: "dificil", pregunta: "El nexo '**como**' puede introducir proposiciones subordinadas de modo, pero si introduce una oración al inicio ('*Como llovía*, me quedé') es de tipo:", opciones: ["Temporal", "**Causal (Explicativa)**", "Condicional", "Comparativa"], correcta: 1 },
    { materia: "Lengua Castellana", grado: "10", dificultad: "dificil", pregunta: "La **'Tópica'** en la Retórica es el arte de:", opciones: ["Argumentar bien.", "**Hallar los argumentos apropiados para un tema.**", "Escribir poesía.", "Corregir la sintaxis."], correcta: 1 },

    // ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    // INGLÉS B2 - GRADO 10 - FÁCIL (20 Preguntas: Tiempos Perfectos Continuos y Condicionales Intermedios)
    // ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    { materia: "Inglés B2", grado: "10", dificultad: "facil", pregunta: "Complete: 'She's tired because she **has been running** (Present Perfect Continuous) ___ three hours.'", opciones: ["since", "**for**", "ago", "yet"], correcta: 1 },
    { materia: "Inglés B2", grado: "10", dificultad: "facil", pregunta: "Form the **Third Conditional**: 'If I had had more time, I ___ visited the museum.'", opciones: ["will have", "would visit", "wouldn't visit", "**would have**"], correcta: 3 },
    { materia: "Inglés B2", grado: "10", dificultad: "facil", pregunta: "Complete: 'I **will have been working** (Future Perfect Continuous) ___ five years by the time I retire.'", opciones: ["since", "**for**", "at", "until"], correcta: 1 },
    { materia: "Inglés B2", grado: "10", dificultad: "facil", pregunta: "Which modal verb expresses a **past possibility** (but it didn't happen)?", opciones: ["must", "**could have**", "should", "will have"], correcta: 1 },
    { materia: "Inglés B2", grado: "10", dificultad: "facil", pregunta: "Change to **Passive Voice (Present Perfect)**: 'They have finished the project.'", opciones: ["The project is finished.", "**The project has been finished.**", "The project was finished.", "The project had been finished."], correcta: 1 },
    { materia: "Inglés B2", grado: "10", dificultad: "facil", pregunta: "The phrasal verb '**get over**' means:", opciones: ["continuar", "**recuperarse de una enfermedad o problema**", "escapar", "retrasar"], correcta: 1 },
    { materia: "Inglés B2", grado: "10", dificultad: "facil", pregunta: "Which word is a connector of **contrast** (meaning *without the help of*)?", opciones: ["because of", "**despite / in spite of**", "as a result", "consequently"], correcta: 1 },
    { materia: "Inglés B2", grado: "10", dificultad: "facil", pregunta: "Complete the sentence: 'I wish I **didn't say** that!' (Expressing a **past regret**).", opciones: ["didn't say", "don't say", "**hadn't said**", "wouldn't say"], correcta: 2 },
    { materia: "Inglés B2", grado: "10", dificultad: "facil", pregunta: "The adjective '**overwhelmed**' means:", opciones: ["aburrido", "tranquilo", "**abrumado/agobiado**", "entusiasmado"], correcta: 2 },
    { materia: "Inglés B2", grado: "10", dificultad: "facil", pregunta: "Change to **Passive Voice (Future Simple)**: 'I will write a letter.'", opciones: ["A letter wrote.", "**A letter will be written.**", "A letter is written.", "A letter will writing."], correcta: 1 },
    { materia: "Inglés B2", grado: "10", dificultad: "facil", pregunta: "Which structure expresses a **past obligation that was not met** (Ejemplo: *I *should have studied* more*)?", opciones: ["must have done", "**should have done**", "might have done", "would have done"], correcta: 1 },
    { materia: "Inglés B2", grado: "10", dificultad: "facil", pregunta: "The verb 'to avoid' is typically followed by a:", opciones: ["to + infinitive", "**gerund (-ing)**", "simple past", "modal verb"], correcta: 1 },
    { materia: "Inglés B2", grado: "10", dificultad: "facil", pregunta: "Complete the sentence with an **Adverb of Manner**: 'She speaks English very ___.'", opciones: ["fluent", "**fluently**", "fluency", "more fluent"], correcta: 1 },
    { materia: "Inglés B2", grado: "10", dificultad: "facil", pregunta: "The difference between 'advice' (uncountable) and 'tip' (countable) is a matter of:", opciones: ["tense", "**countability**", "formality", "origin"], correcta: 1 },
    { materia: "Inglés B2", grado: "10", dificultad: "facil", pregunta: "The phrasal verb '**call off**' means:", opciones: ["llamar por teléfono", "visitar", "**cancelar**", "retrasar"], correcta: 2 },
    { materia: "Inglés B2", grado: "10", dificultad: "facil", pregunta: "In the **Second Conditional**, the verb in the 'if clause' is in the:", opciones: ["present simple", "**past simple**", "future simple", "present perfect"], correcta: 1 },
    { materia: "Inglés B2", grado: "10", dificultad: "facil", pregunta: "Complete: 'This is the restaurant **where** (Relative Adverb) ___ we met.'", opciones: ["who", "which", "**where**", "whose"], correcta: 2 },
    { materia: "Inglés B2", grado: "10", dificultad: "facil", pregunta: "The structure 'Subject + **Can't Have + Past Participle**' expresses:", opciones: ["strong certainty", "**strong disbelief/impossibility in the past**", "advice", "permission"], correcta: 1 },
    { materia: "Inglés B2", grado: "10", dificultad: "facil", pregunta: "Which sentence uses the **Causative Verb** correctly?", opciones: ["I have fix my car.", "I have my car fixed.", "**I had my car fixed.**", "I had fix my car."], correcta: 2 },
    { materia: "Inglés B2", grado: "10", dificultad: "facil", pregunta: "The word '**therefore**' is a connector of:", opciones: ["contrast", "time", "cause", "**result/consequence**"], correcta: 3 },

    // ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    // INGLÉS B2 - GRADO 10 - MEDIA (20 Preguntas: Modales de Deducción, Condicionales Mixtos, Conectores)
    // ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    { materia: "Inglés B2", grado: "10", dificultad: "media", pregunta: "Complete the **Mixed Conditional (Past-Present)**: 'If I had studied harder (past), I ___ pass the exam now (present).'", opciones: ["will", "**would**", "would have", "had"], correcta: 1 },
    { materia: "Inglés B2", grado: "10", dificultad: "media", pregunta: "Change to **Reported Question**: 'Did you see the movie?'", opciones: ["He asked me did I see the movie.", "He asked me if I saw the movie.", "**He asked me if I had seen the movie.**", "He asked me if I would see the movie."], correcta: 2 },
    { materia: "Inglés B2", grado: "10", dificultad: "media", pregunta: "Which modal verb expresses **strong deduction/near certainty in the past** (Ejemplo: *She *must have left* early*)?", opciones: ["might have", "could have", "**must have**", "should have"], correcta: 2 },
    { materia: "Inglés B2", grado: "10", dificultad: "media", pregunta: "The phrasal verb '**take after**' means:", opciones: ["quitar", "aprender", "**parecerse a (un familiar)**", "continuar"], correcta: 2 },
    { materia: "Inglés B2", grado: "10", dificultad: "media", pregunta: "Which word is a connector of **reason/cause** (meaning *since*)?", opciones: ["although", "in spite of", "**as**", "however"], correcta: 2 },
    { materia: "Inglés B2", grado: "10", dificultad: "media", pregunta: "Complete: 'I regret **not going** (Regret + Gerund) ___ to the party.'", opciones: ["to go", "go", "**going**", "went"], correcta: 2 },
    { materia: "Inglés B2", grado: "10", dificultad: "media", pregunta: "Change to **Passive Voice (Past Continuous)**: 'They were building a house.'", opciones: ["A house was built.", "A house is being built.", "**A house was being built.**", "A house had been built."], correcta: 2 },
    { materia: "Inglés B2", grado: "10", dificultad: "media", pregunta: "The structure 'Subject + **Would Prefer + to + Verb**' expresses:", opciones: ["a past habit", "**a specific preference**", "a general preference", "a strong deduction"], correcta: 1 },
    { materia: "Inglés B2", grado: "10", dificultad: "media", pregunta: "The word '**subsequently**' is a formal synonym for:", opciones: ["simultaneously", "nevertheless", "**afterwards/later**", "in fact"], correcta: 2 },
    { materia: "Inglés B2", grado: "10", dificultad: "media", pregunta: "Which modal verb expresses **a possibility/weak deduction in the past**?", opciones: ["must have", "**might have**", "couldn't have", "should have"], correcta: 1 },
    { materia: "Inglés B2", grado: "10", dificultad: "media", pregunta: "The structure 'I wish I **were**...' expresses:", opciones: ["a wish about the future", "**a wish about the present (hypothetical/unreal)**", "a wish about the past", "a strong regret"], correcta: 1 },
    { materia: "Inglés B2", grado: "10", dificultad: "media", pregunta: "Complete the sentence with a **Quantifier**: 'There are **too many** (Excessive Countable) ___ books here.'", opciones: ["too much", "little", "**too many**", "a few"], correcta: 2 },
    { materia: "Inglés B2", grado: "10", dificultad: "media", pregunta: "The phrase '**as long as**' is a formal way to express:", opciones: ["time", "result", "**condition**", "contrast"], correcta: 2 },
    { materia: "Inglés B2", grado: "10", dificultad: "media", pregunta: "In **Reported Speech (Modal)**, 'I can swim' changes to 'He said that he ___ swim.'", opciones: ["can", "will can", "**could**", "may"], correcta: 2 },
    { materia: "Inglés B2", grado: "10", dificultad: "media", pregunta: "The idiom '**miss the boat**' means:", opciones: ["perder el tren", "**perder la oportunidad**", "navegar", "llegar tarde"], correcta: 1 },
    { materia: "Inglés B2", grado: "10", dificultad: "media", pregunta: "The word '**disappointed**' is an adjective expressing:", opciones: ["excitement", "**sadness/failure to meet expectations**", "anger", "fear"], correcta: 1 },
    { materia: "Inglés B2", grado: "10", dificultad: "media", pregunta: "Complete the sentence: 'She is **used to getting up** (Be used to + Gerund) ___ early.'", opciones: ["used to get up", "use to get up", "**used to getting up**", "get up"], correcta: 2 },
    { materia: "Inglés B2", grado: "10", dificultad: "media", pregunta: "Change to **Passive Voice (Modal)**: 'You should do your homework.'", opciones: ["Your homework should be do.", "**Your homework should be done.**", "Your homework should done.", "Your homework is done."], correcta: 1 },
    { materia: "Inglés B2", grado: "10", dificultad: "media", pregunta: "The structure 'Subject + **Would rather + Subject + Past Simple**' expresses:", opciones: ["a preference for yourself", "**a preference for someone else**", "a past regret", "a necessity"], correcta: 1 },
    { materia: "Inglés B2", grado: "10", dificultad: "media", pregunta: "The verb 'to postpone' is typically followed by a:", opciones: ["to + infinitive", "**gerund (-ing)**", "simple past", "modal verb"], correcta: 1 },

    // ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    // INGLÉS B2 - GRADO 10 - DIFÍCIL (20 Preguntas: Inversión, Condicionales Avanzados, Causativos)
    // ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    { materia: "Inglés B2", grado: "10", dificultad: "dificil", pregunta: "Which sentence uses the **Causative Verb** correctly with 'get'?", opciones: ["I get fix my car.", "I get my car fix.", "I get fixed my car.", "**I got my car fixed.**"], correcta: 3 },
    { materia: "Inglés B2", grado: "10", dificultad: "dificil", pregunta: "Which **Inversion** is correct: '___ had I left the house when it started to rain.'", opciones: ["Never", "Little", "**Hardly/Scarcely**", "Often"], correcta: 2 },
    { materia: "Inglés B2", grado: "10", dificultad: "dificil", pregunta: "The phrase '**to turn a blind eye**' (idiom) means:", opciones: ["ignorar intencionalmente", "mirar atentamente", "ver muy bien", "**quedarse ciego**"], correcta: 0 },
    { materia: "Inglés B2", grado: "10", dificultad: "dificil", pregunta: "Complete the sentence using the **Infinitive without to**: 'I heard him ___ (**cantar**) the song.' (Verb of perception + bare infinitive)", opciones: ["to sing", "**sing**", "singing", "sang"], correcta: 1 },
    { materia: "Inglés B2", grado: "10", dificultad: "dificil", pregunta: "The **Inversion** of the conditional 'If you should need help...' is:", opciones: ["Should you need help...", "If should you need help...", "**Should you need help...**", "Need you should help..."], correcta: 0 },
    { materia: "Inglés B2", grado: "10", dificultad: "dificil", pregunta: "Change to **Passive Voice (Future Perfect)**: 'They will have built the bridge by next year.'", opciones: ["The bridge will be built.", "The bridge is being built.", "**The bridge will have been built.**", "The bridge had been built."], correcta: 2 },
    { materia: "Inglés B2", grado: "10", dificultad: "dificil", pregunta: "The word '**albeit**' is a formal synonym for:", opciones: ["therefore", "**although**", "in addition to", "consequently"], correcta: 1 },
    { materia: "Inglés B2", grado: "10", dificultad: "dificil", pregunta: "The modal structure '**Needn't Have + Past Participle**' expresses:", opciones: ["past obligation", "**past action was unnecessary**", "past ability", "future possibility"], correcta: 1 },
    { materia: "Inglés B2", grado: "10", dificultad: "dificil", pregunta: "The **Inversion** of the conditional 'If I had known...' (Third Conditional) is:", opciones: ["If had I known...", "**Had I known...**", "Did I know...", "I had known..."], correcta: 1 },
    { materia: "Inglés B2", grado: "10", dificultad: "dificil", pregunta: "Complete the **Mixed Conditional (Present-Past)**: 'If I were taller (present), I ___ been a better basketball player (past).'", opciones: ["would be", "**would have been**", "will be", "had been"], correcta: 1 },
    { materia: "Inglés B2", grado: "10", dificultad: "dificil", pregunta: "The phrasal verb '**put up with**' means:", opciones: ["construir", "colocar", "inventar", "**tolerar / aguantar**"], correcta: 3 },
    { materia: "Inglés B2", grado: "10", dificultad: "dificil", pregunta: "The use of the word '**so**' followed by an adjective/adverb (Ejemplo: *so fast that...*) is a connector of:", opciones: ["reason", "contrast", "**result/intensity**", "time"], correcta: 2 },
    { materia: "Inglés B2", grado: "10", dificultad: "dificil", pregunta: "Which sentence uses the **Causative Verb** 'make' correctly?", opciones: ["He made me to clean the room.", "**He made me clean the room.**", "He made the room cleaned.", "He made to clean the room."], correcta: 1 },
    { materia: "Inglés B2", grado: "10", dificultad: "dificil", pregunta: "The phrase '**only when**' followed by a clause often triggers:", opciones: ["a comma", "a simple past", "**inversion (auxiliary verb + subject)**", "a passive voice"], correcta: 2 },
    { materia: "Inglés B2", grado: "10", dificultad: "dificil", pregunta: "The use of 'I wish I **hadn't done**...' expresses a strong:", opciones: ["present desire", "future hope", "**past regret**", "present ability"], correcta: 2 },
    { materia: "Inglés B2", grado: "10", dificultad: "dificil", pregunta: "The verb 'to imagine' is typically followed by a:", opciones: ["to + infinitive", "**gerund (-ing)**", "simple past", "modal verb"], correcta: 1 },
    { materia: "Inglés B2", grado: "10", dificultad: "dificil", pregunta: "The word '**consequently**' is a more formal alternative for:", opciones: ["as well as", "because", "**so**", "but"], correcta: 2 },
    { materia: "Inglés B2", grado: "10", dificultad: "dificil", pregunta: "Change to **Passive Voice (Infinitive)**: 'It is important to tell the truth.'", opciones: ["The truth is told.", "The truth is important told.", "**It is important for the truth to be told.**", "The truth is told by it."], correcta: 2 },
    { materia: "Inglés B2", grado: "10", dificultad: "dificil", pregunta: "Which structure is used to express a **general preference**?", opciones: ["I would rather", "I had better", "**I prefer + gerund / to infinitive**", "I would like"], correcta: 2 },
    { materia: "Inglés B2", grado: "10", dificultad: "dificil", pregunta: "The word '**detrimental**' means:", opciones: ["beneficial", "neutral", "**harmful / damaging**", "advantageous"], correcta: 2 },

    // ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    // CULTURA CIUDADANA - GRADO 10 - FÁCIL (20 Preguntas: Ramas del Poder y Derechos Fundamentales)
    // ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    { materia: "Cultura Ciudadana", grado: "10", dificultad: "facil", pregunta: "La **Rama del Poder Público** encargada de hacer las leyes es la:", opciones: ["Ejecutiva", "Judicial", "**Legislativa (Congreso)**", "Organismos de Control"], correcta: 2 },
    { materia: "Cultura Ciudadana", grado: "10", dificultad: "facil", pregunta: "Los **Derechos Humanos de Primera Generación** (DD. HH. Civiles y Políticos) se enfocan en:", opciones: ["Bienestar social.", "**Libertades individuales y participación política.**", "Medio ambiente.", "Paz."], correcta: 1 },
    { materia: "Cultura Ciudadana", grado: "10", dificultad: "facil", pregunta: "¿Cuál es el mecanismo de protección de Derechos Fundamentales en Colombia que debe ser respondido en un plazo máximo de 10 días?", opciones: ["Acción de Cumplimiento", "Acción Popular", "**Acción de Tutela**", "Derecho de Petición"], correcta: 2 },
    { materia: "Cultura Ciudadana", grado: "10", dificultad: "facil", pregunta: "El jefe de la Rama Ejecutiva a nivel nacional es:", opciones: ["El Presidente del Senado.", "El Fiscal General.", "**El Presidente de la República.**", "El Alcalde."], correcta: 2 },
    { materia: "Cultura Ciudadana", grado: "10", dificultad: "facil", pregunta: "El órgano que fiscaliza (controla) el manejo de los recursos y el patrimonio público es la:", opciones: ["Procuraduría General de la Nación.", "Defensoría del Pueblo.", "**Contraloría General de la República.**", "Fiscalía General de la Nación."], correcta: 2 },
    { materia: "Cultura Ciudadana", grado: "10", dificultad: "facil", pregunta: "El concepto de **'Estado de Derecho'** implica que:", opciones: ["El gobernante hace lo que quiere.", "**Todos, incluyendo el gobierno, están sujetos a la ley.**", "Solo el pueblo hace las leyes.", "La ley no aplica al presidente."], correcta: 1 },
    { materia: "Cultura Ciudadana", grado: "10", dificultad: "facil", pregunta: "El organismo de control que vela por la **promoción, el ejercicio y la divulgación de los DD. HH.** es:", opciones: ["Contraloría", "**Defensoría del Pueblo**", "Procuraduría", "Corte Suprema"], correcta: 1 },
    { materia: "Cultura Ciudadana", grado: "10", dificultad: "facil", pregunta: "La **'Constitución Política'** es la norma máxima que garantiza:", opciones: ["El comercio.", "**La estructura del Estado y los derechos fundamentales.**", "La defensa nacional.", "La educación."], correcta: 1 },
    { materia: "Cultura Ciudadana", grado: "10", dificultad: "facil", pregunta: "La **Rama Judicial** está encargada de:", opciones: ["Hacer las leyes.", "Administrar los recursos.", "**Administrar justicia y resolver conflictos.**", "Gobernar el país."], correcta: 2 },
    { materia: "Cultura Ciudadana", grado: "10", dificultad: "facil", pregunta: "El derecho a la **'libertad de expresión'** es un DD. HH. de:", opciones: ["Segunda Generación (Social).", "Tercera Generación (Ambiental).", "**Primera Generación (Civil/Político).**", "Cuarta Generación (Tecnológico)."], correcta: 2 },
    { materia: "Cultura Ciudadana", grado: "10", dificultad: "facil", pregunta: "La **'Iniciativa Popular Normativa'** es un mecanismo para que los ciudadanos propongan:", opciones: ["La revocatoria de un cargo.", "**Proyectos de ley o de acto administrativo.**", "El juzgamiento de un funcionario.", "Un referendo."], correcta: 1 },
    { materia: "Cultura Ciudadana", grado: "10", dificultad: "facil", pregunta: "La **'Procuraduría General de la Nación'** se encarga de vigilar la conducta de los:", opciones: ["Jueces", "**Funcionarios públicos**", "Ciudadanos comunes", "Extranjeros"], correcta: 1 },
    { materia: "Cultura Ciudadana", grado: "10", dificultad: "facil", pregunta: "Los **DD. HH. de Segunda Generación** (DD. HH. Económicos, Sociales y Culturales) protegen derechos como:", opciones: ["El voto.", "La vida.", "**La salud y la educación.**", "El ambiente."], correcta: 2 },
    { materia: "Cultura Ciudadana", grado: "10", dificultad: "facil", pregunta: "El derecho a elegir y ser elegido (voto) es un DD. HH. de tipo:", opciones: ["Civil", "Económico", "**Político**", "Cultural"], correcta: 2 },
    { materia: "Cultura Ciudadana", grado: "10", dificultad: "facil", pregunta: "El **'Derecho de Petición'** es un mecanismo que permite a los ciudadanos:", opciones: ["Demandar a la Rama Ejecutiva.", "**Solicitar información o exponer una consulta respetuosa a las autoridades.**", "Revocar un mandato.", "Crear una nueva ley."], correcta: 1 },
    { materia: "Cultura Ciudadana", grado: "10", dificultad: "facil", pregunta: "La función principal del **'Congreso de la República'** (Rama Legislativa) es:", opciones: ["Gobernar el país.", "**Hacer las leyes, reformar la Constitución y ejercer control político.**", "Juzgar a los ciudadanos.", "Vigilar los recursos."], correcta: 1 },
    { materia: "Cultura Ciudadana", grado: "10", dificultad: "facil", pregunta: "El concepto de **'Democracia Participativa'** promueve:", opciones: ["El aislamiento del ciudadano.", "**La intervención directa del ciudadano en las decisiones públicas.**", "Solo el voto.", "La concentración del poder."], correcta: 1 },
    { materia: "Cultura Ciudadana", grado: "10", dificultad: "facil", pregunta: "El máximo tribunal de la Jurisdicción Ordinaria es la:", opciones: ["Corte Constitucional.", "Consejo de Estado.", "**Corte Suprema de Justicia.**", "Fiscalía."], correcta: 2 },
    { materia: "Cultura Ciudadana", grado: "10", dificultad: "facil", pregunta: "La **'Libertad de Culto'** (elegir o no una religión) es un DD. HH. de:", opciones: ["Tercera Generación.", "**Primera Generación (Civil).**", "Segunda Generación.", "Cuarta Generación."], correcta: 1 },
    { materia: "Cultura Ciudadana", grado: "10", dificultad: "facil", pregunta: "El **'Referendo'** es un mecanismo de participación para que el pueblo apruebe o rechace:", opciones: ["Un nombramiento.", "**Una norma jurídica (Ley, Constitución, Ordenanza, Acuerdo).**", "Una decisión del Presidente.", "Un proyecto de ley."], correcta: 1 },

    // ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    // CULTURA CIUDADANA - GRADO 10 - MEDIA (20 Preguntas: Control, Economía y Participación Compleja)
    // ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    { materia: "Cultura Ciudadana", grado: "10", dificultad: "media", pregunta: "La **'Acción Popular'** (mecanismo judicial) busca la protección de:", opciones: ["Derechos Fundamentales (individuales).", "**Derechos Colectivos y del Ambiente.**", "Derechos Políticos.", "Derechos Económicos."], correcta: 1 },
    { materia: "Cultura Ciudadana", grado: "10", dificultad: "media", pregunta: "Los tres principios fundamentales de la democracia, según Montesquieu, son:", opciones: ["Libertad, Igualdad, Fraternidad.", "Justicia, Equidad, Paz.", "**Separación de Poderes (Ejecutivo, Legislativo, Judicial).**", "Economía, Política, Cultura."], correcta: 2 },
    { materia: "Cultura Ciudadana", grado: "10", dificultad: "media", pregunta: "La **'Acción de Cumplimiento'** se utiliza para exigir a la autoridad:", opciones: ["La protección de un derecho fundamental.", "**El cumplimiento de una Ley o Acto Administrativo.**", "La derogación de una norma.", "La indemnización por un daño."], correcta: 1 },
    { materia: "Cultura Ciudadana", grado: "10", dificultad: "media", pregunta: "Los **'Estados de Excepción'** (Guerra Exterior, Conmoción Interior, Emergencia Económica) son facultades otorgadas al Presidente para:", opciones: ["Crear nuevas ramas del poder.", "**Restringir temporalmente derechos en situaciones graves.**", "Suspender la Constitución permanentemente.", "Eliminar la Rama Legislativa."], correcta: 1 },
    { materia: "Cultura Ciudadana", grado: "10", dificultad: "media", pregunta: "El concepto de **'Bien Común'** se refiere a:", opciones: ["El patrimonio personal de un líder.", "**Aquello que beneficia a toda la sociedad, no solo a un individuo.**", "La riqueza del Estado.", "La propiedad privada."], correcta: 1 },
    { materia: "Cultura Ciudadana", grado: "10", dificultad: "media", pregunta: "La **'Justicia Transicional'** se enfoca en países que salen de un conflicto, buscando:", opciones: ["Solo castigar.", "**Verdad, justicia, reparación y garantías de no repetición.**", "Olvidar el pasado.", "Solo perdonar."], correcta: 1 },
    { materia: "Cultura Ciudadana", grado: "10", dificultad: "media", pregunta: "El **'Cabildo Abierto'** es una instancia para que la ciudadanía participe directamente en el debate sobre asuntos:", opciones: ["Nacionales (Ejecutivo).", "Internacionales (ONU).", "**De interés local (Municipal o Distrital).**", "Judiciales."], correcta: 2 },
    { materia: "Cultura Ciudadana", grado: "10", dificultad: "media", pregunta: "La **'Revocatoria del Mandato'** es un mecanismo que aplica a:", opciones: ["Jueces y Fiscales.", "**Alcaldes y Gobernadores (funcionarios elegidos).**", "Congresistas.", "El Presidente."], correcta: 1 },
    { materia: "Cultura Ciudadana", grado: "10", dificultad: "media", pregunta: "El **'Patrimonio Público'** está compuesto por:", opciones: ["Los bienes de los funcionarios.", "Los bienes privados.", "**Los bienes y recursos del Estado destinados al servicio de la comunidad.**", "Los impuestos."], correcta: 2 },
    { materia: "Cultura Ciudadana", grado: "10", dificultad: "media", pregunta: "El **'Derecho al Trabajo'** y el **'Derecho a la Seguridad Social'** son DD. HH. de:", opciones: ["Primera Generación.", "**Segunda Generación (Económicos y Sociales).**", "Tercera Generación.", "Cuarta Generación."], correcta: 1 },
    { materia: "Cultura Ciudadana", grado: "10", dificultad: "media", pregunta: "La **'Corte Constitucional'** ejerce su función principal a través de:", opciones: ["El Referendo.", "El Cabildo Abierto.", "**El Control de Constitucionalidad (tutelas y acciones).**", "El Control Fiscal."], correcta: 2 },
    { materia: "Cultura Ciudadana", grado: "10", dificultad: "media", pregunta: "El concepto de **'Bipartidismo'** se refiere a un sistema político donde:", opciones: ["Hay muchos partidos.", "**Dos partidos principales dominan el poder político.**", "Hay un solo partido.", "No hay partidos."], correcta: 1 },
    { materia: "Cultura Ciudadana", grado: "10", dificultad: "media", pregunta: "La **'Política Social'** busca principalmente:", opciones: ["El crecimiento económico.", "**La reducción de la desigualdad y la pobreza, y el acceso a servicios esenciales.**", "El aumento de impuestos.", "La privatización de servicios."], correcta: 1 },
    { materia: "Cultura Ciudadana", grado: "10", dificultad: "media", pregunta: "¿Qué organismo es el jefe del Ministerio Público (Control de la Función Pública)?", opciones: ["Defensoría del Pueblo.", "Contraloría.", "**Procuraduría General de la Nación.**", "Fiscalía."], correcta: 2 },
    { materia: "Cultura Ciudadana", grado: "10", dificultad: "media", pregunta: "La **'Soberanía Popular'** se diferencia de la soberanía nacional en que se centra en el poder del:", opciones: ["Gobierno.", "**Pueblo (individuos).**", "Territorio.", "Ejército."], correcta: 1 },
    { materia: "Cultura Ciudadana", grado: "10", dificultad: "media", pregunta: "La **'Acción de Inconstitucionalidad'** es un mecanismo que permite a cualquier ciudadano:", opciones: ["Demandar a un funcionario.", "**Solicitar que una Ley o Acto Administrativo sea declarado contrario a la Constitución.**", "Proteger derechos fundamentales.", "Vigilar la inversión."], correcta: 1 },
    { materia: "Cultura Ciudadana", grado: "10", dificultad: "media", pregunta: "El **'Principio de Solidaridad'** en la Constitución obliga al Estado y a los ciudadanos a:", opciones: ["Solo pagar impuestos.", "**Cooperar para lograr el bien común y proteger a los más débiles.**", "Solo votar.", "Buscar el beneficio individual."], correcta: 1 },
    { materia: "Cultura Ciudadana", grado: "10", dificultad: "media", pregunta: "El **'Déficit Fiscal'** se produce cuando:", opciones: ["Los ingresos son mayores que los gastos.", "**Los gastos del Estado son mayores que sus ingresos.**", "El PIB crece rápido.", "Hay mucha inflación."], correcta: 1 },
    { materia: "Cultura Ciudadana", grado: "10", dificultad: "media", pregunta: "¿Cuál es el propósito del **'Habeas Data'** (mecanismo constitucional)?", opciones: ["Exigir la libertad de un detenido.", "**Acceder, actualizar y rectificar información personal en bancos de datos.**", "Proteger el medio ambiente.", "Vigilar a los funcionarios."], correcta: 1 },
    { materia: "Cultura Ciudadana", grado: "10", dificultad: "media", pregunta: "La **'Descentralización Administrativa'** busca:", opciones: ["Concentrar el poder en el centro.", "**Distribuir funciones y recursos a entidades territoriales (regiones, municipios).**", "Centralizar la toma de decisiones.", "Eliminar el Congreso."], correcta: 1 },

    // ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    // CULTURA CIUDADANA - GRADO 10 - DIFÍCIL (20 Preguntas: Teoría Política y Control Jurisdiccional)
    // ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    { materia: "Cultura Ciudadana", grado: "10", dificultad: "dificil", pregunta: "¿Qué diferencia existe entre el **'Habeas Corpus'** y el **'Habeas Data'**?", opciones: ["Son lo mismo.", "**Habeas Corpus: protección de la libertad; Habeas Data: protección de la información personal.**", "Habeas Corpus: información; Habeas Data: ambiente.", "Habeas Corpus: solo en guerra; Habeas Data: siempre."], correcta: 1 },
    { materia: "Cultura Ciudadana", grado: "10", dificultad: "dificil", pregunta: "El **'Principio de la Buena Fe'** en la administración pública se refiere a:", opciones: ["Hacer solo lo que la ley dice.", "**Presumir la honestidad y lealtad de los particulares y la autoridad.**", "Pagar los impuestos a tiempo.", "No cometer errores."], correcta: 1 },
    { materia: "Cultura Ciudadana", grado: "10", dificultad: "dificil", pregunta: "El **'Tribunal Supremo'** de la Jurisdicción Contencioso-Administrativa es el:", opciones: ["Corte Suprema de Justicia.", "**Consejo de Estado.**", "Corte Constitucional.", "Fiscalía."], correcta: 1 },
    { materia: "Cultura Ciudadana", grado: "10", dificultad: "dificil", pregunta: "La **'Teoría del Origen Divino del Poder'** fue un postulado político central en la época:", opciones: ["Democrática.", "**Monárquica Absoluta.**", "Socialista.", "Liberal."], correcta: 1 },
    { materia: "Cultura Ciudadana", grado: "10", dificultad: "dificil", pregunta: "El **'Principio de Subsidiariedad'** en la administración implica que:", opciones: ["El centro decide todo.", "**Las tareas deben ser asumidas por el nivel de gobierno más bajo capaz (local/municipal) antes que el superior (nacional).**", "Solo el gobierno central actúa.", "El ciudadano decide todo."], correcta: 1 },
    { materia: "Cultura Ciudadana", grado: "10", dificultad: "dificil", pregunta: "La **'Acción de Grupo'** (mecanismo judicial) busca la reparación de un daño causado a un grupo de personas, siendo una acción de tipo:", opciones: ["Fundamental (Tutela).", "Político (Voto).", "**Indemnizatorio (Económico).**", "Ambiental."], correcta: 2 },
    { materia: "Cultura Ciudadana", grado: "10", dificultad: "dificil", pregunta: "El concepto de **'República'** implica que:", opciones: ["El jefe de Estado es un Rey.", "**El jefe de Estado es elegido por el pueblo por un tiempo determinado.**", "El pueblo tiene el poder total.", "El poder es hereditario."], correcta: 1 },
    { materia: "Cultura Ciudadana", grado: "10", dificultad: "dificil", pregunta: "El **'Control Automático de Constitucionalidad'** se aplica a:", opciones: ["Leyes ordinarias.", "Actos administrativos.", "**Leyes estatutarias y decretos de estados de excepción.**", "Acciones de Tutela."], correcta: 2 },
    { materia: "Cultura Ciudadana", grado: "10", dificultad: "dificil", pregunta: "La **'Teoría de la División Tripartita del Trabajo Social'** (Durkheim) se relaciona con el concepto de:", opciones: ["Democracia.", "**Especialización de las ramas del poder (función).**", "Leyes.", "Economía de mercado."], correcta: 1 },
    { materia: "Cultura Ciudadana", grado: "10", dificultad: "dificil", pregunta: "La **'Acción de Nulidad y Restablecimiento del Derecho'** se interpone ante la Jurisdicción Contencioso-Administrativa para:", opciones: ["Proteger un derecho fundamental.", "**Anular un acto administrativo y obtener reparación (si es el caso).**", "Juzgar un delito.", "Vigilar los recursos."], correcta: 1 },
    { materia: "Cultura Ciudadana", grado: "10", dificultad: "dificil", pregunta: "El concepto de **'Democracia Deliberativa'** se centra en:", opciones: ["El voto.", "La imposición de mayorías.", "**La calidad de la discusión pública y la razón como base de las decisiones.**", "La velocidad de la decisión."], correcta: 2 },
    { materia: "Cultura Ciudadana", grado: "10", dificultad: "dificil", pregunta: "La **'Reserva de Ley'** es un principio que obliga a que ciertas materias, por su importancia, solo puedan ser reguladas por:", opciones: ["El Presidente.", "El Juez.", "**El Congreso (a través de Leyes).**", "El Alcalde."], correcta: 2 },
    { materia: "Cultura Ciudadana", grado: "10", dificultad: "dificil", pregunta: "La **'Impunidad'** en el sistema judicial es la falta de:", opciones: ["Leyes.", "Recursos.", "**Castigo o sanción por un delito o falta.**", "Jueces."], correcta: 2 },
    { materia: "Cultura Ciudadana", grado: "10", dificultad: "dificil", pregunta: "La **'Función Jurisdiccional'** (Administrar Justicia) se diferencia de la **'Función Administrativa'** en que la primera se enfoca en:", opciones: ["El gasto público.", "**Resolver controversias de forma definitiva con fuerza de cosa juzgada.**", "Crear normas abstractas.", "Ejecutar programas de gobierno."], correcta: 1 },
    { materia: "Cultura Ciudadana", grado: "10", dificultad: "dificil", pregunta: "El concepto de **'Fallo de Tutela con Efecto *Inter Partes***' significa que la sentencia solo obliga a:", opciones: ["Toda la nación.", "**Las partes involucradas en el caso.**", "El gobierno nacional.", "Los jueces."], correcta: 1 },
    { materia: "Cultura Ciudadana", grado: "10", dificultad: "dificil", pregunta: "La **'Teoría del Contrato Social'** (Rousseau) postula que la base del poder legítimo es:", opciones: ["La Fuerza.", "La Tradición.", "**La Voluntad General de los ciudadanos.**", "El Dinero."], correcta: 2 },
    { materia: "Cultura Ciudadana", grado: "10", dificultad: "dificil", pregunta: "Los **'Principios Rectores de la Administración Pública'** incluyen:", opciones: ["Economía, Política, Cultura.", "**Igualdad, Moralidad, Eficacia, Economía, Celeridad, Imparcialidad, Publicidad.**", "Gasto, Ingreso, Deuda.", "Voto, Petición, Consulta."], correcta: 1 },
    { materia: "Cultura Ciudadana", grado: "10", dificultad: "dificil", pregunta: "El concepto de **'Federalismo'** (Ejemplo: EE. UU.) implica una distribución del poder donde:", opciones: ["El poder está centralizado.", "**Los gobiernos locales/regionales tienen autonomía constitucional y comparten soberanía con el central.**", "Solo el gobierno local tiene poder.", "No hay gobierno central."], correcta: 1 },
    { materia: "Cultura Ciudadana", grado: "10", dificultad: "dificil", pregunta: "La **'Ciberseguridad'** como derecho de cuarta generación se relaciona con:", opciones: ["El uso de redes sociales.", "**La protección de la infraestructura y datos vitales contra amenazas digitales.**", "El acceso a la información.", "El voto electrónico."], correcta: 1 },
    { materia: "Cultura Ciudadana", grado: "10", dificultad: "dificil", pregunta: "El objetivo del **'Parlamento Andino'** (Comunidad Andina de Naciones) es la integración política y económica de:", opciones: ["Centroamérica y el Caribe.", "La Unión Europea.", "**Los países andinos (Bolivia, Colombia, Ecuador, Perú).**", "El Mercosur."], correcta: 2 },


    // ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    // MATEMÁTICAS - GRADO 11 (Cálculo/Pre-Cálculo) - FÁCIL (20 Preguntas)
    // ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    { materia: "Matemáticas", grado: "11", dificultad: "facil", pregunta: "¿Cuál es el **Límite** de la función $f(x) = 3x - 1$ cuando $x \\to 2$?", opciones: ["2", "5", "**6**", "7"], correcta: 2 },
    { materia: "Matemáticas", grado: "11", dificultad: "facil", pregunta: "La **Derivada** de la función $f(x) = x^2$ es:", opciones: ["$x$", "$2$", "**$2x$**", "$x^3/3$"], correcta: 2 },
    { materia: "Matemáticas", grado: "11", dificultad: "facil", pregunta: "El término general $a_n$ de una **Sucesión Aritmética** es:", opciones: ["$a_1 \\cdot r^{n-1}$", "**$a_1 + (n-1)d$**", "$n/2$", "$d/n$"], correcta: 1 },
    { materia: "Matemáticas", grado: "11", dificultad: "facil", pregunta: "El **Dominio** de la función $f(x) = \\frac{1}{x-3}$ es:", opciones: ["$x = 3$", "Todos los Reales", "**Todos los Reales excepto $x=3$**", "$x > 3$"], correcta: 2 },
    { materia: "Matemáticas", grado: "11", dificultad: "facil", pregunta: "Una función tiene una **discontinuidad de salto** si los límites laterales:", opciones: ["Son iguales a cero.", "**Existen pero son diferentes.**", "No existen.", "Son $\\infty$."], correcta: 1 },
    { materia: "Matemáticas", grado: "11", dificultad: "facil", pregunta: "La **Pendiente** de una curva en un punto se halla con:", opciones: ["El Límite.", "La Integral.", "**La Derivada.**", "La Sumatoria."], correcta: 2 },
    { materia: "Matemáticas", grado: "11", dificultad: "facil", pregunta: "La **Derivada de una constante** ($f(x) = 10$) es:", opciones: ["10", "1", "x", "**0**"], correcta: 3 },
    { materia: "Matemáticas", grado: "11", dificultad: "facil", pregunta: "El **Integral Definida** $\\int_{a}^{b} f(x) \\ dx$ representa:", opciones: ["La pendiente.", "La velocidad.", "**El área bajo la curva.**", "El volumen."], correcta: 2 },
    { materia: "Matemáticas", grado: "11", dificultad: "facil", pregunta: "Si $f(x) = 4x$, entonces $f'(1)$ (la derivada en $x=1$) es:", opciones: ["1", "**4**", "8", "0"], correcta: 1 },
    { materia: "Matemáticas", grado: "11", dificultad: "facil", pregunta: "La expresión $\\frac{d}{dx} [\\cos(x)]$ es igual a:", opciones: ["$\\text{sen}(x)$", "**$-\\text{sen}(x)$**", "$\\tan(x)$", "$-\\cos(x)$"], correcta: 1 },
    { materia: "Matemáticas", grado: "11", dificultad: "facil", pregunta: "El valor del límite $\\lim_{x \\to \\infty} \\frac{1}{x}$ es:", opciones: ["1", "$\\infty$", "**0**", "Indefinido"], correcta: 2 },
    { materia: "Matemáticas", grado: "11", dificultad: "facil", pregunta: "La función Inversa $f^{-1}(x)$ de $f(x) = 2x$ es:", opciones: ["$2/x$", "**$x/2$**", "$x-2$", "$x+2$"], correcta: 1 },
    { materia: "Matemáticas", grado: "11", dificultad: "facil", pregunta: "Una **función impar** cumple la condición:", opciones: ["**$f(-x) = -f(x)$**", "$f(-x) = f(x)$", "$f(x) = 0$", "$f(x) = 1$"], correcta: 0 },
    { materia: "Matemáticas", grado: "11", dificultad: "facil", pregunta: "La Integral Indefinida de $f(x) = 5$ es:", opciones: ["$0 + C$", "$x^5 + C$", "**$5x + C$**", "$5 + C$"], correcta: 2 },
    { materia: "Matemáticas", grado: "11", dificultad: "facil", pregunta: "La derivada de $\\ln(x)$ es:", opciones: ["$e^x$", "$\\ln(1/x)$", "**$1/x$**", "$x$"], correcta: 2 },
    { materia: "Matemáticas", grado: "11", dificultad: "facil", pregunta: "El cuarto término de la sucesión $a_n = n^2 - 1$ es:", opciones: ["8", "12", "**15**", "16"], correcta: 2 },
    { materia: "Matemáticas", grado: "11", dificultad: "facil", pregunta: "El **Teorema Fundamental del Cálculo** relaciona la Integral Definida y la:", opciones: ["Suma.", "Resta.", "**Derivada (Antiderivada).**", "Multiplicación."], correcta: 2 },
    { materia: "Matemáticas", grado: "11", dificultad: "facil", pregunta: "La **Derivada de $e^x$** es:", opciones: ["$x e^{x-1}$", "$\\ln(x)$", "**$e^x$**", "$0$"], correcta: 2 },
    { materia: "Matemáticas", grado: "11", dificultad: "facil", pregunta: "Si $\\lim_{x \\to a} f(x) = 5$ y $f(a) = 5$, la función en $x=a$ es:", opciones: ["Discontinua.", "Creciente.", "**Continua.**", "Máxima."], correcta: 2 },
    { materia: "Matemáticas", grado: "11", dificultad: "facil", pregunta: "Una **Serie** es la suma de los términos de una:", opciones: ["Función", "Derivada", "Integral", "**Sucesión**"], correcta: 3 },

    // ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    // MATEMÁTICAS - GRADO 11 (Cálculo/Pre-Cálculo) - MEDIA (20 Preguntas)
    // ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    { materia: "Matemáticas", grado: "11", dificultad: "media", pregunta: "Al calcular $\\lim_{x \\to 3} \\frac{x^2 - 9}{x - 3}$, el valor es:", opciones: ["0", "**6**", "Indefinido", "3"], correcta: 1 },
    { materia: "Matemáticas", grado: "11", dificultad: "media", pregunta: "Si $f(x) = (x^2) \\cdot (\\cos x)$, la derivada $f'(x)$ se calcula con la:", opciones: ["Regla de la Cadena.", "**Regla del Producto.**", "Regla del Cociente.", "Sustitución."], correcta: 1 },
    { materia: "Matemáticas", grado: "11", dificultad: "media", pregunta: "¿Cuál es la Integral Indefinida de $f(x) = x^3$?", opciones: ["$3x^2 + C$", "$x^4 + C$", "**$\\frac{x^4}{4} + C$**", "$x^2 + C$"], correcta: 2 },
    { materia: "Matemáticas", grado: "11", dificultad: "media", pregunta: "El **Rango** de la función $f(x) = e^x$ es:", opciones: ["Todos los Reales", "$x \\ge 0$", "**$(0, \\infty)$**", "$[0, \\infty)$"], correcta: 2 },
    { materia: "Matemáticas", grado: "11", dificultad: "media", pregunta: "La **Regla de L'Hôpital** se utiliza para resolver límites de formas indeterminadas como $0/0$ o:", opciones: ["$0 \\cdot 1$", "$1/0$", "$0^1$", "**$\\infty/\\infty$**"], correcta: 3 },
    { materia: "Matemáticas", grado: "11", dificultad: "media", pregunta: "Si la **Derivada Segunda** ($f''(x)$) es positiva, la función es:", opciones: ["Decreciente.", "Cóncava hacia abajo.", "**Cóncava hacia arriba.**", "Constante."], correcta: 2 },
    { materia: "Matemáticas", grado: "11", dificultad: "media", pregunta: "¿Cuál es la suma de los primeros $4$ términos de la sucesión $a_n = n + 1$?", opciones: ["6", "10", "**14**", "12"], correcta: 2 },
    { materia: "Matemáticas", grado: "11", dificultad: "media", pregunta: "La Integral Definida $\\int_{1}^{3} x \\ dx$ es igual a:", opciones: ["2", "3", "**4**", "8"], correcta: 2 },
    { materia: "Matemáticas", grado: "11", dificultad: "media", pregunta: "Si la **Derivada Primera** ($f'(x)$) es negativa en un intervalo, la función es:", opciones: ["Creciente.", "Cóncava.", "**Decreciente.**", "Constante."], correcta: 2 },
    { materia: "Matemáticas", grado: "11", dificultad: "media", pregunta: "La **Asíntota Vertical** de $f(x) = \\frac{1}{x - 5}$ es:", opciones: ["$y = 0$", "$x = 0$", "$y = 5$", "**$x = 5$**"], correcta: 3 },
    { materia: "Matemáticas", grado: "11", dificultad: "media", pregunta: "La derivada de la función $f(x) = \\text{sen}(2x)$ se calcula con la:", opciones: ["Regla del Producto.", "Regla del Cociente.", "**Regla de la Cadena.**", "L'Hôpital."], correcta: 2 },
    { materia: "Matemáticas", grado: "11", dificultad: "media", pregunta: "El tercer término de la sucesión geométrica con $a_1 = 3$ y $r = 3$ es:", opciones: ["9", "18", "**27**", "81"], correcta: 2 },
    { materia: "Matemáticas", grado: "11", dificultad: "media", pregunta: "La integral $\\int \\text{sen}(x) \\ dx$ es igual a:", opciones: ["$\\cos(x) + C$", "**$-\\cos(x) + C$**", "$\\tan(x) + C$", "$-\\text{sen}(x) + C$"], correcta: 1 },
    { materia: "Matemáticas", grado: "11", dificultad: "media", pregunta: "La derivada de $f(x) = \\sqrt{x}$ (o $x^{1/2}$) es:", opciones: ["$1/x$", "$2\\sqrt{x}$", "$-1/(2\\sqrt{x})$", "**$1/(2\\sqrt{x})$**"], correcta: 3 },
    { materia: "Matemáticas", grado: "11", dificultad: "media", pregunta: "Un **Punto Crítico** de una función se halla cuando la derivada primera es cero o:", opciones: ["Positiva.", "**Indefinida.**", "Negativa.", "Igual a uno."], correcta: 1 },
    { materia: "Matemáticas", grado: "11", dificultad: "media", pregunta: "La Integral por **Partes** se usa cuando la integral es producto de dos funciones, y su fórmula es $\\int u \\ dv = $:", opciones: ["$v \\ du - \\int u \\ dv$", "**$u \\ v - \\int v \\ du$**", "$u \\ v + \\int v \\ du$", "$\\int u \\ dv - u \\ v$"], correcta: 1 },
    { materia: "Matemáticas", grado: "11", dificultad: "media", pregunta: "Al aplicar la **Regla del Cociente** para $f(x) = g(x)/h(x)$, el numerador es:", opciones: ["$g'h' - gh$", "$g'h - gh'$", "**$g'h - gh'$**", "$gh' - g'h$"], correcta: 2 },
    { materia: "Matemáticas", grado: "11", dificultad: "media", pregunta: "El **Volumen de un Cilindro** (Geometría del Espacio) es:", opciones: ["$4/3 \\pi r^3$", "$2 \\pi r^2$", "**$\\pi r^2 h$**", "$1/3 \\pi r^2 h$"], correcta: 2 },
    { materia: "Matemáticas", grado: "11", dificultad: "media", pregunta: "La **Suma de una Serie Geométrica Infinita** converge a $S = \\frac{a_1}{1-r}$ si:", opciones: ["$r = 1$", "$r > 1$", "**$|r| < 1$**", "$r < 0$"], correcta: 2 },
    { materia: "Matemáticas", grado: "11", dificultad: "media", pregunta: "La **Integral por Sustitución** es útil para integrales que se parecen a la regla de la derivada de:", opciones: ["El producto.", "**La cadena ($f(g(x))g'(x)$).**", "La potencia.", "El cociente."], correcta: 1 },

    // ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    // MATEMÁTICAS - GRADO 11 (Cálculo/Pre-Cálculo) - DIFÍCIL (20 Preguntas)
    // ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    { materia: "Matemáticas", grado: "11", dificultad: "dificil", pregunta: "¿Qué método se utiliza para calcular la **Longitud de Arco** de una curva en el plano?", opciones: ["Sucesiones de Taylor.", "Límites al infinito.", "Integral de $f(x) \\ dx$.", "**Integral de $\\sqrt{1 + (f'(x))^2} \\ dx$.**"], correcta: 3 },
    { materia: "Matemáticas", grado: "11", dificultad: "dificil", pregunta: "Al resolver $\\lim_{x \\to \\infty} \\frac{\\ln(x)}{x}$ (L'Hôpital), el resultado es:", opciones: ["1", "$\\infty$", "e", "**0**"], correcta: 3 },
    { materia: "Matemáticas", grado: "11", dificultad: "dificil", pregunta: "El criterio para determinar si un punto crítico ($x=c$) es un Máximo Relativo es si la **Derivada Segunda** ($f''(c)$) es:", opciones: ["Cero.", "Positiva ($> 0$).", "**Negativa ($< 0$).**", "Indefinida."], correcta: 2 },
    { materia: "Matemáticas", grado: "11", dificultad: "dificil", pregunta: "La técnica **Integración por Fracciones Parciales** se aplica a funciones:", opciones: ["Trigonométricas.", "Logarítmicas.", "**Racionales ($P(x)/Q(x)$).**", "Exponenciales."], correcta: 2 },
    { materia: "Matemáticas", grado: "11", dificultad: "dificil", pregunta: "La **Serie de Taylor** de una función alrededor de $x=a$ se define como una suma infinita de términos que involucran las:", opciones: ["Antiderivadas.", "Límites.", "**Derivadas de la función en $a$.**", "Integrales."], correcta: 2 },
    { materia: "Matemáticas", grado: "11", dificultad: "dificil", pregunta: "El cálculo del **Volumen de un Sólido de Revolución** mediante la fórmula $\\pi \\int_{a}^{b} [f(x)]^2 \\ dx$ corresponde al método de:", opciones: ["Arandelas.", "Capas cilíndricas.", "**Discos.**", "Reimann."], correcta: 2 },
    { materia: "Matemáticas", grado: "11", dificultad: "dificil", pregunta: "En un problema de **Optimización**, si la función que se quiere maximizar es $A(x) = x(50-x)$, el valor máximo de $A$ se produce en $x=$:", opciones: ["0", "50", "**25**", "10"], correcta: 2 },
    { materia: "Matemáticas", grado: "11", dificultad: "dificil", pregunta: "La **Diferenciación Implícita** es necesaria cuando la relación entre $x$ e $y$ no se puede expresar fácilmente como $y = f(x)$ y se debe usar la regla de la:", opciones: ["Suma.", "Producto.", "Cociente.", "**Cadena.**"], correcta: 3 },
    { materia: "Matemáticas", grado: "11", dificultad: "dificil", pregunta: "El **Criterio de la Integral** para la convergencia de una serie $\\sum a_n$ requiere que la función $f(x) = a_x$ sea positiva, continua y:", opciones: ["Impar.", "Par.", "**Decreciente.**", "Constante."], correcta: 2 },
    { materia: "Matemáticas", grado: "11", dificultad: "dificil", pregunta: "La **Integral Improcedente** $\\int_{1}^{\\infty} \\frac{1}{x^2} \\ dx$ converge a:", opciones: ["$\\infty$", "0", "**1**", "2"], correcta: 2 },
    { materia: "Matemáticas", grado: "11", dificultad: "dificil", pregunta: "Según la **Regla de Barrow**, si $F(x)$ es la antiderivada de $f(x)$, $\\int_{1}^{4} 2x \\ dx$ es:", opciones: ["$F(4) - F(1)$", "**15**", "9", "7"], correcta: 1 },
    { materia: "Matemáticas", grado: "11", dificultad: "dificil", pregunta: "¿Qué significa que la **Derivada Segunda** ($f''(x)$) sea cero en un punto?", opciones: ["Es un máximo.", "Es un mínimo.", "**Posiblemente un punto de inflexión.**", "La función es constante."], correcta: 2 },
    { materia: "Matemáticas", grado: "11", dificultad: "dificil", pregunta: "Si $f(x) = \\text{arcsen}(x)$, entonces $f'(x) = $:", opciones: ["$\\frac{1}{1 + x^2}$", "$\\frac{-1}{\\sqrt{1-x^2}}$", "**$\\frac{1}{\\sqrt{1-x^2}}$**", "$\\text{arccos}(x)$"], correcta: 2 },
    { materia: "Matemáticas", grado: "11", dificultad: "dificil", pregunta: "La **Sustitución Trigonométrica** $x = a \\text{tan}(\\theta)$ se utiliza para integrales con expresiones de la forma:", opciones: ["$\\sqrt{a^2 - x^2}$", "**$a^2 + x^2$**", "$\\sqrt{x^2 - a^2}$", "$x^2 - a^2$"], correcta: 1 },
    { materia: "Matemáticas", grado: "11", dificultad: "dificil", pregunta: "El **Vector Gradiente** de una función multivariable $f(x, y)$ es el vector de:", opciones: ["Integrales parciales.", "**Derivadas parciales $\\langle f_x, f_y \\rangle$.**", "Diferenciales.", "Tangentes."], correcta: 1 },
    { materia: "Matemáticas", grado: "11", dificultad: "dificil", pregunta: "La **Serie Geométrica** $\\sum_{n=0}^{\\infty} (1/2)^n$ converge a:", opciones: ["1", "**2**", "$\\infty$", "1/2"], correcta: 1 },
    { materia: "Matemáticas", grado: "11", dificultad: "dificil", pregunta: "La integral $\\int \\text{sec}^2(x) \\ dx$ es igual a:", opciones: ["$\\text{sen}(x) + C$", "$\\cos(x) + C$", "**$\\tan(x) + C$**", "$\\text{cot}(x) + C$"], correcta: 2 },
    { materia: "Matemáticas", grado: "11", dificultad: "dificil", pregunta: "El **Criterio de la Razón** ($\\lim_{n \\to \\infty} |a_{n+1}/a_n|$) se utiliza para determinar si una serie **converge** si el límite es:", opciones: ["Mayor que 1.", "**Menor que 1.**", "Igual a 1.", "Igual a 0."], correcta: 1 },
    { materia: "Matemáticas", grado: "11", dificultad: "dificil", pregunta: "El límite $\\lim_{h \\to 0} \\frac{f(x+h) - f(x)}{h}$ representa la definición formal de la:", opciones: ["Integral.", "Asíntota.", "Sucesión.", "**Derivada.**"], correcta: 3 },
    { materia: "Matemáticas", grado: "11", dificultad: "dificil", pregunta: "¿Cuál es el valor del límite $\\lim_{x \\to \\infty} \\frac{x^2 - 1}{x^3 + 5}$?", opciones: ["4", "$\\infty$", "1", "**0**"], correcta: 3 },

    // ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    // LENGUA CASTELLANA - GRADO 11 (Literatura y Retórica Avanzada) - FÁCIL (20 Preguntas)
    // ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    { materia: "Lengua Castellana", grado: "11", dificultad: "facil", pregunta: "El movimiento literario hispanoamericano caracterizado por la integración de lo fantástico en lo cotidiano es el:", opciones: ["Modernismo", "**Realismo Mágico**", "Barroco", "Romanticismo"], correcta: 1 },
    { materia: "Lengua Castellana", grado: "11", dificultad: "facil", pregunta: "El autor de la obra *Cien años de soledad* y principal exponente del Realismo Mágico es:", opciones: ["Julio Cortázar", "Carlos Fuentes", "Mario Vargas Llosa", "**Gabriel García Márquez**"], correcta: 3 },
    { materia: "Lengua Castellana", grado: "11", dificultad: "facil", pregunta: "El género literario que predominó durante el Boom Latinoamericano fue:", opciones: ["La Poesía Lírica", "**La Novela (experimental)**", "El Ensayo Filosófico", "El Teatro"], correcta: 1 },
    { materia: "Lengua Castellana", grado: "11", dificultad: "facil", pregunta: "La figura literaria que consiste en la **unión de dos ideas opuestas** (Ejemplo: *una dulce amargura*) es:", opciones: ["Metáfora", "Hipérbole", "Anáfora", "**Oxímoron**"], correcta: 3 },
    { materia: "Lengua Castellana", grado: "11", dificultad: "facil", pregunta: "El escritor argentino, maestro del cuento y autor de *Rayuela*, famoso por sus estructuras narrativas lúdicas, es:", opciones: ["Jorge Luis Borges", "**Julio Cortázar**", "Ernesto Sábato", "Octavio Paz"], correcta: 1 },
    { materia: "Lengua Castellana", grado: "11", dificultad: "facil", pregunta: "El concepto de **'Tesis'** en un texto argumentativo es:", opciones: ["El resumen final.", "El argumento más débil.", "**La idea principal que se defiende o refuta.**", "El tema."], correcta: 2 },
    { materia: "Lengua Castellana", grado: "11", dificultad: "facil", pregunta: "El recurso narrativo que presenta los pensamientos del personaje sin la voz del narrador se llama:", opciones: ["Analepsis", "Prolepsis", "Diálogo", "**Monólogo Interior (Flujo de Conciencia)**"], correcta: 3 },
    { materia: "Lengua Castellana", grado: "11", dificultad: "facil", pregunta: "La obra *La ciudad y los perros* (1963), que critica la disciplina militar y la sociedad limeña, es de:", opciones: ["Gabriel García Márquez", "Julio Cortázar", "**Mario Vargas Llosa**", "Carlos Fuentes"], correcta: 2 },
    { materia: "Lengua Castellana", grado: "11", dificultad: "facil", pregunta: "La figura retórica de **'Hipérbole'** consiste en:", opciones: ["Omitir palabras.", "**Exagerar desmedidamente la verdad.**", "Comparar directamente.", "Repetir una palabra."], correcta: 1 },
    { materia: "Lengua Castellana", grado: "11", dificultad: "facil", pregunta: "La conjunción **'o bien... o bien'** en una oración compleja es de tipo:", opciones: ["Copulativa", "Distributiva", "**Disyuntiva**", "Adversativa"], correcta: 2 },
    { materia: "Lengua Castellana", grado: "11", dificultad: "facil", pregunta: "La obra *Pedro Páramo*, pionera del Boom y que narra la historia en el pueblo fantasma de Comala, fue escrita por:", opciones: ["Jorge Luis Borges", "**Juan Rulfo**", "Ernesto Sábato", "Octavio Paz"], correcta: 1 },
    { materia: "Lengua Castellana", grado: "11", dificultad: "facil", pregunta: "El propósito principal del **'Discurso Argumentativo'** es:", opciones: ["Describir un objeto.", "Narrar un evento.", "**Persuadir y convencer al receptor.**", "Exponer un tema."], correcta: 2 },
    { materia: "Lengua Castellana", grado: "11", dificultad: "facil", pregunta: "Los movimientos artísticos de inicios del Siglo XX (Surrealismo, Dadaísmo, Cubismo) se agrupan en el concepto de:", opciones: ["Post-Boom", "Clasicismo", "Realismo", "**Vanguardismo**"], correcta: 3 },
    { materia: "Lengua Castellana", grado: "11", dificultad: "facil", pregunta: "La figura literaria que nombra una cosa con el nombre de otra con la que tiene una relación de causa/efecto (Ejemplo: *comprar un Picasso*) es:", opciones: ["Metáfora", "Símil", "Hipérbaton", "**Metonimia**"], correcta: 3 },
    { materia: "Lengua Castellana", grado: "11", dificultad: "facil", pregunta: "El **'Narrador Omnisciente'** se caracteriza por:", opciones: ["Ser el protagonista.", "**Conocer todos los pensamientos y hechos.**", "Solo contar lo que ve.", "Dirigirse al lector."], correcta: 1 },
    { materia: "Lengua Castellana", grado: "11", dificultad: "facil", pregunta: "En la estructura de un ensayo, el párrafo final que reafirma la tesis y resume los argumentos es la:", opciones: ["Introducción", "**Conclusión**", "Desarrollo", "Contraargumentación"], correcta: 1 },
    { materia: "Lengua Castellana", grado: "11", dificultad: "facil", pregunta: "La principal crítica a la novela *Rayuela* es su:", opciones: ["Realismo excesivo.", "Falta de personajes.", "**Estructura narrativa experimental (tablero de dirección).**", "Lenguaje simple."], correcta: 2 },
    { materia: "Lengua Castellana", grado: "11", dificultad: "facil", pregunta: "La figura retórica **'Anáfora'** consiste en:", opciones: ["Omitir verbos.", "**Repetir una o más palabras al inicio de versos o frases.**", "Exagerar.", "Comparar."], correcta: 1 },
    { materia: "Lengua Castellana", grado: "11", dificultad: "facil", pregunta: "La proposición subordinada en 'Quiero **que vengas pronto**' funciona como:", opciones: ["Complemento Circunstancial", "Adjetivo", "Atributo", "**Objeto Directo**"], correcta: 3 },
    { materia: "Lengua Castellana", grado: "11", dificultad: "facil", pregunta: "El estilo literario de **Jorge Luis Borges** se caracteriza por la mezcla de:", opciones: ["Realismo social y crítica.", "Diálogos sencillos.", "**Erudición, metafísica y mundos laberínticos.**", "Sentimentalismo."], correcta: 2 },

    // ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    // LENGUA CASTELLANA - GRADO 11 (Literatura y Retórica Avanzada) - MEDIA (20 Preguntas)
    // ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    { materia: "Lengua Castellana", grado: "11", dificultad: "media", pregunta: "La diferencia principal entre **Metáfora** y **Símil** es:", opciones: ["El Símil es más largo.", "**La Metáfora es una identificación directa; el Símil usa nexos (como, cual).**", "La Metáfora usa nexos; el Símil no.", "No hay diferencia."], correcta: 1 },
    { materia: "Lengua Castellana", grado: "11", dificultad: "media", pregunta: "La figura retórica **'Asíndeton'** consiste en:", opciones: ["Repetir conjunciones.", "**Omitir conjunciones para dar viveza.**", "Unir ideas opuestas.", "Una exageración."], correcta: 1 },
    { materia: "Lengua Castellana", grado: "11", dificultad: "media", pregunta: "El tipo de proposición subordinada que funciona como un adverbio (indica tiempo, modo, lugar, causa) es la:", opciones: ["Sustantiva", "Adjetiva", "**Adverbial**", "Coordinada"], correcta: 2 },
    { materia: "Lengua Castellana", grado: "11", dificultad: "media", pregunta: "El término **'Post-Boom'** se distingue por un enfoque en temas:", opciones: ["Puramente mágicos.", "Históricos y épicos.", "**Urbanos, cotidianos, y un estilo más accesible.**", "Experimentales y complejos."], correcta: 2 },
    { materia: "Lengua Castellana", grado: "11", dificultad: "media", pregunta: "En un debate o ensayo, la **'Refutación'** es la parte donde se:", opciones: ["Expone la tesis.", "Cita a un experto.", "**Demuestra la falsedad de los argumentos contrarios.**", "Resume el tema."], correcta: 2 },
    { materia: "Lengua Castellana", grado: "11", dificultad: "media", pregunta: "El recurso narrativo de la **'Prolepsis'** (o *flash-forward*) consiste en:", opciones: ["Volver al pasado.", "**Adelantar un evento futuro en la narración.**", "Narrar en orden.", "Repetir una escena."], correcta: 1 },
    { materia: "Lengua Castellana", grado: "11", dificultad: "media", pregunta: "El autor de *El laberinto de la soledad*, famoso por sus ensayos sobre la identidad mexicana, es:", opciones: ["Carlos Fuentes", "**Octavio Paz**", "Juan Rulfo", "Pablo Neruda"], correcta: 1 },
    { materia: "Lengua Castellana", grado: "11", dificultad: "media", pregunta: "El conector discursivo **'por consiguiente'** introduce una idea de:", opciones: ["Causa", "**Consecuencia**", "Oposición", "Adición"], correcta: 1 },
    { materia: "Lengua Castellana", grado: "11", dificultad: "media", pregunta: "La figura retórica **'Alegoría'** consiste en:", opciones: ["Unión de ideas opuestas.", "**Una metáfora continuada o un sistema de símbolos que representan una idea abstracta.**", "Una exageración.", "Una omisión de verbos."], correcta: 1 },
    { materia: "Lengua Castellana", grado: "11", dificultad: "media", pregunta: "El concepto de **'Intertextualidad'** se refiere a:", opciones: ["El final del texto.", "**La relación que un texto establece con otros textos culturales.**", "La longitud del texto.", "El estilo de escritura."], correcta: 1 },
    { materia: "Lengua Castellana", grado: "11", dificultad: "media", pregunta: "El tipo de argumento que se basa en la **experiencia o conocimiento popular** (no científico) se llama:", opciones: ["De Autoridad", "**De Sentido Común o Proverbios**", "De Analogía", "De Causa-Efecto"], correcta: 1 },
    { materia: "Lengua Castellana", grado: "11", dificultad: "media", pregunta: "La principal crítica formal al **Boom Latinoamericano** fue su excesivo énfasis en:", opciones: ["El sentimentalismo.", "**La experimentación lingüística y estructural (dificultando la lectura).**", "La descripción de paisajes.", "Los diálogos simples."], correcta: 1 },
    { materia: "Lengua Castellana", grado: "11", dificultad: "media", pregunta: "En la oración 'El temor es **que llueva mañana**', la subordinada sustantiva funciona como:", opciones: ["Sujeto", "Objeto Directo", "Complemento del Nombre", "**Atributo (Predicado Nominal)**"], correcta: 3 },
    { materia: "Lengua Castellana", grado: "11", dificultad: "media", pregunta: "La obra *El túnel* (1948), que explora la psicología de un pintor atormentado, fue escrita por el argentino:", opciones: ["Julio Cortázar", "**Ernesto Sábato**", "Jorge Luis Borges", "Manuel Puig"], correcta: 1 },
    { materia: "Lengua Castellana", grado: "11", dificultad: "media", pregunta: "La figura retórica **'Lítote'** consiste en:", opciones: ["Una exageración.", "Una repetición.", "**Negar lo contrario de lo que se quiere afirmar (Ej. *No está mal* por *Está bien*).**", "Una comparación."], correcta: 2 },
    { materia: "Lengua Castellana", grado: "11", dificultad: "media", pregunta: "El nexo **'aunque'** introduce una proposición subordinada de tipo:", opciones: ["Causal", "**Concesiva (Oposición parcial)**", "Condicional", "Final"], correcta: 1 },
    { materia: "Lengua Castellana", grado: "11", dificultad: "media", pregunta: "La **'Voz Poética'** o 'Yo Lírico' es el:", opciones: ["Autor del poema.", "**El ser ficticio que se expresa en el poema.**", "El tema principal.", "El lector."], correcta: 1 },
    { materia: "Lengua Castellana", grado: "11", dificultad: "media", pregunta: "La novela *Conversación en La Catedral* (1969), que muestra la descomposición social y política de Perú, es una obra de:", opciones: ["Carlos Fuentes", "**Mario Vargas Llosa**", "Guillermo Cabrera Infante", "García Márquez"], correcta: 1 },
    { materia: "Lengua Castellana", grado: "11", dificultad: "media", pregunta: "La técnica del **'Discurso Directo Libre'** permite:", opciones: ["Solo diálogos.", "Solo monólogos.", "**Integrar la voz del personaje en la del narrador sin marcas (guiones, nexos).**", "Que el personaje lea un texto."], correcta: 2 },
    { materia: "Lengua Castellana", grado: "11", dificultad: "media", pregunta: "La figura retórica **'Calambur'** consiste en:", opciones: ["Una repetición.", "Una exageración.", "**La reagrupación de las sílabas de una o más palabras para alterar su sentido.**", "Una omisión."], correcta: 2 },

    // ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    // LENGUA CASTELLANA - GRADO 11 (Literatura y Retórica Avanzada) - DIFÍCIL (20 Preguntas)
    // ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    { materia: "Lengua Castellana", grado: "11", dificultad: "dificil", pregunta: "La figura retórica **'Sinécdoque'** consiste en:", opciones: ["Nombrar una cosa por su causa.", "**Nombrar la parte por el todo o viceversa (Ej. *veinte velas* por *veinte barcos*).**", "Una exageración.", "La omisión de palabras."], correcta: 1 },
    { materia: "Lengua Castellana", grado: "11", dificultad: "dificil", pregunta: "En la oración 'El lugar **donde fuiste** es lejos', la proposición subordinada es:", opciones: ["Sustantiva", "**Adjetiva (o de relativo)**", "Adverbial de lugar", "Coordinada"], correcta: 1 },
    { materia: "Lengua Castellana", grado: "11", dificultad: "dificil", pregunta: "La **'Falacia *Ad Verecundiam*'** en la argumentación consiste en:", opciones: ["Atacar a la persona.", "**Apelar a la autoridad sin que esta sea experta en el tema.**", "Generalizar incorrectamente.", "Apelar a la emoción."], correcta: 1 },
    { materia: "Lengua Castellana", grado: "11", dificultad: "dificil", pregunta: "La forma verbal '**Hubiese temido**' pertenece al modo:", opciones: ["Indicativo", "**Subjuntivo (Pretérito Pluscuamperfecto).**", "Imperativo", "Condicional"], correcta: 1 },
    { materia: "Lengua Castellana", grado: "11", dificultad: "dificil", pregunta: "La novela que relata la vida de un personaje desde su niñez hasta su madurez y formación se conoce como:", opciones: ["Novela de Tesis", "Novela Histórica", "**Novela de Formación (*Bildungsroman*)**", "Novela Negra"], correcta: 2 },
    { materia: "Lengua Castellana", grado: "11", dificultad: "dificil", pregunta: "El autor cubano, precursor del Realismo Mágico y teórico de lo **'Real Maravilloso'**, que escribió *El reino de este mundo* (1949), es:", opciones: ["Gabriel García Márquez", "Guillermo Cabrera Infante", "**Alejo Carpentier**", "José Lezama Lima"], correcta: 2 },
    { materia: "Lengua Castellana", grado: "11", dificultad: "dificil", pregunta: "El término retórico **'Quiasmo'** consiste en:", opciones: ["Una repetición al inicio.", "Una enumeración.", "Una alteración sintáctica.", "**La repetición y cruce de términos o ideas en orden invertido (Ej. *Ni son todos los que están, ni están todos los que son*).**"], correcta: 3 },
    { materia: "Lengua Castellana", grado: "11", dificultad: "dificil", pregunta: "En la oración 'Juan dice **que piensa que no vendrá**', la primera subordinada ('que piensa que no vendrá') funciona como:", opciones: ["Complemento Directo del verbo *dice*.", "**Sujeto de la oración principal.**", "Atributo.", "Complemento de Régimen."], correcta: 0 },
    { materia: "Lengua Castellana", grado: "11", dificultad: "dificil", pregunta: "La escuela de pensamiento que considera que el **significado** de un texto no es fijo, sino que se crea en la **interpretación** del lector, es:", opciones: ["Estructuralismo", "Marxismo", "**Estética de la Recepción**", "Funcionalismo"], correcta: 2 },
    { materia: "Lengua Castellana", grado: "11", dificultad: "dificil", pregunta: "La conjunción **'bien que'** (en el sentido de 'a pesar de que') es una coordinadora:", opciones: ["Distributiva", "Copulativa", "Disyuntiva", "**Subordinante Concesiva**"], correcta: 3 },
    { materia: "Lengua Castellana", grado: "11", dificultad: "dificil", pregunta: "El concepto de **'Parodia'** en la Literatura Postmoderna se refiere a:", opciones: ["La creación de una obra original.", "**La imitación burlesca de una obra o estilo previo.**", "Una obra muy seria.", "Una autobiografía."], correcta: 1 },
    { materia: "Lengua Castellana", grado: "11", dificultad: "dificil", pregunta: "El nexo **'con tal que'** introduce una proposición subordinada de tipo:", opciones: ["Concesiva", "Causal", "**Condicional**", "Final"], correcta: 2 },
    { materia: "Lengua Castellana", grado: "11", dificultad: "dificil", pregunta: "La figura retórica **'Elipsis'** consiste en:", opciones: ["Una repetición.", "Una exageración.", "**La omisión de un elemento de la oración que se entiende por el contexto.**", "Una ruptura sintáctica."], correcta: 2 },
    { materia: "Lengua Castellana", grado: "11", dificultad: "dificil", pregunta: "El concepto de **'Ficción'** en la crítica literaria se refiere a:", opciones: ["El narrador.", "El diálogo.", "La voz del autor.", "**La creación de un mundo imaginario o verosímil.**"], correcta: 3 },
    { materia: "Lengua Castellana", grado: "11", dificultad: "dificil", pregunta: "El uso excesivo del pronombre *la* por *le* o *lo* (Ej. *La di un golpe*) es un error gramatical conocido como:", opciones: ["Leísmo", "Dequeísmo", "**Laísmo**", "Barbarismo"], correcta: 2 },
    { materia: "Lengua Castellana", grado: "11", dificultad: "dificil", pregunta: "La diferencia entre **'Argumento de Causa-Efecto'** y **'Argumento de Generalización'** es:", opciones: ["No hay diferencia.", "**Causa-Efecto: Establece relación entre dos eventos; Generalización: Extiende una conclusión a un grupo.**", "Causa-Efecto: es más largo.", "Generalización solo se usa al inicio."], correcta: 1 },
    { materia: "Lengua Castellana", grado: "11", dificultad: "dificil", pregunta: "El fenómeno lingüístico de la **'Redundancia'** (repetición innecesaria) se conoce formalmente como:", opciones: ["Cacofonía", "Anfibología", "**Pleonasmo**", "Monotonía"], correcta: 2 },
    { materia: "Lengua Castellana", grado: "11", dificultad: "dificil", pregunta: "La función del lenguaje que se centra en el **canal de comunicación** (asegurando que el mensaje pase, Ej. *¿Me escuchas?*), es la función:", opciones: ["Referencial", "Metalingüística", "Conativa", "**Fática**"], correcta: 3 },
    { materia: "Lengua Castellana", grado: "11", dificultad: "dificil", pregunta: "La autora de la novela *La casa de los espíritus* (1982), considerada clave del Post-Boom, es:", opciones: ["Elena Poniatowska", "**Isabel Allende**", "Laura Restrepo", "Carmen Laforet"], correcta: 1 },
    { materia: "Lengua Castellana", grado: "11", dificultad: "dificil", pregunta: "En la retórica, el arte de **inventar** los argumentos y las pruebas que persuaden es la parte de la:", opciones: ["Disposición", "**Invención (*Inventio*)**", "Elocución", "Memoria"], correcta: 1 },

    // ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    // INGLÉS A2/B1 ELEMENTAL - GRADO 11 - FÁCIL (20 Preguntas: Simple Tenses, To Be, Basic Vocab)
    // ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    { materia: "Inglés A2", grado: "11", dificultad: "facil", pregunta: "Choose the correct form of the verb **to be**: 'They **___** happy about the trip.'", opciones: ["is", "**are**", "am", "be"], correcta: 1 },
    { materia: "Inglés A2", grado: "11", dificultad: "facil", pregunta: "Complete the sentence in **Simple Present**: 'My father **___** (work) in a hospital.'", opciones: ["work", "working", "**works**", "worked"], correcta: 2 },
    { materia: "Inglés A2", grado: "11", dificultad: "facil", pregunta: "Complete the question: 'Where **___** you live?'", opciones: ["is", "are", "**do**", "does"], correcta: 2 },
    { materia: "Inglés A2", grado: "11", dificultad: "facil", pregunta: "Which preposition of **place** is correct? 'The book is **___** the bag.'", opciones: ["on", "**in**", "at", "to"], correcta: 1 },
    { materia: "Inglés A2", grado: "11", dificultad: "facil", pregunta: "What is the **plural** of the noun **'man'**?", opciones: ["mans", "mens", "**men**", "man's"], correcta: 2 },
    { materia: "Inglés A2", grado: "11", dificultad: "facil", pregunta: "Complete the sentence in **Simple Past**: 'I **___** (see) a great movie yesterday.'", opciones: ["saw", "**seed**", "seen", "sow"], correcta: 0 },
    { materia: "Inglés A2", grado: "11", dificultad: "facil", pregunta: "What is the opposite of the adjective **'big'**?", opciones: ["fast", "tall", "**small**", "loud"], correcta: 2 },
    { materia: "Inglés A2", grado: "11", dificultad: "facil", pregunta: "Complete with the correct **possessive adjective**: 'We love our house. **___** garden is very big.'", opciones: ["our's", "**our**", "us", "we's"], correcta: 1 },
    { materia: "Inglés A2", grado: "11", dificultad: "facil", pregunta: "Which word means **'antes'**?", opciones: ["now", "**before**", "after", "always"], correcta: 1 },
    { materia: "Inglés A2", grado: "11", dificultad: "facil", pregunta: "Complete the **Negative Simple Present**: 'He **___** study English.'", opciones: ["don't", "do not", "**doesn't**", "not"], correcta: 2 },
    { materia: "Inglés A2", grado: "11", dificultad: "facil", pregunta: "The time **'half past seven'** is:", opciones: ["7:15", "7:45", "7:00", "**7:30**"], correcta: 3 },
    { materia: "Inglés A2", grado: "11", dificultad: "facil", pregunta: "Complete with the correct **modal verb**: 'You **___** finish your homework first.' (obligation)", opciones: ["can", "might", "**must**", "would"], correcta: 2 },
    { materia: "Inglés A2", grado: "11", dificultad: "facil", pregunta: "What is the past tense of the irregular verb **'to eat'**?", opciones: ["eated", "**ate**", "et", "eaten"], correcta: 1 },
    { materia: "Inglés A2", grado: "11", dificultad: "facil", pregunta: "Choose the correct **object pronoun**: 'I gave the book to **___** (ella).'", opciones: ["she", "**her**", "hers", "him"], correcta: 1 },
    { materia: "Inglés A2", grado: "11", dificultad: "facil", pregunta: "Which word means **'trabajo'** (noun)?", opciones: ["studying", "travel", "**job**", "sleep"], correcta: 2 },
    { materia: "Inglés A2", grado: "11", dificultad: "facil", pregunta: "Complete the sentence in **Simple Future** (will): 'They **___** visit Paris next year.'", opciones: ["is", "do", "are", "**will**"], correcta: 3 },
    { materia: "Inglés A2", grado: "11", dificultad: "facil", pregunta: "What is the comparative form of the adjective **'good'**?", opciones: ["gooder", "most good", "**better**", "best"], correcta: 2 },
    { materia: "Inglés A2", grado: "11", dificultad: "facil", pregunta: "The adjective for a person who does not like to spend money is:", opciones: ["generous", "rich", "poor", "**mean / cheap**"], correcta: 3 },
    { materia: "Inglés A2", grado: "11", dificultad: "facil", pregunta: "Complete: 'I have **___** apple and **___** banana.'", opciones: ["an / a", "a / an", "**an / a**", "a / the"], correcta: 2 },
    { materia: "Inglés A2", grado: "11", dificultad: "facil", pregunta: "Choose the correct question word: ' **___** do you go to school? - By bus.'", opciones: ["What", "When", "Who", "**How**"], correcta: 3 },

    // ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    // INGLÉS A2/B1 ELEMENTAL - GRADO 11 - MEDIA (20 Preguntas: Present Continuous, Future Tenses, Adverbs, Conditionals 0/1)
    // ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    { materia: "Inglés A2", grado: "11", dificultad: "media", pregunta: "Complete the sentence in **Present Continuous**: 'He **___** (read) a book right now.'", opciones: ["read", "is read", "**is reading**", "reads"], correcta: 2 },
    { materia: "Inglés A2", grado: "11", dificultad: "media", pregunta: "Choose the correct form of the verb **'to fall'** in past participle:", opciones: ["fall", "fell", "fallen", "**falled**"], correcta: 2 },
    { materia: "Inglés A2", grado: "11", dificultad: "media", pregunta: "Which sentence is correct for a **First Conditional**? (real possibility)", opciones: ["If I studied, I would pass.", "If I study, I pass.", "**If I study, I will pass.**", "If I pass, I study."], correcta: 2 },
    { materia: "Inglés A2", grado: "11", dificultad: "media", pregunta: "The adverb for the adjective **'quick'** is:", opciones: ["quicky", "quicker", "**quickly**", "quickness"], correcta: 2 },
    { materia: "Inglés A2", grado: "11", dificultad: "media", pregunta: "Complete the sentence using **going to** future: 'We **___** (buy) a new car next month.'", opciones: ["will buy", "are buy", "**are going to buy**", "is going to buy"], correcta: 2 },
    { materia: "Inglés A2", grado: "11", dificultad: "media", pregunta: "Which **modal verb** is used to give **advice**? 'You **___** see a doctor about your cough.'", opciones: ["must", "**should**", "can", "might"], correcta: 1 },
    { materia: "Inglés A2", grado: "11", dificultad: "media", pregunta: "Choose the correct **phrasal verb**: 'She had to **___** (quitarse) her shoes before entering.'", opciones: ["put on", "look for", "**take off**", "get up"], correcta: 2 },
    { materia: "Inglés A2", grado: "11", dificultad: "media", pregunta: "The **superlative** form of the adjective **'expensive'** is:", opciones: ["expensiver", "expensivest", "most expensive", "**more expensive**"], correcta: 2 },
    { materia: "Inglés A2", grado: "11", dificultad: "media", pregunta: "Complete the sentence with the correct **relative pronoun**: 'That's the person **___** helped me.'", opciones: ["which", "**who**", "what", "where"], correcta: 1 },
    { materia: "Inglés A2", grado: "11", dificultad: "media", pregunta: "What does the phrasal verb **'look for'** mean?", opciones: ["mirar", "**buscar**", "cuidar", "encontrar"], correcta: 1 },
    { materia: "Inglés A2", grado: "11", dificultad: "media", pregunta: "The preposition used for time with a **specific date** (e.g. *October 29th*) is:", opciones: ["in", "at", "**on**", "to"], correcta: 2 },
    { materia: "Inglés A2", grado: "11", dificultad: "media", pregunta: "Complete the sentence in **Present Perfect** (recent past): 'I **___** (not finish) my lunch yet.'", opciones: ["didn't finish", "**haven't finished**", "am not finished", "don't finish"], correcta: 1 },
    { materia: "Inglés A2", grado: "11", dificultad: "media", pregunta: "The verb form used after prepositions (like *for* or *of*) is usually the:", opciones: ["infinitive", "simple past", "**gerund (-ing)**", "past participle"], correcta: 2 },
    { materia: "Inglés A2", grado: "11", dificultad: "media", pregunta: "The word for **'aunque'** in English is:", opciones: ["so", "because", "but", "**although / though**"], correcta: 3 },
    { materia: "Inglés A2", grado: "11", dificultad: "media", pregunta: "Complete the sentence: 'There **___** (ser) a lot of people at the concert yesterday.'", opciones: ["is", "was", "**were**", "are"], correcta: 2 },
    { materia: "Inglés A2", grado: "11", dificultad: "media", pregunta: "In a **Zero Conditional** (facts), the tense in both clauses is:", opciones: ["Future Simple", "Past Simple", "Present Perfect", "**Simple Present**"], correcta: 3 },
    { materia: "Inglés A2", grado: "11", dificultad: "media", pregunta: "Choose the correct word: 'I have **___** money to buy this expensive jacket.'", opciones: ["much", "many", "**enough**", "too"], correcta: 2 },
    { materia: "Inglés A2", grado: "11", dificultad: "media", pregunta: "The opposite of the verb **'to lend'** (prestar) is:", opciones: ["take", "**borrow** (pedir prestado)", "give", "owe"], correcta: 1 },
    { materia: "Inglés A2", grado: "11", dificultad: "media", pregunta: "The correct passive structure for **'They built the house'** is: 'The house **___** by them.'", opciones: ["is built", "have been built", "**was built**", "built"], correcta: 2 },
    { materia: "Inglés A2", grado: "11", dificultad: "media", pregunta: "Which sentence uses the definite article (the) correctly?", opciones: ["I like **the** life.", "I go to **the** school.", "**The** sun is bright today.", "I eat **the** breakfast."], correcta: 2 },

    // ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    // INGLÉS A2/B1 ELEMENTAL - GRADO 11 - DIFÍCIL (20 Preguntas: Past Perfect, Used to, Passive, Phrasal Verbs, Connectors)
    // ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    { materia: "Inglés A2", grado: "11", dificultad: "dificil", pregunta: "Complete the sentence in **Past Perfect**: 'When he arrived, I **___** (already / leave).'", opciones: ["already left", "am leaving", "**had already left**", "have already left"], correcta: 2 },
    { materia: "Inglés A2", grado: "11", dificultad: "dificil", pregunta: "What is the meaning of the phrasal verb **'turn down'**?", opciones: ["subir el volumen", "**rechazar / bajar el volumen**", "encender", "apagar"], correcta: 1 },
    { materia: "Inglés A2", grado: "11", dificultad: "dificil", pregunta: "Complete the sentence using **'used to'** (past habit): 'I **___** (play) soccer when I was a child.'", opciones: ["am used to play", "use to play", "**used to play**", "was used to play"], correcta: 2 },
    { materia: "Inglés A2", grado: "11", dificultad: "dificil", pregunta: "Which connector means **'sin embargo'**?", opciones: ["as well as", "therefore", "in addition", "**however**"], correcta: 3 },
    { materia: "Inglés A2", grado: "11", dificultad: "dificil", pregunta: "The **passive voice** of 'The doctor is helping the man' is: 'The man **___** by the doctor.'", opciones: ["was helped", "is helped", "**is being helped**", "has been helped"], correcta: 2 },
    { materia: "Inglés A2", grado: "11", dificultad: "dificil", pregunta: "Which **modal verb** expresses a strong lack of necessity? 'You **___** wash the dishes; I did it already.'", opciones: ["mustn't", "can't", "**don't have to**", "shouldn't"], correcta: 2 },
    { materia: "Inglés A2", grado: "11", dificultad: "dificil", pregunta: "Choose the correct **quantifier**: 'There is **___** traffic in the city center.' (uncountable)", opciones: ["many", "**much**", "a few", "several"], correcta: 1 },
    { materia: "Inglés A2", grado: "11", dificultad: "dificil", pregunta: "What does the expression **'get along with'** mean?", opciones: ["levantarse", "continuar", "**llevarse bien con**", "marcharse"], correcta: 2 },
    { materia: "Inglés A2", grado: "11", dificultad: "dificil", pregunta: "The correct structure for an **Indirect Question** is:", opciones: ["Do you know where the bank is?", "**Do you know where is the bank?**", "Where is the bank?", "Is the bank where?"], correcta: 0 },
    { materia: "Inglés A2", grado: "11", dificultad: "dificil", pregunta: "Which preposition is used for time with **parts of the day** (e.g., *noon, night*):", opciones: ["on", "in", "**at**", "during"], correcta: 2 },
    { materia: "Inglés A2", grado: "11", dificultad: "dificil", pregunta: "Complete the sentence with the correct **relative pronoun**: 'This is the school **___** I studied.'", opciones: ["who", "which", "**where**", "that"], correcta: 2 },
    { materia: "Inglés A2", grado: "11", dificultad: "dificil", pregunta: "Choose the correct form of the verb **'to lie'** (mentir) in simple past:", opciones: ["lay", "lied", "**lain**", "lie"], correcta: 1 },
    { materia: "Inglés A2", grado: "11", dificultad: "dificil", pregunta: "The word for **'capaz de'** or **'apto para'** is:", opciones: ["possible", "maybe", "**able to**", "might"], correcta: 2 },
    { materia: "Inglés A2", grado: "11", dificultad: "dificil", pregunta: "What does the phrasal verb **'give up'** mean?", opciones: ["regalar", "entregar", "**rendirse / dejar de**", "dar a luz"], correcta: 2 },
    { materia: "Inglés A2", grado: "11", dificultad: "dificil", pregunta: "The **question tag** for the sentence 'You like pizza, **___**?' is:", opciones: ["don't you?", "do you?", "doesn't you?", "**are you?**"], correcta: 0 },
    { materia: "Inglés A2", grado: "11", dificultad: "dificil", pregunta: "Complete the sentence with the correct preposition: 'I am interested **___** learning about history.'", opciones: ["on", "at", "**in**", "for"], correcta: 2 },
    { materia: "Inglés A2", grado: "11", dificultad: "dificil", pregunta: "The verb form used after **'let'** and **'make'** (causative verbs) is the:", opciones: ["gerund", "past participle", "**bare infinitive (sin 'to')**", "infinitive with 'to'"], correcta: 2 },
    { materia: "Inglés A2", grado: "11", dificultad: "dificil", pregunta: "The word for **'a pesar de'** (followed by a noun or -ing) is:", opciones: ["although", "because of", "**despite / in spite of**", "so that"], correcta: 2 },
    { materia: "Inglés A2", grado: "11", dificultad: "dificil", pregunta: "Choose the correct structure: 'The faster **___**, the better **___**.'", opciones: ["it is / it is", "**you run / the result is**", "you run / is the result", "is the result / you run"], correcta: 1 },
    { materia: "Inglés A2", grado: "11", dificultad: "dificil", pregunta: "The correct response to **'I've never been to Asia'** is:", opciones: ["Me too.", "I didn't neither.", "I have neither.", "**Neither have I / Me neither.**"], correcta: 3 },

    // ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    // CULTURA CIUDADANA - GRADO 11 - FÁCIL (20 Preguntas: Constitución, Derechos Fundamentales)
    // ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    { materia: "Cultura Ciudadana", grado: "11", dificultad: "facil", pregunta: "¿Cuál es el documento fundamental que establece la organización del Estado y los derechos de los ciudadanos en Colombia?", opciones: ["El Código Civil", "El Código Penal", "**La Constitución Política (de 1991)**", "El Plan de Desarrollo"], correcta: 2 },
    { materia: "Cultura Ciudadana", grado: "11", dificultad: "facil", pregunta: "El principal objetivo de la **Cultura Ciudadana** es promover:", opciones: ["El individualismo.", "**El respeto a las normas, la convivencia y el bien común.**", "La desobediencia civil.", "La crítica al gobierno."], correcta: 1 },
    { materia: "Cultura Ciudadana", grado: "11", dificultad: "facil", pregunta: "El derecho a la vida, a la igualdad y a la libertad de conciencia son ejemplos de **Derechos**:", opciones: ["Colectivos y del Ambiente", "**Fundamentales (o de Primera Generación)**", "Económicos y Sociales", "Políticos"], correcta: 1 },
    { materia: "Cultura Ciudadana", grado: "11", dificultad: "facil", pregunta: "El mecanismo de protección de los derechos fundamentales de aplicación inmediata en Colombia es la:", opciones: ["Acción de Cumplimiento", "Acción Popular", "Habeas Corpus", "**Acción de Tutela**"], correcta: 3 },
    { materia: "Cultura Ciudadana", grado: "11", dificultad: "facil", pregunta: "El **Voto** en Colombia es un ejemplo de mecanismo de:", opciones: ["Protección de derechos", "Control social", "**Participación Ciudadana**", "Justicia"], correcta: 2 },
    { materia: "Cultura Ciudadana", grado: "11", dificultad: "facil", pregunta: "El principio que establece que **la ley es igual para todas las personas** sin distinción se llama:", opciones: ["Libertad", "Diversidad", "Tolerancia", "**Igualdad ante la Ley**"], correcta: 3 },
    { materia: "Cultura Ciudadana", grado: "11", dificultad: "facil", pregunta: "El **Estado Social de Derecho** se caracteriza por buscar el equilibrio entre la legalidad y:", opciones: ["El crecimiento económico.", "El poder militar.", "**La justicia social y la dignidad humana.**", "El individualismo."], correcta: 2 },
    { materia: "Cultura Ciudadana", grado: "11", dificultad: "facil", pregunta: "¿Cuál de estos es un **deber** de los ciudadanos en Colombia?", opciones: ["Elegir libremente.", "Viajar al exterior.", "**Respetar y apoyar a las autoridades democráticas legítimamente constituidas.**", "El derecho a la vida."], correcta: 2 },
    { materia: "Cultura Ciudadana", grado: "11", dificultad: "facil", pregunta: "El derecho a la **Huelga** y a la **Libre Asociación** son ejemplos de Derechos:", opciones: ["Fundamentales (Primera Generación)", "**Económicos, Sociales y Culturales (Segunda Generación)**", "Colectivos (Tercera Generación)", "Políticos"], correcta: 1 },
    { materia: "Cultura Ciudadana", grado: "11", dificultad: "facil", pregunta: "El **Respeto** como valor ciudadano implica:", opciones: ["Estar de acuerdo con todo.", "No opinar.", "**Aceptar y valorar la dignidad y las diferencias de los demás.**", "Ser indiferente."], correcta: 2 },
    { materia: "Cultura Ciudadana", grado: "11", dificultad: "facil", pregunta: "El derecho a **elegir y ser elegido** es un ejemplo de Derecho:", opciones: ["Económico", "**Político**", "Social", "Fundamental"], correcta: 1 },
    { materia: "Cultura Ciudadana", grado: "11", dificultad: "facil", pregunta: "La **rama del poder público** encargada de hacer las leyes es la:", opciones: ["Ejecutiva", "Judicial", "**Legislativa (Congreso)**", "Controladora"], correcta: 2 },
    { materia: "Cultura Ciudadana", grado: "11", dificultad: "facil", pregunta: "El concepto de **'Bien Común'** se refiere a:", opciones: ["La riqueza de un solo ciudadano.", "**Lo que beneficia a todos los miembros de la sociedad.**", "Los bienes del Estado.", "Los intereses individuales."], correcta: 1 },
    { materia: "Cultura Ciudadana", grado: "11", dificultad: "facil", pregunta: "El organismo que vigila el cumplimiento de las leyes y administra justicia es la rama:", opciones: ["Ejecutiva", "**Judicial**", "Legislativa", "De Control"], correcta: 1 },
    { materia: "Cultura Ciudadana", grado: "11", dificultad: "facil", pregunta: "La **Solidaridad** como valor ciudadano se manifiesta en:", opciones: ["La competencia.", "La indiferencia.", "**La ayuda mutua y la colaboración.**", "El egoísmo."], correcta: 2 },
    { materia: "Cultura Ciudadana", grado: "11", dificultad: "facil", pregunta: "El derecho a gozar de un ambiente sano es un ejemplo de Derecho:", opciones: ["Fundamental", "Social", "**Colectivo y del Ambiente (Tercera Generación)**", "Político"], correcta: 2 },
    { materia: "Cultura Ciudadana", grado: "11", dificultad: "facil", pregunta: "El conjunto de normas, valores y costumbres que regulan la vida en sociedad es:", opciones: ["El Gobierno.", "La Economía.", "**La Cultura Ciudadana.**", "La Historia."], correcta: 2 },
    { materia: "Cultura Ciudadana", grado: "11", dificultad: "facil", pregunta: "El **Preámbulo** de la Constitución establece:", opciones: ["Los artículos de la ley.", "**Los fines y principios fundamentales de la Nación.**", "Los deberes económicos.", "Las penas judiciales."], correcta: 1 },
    { materia: "Cultura Ciudadana", grado: "11", dificultad: "facil", pregunta: "El mecanismo que permite a los ciudadanos **derogar (anular) una ley** o acto legislativo es el:", opciones: ["Plebiscito", "Referendo Aprobatorio", "Consulta Popular", "**Referendo Derogatorio**"], correcta: 3 },
    { materia: "Cultura Ciudadana", grado: "11", dificultad: "facil", pregunta: "La **Responsabilidad** ciudadana implica:", opciones: ["Echarle la culpa a otros.", "Ignorar los problemas.", "**Asumir las consecuencias de las propias acciones.**", "Ser crítico."], correcta: 2 },

    // ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    // CULTURA CIUDADANA - GRADO 11 - MEDIA (20 Preguntas: Mecanismos de Participación, Ramas del Poder)
    // ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    { materia: "Cultura Ciudadana", grado: "11", dificultad: "media", pregunta: "El mecanismo de participación donde el Presidente consulta al pueblo sobre una decisión trascendental que no requiere una reforma constitucional es el:", opciones: ["Referendo", "**Plebiscito**", "Iniciativa Legislativa", "Cabildo Abierto"], correcta: 1 },
    { materia: "Cultura Ciudadana", grado: "11", dificultad: "media", pregunta: "La **Rama Ejecutiva** está compuesta, a nivel nacional, por:", opciones: ["El Congreso.", "La Corte Suprema de Justicia.", "**El Presidente, Vicepresidente, Ministros y Gobernadores/Alcaldes.**", "La Procuraduría."], correcta: 2 },
    { materia: "Cultura Ciudadana", grado: "11", dificultad: "media", pregunta: "La **Función Principal** de la Rama Legislativa (Congreso) es:", opciones: ["Administrar justicia.", "**Hacer, reformar y derogar las leyes.**", "Gobernar el país.", "Vigilar la gestión pública."], correcta: 1 },
    { materia: "Cultura Ciudadana", grado: "11", dificultad: "media", pregunta: "El **Habeas Corpus** es un mecanismo que protege inmediatamente el derecho a la:", opciones: ["Vida", "Salud", "**Libertad personal (ante detenciones arbitrarias).**", "Educación"], correcta: 2 },
    { materia: "Cultura Ciudadana", grado: "11", dificultad: "media", pregunta: "El **Precedente Judicial** significa que las decisiones de los altos tribunales (Cortes) son:", opciones: ["Recomendaciones.", "**Criterios obligatorios para los jueces inferiores.**", "Opiniones políticas.", "Leyes no escritas."], correcta: 1 },
    { materia: "Cultura Ciudadana", grado: "11", dificultad: "media", pregunta: "La **Acción Popular** se interpone para proteger los Derechos:", opciones: ["Fundamentales (Individuales).", "Políticos.", "**Colectivos y del Ambiente (Ej. Espacio público, patrimonio).**", "Económicos."], correcta: 2 },
    { materia: "Cultura Ciudadana", grado: "11", dificultad: "media", pregunta: "El concepto de **'Democracia Participativa'** implica:", opciones: ["Solo votar en elecciones.", "Que el pueblo no tiene voz.", "**La intervención activa de los ciudadanos en las decisiones públicas.**", "Solo la acción del gobierno."], correcta: 2 },
    { materia: "Cultura Ciudadana", grado: "11", dificultad: "media", pregunta: "El organismo que ejerce la **función de control** sobre la gestión fiscal y los recursos públicos del Estado es la:", opciones: ["Procuraduría General de la Nación", "**Contraloría General de la República**", "Defensoría del Pueblo", "Fiscalía General de la Nación"], correcta: 1 },
    { materia: "Cultura Ciudadana", grado: "11", dificultad: "media", pregunta: "La **Constitución Política de 1991** se considera de carácter:", opciones: ["Rígido (difícil de cambiar).", "Militar.", "**Garantista y Social de Derecho.**", "Monárquico."], correcta: 2 },
    { materia: "Cultura Ciudadana", grado: "11", dificultad: "media", pregunta: "La **Iniciativa Popular Legislativa** permite a los ciudadanos:", opciones: ["Pedir la renuncia del presidente.", "**Presentar proyectos de ley o de acto legislativo al Congreso.**", "Crear una nueva constitución.", "Declarar la guerra."], correcta: 1 },
    { materia: "Cultura Ciudadana", grado: "11", dificultad: "media", pregunta: "La **Tolerancia** como valor ético se entiende como:", opciones: ["Estar de acuerdo con todas las ideas.", "**Respetar las opiniones o prácticas de otros, aunque sean diferentes a las propias.**", "Imponer las propias ideas.", "Ser indiferente."], correcta: 1 },
    { materia: "Cultura Ciudadana", grado: "11", dificultad: "media", pregunta: "La **rampa de acceso** en lugares públicos es un ejemplo de política que garantiza el derecho a la:", opciones: ["Vivienda.", "Salud.", "**Inclusión (personas con movilidad reducida).**", "Educación."], correcta: 2 },
    { materia: "Cultura Ciudadana", grado: "11", dificultad: "media", pregunta: "El mecanismo por el cual el pueblo de un municipio puede discutir asuntos de interés común es el:", opciones: ["Plebiscito", "Referendo", "**Cabildo Abierto**", "Voto"], correcta: 2 },
    { materia: "Cultura Ciudadana", grado: "11", dificultad: "media", pregunta: "La **rama del poder público** encargada de ejecutar las leyes y gobernar es la:", opciones: ["Judicial", "**Ejecutiva**", "Legislativa", "De Control"], correcta: 1 },
    { materia: "Cultura Ciudadana", grado: "11", dificultad: "media", pregunta: "La **Acción de Cumplimiento** se utiliza para exigir que una autoridad o particular:", opciones: ["Pague una deuda.", "**Cumpla un acto administrativo o una ley.**", "Devuelva un terreno.", "Pague una tutela."], correcta: 1 },
    { materia: "Cultura Ciudadana", grado: "11", dificultad: "media", pregunta: "La **Libertad de Expresión** no es un derecho absoluto y tiene como límite:", opciones: ["La opinión del gobierno.", "**Los derechos de los demás (Ej. Honra, buen nombre, privacidad).**", "Los medios de comunicación.", "La religión."], correcta: 1 },
    { materia: "Cultura Ciudadana", grado: "11", dificultad: "media", pregunta: "El organismo que ejerce la **función disciplinaria** sobre los funcionarios públicos es la:", opciones: ["Contraloría", "**Procuraduría General de la Nación**", "Defensoría del Pueblo", "Corte Suprema de Justicia"], correcta: 1 },
    { materia: "Cultura Ciudadana", grado: "11", dificultad: "media", pregunta: "Un **Dilema Ético** se presenta cuando:", opciones: ["Solo hay una opción incorrecta.", "Solo hay una opción correcta.", "**Existen dos o más opciones, y todas implican un compromiso o un daño moral.**", "No hay opciones."], correcta: 2 },
    { materia: "Cultura Ciudadana", grado: "11", dificultad: "media", pregunta: "La **revocatoria del mandato** es un mecanismo de participación que permite:", opciones: ["Anular una ley.", "Destituir al Presidente.", "**Dar por terminado el mandato de un Gobernador o Alcalde.**", "Elegir nuevos congresistas."], correcta: 2 },
    { materia: "Cultura Ciudadana", grado: "11", dificultad: "media", pregunta: "El principio de **separación de poderes** busca evitar:", opciones: ["La democracia.", "El control fiscal.", "**La concentración del poder y el despotismo.**", "La justicia."], correcta: 2 },

    // ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    // CULTURA CIUDADANA - GRADO 11 - DIFÍCIL (20 Preguntas: Ética Cívica, DDHH, Organismos de Control)
    // ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    { materia: "Cultura Ciudadana", grado: "11", dificultad: "dificil", pregunta: "La **Ética Cívica** se define como el conjunto de:", opciones: ["Normas morales privadas.", "**Valores y principios compartidos necesarios para la convivencia democrática y pluralista.**", "Leyes religiosas.", "Deberes económicos."], correcta: 1 },
    { materia: "Cultura Ciudadana", grado: "11", dificultad: "dificil", pregunta: "El órgano que tiene la máxima autoridad de la **jurisdicción contencioso administrativa** (demandas contra el Estado) es el:", opciones: ["Corte Constitucional", "Corte Suprema de Justicia", "**Consejo de Estado**", "Fiscalía"], correcta: 2 },
    { materia: "Cultura Ciudadana", grado: "11", dificultad: "dificil", pregunta: "La **Defensoría del Pueblo** tiene como función principal:", opciones: ["Acusar a criminales.", "**Velar por la promoción, el ejercicio y la divulgación de los derechos humanos.**", "Administrar los recursos públicos.", "Hacer las leyes."], correcta: 1 },
    { materia: "Cultura Ciudadana", grado: "11", dificultad: "dificil", pregunta: "El derecho a la **Dignidad Humana** es la base de los Derechos Fundamentales y se considera un principio:", opciones: ["Secundario.", "**Inalienable, que no puede ser revocado.**", "Negociable.", "Temporal."], correcta: 1 },
    { materia: "Cultura Ciudadana", grado: "11", dificultad: "dificil", pregunta: "La **Desobediencia Civil** se justifica éticamente cuando:", opciones: ["Se busca un beneficio personal.", "**Una ley es percibida como manifiestamente injusta y se acepta la sanción.**", "Se promueve la violencia.", "Se vota en contra."], correcta: 1 },
    { materia: "Cultura Ciudadana", grado: "11", dificultad: "dificil", pregunta: "La **Ley Estatutaria** es aquella que regula:", opciones: ["Asuntos económicos.", "Leyes ordinarias.", "**Temas fundamentales como los derechos y deberes constitucionales.**", "Leyes penales."], correcta: 2 },
    { materia: "Cultura Ciudadana", grado: "11", dificultad: "dificil", pregunta: "El órgano de la **Rama Judicial** que tiene como función la guarda de la integridad y supremacía de la **Constitución** es la:", opciones: ["Corte Suprema de Justicia", "Consejo de Estado", "**Corte Constitucional**", "Fiscalía"], correcta: 2 },
    { materia: "Cultura Ciudadana", grado: "11", dificultad: "dificil", pregunta: "El concepto de **'Pluralismo'** en una democracia implica:", opciones: ["La uniformidad de ideas.", "**La aceptación de diferentes formas de vida, creencias y pensamientos.**", "El control del gobierno.", "La supremacía de una sola cultura."], correcta: 1 },
    { materia: "Cultura Ciudadana", grado: "11", dificultad: "dificil", pregunta: "La **justicia restaurativa** se enfoca principalmente en:", opciones: ["La imposición de penas severas.", "La venganza.", "**La reparación a la víctima, el diálogo y la reintegración del ofensor.**", "El castigo al delincuente."], correcta: 2 },
    { materia: "Cultura Ciudadana", grado: "11", dificultad: "dificil", pregunta: "El organismo que adelanta la **acción penal** y dirige la investigación criminal en Colombia es la:", opciones: ["Procuraduría", "Contraloría", "Defensoría", "**Fiscalía General de la Nación**"], correcta: 3 },
    { materia: "Cultura Ciudadana", grado: "11", dificultad: "dificil", pregunta: "El derecho a la **Consulta Previa** de comunidades indígenas y afrodescendientes es un derecho:", opciones: ["Fundamental.", "Económico.", "**Colectivo y de Autonomía Cultural.**", "Político."], correcta: 2 },
    { materia: "Cultura Ciudadana", grado: "11", dificultad: "dificil", pregunta: "El principio de **Buena Fe** en la administración pública obliga a:", opciones: ["Sospechar de los ciudadanos.", "**Presumir la honestidad y la confianza en las actuaciones de los particulares.**", "Cobrar más impuestos.", "Ocultar información."], correcta: 1 },
    { materia: "Cultura Ciudadana", grado: "11", dificultad: "dificil", pregunta: "La **objeción de conciencia** permite a un ciudadano:", opciones: ["Incumplir cualquier ley.", "Declarar la guerra.", "**Incumplir un deber legal por motivos éticos o religiosos, siempre que no afecte derechos de terceros.**", "No pagar impuestos."], correcta: 2 },
    { materia: "Cultura Ciudadana", grado: "11", dificultad: "dificil", pregunta: "La **Democracia Deliberativa** hace énfasis en el papel de:", opciones: ["La fuerza.", "El voto.", "**La discusión racional y el diálogo argumentativo entre ciudadanos.**", "La violencia."], correcta: 2 },
    { materia: "Cultura Ciudadana", grado: "11", dificultad: "dificil", pregunta: "El **Referendo Constitucional** se utiliza para:", opciones: ["Elegir al Presidente.", "Derogar una ley.", "**Aprobar o rechazar una reforma a la Constitución.**", "Nombrar un alcalde."], correcta: 2 },
    { materia: "Cultura Ciudadana", grado: "11", dificultad: "dificil", pregunta: "El derecho a la **libertad de locomoción** se considera un derecho de:", opciones: ["Tercera Generación.", "**Primera Generación (Fundamental).**", "Segunda Generación.", "Cuarta Generación."], correcta: 1 },
    { materia: "Cultura Ciudadana", grado: "11", dificultad: "dificil", pregunta: "La **ética de la responsabilidad** de Hans Jonas se centra en el cuidado y la anticipación de las consecuencias de nuestras acciones sobre:", opciones: ["El pasado.", "El presente.", "**Las generaciones futuras y el planeta.**", "El individuo."], correcta: 2 },
    { materia: "Cultura Ciudadana", grado: "11", dificultad: "dificil", pregunta: "El principio de **Subsidiaridad** en la organización estatal establece que:", opciones: ["Solo el nivel central puede tomar decisiones.", "**Las autoridades superiores solo intervienen cuando el nivel inferior no puede cumplir eficazmente su tarea.**", "Todas las decisiones son iguales.", "Las regiones son independientes."], correcta: 1 },
    { materia: "Cultura Ciudadana", grado: "11", dificultad: "dificil", pregunta: "El organismo que define la política y ejerce la **máxima autoridad de la Rama Judicial** sobre las Altas Cortes (disciplina) es el:", opciones: ["Consejo de Estado", "Corte Suprema de Justicia", "Corte Constitucional", "**Consejo Superior de la Judicatura (Sala Jurisdiccional Disciplinaria)**"], correcta: 3 },
    { materia: "Cultura Ciudadana", grado: "11", dificultad: "dificil", pregunta: "Los **Derechos Humanos** se consideran **Universales** porque:", opciones: ["Son iguales en todos los países.", "Son leyes locales.", "**Pertenecen a toda persona por el simple hecho de ser humana, sin distinción.**", "Fueron creados por la ONU."], correcta: 2 }
];

const totalPreguntasBase = 20;
/* Estado del juego */

let btnResolver = document.getElementById("btnEnviar");
const btnReiniciar = document.getElementById("btnReiniciar");
/* Elementos */
const el = {
    numeroDePregunta: document.querySelectorAll(".numeroDePregunta"),
    totalPreguntas: document.querySelectorAll(".totalDePreguntas"),
    seletName: document.getElementById("userName"),
    dataName: document.getElementById("usuarioNombre"),
    pantallaInicio: document.getElementById("login-view"),
    pantallaFin: document.getElementById("pantallaFin"),
    pantallaSopa: document.getElementById("pantallaSopa"),
    pantallaGusanito: document.getElementById("pantallaGusanito"),
    quizQuestion: document.getElementById("pregunta"),
    optionsQuestion: document.getElementById("opciones"),
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
    preguntasContestadas: document.getElementById("preguntasContestadas"),
    preguntasAcertadas: document.querySelectorAll(".preguntasAcertadas"),
    preguntasErradas: document.querySelectorAll(".preguntasEquivocadas"),
    vidasGanadas: document.getElementById("vidasDelJuego"),
    eventoPause: document.getElementById("pauseGusanito"),
    celebracionSopa: document.getElementById("modal-de-celebracion-sopa"),
    cuentaRegresiva1: document.getElementById("cuentaRegresiva1"),
    finQuiz: document.getElementById("finQuiz"),
    preguntasSaltadas: document.getElementById("preguntasSaltadas"),
    quizContainer: document.getElementById("quizContainer"),
    porcentaje: document.getElementById("porcentaje")
};
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
    preguntasSaltadas: 0,
    vidas: 5,
    grado: el.seletGrado.value,
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
    celebracionSopa: false
};

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

function setTextToNodes(nodes, text) {
    nodes.forEach(n => n.innerText = text);
}

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
/* ---------- Flujo principal ---------- */


let clave = document.getElementById("clave");
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
        setTimeout(siguientePregunta, 600);
    } else {
        opcionSeleccionada.classList.add("border-danger", "bg-danger/10");
        opcionesNodes[pregunta.correcta].classList.add("border-success", "bg-success/10");

        estado.vidas--;
        estado.preguntasErradas++;

        sincronizarState();
        actualizarVidasUI();
        actualizarContadores();

        setTimeout(() => {
            if (estado.vidas <= 0) {
                el.quizContainer.classList.add("blur-sm");
                el.pantallaFin.classList.replace('hidden', 'block');
            } else {
                siguientePregunta();
            }
        }, 800);
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
    estado.preguntasSaltadas++;
    el.preguntasSaltadas.innerText = estado.preguntasSaltadas;
    estado.vidas--;
    siguientePregunta();
    actualizarVidasUI();
    estado.preguntasContestadas++;
    actualizarContadores();
    (estado.vidas <= 0) ? estado.modalPantallaFin = true : siguientePregunta();
    sincronizarState();
}


function actualizarContadores() {
    // Tu juego limita a 16 preguntas, por lo que este es el total base.
    let totalPreguntas = totalPreguntasBase;

    // Calcula el porcentaje de progreso (limitado a un máximo de 100%)
    const porcentaje = Math.min(100, (estado.progreso / totalPreguntasBase) * 100);
    el.porcentaje.innerText = Math.min(100, (estado.preguntasAcertadas / totalPreguntasBase) * 100);

    if (estado.preguntasContestadas === 2) {
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
    estado.racha = 0;
    sincronizarState();

    actualizarVidasUI();
    actualizarContadores();
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
let gusanito = { canvas: null, ctx: null, box: 18, snake: [], dir: "DOWN", food: {}, loopId: null, aciertos: 0, awaitingAnswer: false, currentResult: null, streak: 0 };

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

const body = new Image();
body.src = "./assets/body.png";


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

            ctx.drawImage(headImg, -gusanito.box / 2, -gusanito.box / 2, gusanito.box, gusanito.box);

            ctx.restore();
        } else {
            let previous = gusanito.snake[i - 1];
            let next = gusanito.snake[i + 1];

            // Tamaño normal de la celda
            const baseSize = gusanito.box;
            let sizeWidthSerpiente = baseSize;
            let sizeHeightSerpiente = baseSize;
            let bodyImg = body;
            let offsetY = 0;
            let offsetX = 0;

            if (previous && next) {
                // Recto horizontal
                if (previous.y === segment.y && next.y === segment.y) {
                    sizeWidthSerpiente = 14;
                    sizeHeightSerpiente = baseSize;
                    offsetX = (baseSize - sizeWidthSerpiente) / 2;
                    offsetY = 0;
                }
                // Recto vertical
                else if (previous.x === segment.x && next.x === segment.x) {
                    sizeWidthSerpiente = baseSize;
                    sizeHeightSerpiente = 14;
                    offsetX = 0;
                    offsetY = (baseSize - sizeHeightSerpiente) / 2;
                }
            }

            // Calcular centrado


            ctx.drawImage(
                bodyImg,
                segment.x + offsetX == 0 ? segment.x + 0 : segment.x + offsetX,
                segment.y + offsetY == 0 ? segment.y + 0 : segment.y + offsetY,
                sizeWidthSerpiente,
                sizeHeightSerpiente
            );
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

    estado.quiz = true;
    estado.modalPantallaFin = false;
    estado.juegoSopa = true;
    estado.juegoGusanito = false;

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
            // 1. Configurar estados
            estado.celebracionSopa = true;
            estado.vidas += 2; // ✅ Suma 2 vidas

            // 2. Actualizar UI inmediatamente
            actualizarVidasUI();
            sincronizarState(); // ⚠️ Esto debería mostrar el modal

            // 3. Esperar a que el modal esté visible
            setTimeout(() => {
                // 4. Mostrar cuenta regresiva
                el.cuentaRegresiva1.classList.remove("hidden");


                let segundos = 3;
                el.cuentaRegresiva1.innerText = segundos;

                let tempSegundos = setInterval(() => {
                    segundos--;
                    el.cuentaRegresiva1.innerText = segundos;

                    if (segundos === 0) {
                        clearInterval(tempSegundos);

                        // 5. Limpiar estados
                        el.cuentaRegresiva1.classList.add("hidden");
                        estado.celebracionSopa = false;
                        estado.juegoSopa = false;
                        estado.modalPantallaFin = false;

                        // 6. Resetear gusanito
                        gusanito.aciertos = 0;
                        gusanito.streak = 0;
                        el.racha.innerText = '0';

                        // 7. Preparar UI para el quiz

                        btnResolver.classList.remove("hidden");
                        btnResolver.disabled = false;

                        // 8. Volver al quiz
                        sincronizarState();
                        siguientePregunta();
                        volverAlQuiz();
                    }
                }, 1000);
            }, 800);
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
    el.quizContainer.classList.remove("blur-sm");
    // Desactivar eventos
    wordGrid.removeEventListener('mousedown', handleMouseDown);
    wordGrid.removeEventListener('mousemove', handleMouseMove);
    wordGrid.removeEventListener('mouseup', handleMouseUp);

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

/* ===================== INIT ===================== */
window.addEventListener("DOMContentLoaded", () => { actualizarVidasUI(); actualizarContadores(); });
