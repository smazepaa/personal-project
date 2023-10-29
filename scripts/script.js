const imageDetails = [
    {
        imageSrc: "images/gallery/gallery1.jpg",
        name: "Closed peonies bouquet",
        date: "October 11, 2023",
        components: "peonies",
        price: 1000,
    },
    {
        imageSrc: "images/gallery/gallery2.jpg",
        name: "Puffy Peonies",
        date: "October 2, 2023",
        components: "peonies",
        price: 900,
    },
    {
        imageSrc: "images/gallery/gallery3.jpg",
        name: "Fresh heartwarming bouquet",
        date: "August 29, 2023",
        components: "roses, hydrangeas, carnations, tulips",
        price: 1200,
    },
    {
        imageSrc: "images/gallery/gallery4.jpg",
        name: "Warm white tulips",
        date: "August 8, 2023",
        components: "tulips",
        price: 800,
    },
    {
        imageSrc: "images/gallery/gallery5.jpg",
        name: "Minimalistic white arrangement",
        date: "September 12, 2023",
        components: "roses, gypsophilas",
        price: 700,
    },
    {
        imageSrc: "images/gallery/gallery6.jpg",
        name: "Unusual flower combination",
        date: "August 17, 2023",
        components: "tulips, eucalyptus and smth else",
        price: 1300,
    },
    {
        imageSrc: "images/gallery/gallery7.jpg",
        name: "White lilies in paper",
        date: "September 1, 2023",
        components: "lilies",
        price: 1000,
    },
    {
        imageSrc: "images/gallery/gallery8.jpg",
        name: "Miniature white tulips",
        date: "July 26, 2023",
        components: "tulips",
        price: 900,
    },
    {
        imageSrc: "images/gallery/gallery9.jpg",
        name: "Warm spring arrangement",
        date: "May 23, 2023",
        components: "peonies, roses, lilies, orchids",
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

function handleSeeMoreClick(imageSrc) {

    let $bigImage = $("#big-image-src");

    console.log(imageSrc);
    const details = imageDetails.find(item => item.imageSrc === imageSrc);

    if (details) {
        $bigImage.attr("src", imageSrc);

        document.title = details.name;

        $("#bqt-name").text(details.name);
        $("#posted").text("posted " + details.date);
        $("#components").html("<b>Components:</b><br />" + details.components);
        $("#price").html("<b>Price:</b> " + details.price + "UAH");

        togglePage("page2");
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

    const container = $('#footer');

    texts.forEach(function (textSet) {
        const newDiv = $('<div class="column"></div>');

        const sousTittle = $(`<p class="sous-tittle">${textSet.sousTittle}</p>`);
        const text1 = $(`<p>${textSet.text1}</p>`);
        const text2 = $(`<p>${textSet.text2}</p>`);
        const text3 = $(`<p>${textSet.text3}</p>`);

        newDiv.append(sousTittle, text1, text2, text3);
        container.append(newDiv);
    });
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

    var currentPage = getCurrentPage();
    if (page !== currentPage) {
        document.getElementById(currentPage).style.display = "none";
        document.getElementById(page).style.display = "block";

        // Scroll to the top of the page
        window.scrollTo(0, 0);

        // Use the HTML5 History API to push a state when toggling pages
        window.history.pushState({ page: page }, `#${page}`);
        console.log(window.history);

        if (page === "page2") {
            let img = $('#big-image-src').attr('src');
            populateBouquetExplore(img);
        }
    }
}

function getCurrentPage() {
    if (document.getElementById("page1").style.display !== "none") {
        return "page1";
    } else {
        return "page2";
    }
}

function loadPage2WithImage(imageSrc) {

    handleSeeMoreClick(imageSrc);

    // Clear the existing small explore images
    const exploreContainer = document.getElementById("bqt-explore");
    exploreContainer.innerHTML = "";

    // Generate new random images for the small explore section
    const randomImages = getRandomGalleryImages(imageSrc, 6);

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
    togglePage("page2");
}

window.addEventListener("popstate", function (event) {
    if (event.state && event.state.page) {
        console.log(event.state.page);
        togglePage(event.state.page);
    }
});

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

function populateBouquetExplore(currentImageSrc) {
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


$(document).ready(function () {

    LoadReviews();
    ShowAnswers();
    $(".round-btn").click(function () {
        $(this).closest('.question').next('.answer').slideToggle(300);
    });

    CreateFooterColumns();

    DisplayGallery();
});