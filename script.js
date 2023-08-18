// Para activar el modo oscuro
Cookies.set('modoOscuro', 'activo');

// Para desactivar el modo oscuro
Cookies.set('modoOscuro', 'inactivo');


// Fecha objetivo: 18 de agosto de 2023 en la hora local de Perú (UTC -5)
const targetDate = new Date('2023-09-18T00:00:00');
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
    document.getElementById('countdown').innerHTML = 'test';
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


// Para verificar el estado del modo oscuro al cargar una página
const modoOscuro = Cookies.get('modoOscuro');
if (modoOscuro === 'activo') {
    // Aplicar estilos de modo oscuro
} else {
    // Aplicar estilos normales
}

const randomMessages = [
"  Mi luz en los días grises.",
"  Cada día contigo se convierte en una aventura única.",
"  Tu sonrisa ilumina de alegría mi mundo.",
"  Inspirando constantemente mis pensamientos.",
"  Nuestro amor guarda el mayor de los tesoros.",
"  Encuentro la felicidad en tus ojos.",
"  La razón detrás de mis momentos más memorables.",
"  Mi vida es mejor por tenerte a mi lado.",
"  Cada día a tu lado es un regalo preciado.",
"  La melodía en mi corazón.",
"  Cada momento contigo se vuelve un recuerdo inolvidable.",
"  Tú y yo, enfrentando el mundo juntos.",
"  Tienes la llave de mi corazón.",
"  El sueño que no quiero dejar atrás.",
"  Siendo mi refugio en los días difíciles.",
"  Siendo la razón por la que sonrío.",
"  Cada día a tu lado es un día perfecto.",
"  Brindando paz en medio del caos.",
"  Siendo quien ilumina mi vida.",
"  Siendo mi confidente y mejor amigo.",
"  Siendo mi razón para creer en el amor.",
"  Siendo mi sol en los días nublados.",
"  Siendo mi persona favorita en el mundo.",
"  Tú y yo, juntos por siempre.",
"  Mi verdadero amor.",
"  Haciendo que cada día sea especial.",
"  Siendo quien acelera mi corazón.",
"  Mi sueño que se hace realidad.",
"  Siendo mi fuente de inspiración para mejorar.",
"  Siendo mi motivación cada mañana.",
"  Siempre a mi lado en los días grises.",
"  Cada día a tu lado es una nueva experiencia.",
"  Tu sonrisa ilumina mis días.",
"  Inspirando mi creatividad sin fin.",
"  Nuestro amor es mi mayor fortuna.",
"  Encuentro la felicidad en tu mirada.",
"  La fuerza detrás de mis recuerdos más preciados.",
"  Mi vida es enriquecida por tu presencia constante.",
"  Cada día a tu lado es un regalo que valoro.",
"  La música en mi corazón.",
"  Cada instante contigo se convierte en un tesoro.",
"  Tú y yo, unidos contra todo desafío.",
"  Posees la llave de mi ser.",
"  El sueño que prefiero no despertar.",
"  Siendo mi abrigo en los momentos difíciles.",
"  Siendo la causa de mis sonrisas.",
"  Cada día a tu lado es una perfección.",
"  Brindando calma en medio del caótico mundo.",
"  Eres quien ilumina cada rincón de mi vida.",
"  Siendo mi confidente y compañero inigualable.",
"  Siendo la base de mi fe en el amor.",
"  Siendo mi sol en las jornadas nubladas.",
"  Eres mi persona favorita en este vasto mundo.",
"  Tú y yo, compañeros eternos.",
"  Mi amor genuino.",
"  Tu presencia hace que cada día sea singular.",
"  Siendo la fuerza que hace latir mi corazón con fervor.",
"  Mi anhelo hecho realidad.",
"  Fomentando mi crecimiento y superación.",
"  Siendo el motivo que me hace despertar cada día.",
"  Tú y yo, un dúo que no puede ser detenido.",
"  El amor de mi vida.",
"  Siendo la estrella que guía mi camino.",
"  Mi compañero de por vida, en cada etapa.",
"  Mi amor, mi vida y mi esencia.",
"  Tú y yo, en esta apasionante travesía conjunta.",
"  Eres el epicentro de mi universo.",
"  Encarnas el amor que siempre imaginé.",
"  Siendo la fuente de mi alegría perpetua.",
"  Mi refugio al final de cada día.",
"  Tú y yo, en una narrativa amorosa interminable.",
"  Brindando serenidad en la tormenta.",
"  Mi oasis de felicidad.",
"  Siendo la razón de mis sonrisas diarias.",
"  El tesoro más valioso en mi corazón.",
"  Mi cómplice y apoyo incondicional.",
"  Eres mi amor, mi vida y mi razón de ser.",
"  Tú y yo, inseparables en el camino.",
"  Siendo mi luz en los momentos oscuros.",
"  Reflejando mis sentimientos más profundos.",
"  Representando un amor sin fin.",
"  Mi dulce sueño convertido en realidad.",
"  Mi gozo en cada instante.",
"  Mi compañero en todas las etapas de la vida.",
"  Tú y yo, conectados en cuerpo y alma.",
"  El fundamento de mi fe en el destino.",
"  Siendo mi amor que nunca se desvanece.",
"  Mi pilar y confidente.",
"  Inspirando mi creencia en el amor verdadero.",
"  La respuesta a mis oraciones.",
"  Mi inspiración para superarme cada día.",
"  Mi razón para despertar con una sonrisa.",
"  Tú y yo, un amor que se fortalece con el tiempo.",
"  Mi incentivo para amar sin restricciones.",
"  Mi mundo y mi propósito.",
"  Mi amor que nunca se apaga.",
"  Mi todo y más allá.",
"  Tú y yo, unidos por un vínculo inquebrantable.",
"  Siendo mi motivación ante cada desafío.",
"  Mi corazón que late fuera de mi pecho.",
];

const randomMessageContainer = document.getElementById('randomMessageContainer');
const randomMessage = document.getElementById('randomMessage');
const newRandomMessageBtn = document.getElementById('newRandomMessageBtn');

const usedIndices = [];

function getRandomMessage() {
  if (usedIndices.length === randomMessages.length) {
    usedIndices.length = 0;
  }

  let randomIndex;
  do {
    randomIndex = Math.floor(Math.random() * randomMessages.length);
  } while (usedIndices.includes(randomIndex));

  usedIndices.push(randomIndex);
  return randomMessages[randomIndex];
}

newRandomMessageBtn.addEventListener('click', function() {
  const message = getRandomMessage();
  randomMessage.textContent = message;
});

window.addEventListener('load', function() {
  const initialMessage = getRandomMessage();
  randomMessage.textContent = initialMessage;
});