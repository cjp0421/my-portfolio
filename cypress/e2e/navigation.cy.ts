/// <reference types="cypress" />

const navItems = ['Home', 'Capabilities', 'Projects', 'Contact'];

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
  it('shows inline nav items and hides menu icon on desktop', () => {
    cy.viewport('macbook-15');
    cy.visit('/');

    cy.get('button[aria-label="open drawer"]').should('not.be.visible');

    navItems.forEach((item) => {
      cy.get('header').contains(item).should('be.visible');
    })
  })
  it('shows menu icon and hides inline nav items on mobile', () => {
    cy.viewport('iphone-6');
    cy.visit('/');
    cy.get('button[aria-label="open drawer"]').should('be.visible')

    navItems.forEach((item) => {
      cy.get('header').contains(item).should('not.be.visible');
    })
  })
  it('opens/closes the mobile drawer when the menu icon is clicked', () => {
    cy.viewport('iphone-6');
    cy.visit('/');

    cy.get('button[aria-label="open drawer"]').click();

    cy.get('h6').contains('Carol Pedersen').should('be.visible');

    navItems.forEach((item) => {
      cy.get('[aria-label="mobile navigation"]').contains(item).should('be.visible')
    })

    cy.get('body').click('topRight');

    navItems.forEach((item) => {
      cy.get('[aria-label="mobile navigation"]').contains(item).should('not.be.visible')
    })
  })
  it('navigates to section and closes drawer when a mobile nav item is clicked', () => {
    cy.viewport('iphone-6');
    cy.visit('/');

    cy.window().its('scrollY').should('eq', 0);

    cy.get('[aria-label="mobile navigation"]').should('not.exist');
    cy.get('button[aria-label="open drawer"]').click();
    cy.get('[aria-label="mobile navigation"]').should('exist');

    cy.get('[aria-label="mobile navigation"]').contains('Projects').click();

    cy.url().should('include', '#Projects');
    cy.location('hash').should('eq', '#Projects');
    cy.window().its('scrollY').should('be.gt', 0);
    cy.contains('h2', 'Projects').should('be.visible');
  })
})