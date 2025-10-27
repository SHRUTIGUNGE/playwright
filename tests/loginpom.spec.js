import {expect, test} from '@playwright/test'
import input from '../testdata/logindata.json'
import {Check} from './pageobject/pom.page.js'

input.forEach(({us,pwd} ,index)=>{

    

    test(`new ${index+1}`, async({page})=>{
    await page.goto("https://practicetestautomation.com/practice-test-login/")
    const lll=new Check(page)
   await lll.loginn(us,pwd)


   await expect(lll.userfield).toBeVisible();
    await expect(lll.userfield).toBeEditable();
    await expect(lll.userfield).toBeEnabled();

    await expect(lll.passwordfield).toBeVisible();
    await expect(lll.passwordfield).toBeEditable();
    await expect(lll.passwordfield).toBeEnabled();
})

})




