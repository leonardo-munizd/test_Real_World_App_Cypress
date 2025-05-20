import userData from '../../fixtures/userData.json'
import Login from '../pages/loginPage'

const loginPage = new Login()

describe('Testes login', () => {

  describe('Login com sucesso', () => {
    it('Deve fazer login com um usuário válido', () => {
      loginPage.acessLoginPage()
      loginPage.loginWithUser(userData.userSucess.userName, userData.userSucess.password)
    })
  })

  describe('Tentar fazer login com credenciais inválidas', () => {
    it('Deve exibir uma mensagem de erro ao fazer login com credenciais inválidas', () => {
      loginPage.acessLoginPage()
      loginPage.acessLoginPage()
      loginPage.loginWithUser(userData.userFail.userName, userData.userFail.userName)
      loginPage.checkAccessInvalid()
    })
  })

})
