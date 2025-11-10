describe('Projects', () => {
    const scrollToProjectSection = () => {
        cy.visit('/');
        cy.get('#Projects').scrollIntoView();
    }
    it('shows the Projects heading, filter chips, and project cards', () => {
        scrollToProjectSection();

        cy.get('#Projects').within(() => {
            cy.contains('h2', 'Projects').should('be.visible');

            cy.get('[aria-pressed]')
                .should('exist')
                .and('have.length.at.least', 1);

            cy.get('article')
                .should('exist')
                .and('have.length.at.least', 1);
        });
    });
})