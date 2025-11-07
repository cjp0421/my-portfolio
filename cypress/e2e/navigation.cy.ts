        /// <reference types="cypress" />

describe('AppBar navigation', () => {
    it('stays visible and jumps to the capabilities section when clicked', () => {
        cy.visit("/")

        cy.get('header')
          .should('be.visible')
          .and('have.css', 'position')
          .and('match', /sticky|fixed/);

        cy.contains('Capabilities').click();

        cy.url().should('include', '#capabilities');

        cy.get('#capabilities').should('be.visible');

        cy.get('header').should('be.visible');
    })
})