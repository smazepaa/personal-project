function LoadReviews() {
    const reviewsData = [
        {
            imgSrc: 'images/review1.jpg',
            reviewText: 'The flowers I ordered for my anniversary were stunning. My wife was thrilled!',
            author: 'Sam Senthel',
        },
        {
            imgSrc: 'images/review2.jpg',
            reviewText: 'The flowers are always fresh and beautifully arranged. They never fail to bring a smile to my face.',
            author: 'Jane Doe',
        },
        {
            imgSrc: 'images/review3.jpg',
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
            answer: "We offer various delivery options, including standard and express delivery. Please check our website for more details."
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

$(document).ready(function () {

    LoadReviews();
    ShowAnswers();
    $(".round-btn").click(function () {
        // Toggle the visibility of the next .answer element related to the clicked button
        $(this).closest('.question').next('.answer').slideToggle(300);
    });
});