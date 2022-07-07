/// <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
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
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
// declare global {
//   namespace Cypress {
//     interface Chainable {
//       login(email: string, password: string): Chainable<void>
//       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
//     }
//   }
// }
interface Resource {
    path: string;
    fixture?: string;
    alias?: string;
}

Cypress.Commands.add(
    'loadAndVisit', 
    (visitUrl: string, resources: Resource[], cbAfterVisit?: () => void) => {

    const aliasList = resources.map((resource, index) => {
        const alias = resource.alias || `load-${index}`;
        Boolean(resource.fixture) 
        ? cy.intercept('GET', resource.path, { fixture: resource.fixture }).as(alias)
        : cy.intercept('GET', resource.path).as(alias);

        return alias;
    });

    cy.visit(visitUrl);

    if(cbAfterVisit) {
        cbAfterVisit();
    }

    aliasList.forEach((alias) => {
        cy.wait(`@${alias}`);
    });
    // cy.wait('@load');
});