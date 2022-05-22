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

        let syncTitle // Variavel para armazenar o titulo

         // imprimindo o log no console
        cy.title().then(title => {
            console.log(title)

            syncTitle = title
        })

        cy.get('[data-cy=dataSobrenome]').then($el => {
            $el.val(syncTitle) 
        })

        // escrever o log em um campo de texto
        cy.get('#elementosForm\\:sugestoes').then($el => {
            cy.wrap($el).type(syncTitle)
        })

    });
})

it('Should find and interact with an element', () => {
    cy.visit('https://www.wcaquino.me/cypress/componentes.html')

    cy.get('#buttonSimple')
        .click()
        .should('has.value', 'Obrigado!')
})