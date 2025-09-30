import { register } from 'module'

export class Loginpage{
    /**
     * @param {import('playwright').Page} page
     */


    constructor(page){
        this.page=page
        this.nametextfield=page.getByPlaceholder('Enter your name')
        this.emailtextfiled=page.getByPlaceholder('Enter Your Email')
        this.passwordtextfield=page.getByPlaceholder('Enter your password')
        this.regesterbutton=page.getByRole('button',{name:'Register'})
    }

  async  register(username,email,pwd)
{
    // await expext(this.nametextfield).toBeVisible()
    await this.nametextfield.fill(username)
    await this.emailtextfiled.fill(email)
    await this.passwordtextfield.fill(pwd)
    await this.regesterbutton.click()
}}