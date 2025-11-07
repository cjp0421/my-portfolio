 /// <reference types="cypress" />


describe('Portfolio site', () => {
    it('loads the home page and shows the Hero section', () => {
        // cy.visit('https://cjp0421.github.io/my-portfolio')
        cy.visit('/')
        cy.contains('Carol Pedersen').should('be.visible')
    })
})

