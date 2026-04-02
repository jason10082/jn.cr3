// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    
    // Check if the user has a saved preference, otherwise default to 'light'
    const currentTheme = localStorage.getItem('theme') || 'light';
    
    // Apply the saved theme to the document
    document.documentElement.setAttribute('data-theme', currentTheme);
    
    // Set the initial button text
    updateButtonText(currentTheme);

    // Listen for clicks on the toggle button
    themeToggle.addEventListener('click', () => {
        // Get the current theme
        let theme = document.documentElement.getAttribute('data-theme');
        
        // Determine the new theme
        let switchToTheme = theme === 'light' ? 'dark' : 'light';
        
        // Apply it and save it to localStorage
        document.documentElement.setAttribute('data-theme', switchToTheme);
        localStorage.setItem('theme', switchToTheme);
        
        // Update the button text
        updateButtonText(switchToTheme);
    });

    function updateButtonText(theme) {
        if (theme === 'light') {
            themeToggle.innerText = 'Dark Mode';
        } else {
            themeToggle.innerText = 'Light Mode';
        }
    }
    
// Prevents the right-click menu from appearing on the entire website
document.addEventListener('contextmenu', event => event.preventDefault());

});

