describe('Tentar registrar um novo usuário com informações incompletas', () => {
  it('Deve exibir mensagens de erro ao tentar registrar um novo usuário sem preencher todas as informações obrigatórias e botão nao fica visível', () => {
    cy.visit('http://localhost:3000/signin')
    cy.get('[data-test="signup"]').click()
    cy.get('#firstName').type('Maria')
    cy.get('#lastName').type('Silva')
    cy.get('#username').type('Maria_Sil')
    cy.get('#password').type('senha123')
    cy.get('#confirmPassword').type('000')
    cy.get('#confirmPassword-helper-text').should('be.visible')
    cy.get('.Mui-disabled').should('be.disabled')
  })
})