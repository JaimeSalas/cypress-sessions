describe('Hotel collection', () => {
    it.skip('should fetch hotels', () => {
        cy.visit('/hotel-collection');

        cy.findAllByRole('listitem').should('have.length', 10);
    });

    it.skip('should fetch hotels and must be greater than 0', () => {
        cy.visit('/hotel-collection');

        cy.findAllByRole('listitem').should('have.length.greaterThan', 0);
    });

    it('should fetch two hotels', () => {
        // cy.intercept('GET', '/api/hotels', hotels);
        // cy.fixture('hotels').then((hotels) => {
        // })
        // cy.intercept('GET', '/api/hotels', { fixture: 'hotels.json' }).as('fetchHotels');

        // cy.visit('/hotel-collection');

        // cy.wait('@fetchHotels');
        cy.loadAndVisit('/hotel-collection', [{ path: '/api/hotels' }]);

        cy.findAllByRole('listitem').should('have.length', 10);
    });
})