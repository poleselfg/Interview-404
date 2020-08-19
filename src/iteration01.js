/* Context
BookToHome is a new book rental store. We were hired to build the system that supports the service.
The exercise consists of a sequence of iterations. Try to finish each iteration before reading the next one.
In every case prefer the simplest solution. You don’t need to worry about persistence or user interface.
Choose your preferred programming language and technologies.

Iteration 1: Add the buy book feature
Feature: Buy books
    As a manager of the store
    I want to buy books for the store
    In order to increase the books available

    Scenario: A manager buys books
        Given there are no books in the store
        When the manager buys four units of a book titled "Rayuela"
        When the manager buys five units of a book titled "El Aleph" 
        Then the store has four units of a book titled "Rayuela"
        Then the store has five units of a book titled "El Aleph" */
