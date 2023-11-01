// Define your pages
var pages = {
    '#home': document.getElementById('page-home'),
    '#gallery': document.getElementById('page-gallery'),
    '#other': document.getElementById('page-other'),
    '#orders': document.getElementById('page-orders'),
    '#contacts': document.getElementById('page-contacts')
};

// Define your headers and footers
var headers = {
    'home': document.querySelector('.home-header'),
    'other': document.querySelector('.other-header')
};

var footers = {
    'home': document.getElementById('home-footer'),
    'other': document.getElementById('other-footer')
};

// Function to switch page
function switchPage() {
    var hash = window.location.hash;
    if (pages[hash]) {
        // Hide all pages, headers, and footers
        Object.values(pages).forEach(function (page) {
            page.style.display = 'none';
        });
        Object.values(headers).forEach(function (header) {
            header.style.display = 'none';
        });
        Object.values(footers).forEach(function (footer) {
            footer.style.display = 'none';
        });

        // Show the correct page
        pages[hash].style.display = 'block';

        // Show the correct header and footer
        if (hash === '#home') {
            headers['home'].style.display = 'block';
            footers['home'].style.display = 'block';
        } else {
            headers['other'].style.display = 'block';
            footers['other'].style.display = 'block';
        }
    }
}

// Listen for hash change
window.addEventListener('hashchange', switchPage);

// Initial switch to correct page
switchPage();
