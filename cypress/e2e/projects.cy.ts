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
    });
    it('shows a tooltip when hovering over a filter chip', () => {
        scrollToProjectSection();

        cy.get('#Projects').within(() => {
            cy.contains('[role="button"]', 'React')
                .trigger('mouseover');

        })

        cy.contains('Click to filter projects')
            .should('be.visible');

        cy.get('#Projects').within(() => {
            cy.contains('[role="button"]', 'React')
                .trigger('mouseout');

        })
        cy.contains('Click to filter projects')
            .should('not.exist')
    });
    it('visually inidcates which chip is active', () => {
        scrollToProjectSection();

        cy.get('#Projects').within(() => {
            cy.contains('[role="button"]', 'React')
                .should('have.css', 'background-color')
                .and('eq', 'rgb(255, 255, 255)')

            cy.contains('[role="button"]', 'React')
                .should('have.css', 'color')
                .and('eq', 'rgb(0, 0, 0)')

            cy.contains('[role="button"]', 'React')
                .click();

            cy.contains('[role="button"]', 'React')
                .should('have.css', 'background-color')
                .and('eq', 'rgba(0, 0, 0, 0.2)')
            cy.contains('[role="button"]', 'React')
                .should('have.css', 'color')
                .and('eq', 'rgb(255, 255, 255)')

            cy.contains('[role="button"]', 'Python')
                .should('have.css', 'background-color', 'rgb(255, 255, 255)');
        });
    })
    it('displays the filter chips in case-insensitive, alphabetical order', () => {
        scrollToProjectSection();
        cy.get('#filter-chips').within(() => {

            cy.findAllByRole('button', { name: /.+/i }).then(($chips) => {
                const labels = [...$chips].map(chip => chip.innerText.trim());
                const [first, ...rest] = labels;

                expect(first).to.equal("All");

                const sortedLabels = [...rest].slice().sort((a, b) =>
                    a.toLowerCase().localeCompare(b.toLowerCase())
                );

                expect(rest).to.deep.equal(sortedLabels);
            })
        })
    })
})
