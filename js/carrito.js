const cartItems = [];

function updateCartModal() {
    const cartItemsList = document.getElementById('cartItemsList');
    const totalPriceElem = document.getElementById('totalPrice');
    const cartItemCountElem = document.getElementById('cartItemCount');

    // Limpiar lista de items
    cartItemsList.innerHTML = '';

    // Añadir encabezados
    const header = document.createElement('li');
    header.className = 'list-group-item d-flex font-weight-bold';
    header.innerHTML = `
        <div class="flex-fill">              Producto</div>
        <div class="text-center">Unidad      </div>
        <div class="text-center">Cant      </div>
        <div class="text-center">Precio</div>
    `;
    cartItemsList.appendChild(header);

    let totalPrice = 0;

    // Añadir items del carrito a la lista
    cartItems.forEach(item => {
        const listItem = document.createElement('li');
        listItem.className = 'list-group-item d-flex justify-content-between align-items-center';

        // Crear icono de eliminar
        const removeIcon = document.createElement('span');
        removeIcon.innerHTML = '&times;';
        removeIcon.className = 'text-danger cursor-pointer me-3';
        removeIcon.onclick = () => removeItem(item.name);

        let auxName = capitalizeFirstLetter(item.name);
        
        // Crear controles de cantidad
        const quantityDiv = document.createElement('div');
        quantityDiv.className = 'quantity-controls text-center';

        // Calcular el precio total por unidad
        const totalUnitPrice = (item.price * item.quantity).toFixed(2);
    
        /*Creo el modal a traves de js */
        const decreaseButton = document.createElement('button');
        decreaseButton.textContent = '-';
        decreaseButton.className = 'btn btn-secondary btn-sm';
        decreaseButton.onclick = () => updateQuantity(item.name, -1);

        const quantitySpan = document.createElement('span');
        quantitySpan.textContent = item.quantity.toString().padStart(2, ' ');
        quantitySpan.className = 'mx-2';

        const increaseButton = document.createElement('button');
        increaseButton.textContent = '+';
        increaseButton.className = 'btn btn-secondary btn-sm';
        increaseButton.onclick = () => updateQuantity(item.name, 1);

        quantityDiv.appendChild(decreaseButton);
        quantityDiv.appendChild(quantitySpan);
        quantityDiv.appendChild(increaseButton);


        // Añadir elementos al listItem
        listItem.appendChild(removeIcon);
        listItem.appendChild(document.createTextNode(auxName));
        listItem.appendChild(document.createTextNode(`     $${item.price.toFixed(2)}`));
        listItem.appendChild(quantityDiv);
        listItem.appendChild(document.createTextNode(`  $${totalUnitPrice}`));

        cartItemsList.appendChild(listItem);

        totalPrice += item.price * item.quantity;
    });

    // Actualizar el precio total
    totalPriceElem.innerHTML = `Total: <span class="float-end">$${totalPrice.toFixed(2)} </span>`;
    totalPriceElem.className = 'border p-2 mt-3 rounded'; // Agregar estilo al total

    // Actualizar el contador de items en el carrito
    cartItemCountElem.textContent = cartItems.length;
}

function updateQuantity(itemName, change) {
    const item = cartItems.find(item => item.name === itemName);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            removeItem(itemName);
        } else {
            updateCartModal();
        }
    }
}

function removeItem(itemName) {
    const itemIndex = cartItems.findIndex(item => item.name === itemName);
    if (itemIndex > -1) {
        cartItems.splice(itemIndex, 1);
        updateCartModal();
    }
}

function capitalizeFirstLetter(string) {
    if (!string) return ''; // Maneja el caso de un string vacío
    return string.charAt(0).toUpperCase() + string.slice(1);
}

document.querySelectorAll('.product-card .btn-primary').forEach(button => {
    button.addEventListener('click', function (event) {
        event.preventDefault();

        const productCard = this.closest('.product-card');
        const itemName = productCard.getAttribute('data-name');
        const itemPrice = parseFloat(productCard.getAttribute('data-price'));

        // Verificar si el producto ya existe en el carrito
        const existingItem = cartItems.find(item => item.name === itemName);

        if (existingItem) {
            // Aumentar la cantidad si el producto ya existe
            existingItem.quantity++;
        } else {
            // Añadir nuevo item al carrito
            cartItems.push({ name: itemName, price: itemPrice, quantity: 1 });
        }

        // Actualizar la ventana modal del carrito
        updateCartModal();
    });
});

const switchButton = document.querySelector('#switch');
const currentTheme = localStorage.getItem('theme');

if (currentTheme) {
    document.body.classList.add(currentTheme);
    if (currentTheme === 'dark-mode') {
        document.querySelector('.slider').style.transform = 'translateX(45px)';
    }
}

switchButton.addEventListener('click', function () {
    document.body.classList.toggle('dark-mode');
    let theme = 'light-mode';
    if (document.body.classList.contains('dark-mode')) {
        theme = 'dark-mode';
        document.querySelector('.slider').style.transform = 'translateX(45px)';
    } else {
        document.querySelector('.slider').style.transform = 'translateX(0px)';
    }
    localStorage.setItem('theme', theme);
});

// No va a la referencia del 'a'
document.getElementById('mode-switch').addEventListener('click', function (event) {
    event.preventDefault();
    document.getElementById('switch').click();
});