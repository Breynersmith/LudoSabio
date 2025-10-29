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