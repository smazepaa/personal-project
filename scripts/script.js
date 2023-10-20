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
    let $bigImage = $("#big-image-src");

    function handleSeeMoreClick(imageSrc) {
        console.log(imageSrc);
        $bigImage.attr("src", imageSrc);
        togglePage("page2");
    }

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
    document.getElementById("page1").style.display = "none";
    document.getElementById("page2").style.display = "none";
    document.getElementById(page).style.display = "block";
}

$(document).ready(function () {

    LoadReviews();
    ShowAnswers();
    $(".round-btn").click(function () {
        $(this).closest('.question').next('.answer').slideToggle(300);
    });

    CreateFooterColumns();

    DisplayGallery();
});