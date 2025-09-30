import {test,expext} from '@playwright/test'
test.skip('handle the all popup',async({page})=>{
    await page.goto('https://demo.automationtesting.in/Alerts.html')
    // page.on('dialog', async dialog => {
    // console.log(`Dialog Type: ${dialog.type()}`);
    // console.log(`Dialog Message: ${dialog.message()}`);

    // if (dialog.type() === 'alert')
         
    //   await dialog.accept();
    //  if (dialog.type() === 'confirm') {
    //   await dialog.accept(); 
    //   await page.waitForTimeout(2000)
    // } else if (dialog.type() === 'prompt') {
    //   await dialog.accept('Playwright User'); 
    // }





    await page.locator('//button[@class="btn btn-danger"]').click()
    
    await page.locator('//button[@class="btn btn-primary"]').click()
    await page.locator('//*[@id="demo"]').click()
    
    await page.locator('//button[@class="btn btn-info"]').click()


})

    

test.only('Handle alert, confirm and prompt popups', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/javascript_alerts');

 
  page.on('dialog', async (dialog) => {
    console.log(`Dialog type: ${dialog.type()}`);
    console.log(`Dialog message: ${dialog.message()}`);

    // if (dialog.type() === 'alert') {
    //   await dialog.accept();   
    // } 
    // else if (dialog.type() === 'confirm') {
    //   await dialog.dismiss(); 
    // } 
    // else if (dialog.type() === 'prompt') {
    //   await dialog.accept('Playwright Input');
    // }
  

  
  await page.click('text=Click for JS Alert');
  await expect(page.locator('#result')).toContainText('You successfully clicked an alert');

  
  await page.click('text=Click for JS Confirm');
  await expect(page.locator('#result')).toContainText('You clicked: Cancel');

  
  await page.click('text=Click for JS Prompt');
  await expect(page.locator('#result')).toContainText('You entered: Playwright Input');
});





    
    






  

})
