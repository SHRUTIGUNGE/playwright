import { test,expext} from '@playwright/test'
export class Lpage{

    constructor(page){

this.page=page
this.lbutton=page.locator('//a[@id="login2"]')
this.utextfiesl=page.locator('//input[@id="loginusername"]')
this.ptextfilesd=page.lbutton('//input[@id="loginpassword"]')
this.lclcik=page.locator("//button[.='Log in']")
    }

    async input(username,password){
        await this.lbutton.click()
        await this.utextfiesl.fill(username)
        await this.ptextfilesd.fill(password)
        await this.lclcik.click()
    }


    }








}