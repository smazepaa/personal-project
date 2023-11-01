"use strict";

const imageDetails = [
    {
        imageSrc: "images/gallery/gallery1.jpg",
        name: "Closed peonies bouquet",
        date: "October 11, 2023",
        components: ["peonies"],
        price: 1000,
    },
    {
        imageSrc: "images/gallery/gallery2.jpg",
        name: "Puffy Peonies",
        date: "October 2, 2023",
        components: ["peonies"],
        price: 900,
    },
    {
        imageSrc: "images/gallery/gallery3.jpg",
        name: "Fresh heartwarming bouquet",
        date: "August 29, 2023",
        components: ["roses", "hydrangeas", "carnations", "tulips"],
        price: 1200,
    },
    {
        imageSrc: "images/gallery/gallery4.jpg",
        name: "Warm white tulips",
        date: "August 8, 2023",
        components: ["tulips"],
        price: 800,
    },
    {
        imageSrc: "images/gallery/gallery5.jpg",
        name: "Minimalistic white arrangement",
        date: "September 12, 2023",
        components: ["roses", "gypsophilas"],
        price: 700,
    },
    {
        imageSrc: "images/gallery/gallery6.jpg",
        name: "Unusual flower combination",
        date: "August 17, 2023",
        components: ["tulips", "eucalyptus"],
        price: 1300,
    },
    {
        imageSrc: "images/gallery/gallery7.jpg",
        name: "White lilies in paper",
        date: "September 1, 2023",
        components: ["lilies"],
        price: 1000,
    },
    {
        imageSrc: "images/gallery/gallery8.jpg",
        name: "Miniature white tulips",
        date: "July 26, 2023",
        components: ["tulips"],
        price: 900,
    },
    {
        imageSrc: "images/gallery/gallery9.jpg",
        name: "Warm spring arrangement",
        date: "May 23, 2023",
        components: ["peonies", "roses", "lilies", "orchids"],
        price: 1500,
    }
];

function LoadReviews() {
    const reviewsData = [
        {
            imgSrc: 'images/index/review1.jpg',
            reviewText: 'The flowers I ordered for my anniversary were stunning. My wife was thrilled!',
            author: 'Sam Senthel',
        },
        {
            imgSrc: 'images/index/review2.jpg',
            reviewText: 'The flowers are always fresh and beautifully arranged. They never fail to bring a smile to my face.',
            author: 'Jane Doe',
        },
        {
            imgSrc: 'images/index/review3.jpg',
            reviewText: 'Express your love with a beautiful bouquet of fresh flowers.',
            author: 'Sarah Johnson',
        }
    ];

    const reviewsContainer = $('#reviews');

    for (const review of reviewsData) {
        const reviewDiv = $('<div class="rev"></div>');

        const image = $('<img>').attr('src', review.imgSrc);
        const commentParagraph = $('<p class="comment"></p>').text(review.reviewText);
        const authorParagraph = $('<p class="author"></p>').text(review.author);

        reviewDiv.append(image, commentParagraph, authorParagraph);
        reviewsContainer.append(reviewDiv);
    }

}

function ShowAnswers() {

    const qaData = [
        {
            question: "What are your delivery options?",
            answer: "We offer letious delivery options, including standard and express delivery. Please check our website for more details."
        },
        {
            question: "What is your return policy?",
            answer: "Our return policy allows you to return products within 30 days of purchase with a valid receipt. Please review our return policy for full details."
        },
        {
            question: "Do you provide same-day delivery?",
            answer: "Yes, we offer same-day delivery for select products and locations. Please check our website or contact our customer support for availability."
        },
        {
            question: "Can I customize my flower arrangement?",
            answer: "Yes, we offer customization options for our flower arrangements. Please contact our customer support to discuss your specific requirements."
        }
    ];

    const questionsContainer = $('#questions');

    for (let i = 0; i < qaData.length; i++) {
        const qa = qaData[i];

        const questionDiv = $('<div class="question"></div>');
        const qstnText = $(`<p class="qstn-text">${qa.question}</p>`);
        const roundBtn = $('<div class="round-btn"><p>+</p></div');

        const answerDiv = $('<div class="answer"></div>');
        const answerText = $(`<p class="answer-text">${qa.answer}</p>`);

        questionDiv.append(qstnText, roundBtn);
        answerDiv.append(answerText);

        questionsContainer.append(questionDiv, answerDiv);
    }
}

