document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('form');
    const successAlert = document.getElementById('successAlert');
    const errorAlert = document.getElementById('errorAlert');
    const closeButtons = document.querySelectorAll('.alert-close');
    const successActionButton = document.getElementById('successAction');
    const errorActionButton = document.getElementById('errorAction');
    const submitButton = document.querySelector('.btn');

    submitButton.addEventListener('click', function(e) {
        e.preventDefault(); // Evita el envío automático del formulario

        const isValid = checkInputs();

        if (isValid) {
            const email = document.querySelector('#email').value
            const password = document.querySelector('#password').value
            const Users = JSON.parse(localStorage.getItem('users')) || []
            const validUser = Users.find(user => user.email === email && user.password === password)
            if(!validUser)
            {
                return alert("usuario incorrecto");
            }
            alert(`bienvenido ${validUser.name} a Coffe's House`)
            showAlert(successAlert);
        } else {
            showAlert(errorAlert);
        }
    });

    closeButtons.forEach(button => {
        button.addEventListener('click', function() {
            this.parentElement.parentElement.classList.add('hidden');
        });
    });

    successActionButton.addEventListener('click', function() {
        successAlert.classList.add('hidden');
    });

    errorActionButton.addEventListener('click', function() {
        errorAlert.classList.add('hidden');
    });

    function showAlert(alertElement) {
        alertElement.classList.remove('hidden');
    }

    function checkInputs() {
        let isValid = true; // Cambiado a true inicialmente
        const emailValue = document.getElementById('email').value.trim();
        const passwordValue = document.getElementById('password').value.trim();
        
        if (emailValue === '') {
            setErrorFor(document.getElementById('email'), 'Debe ingresar un email');
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
});


