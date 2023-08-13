// Redireccionar a la página principal después de 30 segundos
setTimeout(function() {
    window.location.href = 'index.html';
}, 30000);

const countdownElement = document.getElementById('countdown');
let countdown = 30;

function updateCountdown() {
  countdownElement.textContent = countdown;

  if (countdown <= 0) {
    clearInterval(countdownInterval);
    window.location.href = 'index.html';
  }

  countdown--;
}

const countdownInterval = setInterval(updateCountdown, 1000);
