/// <reference types="cypress"/>

describe('Work with locators', () => {
    before( () => {
        cy.visit('https://www.wcaquino.me/cypress/componentes.html')
    })

    beforeEach( () => {
        cy.reload()
    })

    it.only('Using jquery selector', () => {

        cy.get('table#tabelaUsuarios > tbody > tr:nth-child(1) > td:nth-child(3) > input').click()

        cy.get('[onclick="' + "alert('Francisco')" + '"]').click()

        cy.get("[onclick*='Francisco']").click()

        cy.get("#tabelaUsuarios td:contains('Doutorado'):eq(0)").click()

        cy.get("#tabelaUsuarios td:contains('Doutorado'):eq(0) ~ td:eq(3) > input").type('Achei o elemento')

    })

    it.only('Using Xpath', () => {
        cy.xpath('/html/body/center/form/input[2]').click()

        cy.xpath("(//input[@type='button'][@value='Clique aqui'])[1]").click()

        cy.xpath("//input[contains(@onclick, 'Francisco')]").click()

        cy.xpath("(//table[@id='tabelaUsuarios']//td[contains(., 'Francisco')]/following-sibling::td/input)[1]").click()

        cy.xpath("//table[@id='tabelaUsuarios']//td[contains(., 'Francisco')]/..//input[@type='text']").type('Achei esse input via xpath')

        cy.xpath("(//table[@id='tabelaUsuarios']//td[contains(., 'Doutorado')])[2]/..//input[@type='checkbox']").click()

        cy.xpath("//*[@data-test='data2']").click()

        cy.xpath("//td[contains(., 'Usuario A')]/following-sibling::td[contains(.,'Mestrado')]/..//input[@type='text']").type('Buscando input de usuário com nome expecífico e Mestrado')
    })
})