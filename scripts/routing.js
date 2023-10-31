function handleNavigation() {
    const path = window.location.pathname;
    const allPages = document.querySelectorAll('.page');
    const allHeaders = document.querySelectorAll('.page-header');

    // By default, hide all pages and headers
    allPages.forEach(page => {
        page.style.display = 'none';
    });

    allHeaders.forEach(header => {
        header.style.display = 'none';
    });

    // Update active link styling based on the current URL
    const links = document.querySelectorAll('.page-link');
    links.forEach(link => {
        if (link.getAttribute('href') === path) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });

    // Determine which page to show based on the URL
    if (path === '/' || path === '/index.html') {
        // Show the home page
        document.getElementById('page-home').style.display = 'block';
        document.querySelector('.home-header').style.display = 'block';
        document.getElementById('home-footer').style.display = 'block';
    } else if (path === '/gallery') {
        // Show the gallery page
        document.getElementById('page-gallery').style.display = 'block';
        document.querySelector('.other-header').style.display = 'block';
        document.getElementById('other-footer').style.display = 'block';
    } else if (path === '/orders') {
        // Show the orders page
        document.getElementById('page-orders').style.display = 'block';
        document.querySelector('.other-header').style.display = 'block';
        document.getElementById('other-footer').style.display = 'block';
    }

    // Add more URL-to-page mappings as needed
}

// Add a popstate event listener to handle back/forward navigation
window.addEventListener("popstate", handleNavigation);

// Initial page load or manual URL entry
handleNavigation();
