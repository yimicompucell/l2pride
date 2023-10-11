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

menuToggle.addEventListener('click', () => {
    menu.style.height = '100%'; // Restablece la altura al valor completo
    menu.classList.add('show-menu');
});

// Agregar esto al código JavaScript existente
document.addEventListener('click', (e) => {
    if (!menu.contains(e.target) && !menuToggle.contains(e.target)) {
        menu.classList.remove('show-menu');
    }
});

const closeButton = document.querySelector('.close-button');

closeButton.addEventListener('click', () => {
    menu.style.height = '0'; // Establece el ancho en cero al cerrar
    // Opcionalmente, puedes agregar un retraso antes de ocultar el menú
    setTimeout(() => {
        menu.classList.remove('show-menu');
    }, 400); // 400 ms es la duración de la transición
});
