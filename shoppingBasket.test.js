const ShoppingBasket = require('./shoppingBasket');

describe('ShoppingBasket', () => {
  describe('#getPrice', () => {
    it('initally has a total price of 0', () => {
      const shoppingBasket = new ShoppingBasket;
      expect(shoppingBasket.getTotalPrice()).toEqual(0);
    });
  
    it('returns total price so far in basket', () => {
      const shoppingBasket = new ShoppingBasket;
  
      const candyDouble1 = { getPrice: () => 4.99 };
      shoppingBasket.addItem(candyDouble1);
  
      const candyDouble2 =  { getPrice: () => 6.99 };
      shoppingBasket.addItem(candyDouble2);
  
      expect(shoppingBasket.getTotalPrice()).toEqual(4.99 + 6.99);
    });
  });

  describe('#applyDiscount', () => {
    it('reduces total price by 2', () => {
      const shoppingBasket = new ShoppingBasket;
  
      const candyDouble1 = { getPrice: () => 4.99 };
      shoppingBasket.addItem(candyDouble1);
  
      const candyDouble2 =  { getPrice: () => 6.99 };
      shoppingBasket.addItem(candyDouble2);

      shoppingBasket.applyDiscount(2);
  
      expect(shoppingBasket.getTotalPrice()).toEqual(4.99 + 6.99 - 2);
    });
  });
});