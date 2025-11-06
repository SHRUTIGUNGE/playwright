import {expect} from '@playwright/test'



export class Formy{

constructor(page){
this.page=page
this.url=" https://formy-project.herokuapp.com/form"
this.firstname=page.locator('#first-name')
this.lastname=page.locator('#last-name')
this.jobtitle=page.locator('#job-title')
this.edu=page.locator('//input[@value="radio-button-3"]')
this.sex=page.locator(`//input[@value="checkbox-3"]`)
this.exp=page.locator('//select[@id="select-menu"]')
this.date=page.locator('//input[@id="datepicker"]')
this.submit=page.locator("//a[text()='Submit']")

}


async Handle(firstname,lastname,jobtitle){
    await this.page.goto(this.url)
    await expect(this.page).toHaveURL("https://formy-project.herokuapp.com/form")

await this.firstname.fill(firstname)
await expect(this.firstname).toHaveValue(firstname)


await this.lastname.fill(lastname)
await expect(this.lastname).toHaveValue(lastname)

await this.jobtitle.fill(jobtitle)
await expect(this.jobtitle).toHaveValue(jobtitle)}

async SelectExp(){
await this.exp.selectOption('value="1"')
const selectedexp=await this.exp.inputValue()
await expect (this.exp).toHaveValue(selectedexp)




}


async selectSex(){
    await this.sex.click()

    await expect(this.sex).toBeChecked()
}
async selectEdu(){
    await this.edu.click()
}

async submitForm(){
    await this.submit.click()
}

async Date(date){
    await this.date.fill(date)
}







}