/// <reference types="cypress"/>


describe('Desafio da aula 35', () => {

    before( () => {
        cy.visit('https://www.wcaquino.me/cypress/componentes.html')
    })

    beforeEach( () => {
        cy.reload()
    })

    it('desafio', () => {

        cy.get('#formCadastrar').click()

        cy.on('window:confirm', msg => {
            expect(msg).to.be.equal('Nome eh obrigatorio')
        })

        cy.get('#formNome').type('Uncle')

        cy.get('#formCadastrar').click()

        cy.on('window:confirm', msg => {
            expect(msg).to.be.equal('Sobrenome eh obrigatorio')
        })

        cy.get('[data-cy=dataSobrenome]').type('Bob')

        cy.get('#formCadastrar').click()

        cy.on('window:confirm', msg => {
            expect(msg).to.be.equal('Sexo eh obrigatorio')
        })

        cy.get('#formSexoFem').click()

        cy.get('#formCadastrar').click()

        cy.get('#resultado > :nth-child(1)').should('have.text', 'Cadastrado!')
    })

    it.only('Resposta do prof', () => {
        const stub = cy.stub().as('alerta')
        cy.on('window:alert', stub)

        cy.get('#formCadastrar').click()
            .then(() => expect(stub.getCall(0)).to.be.calledWith('Nome eh obrigatorio'))

        cy.get('#formNome').type('Uncle')

        cy.get('#formCadastrar').click()
            .then(() => expect(stub.getCall(1)).to.be.calledWith('Sobrenome eh obrigatorio'))

        cy.get('[data-cy=dataSobrenome]').type('Bob')

        cy.get('#formCadastrar').click()
            .then(() => expect(stub.getCall(2)).to.be.calledWith('Sexo eh obrigatorio'))

        cy.get('#formSexoFem').click()

        cy.get('#formCadastrar').click()

        cy.get('#resultado > :nth-child(1)').should('contain', 'Cadastrado!')

    })
})