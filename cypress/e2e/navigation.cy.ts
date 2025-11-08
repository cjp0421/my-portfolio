        /// <reference types="cypress" />

describe('AppBar navigation', () => {
    it('stays visible and jumps to the capabilities section when clicked', () => {
        cy.visit("/")

        cy.get('header')
          .should('be.visible')
          .and('have.css', 'position')
          .and('match', /static/);

        cy.contains('Capabilities').click();

        cy.url().should('include', '#Capabilities');

        cy.get('#Capabilities').should('be.visible');

        cy.get('header').should('be.visible');
    })
})