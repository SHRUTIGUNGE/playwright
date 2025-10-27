import {test} from '@playwright/test'
import auto from '../testdata/auto.json'
import {Automate} from './pageobject/automation.page.js'


auto.forEach(({us,pwd},index)=>{

    test(`newwww ${index+1}`,async ({page})=>{
        await page.goto("https://www.saucedemo.com/")
        const Loggg=new Automate(page)
        await Loggg.log(us,pwd)

await expect(Loggg.usertext).toBeVisible();
    await expect(Loggg.usertext).toBeEditable();
    await expect(Loggg.usertext).toBeEnabled();

    await expect(Loggg.passwordfield).toBeVisible();
    await expect(Loggg.passwordfield).toBeEditable();
    await expect(Loggg.passwordfield).toBeEnabled();








        const loggedIn = page.locator('//div[@class="login_logo"]');

    if (await loggedIn.isVisible()) {
      console.log(`✅ Login successful for: ${us}`);
    } else if (await log.errorMsgg.isVisible()) {
      console.log(`❌ Login failed for: ${pwd} - Invalid credentials`);
      ;
    }
        

    })

})





