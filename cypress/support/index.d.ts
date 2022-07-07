declare namespace Cypress {
    interface Chainable {
        loadAndVisit(
            visitUrl: string, 
            resources: Resource[], 
            cbAfterVisit?: () => void
        ): Chainable<Element>;
    }
}