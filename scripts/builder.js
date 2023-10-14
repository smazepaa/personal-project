// When building a house, you can use a house builder to specify and create a custom 
// house with different features and options
class House {
    constructor() {
        this.rooms = 2;
        this.garage = false;
        this.swimmingPool = false;
        this.garden = false;
    }

    addRooms(count) {
        this.rooms = count;
    }

    addGarage() {
        this.garage = true;
    }

    addSwimmingPool() {
        this.swimmingPool = true;
    }

    addGarden() {
        this.garden = true;
    }
}

class HouseBuilder {
    constructor() {
        this.house = new House();
    }

    addRooms(count) {
        this.house.addRooms(count);
        return this;

    }

    addGarage() {
        this.house.addGarage();
        return this;
    }

    addSwimmingPool() {
        this.house.addSwimmingPool();
        return this;
    }

    addGarden() {
        this.house.addGarden();
        return this;
    }

    build() {
        return this.house;
    }
}

// Usage
const dreamHouse = new HouseBuilder()
    .addRooms(5)
    .addGarage()
    .addSwimmingPool()
    .addGarden()
    .build();

const smallHouse = new HouseBuilder()
    .addRooms(1)
    .build();