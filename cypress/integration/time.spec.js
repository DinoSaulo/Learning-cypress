/// <reference types="cypress"/>

describe('Dinamic tests', () => {
    before( () => {
        cy.visit('https://www.wcaquino.me/cypress/componentes.html')
    })

    beforeEach( () => {
        cy.reload()
    })

    it('Going back to the past', () => {
        //cy.get('#buttonNow').click()
        //cy.get('#resultado > span').should('contain', '30/05/2022')

        //cy.clock()// sobreescreve a data ativa
        //cy.get('#buttonNow').click()
        //cy.get('#resultado > span').should('contain', '31/12/1969')

        const dt = new Date(2012, 3, 10, 15, 23, 50)
        cy.clock(dt.getTime())// sobreescreve a data ativa
        cy.get('#buttonNow').click()
        cy.get('#resultado > span').should('contain', '10/04/2012')
    })

    it.only('Goes to the future', () => {
        cy.get('#buttonTimePassed').click()
        cy.get('#resultado > span').should('contain', '16539')
        cy.get('#resultado > span').invoke('text').should('gt', 1653905993287)

        cy.clock()
        cy.get('#buttonTimePassed').click()
        cy.get('#resultado > span').invoke('text').should('lte', 0)

        //cy.wait(3000)
        //cy.get('#buttonTimePassed').click()
        //cy.get('#resultado > span').invoke('text').should('lte', 3000)

        cy.tick(5000)
        cy.get('#buttonTimePassed').click()
        cy.get('#resultado > span').invoke('text').should('gte', 5000)

        cy.tick(10000)
        cy.get('#buttonTimePassed').click()
        cy.get('#resultado > span').invoke('text').should('gte', 15000)
    })
})