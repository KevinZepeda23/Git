document.addEventListener('DOMContentLoaded', () => {
    const homeBtn = document.getElementById('homeBtn');
    const aboutBtn = document.getElementById('aboutBtn');
    const contactBtn = document.getElementById('contactBtn');

    const homeSection = document.getElementById('home');
    const aboutSection = document.getElementById('about');
    const contactSection = document.getElementById('contact');

    homeBtn.addEventListener('click', () => {
        activateSection(homeSection);
    });

    aboutBtn.addEventListener('click', () => {
        activateSection(aboutSection);
    });

    contactBtn.addEventListener('click', () => {
        activateSection(contactSection);
    });

    function activateSection(section) {
        homeSection.classList.remove('active');
        aboutSection.classList.remove('active');
        contactSection.classList.remove('active');
        section.classList.add('active');
    }
});
//Hola Puto Juan
