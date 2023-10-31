function showPage(page) {
    const allPages = document.querySelectorAll('.page');
    allPages.forEach(pageElement => {
        pageElement.style.display = 'none';
    });

    const selectedPage = document.getElementById(`page-${page}`);
    selectedPage.style.display = 'block';

    const allHeaders = document.querySelectorAll('.page-header');
    allHeaders.forEach(headerElement => {
        headerElement.style.display = 'none';
    });

    // Handle link active state
    const header1NavigationLinks = document.querySelectorAll('.page-header.home-header a[data-page]');
    const header2NavigationLinks = document.querySelectorAll('.page-header.other-header a[data-page]');

    if (page === 'home') {
        // Display home header and footer
        document.querySelector('.page-header.home-header').style.display = 'block';
        document.getElementById('home-footer').style.display = 'block';

        // Hide other header and footer
        document.querySelector('.page-header.other-header').style.display = 'none';
        document.getElementById('other-footer').style.display = 'none';

        // Remove the "active" class from all home links
        header1NavigationLinks.forEach(link => {
            link.classList.remove('active');
        });

        // Add the "active" class to the "Home" link
        const homeLink = document.querySelector('.page-header.home-header a[data-page="home"]');
        homeLink.classList.add('active');
    } else {
        // Display other header and footer
        document.querySelector('.page-header.other-header').style.display = 'block';
        document.getElementById('other-footer').style.display = 'block';

        // Hide home header and footer
        document.querySelector('.page-header.home-header').style.display = 'none';
        document.getElementById('home-footer').style.display = 'none';

        // Set the active class for the corresponding link in header 2
        header2NavigationLinks.forEach(link => {
            link.classList.remove('active');
        });

        const activeLink = document.querySelector(`.page-header.other-header a[data-page="${page}"]`);
        activeLink.classList.add('active');
    }
}

const navigationLinks = document.querySelectorAll('a[data-page]');
navigationLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        const page = event.currentTarget.getAttribute('data-page');
        showPage(page);
    });
});

showPage('home');
