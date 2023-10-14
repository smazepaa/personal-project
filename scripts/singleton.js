// practical usage of singleton - cash register in a groccery store
// we need to ensure there is only one cash register in a shop
// the singleton tracks sales and payments

class CashRegister {
    constructor() {
        if (typeof CashRegister.instance === 'object') {
            return CashRegister.instance
        }

        this.totalSales = 0;
        CashRegister.instance = this;
        return this;
    }

    recordSale(amount) {
        this.totalSales += amount;
    }

    getSalesSummary() {
        return this.totalSales;
    }
}

const cashRegister1 = new CashRegister();
cashRegister1.recordSale(20);
const cashRegister2 = new CashRegister();
cashRegister2.recordSale(30);
console.log("amount of cash in the register: " + cashRegister1.getSalesSummary()); // 50