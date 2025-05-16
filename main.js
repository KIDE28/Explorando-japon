function mostrarSeccion(id) {
    document.querySelectorAll('section').forEach(section => {
        section.style.display = 'none';
    });
    document.getElementById(id).style.display = 'block';
}

function cambiarIdioma(idioma) {
    document.querySelectorAll('.es, .en').forEach(element => {
        element.style.display = 'none';
    });
    document.querySelectorAll('.' + idioma).forEach(element => {
        element.style.display = 'block';
    });
    mostrarMensajeHora(idioma);
}

function mostrarMensajeHora(idioma) {
    const mensajeHora = document.getElementById('mensaje-hora');
    const hora = new Date().getHours();
    let mensaje = '';

    if (idioma === 'es') {
        if (hora < 12) mensaje = '¡Buenos días!';
        else if (hora < 18) mensaje = '¡Buenas tardes!';
        else mensaje = '¡Buenas noches!';
    } else {
        if (hora < 12) mensaje = 'Good morning!';
        else if (hora < 18) mensaje = 'Good afternoon!';
        else mensaje = 'Good evening!';
    }

    mensajeHora.textContent = mensaje;
}

// Slider automático
function iniciarSlider(seccionId, imagenes) {
    let index = 0;
    const slider = document.getElementById(seccionId);

    setInterval(() => {
        const imgs = slider.querySelectorAll('img');
        imgs.forEach(img => {
            img.style.opacity = 0;
            setTimeout(() => {
                img.src = imagenes[index];
                img.style.opacity = 1;
            }, 500);
        });

        index = (index + 1) % imagenes.length;
    }, 4000);
}

// Imágenes para cada sección
const imagenesInicio = ["Media/SG010_6.jpg","Media/index.jpg"];
const imagenesHistoria = ["Media/f67af42b16504ad22c4afb7ceabe86e3.jpg","Media/japan-625773_1920-750x503.jpg"];
const imagenesCultura = ["Media/plato-tipico-de-japon-sashimi.jpg","Media/geisha-japan.jpg"];

// Iniciar sliders
document.addEventListener("DOMContentLoaded", () => {
    mostrarSeccion('inicio');
    cambiarIdioma('es');
    iniciarSlider('slider-inicio', imagenesInicio);
    iniciarSlider('slider-historia', imagenesHistoria);
    iniciarSlider('slider-cultura', imagenesCultura);
});
