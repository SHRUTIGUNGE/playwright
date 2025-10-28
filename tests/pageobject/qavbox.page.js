import {test,expect} from '@playwright/test'
export class Qavbox{
constructor(page,year,skill){
    this .page=page
    this.url='https://qavbox.github.io/demo/signup/'
    this.username=page.locator( '#username');
    this.email=page.locator('#email')
    this.telephone=page.locator('#tel')
    this.upload=page.locator('//input[@type="file"]')
    this.gender=page.locator('//select[@name="sgender"]')
    this.exp=page.locator(`//input[@value="${year}"]`)
    this.tool=page.locator('#tools')
    this.skil=page.locator(`//input[@value="${skill}"]`)
    this.submit=page.locator('#submit')
}


async dummy(usname,eml,mblnum,gender){
await this.page.goto(this.url)
await expect(this.page).toHaveURL(this.url)

await this.username.fill(usname)
await expect(this.username).toHaveValue(usname)

await this.email.fill(eml)
await expect(this.email).toHaveValue(eml)

await this.telephone.fill(mblnum)
await expect (this.telephone).toHaveValue(mblnum)

await this.gender.selectOption({label:`${gender}`})
 const selectedgender=await this.gender.inputValue()
await expect(this.gender).toHaveValue(selectedgender)



}

async selectExp(){
    await this.exp.click()
}


async uploadfile(filepath){
    await this.upload.setInputFiles(filepath)
   const uploaedfile= await this.upload.inputValue()
   await expect(uploaedfile).not.toBe('')
}

async selectCheckBox(){
    await this.skil.check()
    await expect(this.skil).toBeChecked()
}

async selecetTool(tool="jenkin"){
    await this.tool.selectOption(tool)
}

async submitForm() {

    // this.page.on('dialog', async dialog => {
    //   const alertText = dialog.message();
    //   console.log('Alert text:', alertText);
    //   await expect(alertText).toBe('Registration Done!');
    //   await dialog.accept(); 
    // });

    await this.submit.click();}
}