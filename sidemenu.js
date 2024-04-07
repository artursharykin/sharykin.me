document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const sideMenu = document.getElementById('side-menu');
    const closeButton = document.getElementById('close-menu');

    // Open side menu
    menuToggle.addEventListener('click', () => {
        sideMenu.classList.add('open');
    });

    // Close side menu
    closeButton.addEventListener('click', () => {
        sideMenu.classList.remove('open');
    });
});
