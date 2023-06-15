class CartItem {
  constructor(productName, price, quantity) {
    this.productName = productName;
    this.price = price;
    this.quantity = quantity;
  }
}

class Cart {
  constructor() {
    this.cartItems = [];
  }

  addItem(item) {
    this.cartItems.push(item);
    this.cartItems;
  }

  totalPrice() {
    const sum = this.cartItems.reduce((acc, curr) => {
      return acc + curr.price * curr.quantity;
    }, 0);

    return sum;
  }

  deleteItem(name) {
    this.cartItems = this.cartItems.filter((item) => {
      return item.productName !== name;
    });
    return this.cartItems;
  }

  updateItem(name, quantity) {
    this.cartItems = this.cartItems.map((item) => {
      if (item.productName === name) {
        item.quantity = quantity;
      }
      return item;
    });
    return this.cartItems;
  }

  clearCart() {
    this.cartItems = [];
    return this.cartItems;
  }

  applyCupon(cuponeCode) {}
}

const book = new CartItem("book", 15, 1);
const cnadle = new CartItem("candle", 4, 3);
const shoppingCart = new Cart();

shoppingCart.addItem(book);
shoppingCart.addItem(cnadle);
shoppingCart.totalPrice();
shoppingCart.deleteItem("book");
shoppingCart.updateItem("candle", 10);
shoppingCart.updateItem("book", 1);
