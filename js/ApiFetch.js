const btn = document.getElementById('btnFetchProductos');
const div = document.getElementById('productsContainer');
const mensajeDiv = document.getElementById('contenedor-boton-api"'); 
let contador = 0
btn.addEventListener('click', () => {

    console.log('Fetch API');
    fetch("https://fake-coffee-api.vercel.app/api")
        .then((res) => res.json())
        .then((data) => renderProductos(data));
    
})

function renderProductos(productos){
    for (let  i = 0; i < 4; i++){
        if (contador < productos.length) {
            div.innerHTML += `<div class="col-lg-3 col-md-6 col-sm-12 mb-4 product-card" data-price="${productos[contador].price}" data-name="${productos[contador].name}" data-type="mercaderia">` +
                    `<div class="card m-auto mt-5">`+
                    `<img src="${productos[contador].image_url}" class="card-img-top" alt="bolsa de cafe">`+
                    `<div class="card-body">`+
                        `<h5 class="card-title">${productos[contador].name}</h5>`+
                        `<p class="card-text">${productos[contador].flavor_profile.join()}</p>`+
                        `<p class="card-price">${productos[contador].price}</p> `+
                    ` <a href="#" class="btn btn-primary btn-hover"><i class="bx bx-cart-add bx-tada"></i>  |   Agregar al carrito</a>`+
                    `</div></div></div>`;
            contador++;
        } else {
            console.log("No hay más productos disponibles.");
            mensajeDiv.style.display = 'block';
            break; 
        }
    }
    if (contador >= productos.length) {
        btn.style.display = 'none'; 
    }
}