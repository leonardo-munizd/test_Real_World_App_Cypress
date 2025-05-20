import userData from '../../fixtures/userData.json'
import BankHistoryTransaction from '../pages/bankTransactionHistory'
import Login from '../pages/loginPage'

const loginPage = new Login()
const trasactionHistory = new BankHistoryTransaction()

describe('Testes histórico Transações', () => {

  describe('Visualizar histórico de transações com sucesso', () => {
    it('Deve exibir o histórico de transações de um usuário corretamente', () => {
      loginPage.acessLoginPage()
      loginPage.loginWithUser(userData.userSucess.userName, userData.userSucess.password)
      trasactionHistory.successfulTransactionHistory
  
    })
  })

  describe('Tentar visualizar o histórico de transações sem transações anteriores', () => {
    it('Deve exibir uma mensagem indicando que o usuário não possui transações anteriores', () => {
      loginPage.acessLoginPage()
      loginPage.loginWithUser(userData.userSucess.userName, userData.userSucess.password)
      trasactionHistory.historyWithoutTransactions()
    })
  })
})

