import { test,  } from '@playwright/test';
// test('', async ({ page }) => {
//   await page.goto('https://www.amazon.in/s?k=mobile&crid=3KKQXUPKG4J1D&sprefix=mobile%2Caps%2C355&ref=nb_sb_noss_2');
// })
// import { test,  } from '@playwright/test';
// test('a', async ({ page }) => {
//   await page.goto('https://www.amazon.in/s?k=iphone&crid=3823B5VSSQBB9&sprefix=iphone%2Caps%2C282&ref=nb_sb_noss_2');
// await page.locator('//span[@class="a-price-whole"]').first().click();
// })


test ('a', {tag: '@smoke'}, async ({ page }) => {
  await page.goto('https://www.amazon.in/');
  page.waitForTimeout(4000)
 await page.locator('//input[@id="twotabsearchtextbox"]').fill('mobile');
 await page.locator('//input[@id="nav-search-submit-button"]').click()

 await page.waitForTimeout(5000);
 })



//   test('b', async ({ page }) => {
//    await page.goto('https://www.amazon.in/s?bbn=1388921031&rh=n%3A1388921031%2Cp_89%3AboAt&_encoding=UTF8&content-id=amzn1.sym.82b20790-8877-4d70-8f73-9d8246e460aa&pd_rd_r=ec1aea6b-8a61-4bd5-8c79-5');
//    await page.waitForTimeout(1000); 
//  await page.locator('//span[@class="a-price-whole"]|//span[@class="a-size-base-plus a-color-base"]').first().click()
//  await page.waitForTimeout(1000);
//  })