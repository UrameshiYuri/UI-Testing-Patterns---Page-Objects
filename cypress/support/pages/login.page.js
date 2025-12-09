/// <reference types="cypress"/>
class loginPage {
    get #email() {return cy.get('[data-testid="email"]')}
    get #senha() {return cy.get('[data-testid="password"]')}
    get #bntLoggin() {return cy.get('[data-testid="btnLogin"]')}

    login(email, password){
        this.#email.type(email)
        this.#senha.type(password)
        this.#bntLoggin.click()
    }
}
module.exports = new loginPage();