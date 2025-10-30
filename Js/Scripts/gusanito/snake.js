let gusanito = { canvas: null, ctx: null, box: 18, snake: [], dir: "DOWN", food: {}, loopId: null, aciertos: 0, awaitingAnswer: false, currentResult: null, streak: 0 };

function generarComidaGusanito() {
    const cols = Math.floor(gusanito.canvas.width / gusanito.box), rows = Math.floor(gusanito.canvas.height / gusanito.box); gusanito.food = { x: Math.floor(Math.random() * cols) * gusanito.box, y: Math.floor(Math.random() * rows) * gusanito.box }
}

const headLeftImg = new Image();
headLeftImg.src = "../assets/head-left.png";

const headRightImg = new Image();
headRightImg.src = "../assets/head-right.png";

const headUpImg = new Image();
headUpImg.src = "../assets/head-up.png";

const headDownImg = new Image();
headDownImg.src = "../assets/head-down.png";

const body = new Image();
body.src = "../assets/body.png";


const appleImg = new Image();
appleImg.src = "../assets/appleImg.png";

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
        sincronizarState();
        generarOperacionModalSegunNivel();

    } else {
        gusanito.snake.pop();
    }
}
