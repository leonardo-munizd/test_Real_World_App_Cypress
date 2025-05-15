describe('Registro de novo usuário com sucesso', () => {
  it('Deve registrar um novo usuário com informações válidas', () => {
    cy.visit('http://localhost:3000/signin')
    cy.get('[data-test="signup"]').click()
    cy.get('#firstName').type('Mario')
    cy.get('#lastName').type('Silva')
    cy.get('#username').type('Mario_S')
    cy.get('#password').type('senha123')
    cy.get('#confirmPassword').type('senha123')
    cy.get('button').click()
  })
})