import {home}  from 'module'
export class homepage{
/**
     * @param {import('playwright').Page} page
     */

constructor(page){
    this.page=page
    this.nametextf=page.locator('#name')
    this.emailtextf=page.locator('#email')
    this.passwordtextf=page.locator('#password')
    this.buttonf=page.getByRole('button',{name:'Register'})
}

async home(name,email,password)


{
    
    await this.nametextf.fill(name)
    await this.emailtextf.fill(email)
    await this.passwordtextf.fill(password)
    await this.buttonf.click()
}}


