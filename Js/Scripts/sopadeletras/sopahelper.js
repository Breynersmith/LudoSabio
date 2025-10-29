
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

