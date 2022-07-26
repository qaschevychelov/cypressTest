class LoginPage {
    getPhone() {
        return cy.xpath("//input[@id='index_email']")
    }

    getLoginBtn() {
        return cy.xpath("//button[contains(@class,'signIn')]")
    }

    getPass() {
        return cy.xpath('//input[@placeholder="Введите пароль"]')
    }

    getContinueBtn() {
        return cy.xpath("//button[normalize-space(.)='Продолжить']")
    }
}
export const loginPage = new LoginPage()