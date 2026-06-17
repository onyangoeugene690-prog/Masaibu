document.addEventListener('DOMContentLoaded', () => {
    const navbars = document.querySelectorAll('.navbar');

    navbars.forEach(navbar => {
        // Create a toggle button dynamically if it doesn't exist
        if (!navbar.querySelector('.menu-toggle')) {
            const toggleBtn = document.createElement('div');
            toggleBtn.className = 'menu-toggle';
            toggleBtn.innerHTML = '<span>☰ Menu</span>';

            // Look for the menu inside this navbar
            // Navbars in this project have different structures, so we look for common menu classes
            const menuList = navbar.querySelector('.nav-list, .nav-menu, .menu ul');

            if (menuList) {
                navbar.appendChild(toggleBtn);

                toggleBtn.addEventListener('click', (e) => {
                    e.stopPropagation();
                    menuList.classList.toggle('active');
                    toggleBtn.classList.toggle('open');

                    // Toggle text between Menu and Close
                    const btnText = toggleBtn.querySelector('span');
                    if (menuList.classList.contains('active')) {
                        btnText.innerHTML = '✕ Close';
                    } else {
                        btnText.innerHTML = '☰ Menu';
                    }
                });
            }
        }
    });

    // Close menu when clicking outside
    document.addEventListener('click', () => {
        document.querySelectorAll('.nav-list, .nav-menu, .menu ul').forEach(menu => {
            menu.classList.remove('active');
        });
        document.querySelectorAll('.menu-toggle').forEach(btn => {
            btn.classList.remove('open');
            const btnText = btn.querySelector('span');
            if (btnText) btnText.innerHTML = '☰ Menu';
        });
    });
});
