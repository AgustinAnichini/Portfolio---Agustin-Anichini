document.addEventListener("DOMContentLoaded", function () {
    const elementos = document.querySelectorAll('.izquierda, .derecha, .arriba, .redesOb, .redesOb1, .redesOb2, .inputOb, .inputOb1, .inputOb2, .inputOb3');

    const hacerAnimacion = (entradas, observador) => {
        entradas.forEach(entrada => {
            if (entrada.isIntersecting) {
                entrada.target.classList.add('visible');
            } else {
                entrada.target.classList.remove('visible');
            }
        });
    };

    const observador = new IntersectionObserver(hacerAnimacion, {
        root: null,
        rootMargin: "3%",
        threshold: 0.1 // Se activa cuando el 10% del elemento está visible
    });

    // Observa los elementos
    elementos.forEach(elemento => observador.observe(elemento));
});
