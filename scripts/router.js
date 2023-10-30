function showPage(page) {
    const allPages = document.querySelectorAll('.page');
    console.log('allPages', allPages);
    allPages.forEach(pageElement => {
        pageElement.style.display = 'none';
    });

    const selectedPage = document.getElementById(`page-${page}`);
    console.log('selectedPage', selectedPage);
    selectedPage.style.display = 'block';

    const allHeaders = document.querySelectorAll('.page-header');
    console.log('allHeaders', allHeaders);
    allHeaders.forEach(headerElement => {
        headerElement.style.display = 'none';
    });

    // Handle link active state
    const navigationLinks = document.querySelectorAll('a[data-page]');
    navigationLinks.forEach(link => {
        link.classList.remove('active'); // Remove active class from all links
    });

    console.log('page', page);
    if (page === 'home') {
        // Display home header and footer
        document.querySelector('.page-header.home-header').style.display = 'block';
        document.getElementById('home-footer').style.display = 'block';

        // Hide other header and footer
        document.querySelector('.page-header.other-header').style.display = 'none';
        document.getElementById('other-footer').style.display = 'none';
    } else {
        // Display other header and footer
        document.querySelector('.page-header.other-header').style.display = 'block';
        document.getElementById('other-footer').style.display = 'block';

        // Set the active class for the corresponding link
        const activeLink = document.querySelector(`a[data-page="${page}"]`);
        console.log(activeLink);
        activeLink.classList.add('active');

        // Hide home header and footer
        document.querySelector('.page-header.home-header').style.display = 'none';
        document.getElementById('home-footer').style.display = 'none';
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