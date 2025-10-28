import {test,expect} from '@playwright/test'
import value from '../testdata/automate.json'
import {Automation} from './pageobject/automation.page.js'

value.forEach(({email,pwd},index)=>{

    test(`neww ${index+1}`,async ({page})=>{
        await page.goto("https://automationexercise.com/")
        const log=new Automation(page)
        await log.logiin(email,pwd)

        const loggedIn = page.locator('text=Logged in as');

    if (await loggedIn.isVisible()) {
      console.log(`✅ Login successful for: ${email}`);
    } else if (await log.errorMsg.isVisible()) {
      console.log(`❌ Login failed for: ${email} - Invalid credentials`);
      ;
    }
        

    })

})