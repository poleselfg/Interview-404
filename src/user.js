class User {
  constructor(type) {
    this.type = type;
  }

  rentBook(book, store) {
    store.rentBook(book);
  }

  returnBook(book, store) {
    store.returnBook(book);
  }

  buyForStore(book, qty, store) {
    if (this.type !== "manager") {
      throw "Only managers can buy books for store....";
    }

    store.addBooks(book, qty);
  }
}

module.exports = User;
