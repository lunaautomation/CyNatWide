// Mortgage amounts and options commands

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


//Filtering results custom commands
Cypress.Commands.add("filterFeeFree", () => {
    cy.get('#product-fee-fee').click();
});

Cypress.Commands.add("fixedRate", () => {
    cy.get('#fixed').click();
});