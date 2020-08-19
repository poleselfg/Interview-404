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