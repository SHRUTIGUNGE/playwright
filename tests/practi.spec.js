import { expect, test} from '@playwright/test';
test.skip('built-in locator',async ({page})=>{
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
   const log= await page.getByAltText('company-branding')
   await expect(log).toBeVisible()
   await page.getByPlaceholder('Username').fill('Admin')
   await page.getByPlaceholder('Password').type('admin123')

   await page.locator('//button[@type="submit"]').click()
 const visible=await page.getByText('Sakthi A')
   await expect(visible).toBeVisible()

})
test.skip('assertionn',async({page})=>{
    await page.goto('https://demo.nopcommerce.com/register')
    await expect(page).toHaveURL('https://demo.nopcommerce.com/register')
    await expect(page).toHaveTitle('nopCommerce demo store. Register')
const check=await page.getByAltText('nopCommerce demo store')
await expect(check).toBeVisible()

 const enable=await page.locator('//input[@id="small-searchterms"]')
 await expect(enable).toBeEnabled()

  const femaleradio=await page.locator('//input[@id="gender-female"]')
  await femaleradio.click()
  await page.waitForTimeout(1000)
  await expect(femaleradio).toBeChecked()

   const checked=await page.locator('//input[@id="Newsletter"]')
   await expect(checked).toBeChecked()

    const regbutt=await page.locator('//button[@id="register-button"]')
    await expect(regbutt).toHaveAttribute('type','submit')

     const testi=await page.locator('//*[@id="main"]/div/div/div/div[1]/h1')
     await expect(testi).toHaveText('Register')
     await expect(testi).toContainText('Reg')


      const emailinput=await page.locator('//input[@id="Email"]')
      await emailinput.fill('study@123')

      await expect(emailinput).toHaveValue('study@123')
})

test.skip('dropdown',async({page})=>{
await page.goto('https://testautomationpractice.blogspot.com/')

// await page.locator('//select[@id="country"]').selectOption({value:'canada'})
// await page.waitForTimeout(5000)

// await page.selectOption("#country",'India')


// check numbre if option in dropdi
//  const option=await page.locator('#country option')
//  await expect(option).toHaveCount(10)


// check number of option in dropdown

// await page.waitForTimeout(2000)
//  const option1=await page.$$('#country option')
// //  console.log(option1.length);
//  await expect(option1.length).toBe(10)


//check the presrence of value in an dropdown
//  const content=await page.$$('#country option')
//  let status=false
// //  console.log(content);
// // await expect(content.includes('India')).toBeTruthy()
// //  await expect(content.includes('brazil')).toBeFalsy()

// await page.waitForTimeout(3000)

// for(const check of content){
//   let check1= await check.textContent()
//   if(check1.includes('France')){
//     status=true
//     break
//   }
// }
// expect(status).toBeTruthy()

// select option using loop

const option1=await page.$$('#Country Option')
for(const check of option1){
  let check1= await check.textContent()
  if(check1.includes('India')){
    await page.selectOption("#Country",check1)
    break
  }
}

await page.waitForTimeout(1000)
})


test.skip('multiselect',async({page})=>{
  await page.goto('https://testautomationpractice.blogspot.com/')

  // select multiple option drom multiselect from the dr

  // await page.selectOption('#colors',['blue','Red','Yellow'])
  await page.waitForTimeout(1000)


   const options=await page.locator('#colors option')
   await expect(options).toHaveCount(7)
   await page.waitForTimeout(2000)
})


