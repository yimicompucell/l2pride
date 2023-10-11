// Obtén una lista de todos los capítulos
const chapters = document.querySelectorAll('.book-chapter');
let currentChapter = 0;

// Función para mostrar el capítulo actual
function showCurrentChapter() {
    chapters.forEach((chapter, index) => {
        if (index === currentChapter) {
            chapter.style.display = 'block';
        } else {
            chapter.style.display = 'none';
        }
    });

    // Oculta o muestra los botones de navegación según el capítulo actual
    const prevButton = document.querySelector('.btn-prev');
    const nextButton = document.querySelector('.btn-next');

    if (currentChapter === 0) {
        prevButton.style.display = 'none';
    } else {
        prevButton.style.display = 'block';
    }

    if (currentChapter === chapters.length - 1) {
        nextButton.style.display = 'none';
    } else {
        nextButton.style.display = 'block';
    }
}

// Función para avanzar al siguiente capítulo
function nextChapter() {
    if (currentChapter < chapters.length - 1) {
        currentChapter++;
        showCurrentChapter();
    }
}

// Función para retroceder al capítulo anterior
function prevChapter() {
    if (currentChapter > 0) {
        currentChapter--;
        showCurrentChapter();
    }
}

// Mostrar el primer capítulo al cargar la página
showCurrentChapter();
