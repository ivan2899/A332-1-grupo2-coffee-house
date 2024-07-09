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