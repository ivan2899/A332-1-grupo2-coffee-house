document.getElementById('submitOrder').addEventListener('click', function () {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const address = document.getElementById('address').value;
    const phone = document.getElementById('phone').value;

    if (name && email && address && phone) {
        const confirmationMessage = `
            Pedido realizado con éxito:<br>
            <strong>Nombre:</strong> ${name}<br>
            <strong>Email:</strong> ${email}<br>
            <strong>Dirección:</strong> ${address}<br>
            <strong>Teléfono:</strong> ${phone}
        `;
        document.getElementById('confirmationMessage').innerHTML = confirmationMessage;

        // Mostrar la alerta personalizada
        const confirmationModal = new bootstrap.Modal(document.getElementById('confirmationModal'));
        confirmationModal.show();

        // Cerrar el modal de pedido
        const orderModal = bootstrap.Modal.getInstance(document.getElementById('orderModal'));
        orderModal.hide();

        // Limpiar el formulario
        document.getElementById('orderForm').reset();
    } else {
        showErrorMessage('Por favor, completa todos los campos.');
    }

    function showErrorMessage(message) {
        const confirmationMessage = `<strong>Error:</strong> ${message}`;
        document.getElementById('confirmationMessage').innerHTML = confirmationMessage;
    
        const confirmationModal = new bootstrap.Modal(document.getElementById('confirmationModal'));
        
        // Mostrar el modal
        confirmationModal.show();
    
        // Agregar la clase de vibración
        const modalContent = document.querySelector('#confirmationModal .modal-content');
        modalContent.classList.add('vibrate');
    
        // Eliminar la clase después de la animación para poder aplicarla nuevamente
        setTimeout(() => {
            modalContent.classList.remove('vibrate');
        }, 500);
    }
   
 $('.modal').on('shown.bs.modal', function () {
        $('body').addClass('no-scroll');
    });
    
    $('.modal').on('hidden.bs.modal', function () {
        $('body').removeClass('no-scroll');
    }); 
});
