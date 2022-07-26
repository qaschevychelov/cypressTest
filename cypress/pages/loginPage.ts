class LoginPage {
    getPhone(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.xpath("//input[@id='index_email']")
    }

    getLoginBtn(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.xpath("//button[contains(@class,'signIn')]")
    }

    getPass(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.xpath('//input[@placeholder="Введите пароль"]')
    }

    getContinueBtn(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.xpath("//button[normalize-space(.)='Продолжить']")
    }
}
export const loginPage = new LoginPage()