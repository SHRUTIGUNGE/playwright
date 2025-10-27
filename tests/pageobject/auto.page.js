export class Automate{


    constructor(page){
        this.page=page
        this.usertext=page.locator('//input[@id="user-name"]')
        this.passwordfield=page.locator('//input[@id="user-name"]')
        this.loginbtn=page.locator('//input[@id="login-button"]')
        this.errormsgg=page.locator("//div[@class='error-message-container error']")
    }



    async log(us,pwd){
        await this.usertext.fill(us)
        await this.passwordfield(pwd)
        await this.loginbtn.click()
    }


}