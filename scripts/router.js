function showPage(page) {
    const allPages = document.querySelectorAll('.page');
    allPages.forEach(pageElement => {
        pageElement.style.display = 'none';
    });

    const selectedPage = document.getElementById(`page-${page}`);
    selectedPage.style.display = 'block';

    const allHeaders = document.querySelectorAll('.page-header');
    console.log(allHeaders);
    allHeaders.forEach(headerElement => {
        headerElement.style.display = 'none';
    });

    const selectedHeader = document.querySelector(`.page-header.${page}-header`);
    const otherHeader = document.querySelector(`.page-header.other-header`);
    
    console.log(selectedHeader);
    if (selectedHeader != null) {
        selectedHeader.style.display = 'block';
    }
    else {
        console.log('header is null');
        console.log(otherHeader);
        otherHeader.style.display = 'block';
    }

    
    const homeHeader = document.querySelector(`.page-header.home-header`);
    const homeFooter = document.getElementById('home-footer');
    const otherFooter = document.getElementById('other-footer');

    console.log(page);
    if (page === 'home') {
        homeFooter.style.display = 'block';
        homeHeader.style.display = 'block';
        otherFooter.style.display = 'none';
        otherHeader.style.display = 'none';
        
    } else {
        homeFooter.style.display = 'none';
        homeHeader.style.display = 'none';
        otherFooter.style.display = 'block';
        otherHeader.style.display = 'block';
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