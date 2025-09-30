

// import {expect, test,} from '@playwright/test'
// test('',async({browser})=>{
//    let b=await browser.newContext()
//   let page=await b.newPage()

//   await page.goto("https://www.amazon.in/")
//   await page.locator('//input[@id="twotabsearchtextbox"]').fill("dress")
//   await page.locator('//div[@role="button"]').last().waitFor()
//   let autosugg=await page.locator('//div[@role="button"]').all()
//   for(let element of autosugg){
//     let option=await element.textContent()
//     if(option == "dress for woman western"){
//       await element.click()
//       break;
//     }
//      console.log(option);
    
//   }

//   await page.waitForTimeout(3000);
  
//})


// import { expect,test } from '@playwright/test'
// test('',async({browser})=>{
//    let b= await browser.newContext()
//    let page=await b.newPage()

//    await page.goto("https://demoapps.qspiders.com/ui?scenario=1")
//    await page.getByPlaceholder("Enter Your name").fill("shruti")
//    await page.getByPlaceholder("Enter your Email").fill("shrutigunge5@gmail.com")
//    await page.waitForTimeout(2000)
//    await page.getByPlaceholder("Enter your Password").fill('8971692774')
//    await page.waitForTimeout(2000)
//    await page.getByRole('link',{name:'Login Now'}).click()
//    await page.waitForTimeout(2000)
//    await page.getByRole('link',{name:'Button',exact:true}).click()
//    await page.waitForTimeout(1000)
// await page.getByRole('button',{name:'Yes'}).click()


// })
  import {  test } from '@playwright/test';

 test.skip('handling pages', async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();
   await page.goto('https://demoapps.qspiders.com/ui/browser?sublist=0');

  
  const pagePromise = context.waitForEvent('page');
  await page.getByRole('button', { name: 'view more' }).first().click();
  const newPage = await pagePromise;

  
  await newPage.getByRole('button', { name: 'Add to Cart' }).click();
  await newPage.locator("//*[local-name()='svg']").click();
  await newPage.waitForTimeout(2000);
  console.log(await context.pages())

  
   let pg = await context.pages(); 
   console.log(await pg.length)
   let mainTab = pg[0];
  let childTab = pg[1];

  console.log(await mainTab.title());
   console.log(await childTab.title());

  await mainTab.bringToFront();
   await childTab.close();

  console.log(pg.length); 
 });


// // import{test,expect} from '@playwright/test'
// // test('confirmpopup',async({page})=>{
// //     await page.goto("https://demoapps.qspiders.com/ui/alert?sublist=0")
// //     page.on('dialog',async dialog=>{
// //         console.log(  await dialog.type())
// //         console.log(await dialog.message());
// //         await page.waitForTimeout(1000)
    
// //          await dialog.accept("sometext");
// //         await expect(dialog.message()).toContain('delete')

        
        
// //     })
// //     await page.locator("//tbody/tr[1]/td[1]/input").check()
// //     await page.getByRole('button',{name:'Delete',exact:true}).click()

// // })
    
////

    
    
//  import { expect,test } from '@playwright/test'
//  import { log } from 'console'
//  import { link } from 'fs'
// // import { url } from 'inspector'
// // import { title } from 'process'
// // test('',async({browser})=>{
// //    let b= await browser.newContext()
// //    let page=await b.newPage()

// //    await page.goto("https://demoapps.qspiders.com/ui?scenario=1")
// //    await page.getByPlaceholder("Enter Your name").fill("shruti")
// //    await page.getByPlaceholder("Enter your Email").fill("shrutigunge5@gmail.com")
// //    await page.waitForTimeout(2000)
// //    await page.getByPlaceholder("Enter your Password").fill('8971692774')
// //    await page.waitForTimeout(2000)
// //    await page.getByRole('link',{name:'Login Now'}).click()
// //    await page.waitForTimeout(2000)
// //    await page.getByRole('link',{name:'Button',exact:true}).click()
// //    await page.waitForTimeout(1000)
// // await page.getByRole('button',{name:'Yes'}).click()
// // await page.locator('//a[@href="/ui/link"]').click()
// // await page.waitForTimeout(2000)
// // await page.locator('//a[@id="men"]').click()
// // await page.waitForTimeout(2000)

// //  let a=await page.locator('//a').all();

// //  for (let i = 0; i < a.length; i++) {
// //     await page.locator('//a').nth(i).click()
// //     console.log(await page.title());
// //     console.log( page.url());
// //     console.log("=============");
    
    
// //  }
// // await page.locator("//section[text()='Check Box']").click()
// // await page.locator('//input[@id="domain_a"]').check()
// // await page.locator('//input[@id="mode_b"]').check()
// // await page.locator('//input[@id="mode_f"]').check()
// // await page.waitForTimeout(3000)

 
// // await page.locator('//input[@id="mode_g"]').click()
// // await page.waitForTimeout(3000)

// //  ;})
// import{test} from '@playwright/test'
// import path from 'path'
// test.skip('upload',async({page})=>{
//     await page.goto('https://testautomationpractice.blogspot.com/')
//     console.log(__dirname);
//     await page.locator('#multipleFilesInput').setInputFiles([
//         path.join(__dirname,'../qspider.html'),
//     path.join(__dirname,'../Shruti Gunge resume.pdf')])
//     await page.getByRole('button',{name:"Upload Multiple Files"}).click()
//     await page.getByRole('button',{name:"Upload Single File"}).click()
//     await page.waitForTimeout(2000)
    
// })
 
// // import {  test } from '@playwright/test';

// // test('handling drag and drop', async ({ browser }) => {
// //   const context = await browser.newContext();
// //   const page = await context.newPage();
// //   await page.goto('https://testautomationpractice.blogspot.com/');
// //   await page.waitForTimeout(2000)
// //   await page.getByText('Drag and Drop').scrollIntoViewIfNeeded();



// // await  page.locator('#draggable').dragTo(page.locator('#droppable'));})




 