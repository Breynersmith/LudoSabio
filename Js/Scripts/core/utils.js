function shuffle(a) { for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1));[a[i], a[j]] = [a[j], a[i]]; } return a; }
function mezclarEn(dest, src) { src.forEach(q => { if (!dest.includes(q)) dest.push(q); }); }


function temporizador(elementoQuiz, elementoModal, mostrar = true, delay = 800) {
    setTimeout(() => {

        if (mostrar) {
            elementoQuiz.classList.add("blur-sm");
            elementoModal.classList.remove("hidden");
        } else {
            elementoQuiz.classList.remove("blur-sm");
            elementoModal.classList.add("hidden");
        }



        // Mostrar u ocultar el modal con transición
        toggleViewWithTransition(elementoModal, mostrar);

    }, delay);
}