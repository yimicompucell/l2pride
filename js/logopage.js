// Cambiar favicon según el tema
function updateFavicon() {
    const favicon = document.querySelector('link[rel="icon"]');
    
    if (!favicon) {
        // Create favicon link if it doesn't exist
        const newFavicon = document.createElement('link');
        newFavicon.rel = 'icon';
        document.head.appendChild(newFavicon);
        favicon = newFavicon;
    }

    const darkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;

    favicon.href = darkMode 
        ? '/assets/logo.webp'   // Favicon para modo claro
        : '/assets/logo.webp';   // Favicon para modo oscuro
}

// Llama a la función al cargar la página
window.addEventListener('load', updateFavicon);

// Escucha cambios en el tema del sistema
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', updateFavicon);