const generateComponent = (components) => _.map(components,
    component => `<span class="component">${component}</span>`).join(", ");

function handleSeeMoreClick(imageSrc) {
    let $bigImage = $("#big-image-src");

    const details = _.find(imageDetails, { imageSrc });

    if (details) {
        $bigImage.attr("src", imageSrc);

        document.title = details.name;

        $("#bqt-name").text(details.name);
        $("#posted").text("posted " + details.date);

        const componentsContainer = $("<div></div>");
        componentsContainer.html(generateComponent(details.components));

        // Append the components container to the #components element
        const componentsElement = $("#components");
        componentsElement.empty();
        componentsElement.append(componentsContainer);

        const newDiv = $("<div></div");
        newDiv.attr("id", "overlay"); // Set the desired ID using attr()

        // Insert the new div after the components container
        componentsElement.after(newDiv);

        $("#price").html("<b>Price:</b> " + details.price + "UAH");

        populateBouquetExplore(imageSrc);
        togglePage("other");
        fetchData();
    }
}

function CreateFooterColumns() {

    const texts = [
        { sousTittle: "About", text1: "Services", text2: "FAQ", text3: "Portfolio" },
        { sousTittle: "Careers", text1: "Terms", text2: "Contact", text3: "Refund Policy" },
        { sousTittle: "Services", text1: "Weddings", text2: "Blogs", text3: "Special Events" },
        { sousTittle: "Contact Us", text1: "info@blooms.com", text2: "+1 123-456-789", text3: "" }
    ];

    const container = $('.footer');

    for (let i = 0; i < texts.length; i++) {
        const textSet = texts[i];
        const newDiv = $('<div class="column"></div>');

        const sousTittle = $(`<p class="sous-tittle">${textSet.sousTittle}</p>`);
        const text1 = $(`<p>${textSet.text1}</p>`);
        const text2 = $(`<p>${textSet.text2}</p>`);
        const text3 = $(`<p>${textSet.text3}</p>`);

        newDiv.append(sousTittle, text1, text2, text3);
        container.append(newDiv);
    }
}

function DisplayGallery() {
    let imageUrls = [
        "images/gallery/gallery1.jpg",
        "images/gallery/gallery2.jpg",
        "images/gallery/gallery3.jpg",
        "images/gallery/gallery4.jpg",
        "images/gallery/gallery5.jpg",
        "images/gallery/gallery6.jpg",
        "images/gallery/gallery7.jpg",
        "images/gallery/gallery8.jpg",
        "images/gallery/gallery9.jpg"
    ];

    let $imageContainer = $("#images");

    for (let i = 0; i < 9; i++) {
        let $imageDiv = $('<div class="image-div">');
        let imageSrc = imageUrls[i % imageUrls.length];
        let $image = $('<img src="' + imageSrc + '">');

        let $seeMoreText = $('<div class="see-more-text" data-image-src="' + imageSrc + '">See More</div>');

        $seeMoreText.on("click", function () {
            let clickedImageSrc = $(this).data("image-src");
            handleSeeMoreClick(clickedImageSrc);
        });

        $imageDiv.append($image, $seeMoreText);
        $imageContainer.append($imageDiv);
    }
}

