import {test} from '@playwright/test'
test('mousee',async ({page})=>{
    await page.goto('https://demoapps.qspiders.com/ui/keyboard?sublist=0')
    await page.locator("//input[@name='handleInput']").click()
await page.keyboard.insertText('ragini')
await page.waitForTimeout(1000)
//  page.locator('//*[@id="demoUI"]/main/section/article/aside/div/aside/div/div/div/div/div/p[1]').press('End')
 page.locator('//*[@id="demoUI"]/main/sectioniv/div/div/div/p[1]').press('End')
 })
    
  
 
  
   



