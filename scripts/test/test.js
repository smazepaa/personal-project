const jsdom = require("jsdom");
const { expect } = require("chai");
const { JSDOM } = jsdom;

describe('setupQuantityInput', () => {
    it('should correctly update the input value when increment and decrement buttons are clicked', () => {
        const dom = new JSDOM(`
            <button class="decrement">-</button>
            <input class="quantity" min="1" max="5" value="3">
            <button class="increment">+</button>
        `);

        // Use the window object from JSDOM in your function
        const window = dom.window;
        const document = window.document;

        // Your setupQuantityInput function goes here, using the above document object
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

        const input = document.querySelector('.quantity');
        const decrementButton = document.querySelector('.decrement');
        const incrementButton = document.querySelector('.increment');

        decrementButton.click();
        expect(input.value).to.equal('2');

        incrementButton.click();
        incrementButton.click();
        expect(input.value).to.equal('4');
    });
});