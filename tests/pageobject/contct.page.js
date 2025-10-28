export class Contact{

    constructor(page){
this.page=page
this.sendto=page.locator('//input[@name="email_to[]"]').nth(0)
this.sub=page.locator('#subject')
this.email=page.locator('#email')
this.textbox=page.locator('#q1')
this.multi=page.locator('#q2')
this.dropdown=page.locator('#q3')
this.radiobut=page.getByRole('input',({name:'First Option'}))
this.singledrop=page.locator('#q5')
this.multislect=page.locator('//label[text()="Check Box - Multi Answer: "]/following-sibling::div/input[@type="checkbox"]')
this.datebox=page.locator('input#q7')
this.predefine=page.locator('#q8')
this.predefinee=page.locator('#q9')
this.canadian=page.locator('#q10')
this.fieldname=page.locator('//select[@name="q11_title"]')
this.firstname=page.getByPlaceHolder('First Name')
this.lastname=page.getByPlaceHolder('Last Name')
this.month=page.locator('//select[@name="q12_month"]')
this.date=page.locator('//select[@name="q12_day"]')
this.year=page.locator('//select[@name="q12_year"]')
this.attchfile=page.locator('#attach4589')
this.vcode=page.locator('#visver_code')
this.submit=page.locator('//input[@name="submit"]')




    }


async fillForm(){
    await this.sendto.click()
    await this.sub.fill()
    await this.email.fill()
    await this.textbox.fill()
    await this.multi.fill()
    await this.dropdown.selelctOption('First Option')
    await this.radiobut.nth(3).click()
   await  this.singledrop('#q5')
await this.multislect.nth(3).clcik()
// this.datebox=page.locator('input#q7')
 await   this.predefine.selelctOption("ID")
 await   this.predefinee.selelctOption("Indian")
  await  this.canadian.selelctOption("Yukon")
 await   this.fieldname.selelctOption("MS.")
 await   this.firstname.fill()
 await   this.lastname.fill()
 await   this.month.selelctOption(12)
  await  this.date.selelctOption(10)
 await   this.year.selelctOption(2000)
 await   this.attchfile.setInputFile(filepath)
 await   this.vcode.fill()
  await  this.submit.click()


}






}