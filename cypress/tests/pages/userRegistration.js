class UserRegister {
  selectorsList() {
    const selectors = {
      registerSelect: "[data-test='signup']",
      userNameField: "#username",
      passwordField: "#password",
      firstNameField: "#firstName",
      lastNameField: "#lastName",
      confirmPassword: "#confirmPassword",
      registerButton: ".MuiButton-colorPrimary",
      wrongConfirmPasswordAlert: "#confirmPassword-helper-text",
      buttonDisabled: ".Mui-disabled",
    };
    return selectors;
  }

  accessLoginPage() {
    cy.visit("/signin");
  }

  userInfo(firstName, lastName, userName, password, confirmPassword) {
    const selectors = this.selectorsList();

    cy.get(selectors.registerSelect).click();
    cy.get(selectors.firstNameField).type(firstName);
    cy.get(selectors.lastNameField).type(lastName);
    cy.get(selectors.userNameField).type(userName);
    cy.get(selectors.passwordField).type(password);
    cy.get(selectors.confirmPassword).type(confirmPassword);
    cy.get(selectors.registerButton).click();
  }

  wrongInfoAlert(firstName, lastName, userName, password, confirmPassword) {
    const selectors = this.selectorsList();
    cy.get(selectors.registerSelect).click();
    cy.get(selectors.firstNameField).type(firstName);
    cy.get(selectors.lastNameField).type(lastName);
    cy.get(selectors.userNameField).type(userName);
    cy.get(selectors.passwordField).type(password);
    cy.get(selectors.confirmPassword).type(confirmPassword);
    cy.get(selectors.wrongConfirmPasswordAlert).should("be.visible");
    cy.get(selectors.buttonDisabled).should("exist");
  }
}

export default UserRegister;
