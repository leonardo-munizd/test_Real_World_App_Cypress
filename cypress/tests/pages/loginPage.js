class Login {
    selectorsList() {
        const selectors = {
            userNameFild: "#username",
            passwordFild: "#password",
            selectorBox: ".PrivateSwitchBase-input",
            loginButton: ".MuiButton-colorPrimary",
            wrongCredencialAlert: ".MuiAlert-message"
        }
        return selectors
    }

    acessLoginPage() {
        cy.visit('/signin')
    }

    loginWithUser(username, password) {
        const selectors = this.selectorsList()
        cy.get(selectors.userNameFild).type(username)
        cy.get(selectors.passwordFild).type(password)
        cy.get(selectors.selectorBox).click()
        cy.get(selectors.loginButton).click()
    }
    checkAccessInvalid(){
        const selectors = this.selectorsList()
        cy.get(selectors.wrongCredencialAlert)
    }
}

export default Login