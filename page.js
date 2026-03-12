const menuLinks = document.querySelectorAll('.left-column a');
const sections = document.querySelectorAll('.right-column section');

function hideAllSections() {
    sections.forEach(section => {
        section.classList.add('section-hidden');
    });
}

function showSection(sectionId) {
    // Primero ocultamos todas
    hideAllSections();
    // Luego mostramos la que queremos (quitando la clase 'section-hidden')
    const sectionToShow = document.getElementById(sectionId);
    if (sectionToShow) {
        sectionToShow.classList.remove('section-hidden');
    }
}
menuLinks.forEach(link => {
    link.addEventListener('click', function(event) {
        // Prevenimos el comportamiento por defecto del enlace (que desplaza la página)
        event.preventDefault();
        
        // Obtenemos el ID de la sección a mostrar (del atributo href, quitando el #)
        const targetId = this.getAttribute('href').substring(1); // Ej: "About"
        
        // Mostramos la sección correspondiente
        showSection(targetId);
        
        // Opcional: actualizar clase 'active' en el menú
        menuLinks.forEach(l => l.classList.remove('active'));
        this.classList.add('active');
    });
});

showSection('About');

menuLinks.forEach(link => {
    if (link.getAttribute('href') === '#About') {
        link.classList.add('active');
    }
});