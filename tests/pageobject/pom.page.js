export class Check{


    constructor(page){

this.page=page
this.userfield=page.locator('//input[@id="username"]')
this.passwordfield=page.locator('//input[@id="password"]')
this.submitbton=page.locator('//button[@id="submit"]')
this.logoutbtn=page.locator("//a[.='Log out']")


    }
    async loginn(us,pwd){
        await this.userfield.fill(us)
        await this.passwordfield.fill(pwd)
        await this.submitbton.click()
    }





}
