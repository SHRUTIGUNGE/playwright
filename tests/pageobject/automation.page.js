export class Automation{

constructor(page){

this.page=page
this.loginbtn=page.getByRole('link', { name: ' Login' })
this.emaifiled=page.locator('form').filter({ hasText: 'Login' }).getByPlaceholder('Email Address')
this.passwordfiled=page.getByPlaceholder("Password")
this.loginbtnn=page.getByRole('button', { name: 'Login' })
this.errorMsg = page.locator('text=Your email or password is incorrect!')



}


async logiin(email,pwd){
    await this.loginbtn.click()
    await this.emaifiled.fill(email)
    await this.passwordfiled.fill(pwd)
    await this.loginbtnn.click()


}



}