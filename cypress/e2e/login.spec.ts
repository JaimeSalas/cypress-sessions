describe('Login specs', () => {
    beforeEach(() => {
        cy.visit('/');
    });

    it('visit the login page', () => {
    });

    it('should input name get focus when is selected', () => {    
        cy.findByLabelText('Name').click();
        cy.findByLabelText('Name').should('have.focus');
    });

    it('should alert with invalid credentials', () => {
        const user = 'admin';
        const password = '1234';
        cy.on('window:alert', cy.stub().as('alertStub'));

        cy.findByLabelText('Name').as('userInput');
        cy.findByLabelText('Password').as('passwordInput');
        // cy.contains('LOGIN').click();
        
        cy.get('@userInput').type(user);
        cy.get('@passwordInput').type(password);
        cy.findByRole('button', { name: 'Login' }).click();
        
        cy.get('@userInput').should('have.value', user);
        cy.get('@passwordInput').should('have.value', password);
        cy.get('@alertStub')
            .should(
                'have.been.called',
                'invalid credentials, use admin/test, excercise: display a mui snackbar instead of this alert.'
            );
    });

    it('should navigate to hotels page', () => {
        const user = 'admin';
        const password = 'test';

        cy.findByLabelText('Name').as('userInput');
        cy.findByLabelText('Password').as('passwordInput');
        
        cy.get('@userInput').type(user);
        cy.get('@passwordInput').type(password);
        cy.findByRole('button', { name: 'Login' }).click();

        cy.url().should('includes', '/hotel-collection');
    })
});