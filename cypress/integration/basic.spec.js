/// <reference types="cypress"/>

describe('Cypress basics', () => {
    it.only('Shoud visit a page and asser title ', () => {
        cy.visit('https://www.wcaquino.me/cypress/componentes.html')

        //const title = cy.title()
        //console.log(title)

        //cy.pause()

        cy.title().should('be.equal', 'Campo de Treinamento')
        cy.title().should('contain', 'Campo')

        cy.title()
            .should('be.equal', 'Campo de Treinamento')
            .and('contain', 'Campo')

        cy.title().should(title => {
            console.log(title)
        })

        //TODO imprimir o log no console
        //TODO escrever o log em um campo de texto

    });
})

it('Should find and interact with an element', () => {
    cy.visit('https://www.wcaquino.me/cypress/componentes.html')

    cy.get('#buttonSimple')
        .click()
        .should('has.value', 'Obrigado!')
})