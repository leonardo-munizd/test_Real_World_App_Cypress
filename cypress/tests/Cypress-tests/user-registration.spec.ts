import UserRegister from "../pages/userRegistration"

const userRegistration = new UserRegister()

describe('Testes registrar usuário', () => {

  describe('Registro de novo usuário com sucesso', () => {
    it('Deve registrar um novo usuário com informações válidas', () => {
      userRegistration.accessLoginPage();
      userRegistration.userInfo('Mario', 'Silva', 'Mario_S', 'senha123', 'senha123');
    })
  })

  describe('Tentar registrar um novo usuário com informações incompletas', () => {
    it('Deve exibir mensagens de erro ao tentar registrar um novo usuário sem preencher todas as informações obrigatórias', () => {
      userRegistration.accessLoginPage();
      
      userRegistration.wrongInfoAlert('Mario', 'Silva', 'Mario_S', 'senha123', '000')
    })
  })

})