function togglePage(page) {
    const allPages = $('.page');
    allPages.css('display', 'none');
    console.log(allPages);

    const selectedPage = $(`#page-${page}`);
    selectedPage.css('display', 'block');

    const allHeaders = $('.page-header');
    allHeaders.css('display', 'none');

    const header1NavigationLinks = $('.page-header.home-header a[data-page]');
    const header2NavigationLinks = $('.page-header.other-header a[data-page]');

    console.log('header2NavigationLinks', header2NavigationLinks);
    console.log(page);

    if (page === 'home') {
        // Display home header and footer
        $('.page-header.home-header').css('display', 'block');
        $('#home-footer').css('display', 'block');

        // Hide other header and footer
        $('.page-header.other-header').css('display', 'none');
        $('#other-footer').css('display', 'none');

        header1NavigationLinks.removeClass('active');
        $('.page-header.home-header a[data-page="home"]').addClass('active');
    } else {
        // Display other header and footer
        $('.page-header.other-header').css('display', 'block');
        $('#other-footer').css('display', 'block');

        // Hide home header and footer
        $('.page-header.home-header').css('display', 'none');
        $('#home-footer').css('display', 'none');

        header2NavigationLinks.removeClass('active');

        // To remain gallery link active when going to image page
        if (page === 'other') {
            page = 'gallery';
        }

        $(`.page-header.other-header a[data-page="${page}"]`).addClass('active');
    }
}

function loadPage2WithImage(imageSrc) {

    handleSeeMoreClick(imageSrc);

    // Clear the existing small explore images
    const exploreContainer = $("#bqt-explore");
    exploreContainer.empty();

    // Generate new random images for the small explore section
    populateBouquetExplore(imageSrc);

    // Toggle to Page 2
    togglePage("other");
}

function fetchData() {
    const apiURL = "https://api.dictionaryapi.dev/api/v2/entries/en/";

    // Get references to the HTML elements
    const wordElements = document.querySelectorAll(".component");

    // Create the overlay element
    const overlay = document.createElement("div");
    overlay.id = "overlay";

    // Add the overlay to the body, but keep it hidden initially
    document.body.appendChild(overlay);
    overlay.style.display = "none";

    // Add a mouseover event listener to each word element
    wordElements.forEach((wordElement) => {
        wordElement.addEventListener("mouseover", () => {
            // Get the word from the "data-word" attribute
            const word = wordElement.innerText;

            // Make the API request
            fetch(apiURL + word)
                .then((response) => response.json())
                .then((data) => {
                    // Get a random definition
                    const definition = pickRandomDefinition(data);

                    // Set the overlay content
                    overlay.innerText = definition;

                    // Display the overlay temporarily to get its width
                    overlay.style.display = "block";

                    // Calculate the position for the overlay
                    const wordRect = wordElement.getBoundingClientRect();
                    const top = wordRect.bottom + window.scrollY; // Position under the word
                    const left = wordRect.right + window.scrollX - overlay.offsetWidth; // Position to the right of the word

                    // Position and show the overlay
                    overlay.style.top = `${top}px`;
                    overlay.style.left = `${left}px`;

                    // Keep the overlay visible
                    overlay.style.display = "block";
                })
                .catch((error) => {
                    console.error("An error occurred:", error);
                });
        });

        // Remove the overlay on mouseout
        wordElement.addEventListener("mouseout", () => {
            overlay.style.display = "none";
        });
    });
}

function pickRandomDefinition(data) {
    const wordData = _.get(data, '[0]', null);
    console.log(wordData);
    if (wordData && _.get(wordData, 'meanings[0].definitions.length', 0) > 0) {
        const meanings = _.get(wordData, 'meanings[0].definitions', []);
        if (meanings.length > 0) {
            const randomIndex = _.random(0, meanings.length - 1);
            return _.get(meanings[randomIndex], 'definition', "No definition found.");
        }
    }
    return "No definition found.";
}
 
function getRandomGalleryImages(excludeImage, count) {
    const galleryImages = _.shuffle(
        _.filter(imageDetails, (image) => image.imageSrc !== excludeImage)
    );

    return _.take(galleryImages, count).map((image) => image.imageSrc);
}

