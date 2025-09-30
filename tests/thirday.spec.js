// import {test,} from '@playwright/test'
// test('',async({browser})=>{
//    let b=await browser.newContext()
//   let page1=await b.newPage()

//   await page1.goto("https://testautomationpractice.blogspot.com/")
//   await page
//     .getByPlaceholder('Enter Name')
//     .fill('shruti');
//   await page.getByPlaceholder('Enter EMail').fill('shrutigunge5@gmail.com')
//   await page.getByPlaceholder('Enter Phone').fill('8971692774')
//   await page.getByPlaceholder('Address').fill('bidar')
//   await expect(page.getByRole('heading', { name: 'gender' })).toBeVisible();
//   await page.getByRole('radio', { name: 'Female' }).check();
//   await expect(page.getByRole('heading', { name: 'Days' })).toBeVisible();
//   await page.getByRole('checkbox', { name: 'Sunday' }).check();


// })

// import {test,} from '@playwright/test'
//  test('',async({browser})=>{
//    let b=await browser.newContext()
//   let page=await b.newPage()
//   await page.goto("https://testautomationpractice.blogspot.com/")
//   await page
//     .getByPlaceholder('Enter Name')
//     .fill('shruti');
//   await page.getByPlaceholder("Enter EMail").fill("shrutigunge@gmail.com")
  
//   await page.getByPlaceholder('Enter Phone').fill('8971692774')
  
//   await page.getByLabel('Address').fill("bidar")

//   await page.getByRole('radio',{name:'Female'}).check()

//   await page.locator('#country').selectOption("china")
//   await page.locator('#colors').selectOption({ label: 'Red' })
  
//   await page.locator('#animals').selectOption({ label: 'Deer' })
   
// await page.locator('#datepicker').scrollIntoViewIfNeeded()
  
// // await page.locator('#datepicker').fill('10/31/2025'); 

// //await page.screenshot({path:`screenshot/screenshot.png`})
//  //await page.waitForTimeout(1000);
//   // await page.locator('#datepicker').click()
//   await page.getByRole('link', {name:'5'}).click()
//   await page.waitForTimeout(2000)


// //   await page.getByRole('button', { name: 'Submit'}).click()
  
//  })
  
  
  
  

// //   let text1=await page.getByText("Dynamic Button").allInnerTexts()
// //   console.log(text1);
  
// //   let text3=await page.getByText("Dynamic Button").allTextContents
// //   console.log(text3);
// //   let text4=await page.getByText("Dynamic Button").innerHTML
// //   console.log(text4);

// //   await page.getByAltText("Alerts & Popups").click()
 
  
// //   await page.getByTitle("Tabs").click()
// //   await page.waitForTimeout(1000)

  

  import {expect, test,} from '@playwright/test'
test('',async({browser})=>{
   let b=await browser.newContext()
  let page=await b.newPage()

  await page.goto("https://www.amazon.in/")
  await page.locator('//input[@id="twotabsearchtextbox"]').fill("dress for woman western")
  await page.locator('//div[@role="button"]').last().waitFor()
  let autosugg=await page.locator('//div[@role="button"]').all()
  for(let element of autosugg){
    let option=await element.textContent()
    if(option == "dress for woman western"){
      await element.click()
      break;
    }
    // console.log(option);
    
  }

  await page.waitForTimeout(3000);
  
  // await expect(await page.url()).not.toMatch("https:dfhs//www.amazon.in/").
    
  
})
  
  
  