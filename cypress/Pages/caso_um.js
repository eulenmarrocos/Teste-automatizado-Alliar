import loc from "../support/Locators";

class caso_um {
    Pesquisa_valida() {
        //clicando no campo de pesquisa e digitando a palvar Carro
        cy.get(loc.Campo_de_pesquisa.c_pesquisa).should('be.visible').and('be.empty').and('be.enabled')
        cy.get(loc.Campo_de_pesquisa.c_pesquisa).type('Carro', { force: true })
        //clicando no botão de pesquisar
        cy.get(loc.Botão_de_pesquisa.btn_pesquisa).click()
    }

}

export default caso_um;