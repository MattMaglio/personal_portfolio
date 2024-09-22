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

// Selecciona el formulario después de que el DOM ha cargado
/*
document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.querySelector('.contactForm');

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Evita el envío tradicional del formulario

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

        // Crear un objeto con los datos del formulario
        const formData = {
            name: name,
            email: email,
            subject: subject,
            message: message
        };

        // Enviar el formulario a través de fetch a FormSubmit
        fetch('https://formsubmit.co/ajax/matiasadrian.maglio@gmail.com', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(formData) // Convierte los datos del formulario a JSON
        })
        .then(response => response.json())
        .then(data => {
            // Mostrar un mensaje de éxito
            alert('Formulario enviado con éxito.\nGracias por contactarte, ' + name + '!');
            contactForm.reset(); // Resetea el formulario después de enviarlo
        })
        .catch(error => {
            // Manejar errores en el envío
            alert('Hubo un error al enviar el formulario. Por favor, intenta de nuevo.');
            console.error('Error:', error);
        });
    });
});

// Función para validar el formato del correo electrónico
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

*/