//Wait for loaders

Cypress.Commands.add("waitForLoader", () => {
    cy.get(".backgroundStyle05.searchOverlay").should("not.be.visible");
});

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
    (answer)? cy.get("#selectorItemHaveNationwideMortgage0").click() : cy.get("#selectorItemHaveNationwideMortgage1").click();
});

Cypress.Commands.add("customerType", (value) => {
    switch (value) 
    {
     case 'new':
        cy.get("#selectorItemNationwideMortgageTypeNo0").click();
        break;
     case 'moving':
        cy.get("#selectorItemNationwideMortgageTypeNo1").click();
        break;
     case 'changing':
        cy.get("#selectorItemNationwideMortgageTypeNo2").click();
        break;
    }
});


//Filtering results and verifying
Cypress.Commands.add("filterFeeFree", () => {
    cy.get('#product-fee-fee').click();
});

Cypress.Commands.add("fixedRate", () => {
    cy.get('#fixed').click();
});

Cypress.Commands.add("checkMortgageLengthVisible", (length) => {
    cy.get(`div.ratesTableWrapper._${length}yr`).should('be.visible');
});
