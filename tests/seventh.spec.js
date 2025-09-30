import {test,expect} from '@playwright/test'

test('new',async ({page})=>{

 await page.goto('https://automationexercise.com/')


    await page.locator('//*[@id="header"]/div/div/div/div[2]/div/ul/li[4]/a').click
let visioble=await page.locator('//*[@id="form"]/div/div/div[3]/div/h2')
})


