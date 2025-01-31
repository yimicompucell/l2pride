// Menú móvil
document.getElementById('menu-btn').addEventListener('click', () => {
    const menu = document.querySelector('.md\\:flex');
    menu.classList.toggle('hidden');
});

// Smooth scroll para los enlaces
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});