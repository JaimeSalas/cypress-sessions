describe('Hotel edit', () => {
    it('should navigate second hotel', () => {
        cy.loadAndVisit('/hotel-collection', [{ path: '/api/hotels' }]);
        cy.intercept('GET', '/api/hotels/2').as('loadHotel');

        cy.findAllByRole('button', { name: 'Edit hotel' }).then(($buttons) => {
            console.log($buttons);
            $buttons[1].click();
        });
        cy.wait('@loadHotel');
        cy.url().should('eq', 'http://localhost:8080/#/hotel-edit/2');
    });

    it('should update hotel name', () => {
        cy.loadAndVisit('/hotel-collection',
            [
                { path: '/api/hotels', alias: 'loadHotels' },
                { path: '/api/hotels/2' },
                { path: '/api/cities' },
            ],
            () => {
                cy.findAllByRole('button', { name: 'Edit hotel' }).then(($buttons) => {
                    console.log($buttons);
                    $buttons[1].click();
                });
            }
        );
        cy.findByLabelText('Name').clear().type('Update hotel two');
        cy.findByRole('button', { name: 'Save' }).click();

        cy.wait('@loadHotels');
        cy.findByText('Update hotel two');
    });
});