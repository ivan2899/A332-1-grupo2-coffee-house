document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('form');
    const successAlert = document.getElementById('successAlert');
    const errorAlert = document.getElementById('errorAlert');
    const warningAlert = document.getElementById('warningAlert');
    const closeButtons = document.querySelectorAll('.alert-close');
    const successActionButton = document.getElementById('successAction');
    const errorActionButton = document.getElementById('errorAction');
    const warningActionButton = document.getElementById('warningAction');
    const submitButton = document.querySelector('.btn');

    submitButton.addEventListener('click', function (e) {
        e.preventDefault(); // Evita el envío automático del formulario

        const isValid = checkInputs();

        if (isValid) {
            const name = document.querySelector('#username').value;
            const email = document.querySelector('#email').value;
            const password = document.querySelector('#password').value;
            
            const Users = JSON.parse(localStorage.getItem('users')) || []
            const isUserRegistered = Users.find(user => user.email === email)
            if (isUserRegistered) {
                showAlert(warningAlert);
                return;
            }
            
            Users.push({ name: name, email: email, password: password });
            localStorage.setItem('users', JSON.stringify(Users))
            showAlert(successAlert);
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
        window.location.href = './login.html'
    });

    errorActionButton.addEventListener('click', function () {
        errorAlert.classList.add('hidden');
    });

    warningActionButton.addEventListener('click', function () {
        warningAlert.classList.add('hidden');
    });


    function showAlert(alertElement) {
        alertElement.classList.remove('hidden');
    }

    function checkInputs() {
        let isValid = true; // Cambiado a true inicialmente
        const usuarioValue = document.getElementById('username').value.trim();
        const emailValue = document.getElementById('email').value.trim();
        const passwordValue = document.getElementById('password').value.trim();
        const password2Value = document.getElementById('password-confirm').value.trim();
        const termsChecked = document.getElementById('terms').checked;

        if (usuarioValue === '') {
            setErrorFor(document.getElementById('username'), 'Debe ingresar usuario');
            isValid = false;
        } else {
            setSuccessFor(document.getElementById('username'));
        }

        if (emailValue === '') {
            setErrorFor(document.getElementById('email'), 'Debe ingresar email');
            isValid = false;
        } else if (!isEmail(emailValue)) {
            setErrorFor(document.getElementById('email'), 'No ingresó un email válido');
            isValid = false;
        } else {
            setSuccessFor(document.getElementById('email'));
        }

        if (passwordValue === '') {
            setErrorFor(document.getElementById('password'), 'Debe ingresar una clave');
            isValid = false;
        } else {
            setSuccessFor(document.getElementById('password'));
        }

        if (password2Value === '') {
            setErrorFor(document.getElementById('password-confirm'), 'Debe confirmar la clave');
            isValid = false;
        } else if (passwordValue !== password2Value) {
            setErrorFor(document.getElementById('password-confirm'), 'Las claves no coinciden');
            setErrorFor(document.getElementById('password'), 'Las claves no coinciden');
            isValid = false;
        } else {
            setSuccessFor(document.getElementById('password-confirm'));
        }

        if (!termsChecked) {
            setErrorForTerms('Debe aceptar los términos y condiciones');
            isValid = false;
        } else {
            setSuccessForTerms();
        }

        return isValid;
    }

    function setErrorFor(input, message) {
        const formControl = input.parentElement;
        const small = formControl.querySelector('small');
        formControl.className = 'input-ingreso error'; // Aplica la clase 'error' al contenedor
        small.innerText = message;
    }

    function setSuccessFor(input) {
        const formControl = input.parentElement;
        formControl.className = 'input-ingreso success'; // Aplica la clase 'success' al contenedor
    }

    function setErrorForTerms(message) {
        const termsError = document.getElementById('terms-error');
        const small = termsError.querySelector('small');
        termsError.classList.add('terminos'); // Aplica la clase 'terminos' al contenedor del checkbox
        small.innerText = message;
    }

    function setSuccessForTerms() {
        const termsError = document.getElementById('terms-error');
        termsError.classList.remove('terminos'); // Elimina la clase 'terminos' si no hay error
        termsError.classList.add('hidden'); // Asegúrate de ocultar el mensaje de éxito si es necesario
    }


    function isEmail(email) {
        return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
    }
});
