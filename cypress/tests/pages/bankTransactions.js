class BankTransactions {
  selectorsList() {
    const selectors = {
      homeNav: '[data-test="sidenav-home"]',
      tabsFixed: ".MuiTabs-fixed",
      newTransactionButton: ".MuiButton-colorPrimary",
      transactionUser: ".MuiGrid-grid-xs-12",
      amountInput: "#amount",
      descriptionInput: "#transaction-create-description-input",
      submitPaymentButton: '[data-test="transaction-create-submit-payment"]',
      successAlert: '[data-test="alert-bar-success"]',
      failAlert: '[data-test="alert-bar-fail"]',
    };
    return selectors;
  }

  selectTransactionbox() {
    const selectors = this.selectorsList();
    cy.get(selectors.homeNav).click();
    cy.get(selectors.tabsFixed).click();
    cy.get(selectors.newTransactionButton).click();
    cy.get(selectors.transactionUser).click();
  }

  sucessTransaction(amount, description) {
    const selectors = this.selectorsList();
    cy.get(selectors.amountInput).type(amount);
    cy.get(selectors.descriptionInput).type(description);
    cy.get(selectors.submitPaymentButton).click();
    cy.get(selectors.successAlert).should("be.visible");
  }

  failTransaction(amount, description) {
    const selectors = this.selectorsList();
    cy.get(selectors.amountInput).type(amount);
    cy.get(selectors.descriptionInput).type(description);
    cy.get(selectors.submitPaymentButton).click();
    cy.get(selectors.failAlert).should("be.visible");
  }
}

export default BankTransactions;
