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

        cy.findByLabelText('Name').as('userInput');
        cy.findByLabelText('Password').as('passwordInput');

        cy.get('@userInput').type(user);
        cy.get('@passwordInput').type(password);
        
        cy.get('@userInput').should('have.value', user);
        cy.get('@passwordInput').should('have.value', password);
    });
});