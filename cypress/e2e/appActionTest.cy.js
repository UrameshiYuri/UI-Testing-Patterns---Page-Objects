/// <reference types="cypress"/>

const {email, senha} = require("../fixtures/data.json")
const { profilePage } = require("../support/pages/profile.page")

describe('teste de automação', () => {
    
  it('Deve fazer login com sucesso', () => {
    cy.login(email, senha)
    profilePage.customerName().should('contain', 'EBAC Cliente')
  })
})