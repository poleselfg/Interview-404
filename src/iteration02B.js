/* Iteration 2: Add the rent to customer feature
From now on customers will be able to rent books.
Feature: Rent a book
    As a customer of the store
    I want to rent a book
    In order to enjoy reading it

    Scenario: A customer rents a book
        Given there are four units of a book titled "Rayuela" in the store
        When a customer rents a book titled "Rayuela"
        Then the store has three units of a book titled "Rayuela" 

    Scenario: A customer returns a book
        Given there are three units of a book titled "Rayuela" in the store
        When a customer returns a book titled "Rayuela"
        Then the store has four units of a book titled "Rayuela" */
const json = require("../data/data.json");
const fs = require("fs");

const rentBook = (bookName, rent) => {
  const updated = json.data.map((item) => {
    if (bookName == item.titulo && item.cantidad > 0) {
      item.cantidad = rent ? item.cantidad - 1 : item.cantidad + 1;
    } else if (bookName == item.titulo && item.cantidad == 0) {
      item.cantidad = rent ? console.log("sin existensias") : item.cantidad + 1;
    }

    return item;
  });

  json.data = updated;

  fs.writeFileSync("../data/data.json", JSON.stringify(json));
};

rentBook("Rayuela", true);
rentBook("Rayuela", false);
