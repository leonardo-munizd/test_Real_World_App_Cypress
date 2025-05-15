describe('Enviar dinheiro com saldo suficiente', () => {
  it('Deve enviar dinheiro com sucesso', () => {
    cy.visit('http://localhost:3000/')
    cy.get('#username').type('Mario_S')
    cy.get('#password').type('senha123')
    cy.get('.PrivateSwitchBase-input').click()
    cy.get('button').click()

    // cy.get('.MuiButton-colorPrimary').click()
    // cy.get('#bankaccount-bankName-input').type('CDI Bank')
    // cy.get('#bankaccount-routingNumber-input').type('123456789')
    // cy.get('#bankaccount-accountNumber-input').type('123456789')
    
    cy.get('[data-test="sidenav-home"]').click()
    cy.get('.MuiTabs-fixed').click()
    cy.get('.MuiButton-colorPrimary').click()

    cy.get('.MuiGrid-grid-xs-12').click()
    cy.get('#amount').type('100')
    cy.get('#transaction-create-description-input').type('payment')
    cy.get('[data-test="transaction-create-submit-payment"]').click()
    cy.get('[data-test="alert-bar-success"]').should('be.visible')
  })
})