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

    reviewsData.forEach(function (review) {
        const reviewDiv = $('<div class="rev"></div>');

        const image = $('<img>');
        image.attr('src', review.imgSrc);

        const commentParagraph = $('<p class="comment"></p>').text(review.reviewText);
        const authorParagraph = $('<p class="author"></p>').text(review.author);

        reviewDiv.append(image, commentParagraph, authorParagraph);
        reviewsContainer.append(reviewDiv);
    });
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

    qaData.forEach(function (qaData) {
        const questionDiv = $('<div class="question"></div>');
        const qstnText = $(`<p class="qstn-text">${qaData.question}</p>`);
        const roundBtn = $('<div class="round-btn">+</div>');

        const answerDiv = $('<div class="answer"></div>');
        const answerText = $(`<p class="answer-text">${qaData.answer}</p>`);

        questionDiv.append(qstnText, roundBtn);
        answerDiv.append(answerText);

        questionsContainer.append(questionDiv, answerDiv);
    });
}

const generateComponent = (components) =>
    components.map(component => `<span class="component">${component}</span>`).join(", ");

function handleSeeMoreClick(imageSrc) {
    let $bigImage = $("#big-image-src");

    console.log(imageSrc);
    const details = imageDetails.find(item => item.imageSrc === imageSrc);

    if (details) {
        $bigImage.attr("src", imageSrc);

        document.title = details.name;

        $("#bqt-name").text(details.name);
        $("#posted").text("posted " + details.date);

        // Create a container for components
        const componentsContainer = document.createElement("div");
        componentsContainer.innerHTML = generateComponent(details.components);

        // Append the components container to the #components element
        const componentsElement = $("#components");
        componentsElement.empty(); // Clear existing components
        componentsElement.append(componentsContainer);

        // Create a new div element to add after the components
        const newDiv = document.createElement("div");

        // Add an ID to the newDiv
        newDiv.id = "overlay"; // Set the desired ID

        // Insert the new div after the components container
        componentsElement.after(newDiv);

        // Update the price
        $("#price").html("<b>Price:</b> " + details.price + "UAH");

        // Show the page
        togglePage("page-other");
        fetchData();
    }
}

