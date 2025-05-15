describe('Login com sucesso', () => {
  it('Deve fazer login com um usuário válido', () => {
    cy.visit('http://localhost:3000/signin')
    cy.get('#username').type('Mario_S')
    cy.get('#password').type('senha123')
    cy.get('.PrivateSwitchBase-input').click()
    cy.get('button').click()
  })
})