/* window.onscroll = function() {
    // Verifica si el usuario se desplaza hacia abajo una cierta cantidad de píxeles antes de aplicar el efecto sticky
    if (window.pageYOffset > 100) {
        document.querySelector('.header-nav').classList.add('sticky');
    } else {
        document.querySelector('.header-nav').classList.remove('sticky');
    }
}; */

const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');
const content = document.querySelector('.content'); // Selecciona el elemento con el fondo semitransparente
const body = document.body;

menuToggle.addEventListener('click', () => {
    if (menu.classList.contains('show-menu')) {
        // Si el menú ya está abierto, ciérralo
        menu.style.height = '0';
        menu.classList.remove('show-menu');
        content.style.opacity = 0; // Oculta el fondo
        content.style.pointerEvents = 'none'; // Deshabilita interacción con el fondo
        body.style.overflow = 'auto'; // Habilita el desplazamiento
    } else {
        // Si el menú está cerrado, ábrelo
        menu.style.height = '100%';
        menu.classList.add('show-menu');
        content.style.opacity = 0.5; // Muestra el fondo con opacidad del 50%
        content.style.pointerEvents = 'auto'; // Habilita interacción con el fondo
        body.style.overflow = 'hidden'; // Deshabilita el desplazamiento
    }
});

const closeButton = document.querySelector('.close-button');

closeButton.addEventListener('click', () => {
    menu.style.height = '0'; // Cierra el menú
    menu.classList.remove('show-menu');
    content.style.opacity = 0; // Oculta el fondo nuevamente
    content.style.pointerEvents = 'none'; // Deshabilita interacción con el contenido principal
    body.style.overflow = 'auto'; // Habilita el desplazamiento
});
