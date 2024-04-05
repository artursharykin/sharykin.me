document.addEventListener('DOMContentLoaded', () => {
    const themeToggleButton = document.getElementById('theme-toggle');
    const currentTheme = localStorage.getItem('theme');

    if (currentTheme) {
        document.body.classList.add(currentTheme);
        updateIcon(currentTheme); 
    }

    themeToggleButton.addEventListener('click', () => {
        if (document.body.classList.contains('light-mode')) {
            document.body.classList.replace('light-mode', 'dark-mode');
            localStorage.setItem('theme', 'dark-mode');
            updateIcon('dark-mode');
        } else {
            document.body.classList.replace('dark-mode', 'light-mode');
            localStorage.setItem('theme', 'light-mode');
            updateIcon('light-mode');
        }
    });
});

function updateIcon(theme) {
    const themeToggleButton = document.getElementById('theme-toggle');
    const currentThemeIcon = themeToggleButton.firstElementChild;

    if (theme === 'light-mode') {
        currentThemeIcon.classList.remove('fa-sun');
        currentThemeIcon.classList.add('fa-moon');
        currentThemeIcon.style.color = '#5D3B76';
    } else {
        currentThemeIcon.classList.remove('fa-moon');
        currentThemeIcon.classList.add('fa-sun');
        currentThemeIcon.style.color = '#FFD700';
    }
}
