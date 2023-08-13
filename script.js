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
  
