/*Iteration 6: Add the minimum stock feature
The manager needs to know the books that reaches a minimum stock so he can buy more. Each book has different minimum stock requirements.
Feature: Minimum stock
    As a manager of the store
    I want to know which books have reached the minimum stock quantity
    In order to buy more units of those books

    Scenario: A manager asks for books that are under the minimum stock limit
        Given the store has two units of a book titled "Rayuela" with a minimum stock of 4
        And the store has no units of a book titled "El Tunel" with a minimum stock of 3
        And the store has ten units of a book titled "El Aleph" with a minimum stock of 2 
        When the manager asks for the books under minimum stock limit 
        Then he obtains a list with the titles "Rayuela" and "El Tunel"*/
const json = require(`../data/data.json`);

const stockStatus = () => {
  const status = json.data.filter((item) => item.cantidad <= item.minStock);
  console.table(status);
};

stockStatus();
