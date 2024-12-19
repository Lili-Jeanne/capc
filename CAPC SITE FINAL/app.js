const toggleBtn = document.getElementById('toggle-btn');
        let isDarkMode = false;

        toggleBtn.addEventListener('click', () => {
            isDarkMode = !isDarkMode;
            document.body.style.backgroundColor = isDarkMode ? '#121212' : 'white';
            document.body.style.color = isDarkMode ? 'white' : 'black';
        });
