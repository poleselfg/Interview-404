const Store = require("./store");
const Book = require("./book");
const User = require("./user");

// Start new Store=0
//   - Store=0
const store = new Store();

// 1 - A manager buys books
//   - User(Manager)->buy("Rayuela", 4)
//   - User(Manager)->buy("El Aleph", 5)
//   - Store > Books > Rayuela = 4, El Aleph=5
const userManager = new User("manager");
const bookRayuela = new Book("Rayuela");
const bookAleph = new Book("El Aleph");

// User(Manager)->buy("Rayuela", 4)
// User(Manager)->buy("El Aleph", 5)
userManager.buyForStore(new Book("Rayuela"), 4, store);
userManager.buyForStore(new Book("El Aleph"), 5, store);

// checkpoint
console.log("Iteracion I");
console.log(JSON.stringify(store, null, 4));

// 2 - As a customer of the store
//  	- Store > Books > Rayuela = 4
//  	- User(Customer)->rent("Rayuela")
//  	- Store > Books > Rayuela = 3
const userCustomer = new User("customer");
userCustomer.rentBook(new Book("Rayuela"), store);

console.log("Iteracion II - rent");
console.log(JSON.stringify(store, null, 4));

console.log("Iteracion II - return");
userCustomer.returnBook(new Book("Rayuela"), store);
console.log(JSON.stringify(store, null, 4));