function populateBouquetExplore(currentImageSrc) {
    const exploreContainer = $("#bqt-explore")[0];

    const randomImages = getRandomGalleryImages(currentImageSrc, 6);

    exploreContainer.innerHTML = "";

    // Modify the code that populates the small explore images
    randomImages.forEach((imageSrc, index) => {
        const imageDiv = document.createElement("div");
        const imageElement = document.createElement("img");

        const uniqueId = `explore-image-${index}`; // Unique ID for each image

        imageElement.id = uniqueId; // Assign the unique ID
        imageElement.src = imageSrc;

        imageElement.addEventListener("click", function () {
            loadPage2WithImage(imageSrc);
        });

        imageDiv.appendChild(imageElement);
        exploreContainer.appendChild(imageDiv);
    });
}

function setupQuantityInput() {
    // Get all quantity input elements on the page
    const quantityInputs = document.querySelectorAll('.quantity');

    quantityInputs.forEach(input => {
        const decrementButton = input.previousElementSibling;
        const incrementButton = input.nextElementSibling;

        decrementButton.addEventListener('click', () => {
            // Decrease the quantity when the decrement button is clicked
            if (input.value > input.min) {
                input.value = parseInt(input.value) - 1;
            }
        });

        incrementButton.addEventListener('click', () => {
            // Increase the quantity when the increment button is clicked
            if (input.value < input.max || !input.max) {
                input.value = parseInt(input.value) + 1;
            }
        });

        input.addEventListener('input', () => {
            // Ensure the entered value is within the specified min and max limits
            if (input.value < input.min) {
                input.value = input.min;
            } else if (input.max && input.value > input.max) {
                input.value = input.max;
            }
        });
    });
}

setupQuantityInput();

window.addEventListener("popstate", function (event) {
    if (event.state && event.state.page) {
        console.log(event.state.page);
        togglePage(event.state.page);
    }
});

$(document).ready(function () {

    LoadReviews();
    ShowAnswers();
    $(".round-btn").click(function () {
        $(this).closest('.question').next('.answer').slideToggle(300);
    });

    CreateFooterColumns();
    DisplayGallery();
    // localStorage.clear();
    showPage('home');

});

class Order {
    constructor(id, title, price, status, image) {
        this.id = id;
        this.title = title;
        this.price = price;
        this.status = status;
        this.image = image;
    }

    saveToLocalStorage() {
        const orders = JSON.parse(localStorage.getItem('orders')) || [];
        orders.push(this);
        localStorage.setItem('orders', JSON.stringify(orders));
    }

    static getAllOrdersFromLocalStorage() {
        const ordersData = JSON.parse(localStorage.getItem('orders')) || [];
        return ordersData.map(orderData => {
            return new Order(orderData.id, orderData.title, orderData.price, orderData.status, orderData.image);
        });
    }
}


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
    // Toggle the page based on the provided page
    togglePage(page);
}

function handleNavigation() {
    const path = window.location.pathname;

    // Check if the path exactly matches '/contacts'
    if (path.includes('/contacts')) {
        // If it's an exact match, toggle the "contacts" page
        togglePage('contacts');
    } else if (path.includes('/gallery')) {
        // Handle the gallery page
        togglePage('gallery');
    } else if (path.includes('/orders')) {
        // Handle the orders page
        togglePage('orders');
    } else {
        // Handle other pages or show the home page by default
        togglePage('home');
    }
}


// Add a popstate event listener to handle back/forward navigation
window.addEventListener("popstate", handleNavigation);

// When navigating to a different "page"
function navigateToPage(page) {
    // Modify the URL without triggering a full page reload
    history.pushState({ page }, null, `/${page}`);

    // Now, you can handle the page change using JavaScript
    handleNavigation();

}

// Add event listeners to navigation links
const navigationLinks = document.querySelectorAll('a[data-page]');
navigationLinks.forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault(); // Prevent the default link behavior
        const page = event.currentTarget.getAttribute('data-page');
        navigateToPage(page);
    });
});

// Initial page load or manual URL entry
handleNavigation();

