class store {
  constructor() {
    this.inventory = [];
  }

  getInventory(book) {
    return this.inventory.find((book) => book === book);
  }
  setInventory(book, value) {
    this.inventory.forEach((element, index) => {
      if (element.book.title === book.title) {
        this.inventory[index] = Object.assign(element, value);
      }
    });
  }

  returnBook(book, value) {
    let currentStock = parseInt(this.getInventory(book).qty);
    this.setInventory(book, { qty: currentStock + 1 });
  }

  rentBook(book, value) {
    let currentStock = parseInt(this.getInventory(book).qty);
    this.setInventory(book, { qty: currentStock - 1 });
  }

  addBooks(book, qty) {
    this.inventory.push({ book: book, qty: qty });
  }
}

module.exports = store;
