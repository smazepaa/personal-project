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

    const selectedHeader = document.querySelector(`.page-header.${page}-header`);
    if (selectedHeader) {
        selectedHeader.style.display = 'block';
    }

    const homeFooter = document.getElementById('home-footer');
    const otherFooter = document.getElementById('other-footer');

    if (page === 'home') {
        homeFooter.style.display = 'block';
        otherFooter.style.display = 'none';
    } else {
        homeFooter.style.display = 'none';
        otherFooter.style.display = 'block';
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