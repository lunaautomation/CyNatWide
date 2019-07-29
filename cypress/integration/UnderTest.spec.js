describe('Test', () => {
    it('Check new mortgage customers can apply for a 5 year fixed mortgage', () => {

        cy.visit('https://www.nationwide.co.uk');
        cy.title().should('include', 'Nationwide Building Society')

        cy.selectFromMortgages('Mortgage rates');
        cy.hasNationwideMortgage(false);
        cy.customerType('changing');
        cy.mortgage_values('300000','150000','30');

        cy.filterFeeFree();
        cy.fixedRate();      
        
        cy.waitForLoader();

        cy.checkMortgageLengthVisible('2');
        cy.checkMortgageLengthVisible('3');
        cy.checkMortgageLengthVisible('5');
        cy.checkMortgageLengthVisible('10');

        cy.get('#prod140573 > section:nth-child(3) > div > div.applyButton.doNotPrint > a').click({force:true});
        cy.get('h1.blue.boldText.headingSize02.center').should('have.text', 'Start your Remortgage application')
       });
});