function CreateFooterColumns() {

    const texts = [
        {
            sousTittle: "About", text1: "Services", text2: "FAQ", text3: "Portfolio"
        },
        {
            sousTittle: "Careers", text1: "Terms", text2: "Contact", text3: "Refund Policy"
        },
        {
            sousTittle: "Services", text1: "Weddings", text2: "Blogs", text3: "Special Events"
        },
        {
            sousTittle: "Contact Us", text1: "info@blooms.com", text2: "+1 123-456-789", text3: ""
        }
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

const togglePage = (page) => {
    const currentPage = getCurrentPage();
    if (page !== currentPage) {
        document.getElementById(currentPage).style.display = "none";
        document.getElementById(page).style.display = "block";

        // Scroll to the top of the page
        window.scrollTo(0, 0);

        // Use the HTML5 History API to push a state when toggling pages
        window.history.pushState({ page: page }, `#${page}`);
        console.log(window.history);

        if (page === "page-other") {
            const img = $('#big-image-src').attr('src');
            //fetchData();
            populateBouquetExplore(img);
        }
    }
}


function getCurrentPage() {
    if (document.getElementById("page-gallery").style.display !== "none") {
        return "page-gallery";
    } else {
        return "page-other";
    }
}

function loadPage2WithImage(imageSrc) {
    console.log("loadPage2WithImage called with imageSrc: " + imageSrc);

    handleSeeMoreClick(imageSrc);

    // Clear the existing small explore images
    const exploreContainer = document.getElementById("bqt-explore");
    exploreContainer.innerHTML = "";

    // Generate new random images for the small explore section
    const randomImages = getRandomGalleryImages(imageSrc, 6);
    console.log("Random explore images: " + randomImages);

    // Add the new random images to the small explore section
    randomImages.forEach((imageSrc, index) => {
        const imageDiv = document.createElement("div");
        const imageElement = document.createElement("img");

        const uniqueId = `explore-image-${index}`;
        imageElement.id = uniqueId;
        imageElement.src = imageSrc;

        imageElement.addEventListener("click", function () {
            loadPage2WithImage(imageSrc);
        });

        imageDiv.appendChild(imageElement);
        exploreContainer.appendChild(imageDiv);
    });

    // Toggle to Page 2
    togglePage("page-other");
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

    console.log(wordElements);

    // Add a mouseover event listener to each word element
    wordElements.forEach((wordElement) => {
        console.log(wordElement);
        wordElement.addEventListener("mouseover", () => {
            // Get the word from the "data-word" attribute
            const word = wordElement.innerText;
            console.log(word);

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

                    console.log(overlay.offsetWidth);
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
    const wordData = data[0];
    console.log(wordData);
    if (wordData && wordData.meanings.length > 0) {
        const meanings = wordData.meanings[0].definitions;
        if (meanings.length > 0) {
            const randomIndex = Math.floor(Math.random() * meanings.length);
            return meanings[randomIndex].definition;
        }
    }
    return "No definition found.";
}
 
function getRandomGalleryImages(excludeImage, count) {
    const galleryImages = imageDetails
        .filter(image => image.imageSrc !== excludeImage)
        .map(image => image.imageSrc);

    for (let i = galleryImages.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [galleryImages[i], galleryImages[j]] = [galleryImages[j], galleryImages[i]];
    }

    return galleryImages.slice(0, count);
}

//doesn't enter this function ????
function populateBouquetExplore(currentImageSrc) {
    console.log("populateBouquetExplore", currentImageSrc);
    const exploreContainer = document.getElementById("bqt-explore");

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
            // Handle click event to load Page 2 with the selected image
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
    //localStorage.clear();
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

function createAndDisplayOrders() {
    // Check if orders already exist in local storage
    const ordersExist = localStorage.getItem('orders') !== null;

    if (!ordersExist) {
        // Create three Order objects
        const order1 = new Order('order-1', 'Closed peonies bouquet', '1000UAH', 'delivered', 'images/gallery/gallery1.jpg');
        const order2 = new Order('order-2', 'Puffy Peonies', '900UAH', 'delivered', 'images/gallery/gallery2.jpg');
        const order3 = new Order('order-3', 'Fresh heartwarming bouquet', '1200UAH', 'delivered', 'images/gallery/gallery3.jpg');

        // Save the orders to local storage
        order1.saveToLocalStorage();
        order2.saveToLocalStorage();
        order3.saveToLocalStorage();
    }

    // Retrieve all orders from local storage
    const allOrders = Order.getAllOrdersFromLocalStorage();

    // Display the orders with a "Order Again" button
    const previousOrdersContainer = document.getElementById('previous');
    allOrders.forEach(order => {
        const orderDiv = document.createElement('div');
        orderDiv.className = 'order';

        const image = document.createElement('img');
        image.src = order.image;

        const ordText = document.createElement('div');
        ordText.className = 'ord-text';
        const title = document.createElement('p');
        title.className = "ord-title"
        title.textContent = order.title;

        const status = document.createElement('p');
        status.className = "ord-status";
        status.textContent = `Status: ${order.status}`;

        ordText.appendChild(title);
        ordText.appendChild(status);

        // Add "Order Again" button
        const orderAgainButton = document.createElement('div');
        orderAgainButton.className = 'button-div';
        orderAgainButton.innerHTML = '<p>Order Again</p>';
        orderAgainButton.addEventListener('click', () => {
            // You can define a function to handle the "Order Again" action here
            // For example, you can create a new order with the same details.
            console.log('Order Again clicked for:', order.title);
        });

        orderDiv.appendChild(image);
        orderDiv.appendChild(ordText);
        orderDiv.appendChild(orderAgainButton);

        previousOrdersContainer.appendChild(orderDiv);
    });
}

// Call the function to create and display orders
createAndDisplayOrders();
