document.addEventListener('DOMContentLoaded', () => {
    // Tiempo en milisegundos para la duración de la animación antes de la redirección
    const animationDuration = 4000; // 4 segundos

    // Función para redirigir a la página principal
    const redirectToHome = () => {
        window.location.href = 'index.html';
    };

    // Temporizador para ejecutar la redirección después de la duración de la animación
    setTimeout(redirectToHome, animationDuration);
});