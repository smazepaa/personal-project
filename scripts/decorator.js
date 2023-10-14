class Coffee {
    cost() {
        return 5;
    }
    description() {
        return "addings: ";
    }
}

class Milk {
    constructor(coffee) {
        this.coffee = coffee;
    }

    cost() {
        return this.coffee.cost() + 2;
    }

    description() {
        return this.coffee.description() + "milk;"
    }
}

class Sugar {
    constructor(coffee) {
        this.coffee = coffee;
    }

    cost() {
        return this.coffee.cost() + 1;
    }

    description() {
        return this.coffee.description() + "sugar;"
    }
}

// Usage
const plainCoffee = new Coffee();
const coffeeWithMilk = new Milk(plainCoffee);
const coffeeWithMilkAndSugar = new Sugar(coffeeWithMilk);

console.log(coffeeWithMilkAndSugar.cost()); // 8
console.log(coffeeWithMilkAndSugar.description()); // addings: milk;sugar;