document.addEventListener('DOMContentLoaded', () => {
    const themeToggleButton = document.getElementById('theme-toggle');
    const currentTheme = localStorage.getItem('theme') || 'dark-mode';

    function applyTheme(theme) {
        document.body.className = theme; 
        localStorage.setItem('theme', theme); 
        updateIcon(theme);
    }

    function toggleTheme() {
        const newTheme = document.body.classList.contains('dark-mode') ? 'light-mode' : 'dark-mode';
        applyTheme(newTheme);
    }

    applyTheme(currentTheme);

    themeToggleButton.addEventListener('click', toggleTheme);
});

function updateIcon(theme) {
    const themeToggleButton = document.getElementById('theme-toggle');
    const icon = themeToggleButton.querySelector('i');

    if (theme === 'light-mode') {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    } else {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    }
}
