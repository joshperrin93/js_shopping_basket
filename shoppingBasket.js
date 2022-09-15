class ShoppingBasket {
  constructor() {
    this.basket = []; // array of item objects
    this.discount = 0;
  }

  applyDiscount(discount) {
    this.discount = discount;
  }

  getTotalPrice() {
    let sum = 0;

    this.basket.forEach((item) => {
      sum += item.getPrice();
    });

    return sum - this.discount;
  }

  addItem(item) {
    this.basket.push(item);
  }
};

module.exports = ShoppingBasket;