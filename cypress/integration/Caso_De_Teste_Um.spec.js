/// <reference types="Cypress" />

import caso_um from "../Pages/caso_um"

describe('Caso 1', () => {

    before(() => {
        cy.visit('/')
    })

    describe('Pesquisa válida e tirar um print da tela', () => {
        it('pesquisa válida', () => {
            var val = new caso_um
            val.Pesquisa_valida()
            cy.timeout({ timeout: 8000 })
            cy.screenshot('print da tela Caso 1')

        })
    })
})