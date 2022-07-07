describe('Hotel collection', () => {
    it('should fetch hotels', () => {
        cy.visit('/hotel-collection');

        cy.findAllByRole('listitem').should('have.length', 10);
    });

    it('should fetch hotels and must be greater than 0', () => {
        cy.visit('/hotel-collection');

        cy.findAllByRole('listitem').should('have.length.greaterThan', 0);
    });

    it('should fetch two hotels', () => {
        // cy.intercept('GET', '/api/hotels', hotels);
        // cy.fixture('hotels').then((hotels) => {
        // })
        cy.intercept('GET', '/api/hotels', { fixture: 'hotels.json' });

        cy.visit('/hotel-collection');

        cy.findAllByRole('listitem').should('have.length', 2);
    });
})