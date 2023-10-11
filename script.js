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

// Variable global para llevar un registro del estado de la notificación
let notificationShown = false;

// Evita el desplazamiento de la página mientras se muestra la notificación
function disableScroll() {
    if (notificationShown) {
        const scrollY = window.scrollY;
        window.onscroll = () => {
            window.scrollTo(0, scrollY);
        };
    }
}

// Restaura el desplazamiento de la página
function enableScroll() {
    window.onscroll = null;
}

const socialLinks = document.querySelectorAll('.redes-sociales a[href="#"]');
const notification = document.querySelector('.fullscreen-notification');
const closeIcon = document.querySelector('.close-icon'); // Cambiado para seleccionar el icono de cierre

socialLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault(); // Evita que el enlace redireccione

        // Muestra la notificación con una animación
        notification.style.display = 'block';
        setTimeout(() => {
            notification.style.opacity = 1;
            notification.style.transform = 'scale(1)';
        }, 10);

        // Cierra la notificación con una animación después de un tiempo (puedes ajustar el tiempo)
        setTimeout(() => {
            notification.style.opacity = 0;
            notification.style.transform = 'scale(0.7)';
            setTimeout(() => {
                notification.style.display = 'none';
                // Restaura el desplazamiento cuando se oculta la notificación
                enableScroll();
            }, 300); // 300 ms para coincidir con la duración de la transición
        }, 2000); // 2000 ms (2 segundos) en este caso

        // Evita el desplazamiento mientras se muestra la notificación
        notificationShown = true;
        disableScroll();
    });
});

// Cierra la notificación cuando se hace clic en el icono de cierre
closeIcon.addEventListener('click', () => {
    notification.style.opacity = 0;
    notification.style.transform = 'scale(0.7)';
    setTimeout(() => {
        notification.style.display = 'none';
        // Restaura el desplazamiento cuando se oculta la notificación
        enableScroll();
    }, 300); // 300 ms para coincidir con la duración de la transición
});

