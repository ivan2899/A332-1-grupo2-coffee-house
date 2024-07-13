document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('form');
    const successAlert = document.getElementById('successAlert');
    const errorAlert = document.getElementById('errorAlert');
    const closeButtons = document.querySelectorAll('.alert-close');
    const successActionButton = document.getElementById('successAction');
    const errorActionButton = document.getElementById('errorAction');
    const submitButton = document.querySelector('.btn');

    submitButton.addEventListener('click', function (e) {
        e.preventDefault(); // Evita el envío automático del formulario

        const isValid = checkInputs();

        if (isValid) {
            showAlert(successAlert);
            setTimeout(function() {
                window.location.href = '../index.html';
            }, 3000);
        } else {
            showAlert(errorAlert);
        }
    });

    closeButtons.forEach(button => {
        button.addEventListener('click', function () {
            this.parentElement.parentElement.classList.add('hidden');
        });
    });

    successActionButton.addEventListener('click', function () {
        successAlert.classList.add('hidden');
    });

    errorActionButton.addEventListener('click', function () {
        errorAlert.classList.add('hidden');
    });

    function showAlert(alertElement) {
        alertElement.classList.remove('hidden');
    }

    function checkInputs() {
        let isValid = true; // Cambiado a true inicialmente
        const emailValue = document.getElementById('email').value.trim();
        const asuntoValue = document.getElementById('asunto').value.trim();
        const mensajeValue = document.getElementById('mensaje').value.trim();

        if (emailValue === '') {
            setErrorFor(document.getElementById('email'), 'Debe ingresar email');
            isValid = false;
        } else if (!isEmail(emailValue)) {
            setErrorFor(document.getElementById('email'), 'No ingresó un email válido');
            isValid = false;
        } else {
            setSuccessFor(document.getElementById('email'));
        }

        if (asuntoValue === '') {
            setErrorFor(document.getElementById('asunto'), 'Debe ingresar asunto');
            isValid = false;
        } else {
            setSuccessFor(document.getElementById('asunto'));
        }

        if (mensajeValue === '') {
            setErrorFor(document.getElementById('mensaje'), 'Debe ingresar mensaje');
            isValid = false;
        } else {
            setSuccessFor(document.getElementById('mensaje'));
        }

        return isValid;
    }

    function setErrorFor(input, message) {
        const formControl = input.parentElement;
        formControl.className = 'form__section error'; // Aplica la clase 'error' al contenedor
        const small = formControl.querySelector('small');
        small.innerText = message;
    }

    function setSuccessFor(input) {
        const formControl = input.parentElement;
        formControl.className = 'form__section success'; // Aplica la clase 'success' al contenedor
    }

    function isEmail(email) {
        return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
    }
});


