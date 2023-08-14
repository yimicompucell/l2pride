document.addEventListener('DOMContentLoaded', function() {
    const darkModeCookie = Cookies.get('darkMode');
    isDarkMode = darkModeCookie === 'true';
    applyDarkMode();
  });
  
  let isDarkMode = localStorage.getItem('darkMode') === 'true';
  
  function applyDarkMode() {
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }
  
  applyDarkMode();  // Aplicar modo al cargar la página
  