// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

Cypress.Commands.add("mortgage_values", (propValue, morValue, termLength) => {
    cy.get("#SearchPropertyValue").type(propValue);
    cy.get("#SearchMortgageAmount").type(morValue);
    cy.get('#SearchMortgageTerm').type(termLength);
    cy.get('#myButton').click();
});

Cypress.Commands.add("selectFromSavings", (menuItem) => {
    cy.get('#SavingsNavItem').contains(menuItem).click({ force: true });
});

Cypress.Commands.add("selectFromMortgages", (menuItem) => {
    cy.get('#MortgagesNavItem').contains(menuItem).click({ force: true });
});

Cypress.Commands.add("hasNationwideMortgage", (answer) => {
    if(answer)
    {
    cy.get("#selectorItemHaveNationwideMortgage0").click();
    }
    else
    {
    cy.get("#selectorItemHaveNationwideMortgage1").click();
    }
});

Cypress.Commands.add("customerType", (value) => {
    if (value === "new")
    {
        cy.get("#selectorItemNationwideMortgageTypeNo0").click();
    }
    else if (value === "moving")
    {
        cy.get("#selectorItemNationwideMortgageTypeNo1").click();
    }
    else if (value === "changing")
    { 
        cy.get("#selectorItemNationwideMortgageTypeNo2").click();
    }
});