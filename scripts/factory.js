// practical usage of factory - delivery app
// we create a new object and add it to the app

function Restaurant(name) {
    this.name = name;
    this.type = "restaurant";
}

function Cafe(name) {
    this.name = name;
    this.type = "cafe"
}

function DeliveryApp(){
    this.create = (name, type) => {
        switch (type) {
            case "restaurant": return new Restaurant(name)
            case "cafe": return new Cafe(name)
        }
    }
}

function print() {
    console.log(this.type + " " + this.name);
}

const deliveryApp = new DeliveryApp();
const places = [];

places.push(deliveryApp.create("starbucks", "cafe"));
places.push(deliveryApp.create("marcello", "restaurant"));

places.forEach(place => print.call(place));