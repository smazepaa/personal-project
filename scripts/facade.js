// In an e-commerce system, when a user proceeds to checkout, with several steps 
// involved, such as adding items to the cart, choosing a shipping method, and making a payment.
// A facade can simplify this process

class ShoppingCart {
    addItems(items) {
        console.log(`Added items: ${items.join(', ')}`);
    }
}

class Shipping {
    selectMethod(method) {
        console.log(`Selected shipping method: ${method}`);
    }
}

class Payment {
    makePayment() {
        console.log('Payment successful');
    }
}

class CheckoutFacade {
    constructor(cart, shipping, payment) {
        this.cart = cart;
        this.shipping = shipping;
        this.payment = payment;
    }

    checkout(items, shippingMethod) {
        this.cart.addItems(items);
        this.shipping.selectMethod(shippingMethod);
        this.payment.makePayment();
    }
}

// Usage
const cart = new ShoppingCart();
const shipping = new Shipping();
const payment = new Payment();

const checkoutFacade = new CheckoutFacade(cart, shipping, payment);
checkoutFacade.checkout(['Item 1', 'Item 2'], 'Express Shipping');

// output: Added items: Item 1, Item 2
//         Selected shipping method: Express Shipping
//         Payment successful