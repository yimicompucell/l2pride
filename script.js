// Para activar el modo oscuro
Cookies.set('modoOscuro', 'activo');

// Para desactivar el modo oscuro
Cookies.set('modoOscuro', 'inactivo');


// Fecha objetivo: 18 de agosto de 2023 en la hora local de Perú (UTC -5)
const targetDate = new Date('2023-08-18T00:00:00');
const peruOffsetHours = -5; // Zona horaria de Perú (UTC -5)

// Obtener la hora actual en la zona horaria de Perú
const currentDate = new Date();
const currentTimeUTC = currentDate.getTime() + (currentDate.getTimezoneOffset() * 60000);
const currentTimePeru = new Date(currentTimeUTC + (3600000 * peruOffsetHours));

// Calcular el tiempo restante
let timeLeft = targetDate - currentTimePeru.getTime(); // Cambio de const a let

// Actualizar el contador cada segundo
const countdown = setInterval(function() {
  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  document.getElementById('countdown').innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

  if (timeLeft <= 0) {
    clearInterval(countdown);
    document.getElementById('countdown').innerHTML = '¡Feliz Mesario!';
  }

  timeLeft -= 1000; // Restar un segundo cada iteración
}, 1000);

document.getElementById('jokeBtn').addEventListener('click', function() {
    window.location.href = 'joker.html';
  });

  document.addEventListener('DOMContentLoaded', function() {
    const darkModeCookie = Cookies.get('darkMode');
    isDarkMode = darkModeCookie === 'true';
    applyDarkMode();
  });
  
  const darkModeToggle = document.getElementById('darkModeToggle');
  let isDarkMode = localStorage.getItem('darkMode') === 'true';
  
  // Función para cambiar el modo
  function toggleDarkMode() {
    isDarkMode = !isDarkMode;
    localStorage.setItem('darkMode', isDarkMode);
    applyDarkMode();
    Cookies.set('darkMode', isDarkMode ? 'true' : 'false'); // Actualizar la cookie al cambiar el modo
  }
  
  // Función para aplicar el modo
  function applyDarkMode() {
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
      darkModeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    } else {
      document.body.classList.remove('dark-mode');
      darkModeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    }
  }
  
  darkModeToggle.addEventListener('click', toggleDarkMode);
  applyDarkMode();  // Aplicar modo al cargar la página

  const menuButton = document.getElementById('menuButton');
  const menuDropdown = document.querySelector('.menu-dropdown');
  
  menuButton.addEventListener('click', () => {
    menuDropdown.classList.toggle('menu-open');
  });

// Para verificar el estado del modo oscuro al cargar una página
const modoOscuro = Cookies.get('modoOscuro');
if (modoOscuro === 'activo') {
    // Aplicar estilos de modo oscuro
} else {
    // Aplicar estilos normales
}