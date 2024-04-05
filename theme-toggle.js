document.addEventListener('DOMContentLoaded', (event) => {
    const themeToggleButton = document.getElementById('theme-toggle');
    const currentThemeIcon = themeToggleButton.firstElementChild;

    themeToggleButton.addEventListener('click', () => {
        document.body.classList.toggle('light-mode');
        document.body.classList.toggle('dark-mode');

        if (document.body.classList.contains('light-mode')){
            currentThemeIcon.classList.remove('fa-sun');
            currentThemeIcon.classList.add('fa-moon');
        }
        else{
            currentThemeIcon.classList.remove('fa-moon');
            currentThemeIcon.classList.add('fa-sun');
        }
    });
});
