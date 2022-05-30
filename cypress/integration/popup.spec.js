/// <reference types="cypress"/>

describe('Work with Popup', () => {
    before( () => {
    })

    beforeEach( () => {
        cy.reload()
    })

    it.only('Deve testar o popup diretamente', () => {
        // testando a limitação do cypress de trabalhar com alerts vindos de iframes
        cy.visit('https://www.wcaquino.me/cypress/componentes.html')

        cy.window().then(win =>{
            cy.stub(win, 'open').as('winOpen')
        })

        cy.get('#buttonPopUp').click()

        cy.get('@winOpen').should('be.called')
        cy.get('@winOpen').should('contains', 'Elemento Externo')

    })

    it('Deve verificar se o popup foi invocado', () => {

        cy.visit('https://www.wcaquino.me/cypress/frame.html')

        cy.get('#otherButton').click()

        cy.on('window:alert', msg => {
            expect(msg).to.be.equal('Click OK!')
        })
    })


    describe.only('Work with Links...', () => {
        beforeEach( () => {
            cy.visit('https://www.wcaquino.me/cypress/componentes.html')
        })

        beforeEach( () => {
            cy.reload()
        })

        it.only('Check popup url', () => {
            cy.contains('Popup2').should('have.prop', 'href')
                .and('equal', 'https://www.wcaquino.me/cypress/frame.html')
        })

        it('Shoud access popup dinamically', () => {
            cy.contains('Popup2').then($a => {
                const href = $a.prop('href')
                cy.visit(href)
                cy.get('#tfield').type('funciona')
            })
        })

        it('Shoud force link on same page', () => {
            cy.contains('Popup2')
                .invoke('removeAttr', 'target')
                .click()

            cy.get('#tfield').type('funcionaaaaaaa')
        })
    })
})
