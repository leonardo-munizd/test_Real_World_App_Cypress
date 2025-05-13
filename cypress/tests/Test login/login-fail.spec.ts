describe('Tentar fazer login com credenciais inválidas', () => {
  it('Deve exibir uma mensagem de erro ao fazer login com credenciais inválidas', () => {
    cy.visit('http://localhost:3000/signin')
    cy.get('#username').type('Mario_S')
    cy.get('#password').type('senha')
    cy.get('.PrivateSwitchBase-input').click()
    cy.get('button').click()
    cy.get('.MuiAlert-message').should('be.visible')
  })
})