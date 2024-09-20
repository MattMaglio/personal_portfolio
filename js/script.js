const logoImages = document.querySelectorAll('.logo-img');
const sections = document.querySelectorAll('.project-section');

logoImages.forEach(img => {
    img.addEventListener('click', () => {
        const sectionId = img.getAttribute('data-section'); // Obtener el id de la sección

        sections.forEach(section => {
            section.style.display = 'none';
        });

        const selectedSection = document.getElementById(sectionId);
        if (selectedSection) {
            selectedSection.style.display = 'block';
        }
    });
});

document.getElementById('py-section').style.display = 'block';

document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.querySelector('.contact-form');

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();

        // Obtener valores de los campos
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const subject = document.getElementById('subject').value.trim();
        const message = document.getElementById('message').value.trim();

        // Validar el formulario
        if (!name || !email || !subject || !message) {
            alert('Por favor, completa todos los campos.');
            return;
        }

        if (!validateEmail(email)) {
            alert('Por favor, ingresa un correo electrónico válido.');
            return;
        }

        // Simulación de envío exitoso
        /*alert('Formulario enviado con éxito.\nGracias por contactarte, ' + name + '!');*/

    });

    // Función para validar el formato del correo electrónico
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }
});
