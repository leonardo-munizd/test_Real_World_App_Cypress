import userData from '../../fixtures/userData.json'
import BankTransactions from '../pages/bankTransactions'
import Login from '../pages/loginPage'

const loginPage = new Login()
const transiction = new BankTransactions()

describe('Testes Transaçoes bancárias', () => {

  describe('Enviar dinheiro com saldo suficiente', () => {
    it('Deve enviar dinheiro com sucesso', () => {
      loginPage.acessLoginPage()
      loginPage.loginWithUser(userData.userSucess.userName, userData.userSucess.password)
      transiction.selectTransactionbox()
      transiction.sucessTransaction('100','payment')
    })
  })

  describe('Enviar dinheiro com saldo insuficiente', () => {
    it('Deve exibir mensagem de erro ao enviar dinheiro sem saldo suficiente', () => {
      loginPage.acessLoginPage()
      loginPage.loginWithUser(userData.userSucess.userName, userData.userSucess.password)
      transiction.selectTransactionbox()
      transiction.failTransaction('1000', 'payment')
    })
  })
})
