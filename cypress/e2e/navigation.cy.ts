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
        it('jumps to the projects, contact, and home sections when clicked', () => {
        cy.visit("/")

        cy.get('nav').contains('Projects').click();

        cy.url().should('include', '#Projects');

        cy.get('#Projects').should('be.visible');

        cy.get('nav').contains('Contact').click();

        cy.url().should('include', '#Contact');

        cy.get('#Contact').should('be.visible');

        cy.get('nav').contains('Home').click();

        cy.url().should('include', '#Home');

        cy.get('#Home').should('be.visible');
    })
})