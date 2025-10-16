document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const html = document.documentElement;
    const savedTheme = localStorage.getItem('theme') || 'light';
    html.setAttribute('data-theme', savedTheme);
    updateToggleIcon(savedTheme);
    themeToggle.addEventListener('click', () => {
        const currentTheme = html.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        html.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateToggleIcon(newTheme);
    });
    function updateToggleIcon(theme) {
        themeToggle.textContent = theme === 'light' ? '🌙' : '☀️';
        themeToggle.setAttribute('aria-label', theme === 'light' ? 'Switch to dark theme' : 'Switch to light theme');
    }
});
// Theme Toggle Functionality
        const themeToggle = document.getElementById('theme-toggle');
        const body = document.body;

        // Check for saved theme preference or use system preference
        const savedTheme = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
        body.classList.add(savedTheme + '-theme');
        updateThemeToggle(savedTheme);

        themeToggle.addEventListener('click', () => {
            const isDark = body.classList.contains('dark-theme');
            if (isDark) {
                body.classList.replace('dark-theme', 'light-theme');
                localStorage.setItem('theme', 'light');
                updateThemeToggle('light');
            } else {
                body.classList.replace('light-theme', 'dark-theme');
                localStorage.setItem('theme', 'dark');
                updateThemeToggle('dark');
            }
        });

        function updateThemeToggle(theme) {
            if (theme === 'dark') {
                themeToggle.textContent = '☀️';
                themeToggle.setAttribute('aria-label', 'Switch to light theme');
            } else {
                themeToggle.textContent = '🌙';
                themeToggle.setAttribute('aria-label', 'Switch to dark theme');
            }
        }




        
        // Update year
        document.getElementById('year').textContent = new Date().getFullYear();

        // Close popup when clicking outside of popup-content
        window.addEventListener("click", function (event) {
            const popup = document.getElementById("myPopup");
            if (!popup) return;
            
            const popupContent = popup.querySelector(".popup-content");

            if (popup.style.display === "flex" &&
                !popupContent.contains(event.target) &&
                !event.target.closest("button[onclick='togglePopup()']")) {
                popup.style.display = "none";
            }
        });

        // Copy text function
        function copyText(event, element) {
            const text = element.innerText;
            navigator.clipboard.writeText(text).then(() => {
                // Visual feedback based on theme
                const isDark = body.classList.contains('dark-theme');
                const originalBg = element.style.background;
                const originalColor = element.style.color;
                
                if (isDark) {
                    element.style.background = 'linear-gradient(135deg, #00ffff, #00b3b3)';
                    element.style.color = '#1a1a1a';
                } else {
                    element.style.background = 'linear-gradient(135deg, #3182ce, #2b6cb0)';
                    element.style.color = 'white';
                }
                
                setTimeout(() => {
                    element.style.background = originalBg;
                    element.style.color = originalColor;
                }, 500);
            }).catch(err => {
                console.error('Failed to copy text: ', err);
            });
        }

        // Quick Access Popup Functions
        function togglePopup() {
            const popup = document.getElementById("myPopup");
            if (popup) {
                popup.style.display = popup.style.display === "flex" ? "none" : "flex";
            }
        }

        function hidePopup() {
            const popup = document.getElementById("myPopup");
            if (popup) {
                popup.style.display = "none";
            }
        }

        // Notification function
        function showNotification() {
            alert("HR Support System - Account Management");
        }

        // Make functions globally available
        window.copyText = copyText;
        window.togglePopup = togglePopup;
        window.hidePopup = hidePopup;
        window.showNotification = showNotification;