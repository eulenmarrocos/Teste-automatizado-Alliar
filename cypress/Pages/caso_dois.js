import loc from "../support/Locators"

class caso_dois {
    pesquisa_invalida() {
        //clicando no campo de pesquisa e digitando a palvar kgjfklb
        cy.get(loc.Campo_de_pesquisa.c_pesquisa).should('be.visible').and('be.empty').and('be.enabled')
        cy.get(loc.Campo_de_pesquisa.c_pesquisa).type('kgjfklb', { force: true })
        //clicando no botão de pesquisar
        cy.get(loc.Botão_de_pesquisa.btn_pesquisa).click()
        //validando a mensagem da pesquisa invalida
        cy.get(loc.Mensagem_de_erro.msg_de_erro).should('contain', 'Nenhum anúncio foi encontrado.')
    }
}
export default caso_dois;