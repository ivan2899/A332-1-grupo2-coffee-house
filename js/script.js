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