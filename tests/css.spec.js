import { test, expect } from '@playwright/test';

test.skip(' CSS of Continue button', async ({ page }) => {
  await page.goto('https://demoapps.qspiders.com/ui/checkbox?sublist=0');

  
  const continueBtn = page.getByRole('button', { name: 'Continue' });

  
  const styles = await continueBtn.evaluate(el => {
    const cs = window.getComputedStyle(el);
    return {
      width: cs.getPropertyValue('width'),
      height: cs.getPropertyValue('height'),
      backgroundColor: cs.getPropertyValue('background-color'),
      color: cs.getPropertyValue('color'),
      borderRadius: cs.getPropertyValue('border-radius'),
      fontSize: cs.getPropertyValue('font-size'),
      fontWeight: cs.getPropertyValue('font-weight'),
    };
  });

  console.log('Continue button styles:', styles);
  expect(styles.width).toBe('80.7625px');
  expect(styles.height).toBe('30.7px');

  expect(styles.backgroundColor).toBe('rgb(251, 146, 60)');  
  expect(styles.color).toBe('rgb(255, 255, 255)');  
        
  expect(styles.borderRadius).toBe('1.625px');
  expect(styles.fontSize).toBe('14px');
  
  expect(styles.fontWeight).toBe('500');
});


test.skip('check the start button coclur',async({page})=>{
  await page.goto('https://testautomationpractice.blogspot.com/')
 const startbutton=page.locator('//*[@id="HTML5"]/div[1]/button');
 const initialcolour=await startbutton.evaluate(e1=>getComputedStyle(e1).backgroundColor)
 console.log(`initialcolor is  ${initialcolour}`);
 await startbutton.click()
//  await page.waitForTimeout(500)

 const clickedcolour=await startbutton.evaluate(e1=>getComputedStyle(e1).backgroundColor)
 console.log(`clickedclour is ${clickedcolour}`);

 expect(clickedcolour).not.toBe(initialcolour)
 
 

})

//import { test, expect } from '@playwright/test';

test.skip('Login Page Validation', async ({ page }) => {
  
  await page.goto('https://the-internet.herokuapp.com/login');

  
  await expect(page).toHaveTitle('The Internet');

 
  await expect(page).toHaveURL(/.*login/);

  
  const usernameField = page.locator('#username');
  const passwordField = page.locator('#password');
  const loginButton = page.locator('button[type="submit"]');

  
  await expect(usernameField).toBeVisible();
  await expect(passwordField).toBeVisible();
  await expect(loginButton).toBeEnabled();

  
  await usernameField.fill('wrongUser');
  await passwordField.fill('wrongPass');
  await loginButton.click();



  
  const errorMsg = page.locator('#flash');
  await expect(errorMsg).toContainText('Your username is invalid!');


  

 
  await usernameField.fill('tomsmith');
  await passwordField.fill('SuperSecretPassword!');
  await loginButton.click();

  
  await expect(page).toHaveURL(/.*secure/);

 
  const successMsg = page.locator('#flash');
  await expect(successMsg).toContainText('You logged into a secure area!');

});



test.skip('mouse',async({page})=>{
  await page.goto('https://demoapps.qspiders.com/ui/clickHold?sublist=0')
   await page.locator('#circle').hover()
   await page.mouse.down()
   await page.waitForTimeout(3000)
   await page.mouse.up()

   

})

test.skip('mousee',async({page})=>{
  await page.goto('https://www.amazon.in/')
  await page.waitForTimeout(3000)
  await page.locator('#twotabsearchtextbox').click({button:'right',force:true,clickCount:24})
  // await page.locator('https://www.amazon.in/').dblclick()
  // await page.mouse.down({button:'right'})
  // await page.waitForTimeout(3000)
  

})

test.skip('moss',async({page})=>{
  await page.goto('https://www.flipkart.com/')
   const flip=await page.getByRole('textbox',{name:'Search for Products, Brands and More'})
   await flip.fill('perfume')


   await page.keyboard.press('Enter')
  //  await page.keyboard.press('ArrowDown')
  await page.mouse.down({button:'right'})
  await page.keyboard.press('Enter')
   await page.waitForTimeout(2000)
  
    
})
test.skip('scrolong',async ({page})=>{
  await page.goto('https://demoapps.qspiders.com/ui/scroll/newTabVertical')
  await page.waitForTimeout(3000)
  
  for(let i=0;i<20;i++){
await page.mouse.wheel(0,500)

  }
  
  await page.locator('//input[@type="checkbox"]').scrollIntoViewIfNeeded()
  await page.waitForTimeout(1000)
})    

  
  test.skip('drag and drop',async ({page})=>{
    await page.goto('https://demoapps.qspiders.com/ui/dragDrop/dragToCorrect?sublist=2')
    await page.waitForTimeout(2000)
    let drag=await page.getByText('Mobile Charger')
  let drop=await page.getByText('Mobile Accessories')
  // await page.getByText('Mobile Charger').dragTo(page.getByText(' Mobile Accessories'))
   await drag.dragTo(drop)
  await page.waitForTimeout(2000)

  })

  test.only('drag',async({page})=>{
    await page.goto('https://demoapps.qspiders.com/ui/dragDrop/dragToCorrect?sublist=2')
    await page.getByText('Mobile Charger').hover()
    await page.mouse.down()
    await page.waitForTimeout(2000)
    let drop=await page.getByText('Mobile Accessories').boundingBox()
    console.log(drop);
    
     console.log(drop.x,drop.y);
    await page.mouse.move(drop.x+drop.width/2,drop.y+drop.height/2)   
    await page.mouse.up() 
    await page.waitForTimeout(2000)
    
    
  })

  test.skip('login practise',async ({page})=>{
    await page.goto('https://the-internet.herokuapp.com/login')
    await page.locator('#username').fill('tomsmith')
    await page.locator('#password').fill('SuperSecretPassword!')
    await page.getByRole('button',{name:'Login'}).click()

     const logintext =await page.locator('#flash')
     await expect(logintext).toContainText('You logged into a secure area!')

  })

  test.skip('',async({browser})=>{
  let b=await browser.newContext()
  let page1=await b.newPage()

  await page1.goto("https://www.amazon.in/")
  let page2=await b.newPage()
  await page2.goto("https://www.flipkart.com/")
})
  

