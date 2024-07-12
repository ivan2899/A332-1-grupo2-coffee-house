function showSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'flex';
}
function hideSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'none';
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

document.getElementById('mode-switch').addEventListener('click', function (event) {
    event.preventDefault();
    document.getElementById('switch').click();
});