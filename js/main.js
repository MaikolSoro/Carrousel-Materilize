document.addEventListener('DOMContentLoaded', () => {
    const elementos = document.querySelectorAll('.carousel');
    M.Carousel.init(elementos, {
        duration: 150,
        dist: -80, // distancia perspectiva
        shift: 5, // las distancia de cada una de las imagenes de los costados
        padding: 5,
        numVisible: 3, // cuantas imagenes queremos que sean visibles
        indicators: true,
        noWrap: false,
    });
});