import {test} from '@playwright/test'
export class Mycontact{
constructor(page){
    this.page=page
    this.name=page.locator('#name')
    this.email=page.locator('#email')
    this.user=page.locator('#user_signup')
    this.pass=page.locator('#pass_signup')
    this.repass=page.locator('#pass2')
    this.agrre=page.locator('#useragree')
    this.submit=page.locator('.btn')

}






async FillInfo(Name,email,username,pwd,repass){
    
await this.name.fill(Name)
await this.email.fill(email)
await this.user.fill(username)
await this.pass.fill(pwd)
await this.repass.fill(repass)
await this.agrre.click()




}

async subbmitt(){
    await this.submit.click()
}

}