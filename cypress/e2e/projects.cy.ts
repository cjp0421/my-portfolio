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
    it('activates the selected filter chip when clicked and deactivates the previous one', () => {
        scrollToProjectSection();

        cy.get('#Projects').within(() => {
            cy.contains('[role="button"]', 'React')
                .click()

            cy.contains('[role="button"]', 'React')
                .should('have.attr', 'aria-pressed', 'true');

            cy.contains('[role="button"]', 'Python')
                .click();
            cy.contains('[role="button"]', 'Python')
                .should('have.attr', 'aria-pressed', 'true');

            cy.contains('[role="button"]', 'React')
                .should('have.attr', 'aria-pressed', 'false');
        })
    })
    it('shows only projects that match the active filter chip', () => {
        scrollToProjectSection();

        cy.get('#Projects').within(() => {
            cy.contains('[role="button"]', 'React')
                .click();

            cy.contains('[role="button"]', 'React')
                .should('have.attr', 'aria-pressed', 'true');

            cy.get('article').should('have.length.at.least', 1);

            cy.get('article').each(($card) => {
                cy.wrap($card).should('contain.text', 'React');
            });
        })
    })
})