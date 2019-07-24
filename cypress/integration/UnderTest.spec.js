describe('Test', () => {
    it('Check new mortgage customers can apply for a 5 year fixed mortgage', () => {

        cy.visit('https://www.nationwide.co.uk');
        cy.title().should('include', 'Nationwide Building Society')
        
        cy.get('#MortgagesNavItem').trigger('mouseover');
        cy.get('#MortgagesNavItem').contains('Mortgage rates').click({ force: true });
        
        cy.get("#selectorItemHaveNationwideMortgage1").click();
        cy.get("#selectorItemNationwideMortgageTypeNo2").click();
        cy.get("#SearchPropertyValue").type("300000");
        cy.get("#SearchMortgageAmount").type("150000");
        cy.get('#SearchMortgageTerm').type("30");
        cy.get('#myButton').click();
        cy.get('#product-fee-fee').click();
        cy.get('#fixed').click();
      
        cy.get('div.ratesTableWrapper._2yr').should('be.visible')
        cy.get('div.ratesTableWrapper._3yr').should('be.visible')
        cy.get('div.ratesTableWrapper._5yr').should('be.visible')
        cy.get('div.ratesTableWrapper._10yr').should('be.visible')

        cy.get('#prod140573 > section:nth-child(3) > div > div.applyButton.doNotPrint > a').click({force:true});

        cy.get('h1.blue.boldText.headingSize02.center').should('have.text', 'Start your Remortgage application')
       });
});