function createAndAddOrder() {
    // Get the details of the product from the current page
    const $bigImageSrc = $('#big-image-src');
    const $bqtName = $('#bqt-name');
    const $price = $('#price');

    const message = $('#message');

    // Create a new order using the details
    const order = new Order(
        'order-' + Date.now(), // Unique ID for the order (you can use your own logic)
        $bqtName.text(),
        $price.text(),
        'new', // Set the initial status to 'new'
        $bigImageSrc.attr('src')
    );

    // Save the new order to local storage
    order.saveToLocalStorage();

    // Add the new order to the array of current orders
    currentOrders.push(order);

    // Display the new order in the "Current Orders" section
    const currentOrdersContainer = document.getElementById('current');
    const orderDiv = document.createElement('div');
    orderDiv.className = 'order';

    const image = document.createElement('img');
    image.src = order.image;

    const ordText = document.createElement('div');
    ordText.className = 'ord-text';
    const title = document.createElement('p');
    title.className = 'ord-title';
    title.textContent = order.title;

    const price = document.createElement('p');
    price.className = 'bqt-price';
    price.textContent = order.price;

    ordText.appendChild(title);
    ordText.appendChild(price);

    // Create the quantity input section
    const quantityInput = document.createElement('div');
    quantityInput.className = 'quantity-input';

    const decrementButton = document.createElement('button');
    decrementButton.className = 'decrement-button';
    decrementButton.textContent = '-';

    const quantityInputField = document.createElement('input');
    quantityInputField.type = 'number';
    quantityInputField.className = 'quantity';
    quantityInputField.value = '1';
    quantityInputField.min = '1';

    const incrementButton = document.createElement('button');
    incrementButton.className = 'increment-button';
    incrementButton.textContent = '+';

    // Add a "Remove" button (x)
    const removeButton = document.createElement('button');
    removeButton.className = 'remove-button';
    removeButton.textContent = 'x';

    // Add a click event listener to the "Remove" button
    removeButton.addEventListener('click', () => {
        // Remove the order from the array and the display
        const orderIndex = currentOrders.indexOf(order);
        if (orderIndex > -1) {
            currentOrders.splice(orderIndex, 1);
        }
        orderDiv.remove();

        // Remove the order from local storage
        const ordersData = JSON.parse(localStorage.getItem('orders')) || [];
        const updatedOrders = ordersData.filter(orderData => orderData.id !== order.id);
        localStorage.setItem('orders', JSON.stringify(updatedOrders));

        // Check if there are no current orders
        if (currentOrders.length === 0) {
            // Hide the "Checkout" button
            const checkoutButton = document.getElementById('checkout-button');
            checkoutButton.style.display = 'none';
        }
    });

    // Append the quantity input elements to the quantity input section
    quantityInput.appendChild(decrementButton);
    quantityInput.appendChild(quantityInputField);
    quantityInput.appendChild(incrementButton);

    // Add the quantity input section to the order div
    orderDiv.appendChild(image);
    orderDiv.appendChild(ordText);
    orderDiv.appendChild(quantityInput);

    // Add the "Remove" button to the order div
    orderDiv.appendChild(removeButton);

    // Append the order div to the "Current Orders" section
    currentOrdersContainer.insertBefore(orderDiv, currentOrdersContainer.firstChild);

    // Show the "Checkout" button (in case it was hidden)
    const checkoutButton = document.getElementById('checkout-button');
    checkoutButton.style.display = 'block';
}


// Initialize the array to store current orders
const currentOrders = [];

// Add a click event listener to the "Order Now" button
// Get a reference to your order button
const orderButton = document.getElementById('order-button'); // Use your actual element ID or class

// Add a click event listener to the order button
orderButton.addEventListener('click', function () {
    // Create a <span> element to wrap the text and icon
    const buttonText = document.createElement('span');
    buttonText.innerHTML = '<i class="fa-solid fa-check" style="color: #ffffff;"></i>';

    // Clear the button's content and add the <span> with the new text and icon
    orderButton.innerHTML = '';
    orderButton.appendChild(buttonText);
    createAndAddOrder();
});