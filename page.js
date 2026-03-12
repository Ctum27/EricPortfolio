const menuLinks = document.querySelectorAll('.left-column a');
const sections = document.querySelectorAll('.right-column section');

function hideAllSections() {
    sections.forEach(section => {
        section.classList.add('section-hidden');
    });
}

function showSection(sectionId) {
    hideAllSections();
    const sectionToShow = document.getElementById(sectionId);
    if (sectionToShow) {
        sectionToShow.classList.remove('section-hidden');
    }
}
menuLinks.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        const targetId = this.getAttribute('href').substring(1); 
        showSection(targetId);
        
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
