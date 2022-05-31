/// <reference types="Cypress" />

import caso_dois from '../Pages/caso_dois'

describe('Caso 2', () => {

    before(() => {
        cy.visit('/')
    })

    describe('Pesquisa inválida e tirar um print da tela', () => {
        it('pesquisa inválida', () => {
            var inv = new caso_dois
            inv.pesquisa_invalida()
            cy.screenshot('print da tela Caso 2')

        })
    })
})