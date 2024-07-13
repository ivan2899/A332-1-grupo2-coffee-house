function showSidebar() {
    const sidebar = document.querySelector('.sidebar');
    
    const body = document.querySelector('body');
    sidebar.style.right = '2px';
    body.classList.add('no-scroll');
    sidebar.classList.add('sidebar-show'); 
}
function hideSidebar() {
    const sidebar = document.querySelector('.sidebar');
    
    const body = document.querySelector('body');
    sidebar.style.right = '-100%';
    body.classList.remove('no-scroll');
    sidebar.classList.remove('sidebar-show'); 
}

$('.modal').on('shown.bs.modal', function () {
    $('body').addClass('no-scroll');
});

$('.modal').on('hidden.bs.modal', function () {
    $('body').removeClass('no-scroll');
});


const header = document.querySelector("#header");
const contenedor = document.querySelector("#contenedor");
const body = document.querySelector("body");

window.addEventListener("scroll", function () {
    if (window.scrollY >= 50) {
        header.classList.add("scroll");
        console.log("Clase 'scroll' añadida");
    } else {
        header.classList.remove("scroll");
        console.log("Clase 'scroll' eliminada");
    }
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
/* ====== Animacion productos destacados====== */



function moverX(){
    let tamanioX = 0;
    let tamanioY = 0;
    const lineX = document.getElementById('line-x-hover');
    const lineY = document.getElementById('line-y-hover');
    const lineXBottom = document.getElementById('line-x-hover-bottom');
    const lineYRight = document.getElementById('line-y-hover-right');

    const tiempoY = setInterval(move, 10);
    const incrementoX = 2; 
    const incrementoY = (90 / (120 / incrementoX));

    function move() {
        
        if (tamanioY >= 90 && tamanioX >= 120) {
            clearInterval(tiempoY);
        } else {
            if (tamanioX < 120) {
                tamanioX += incrementoX;
                lineX.style.width = tamanioX + '%';
                lineXBottom.style.width = tamanioX + '%';
            }
            if(tamanioY < 85){
                tamanioY += incrementoY;
                lineYRight.style.height = tamanioY + '%';
                lineY.style.height = tamanioY + '%';
            }
        }
    }
}
function reiniciarMovimiento() {

    const lineX = document.getElementById('line-x-hover');
    const lineY = document.getElementById('line-y-hover');
    const lineXBottom = document.getElementById('line-x-hover-bottom');
    const lineYRight = document.getElementById('line-y-hover-right');

    clearTimeout(lineX.timeoutId); 
    lineX.timeoutId = setTimeout(() => {
        lineX.style.width = '0%';
        lineXBottom.style.width = '0%';
        lineY.style.height = '0%';
        lineYRight.style.height = '0%';
    }, 1000);
}

document.addEventListener('DOMContentLoaded', function() {
    var producto2 = document.getElementById('contenedor-2-text');
    
    producto2.addEventListener('mouseenter', moverX); 
    producto2.addEventListener('mouseleave', reiniciarMovimiento);
});

/* ====== Fin animacion productos destacados====== */
