class BankHistoryTransaction {
    selectorsList() {
        const selectors = {
            personalTab: '[data-test="nav-personal-tab"]',
            transactionItem: '[data-test="transaction-item-us_putbeU"]',
            transactionDetail: '[data-test="transaction-detail-header"]',
            tabsRoot: '.MuiTabs-root',
            emptyTransactionHeader: '[data-test="empty-list-header"]'
        }
        return selectors
    }
    successfulTransactionHistory() {
        const selectors = this.selectorsList()
        cy.get(selectors.personalTab).click()
        cy.get(selectors.transactionItem).click()
        cy.get(selectors.transactionDetail).should('contain.text', 'Transaction Detail').and('be.visible')
    }

    
historyWithoutTransactions() {
        const selectors = this.selectorsList()
        cy.get(selectors.tabsRoot).click()
        cy.get(selectors.emptyTransactionHeader).should('contain.text', 'No Transactions').and('be.visible')
    }
}

export default BankHistoryTransaction