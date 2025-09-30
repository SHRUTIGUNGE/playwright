// import{test} from '@playwright/test'
// test('frame',async({page})=>{
//     await page.goto('https://ui.vision/demo/webtest/frames/')

//     // get all frame
//    let f= await page.frames()
//    console.log(f);
//    console.log(f.length);
//    // fraem()...url, name
//    let frame1= page.frame({url:'https://ui.vision/demo/webtest/frames/frame_1.html'})
//    await frame1.locator('//input[@name="mytext1"]').fill('hshfjkshdfkjjhjksdff')
//    await page.waitForTimeout(1000)

//    let frame4= page.frame({url:'https://ui.vision/demo/webtest/frames/frame_4.html'})
//    await frame4.locator('//input[@name="mytext4"]').fill('shrutitujkjkfhih')
// await page.waitForTimeout(2000)




// let frame3= page.frameLocator('//frame[@src="frame_3.html"]');
// await frame3.locator('//input[@name="mytext3"]').fill('jhkjshfjkhfdjkhjk')
// await page.waitForTimeout(1000)

//  let innerframe= frame3.frameLocator('//iframe[@src="https://docs.google.com/forms/d/1yfUq-GO9BEssafd6TvHhf0D6QLDVG3q5InwNE2FFFFQ/viewform?embedded=true"]');
// await innerframe.locator("//span[text()='Web Testing']/../../../div[@id='i21']").check()

// let frame2 = page.frame({url:'https://ui.vision/demo/webtest/frames/frame_2.html'})
// await frame2.locator('//input[@name="mytext2"]').fill('hfkhfk')
// await page.waitForTimeout(2000)

   




// }
// )
import {test} from '@playwright/test'
test.only("",async({page})=>{
    await page.goto('https://ui.vision/demo/webtest/frames/')
    let f=await page.frames()
    // console.log(f);
    console.log(f.length);


    let frame1=page.frame({url:'https://ui.vision/demo/webtest/frames/frame_1.html'})
    await frame1.locator('//input[@name="mytext1"]').fill('it is frame 1')

    await page.waitForTimeout(1000)

   let frame2= page.frame({url:'https://ui.vision/demo/webtest/frames/frame_2.html'})
   await frame2.locator('//input[@name="mytext2"]').fill('it si frame 2')
await page.waitForTimeout(1000)

   let frame4=page.frame({url:'https://ui.vision/demo/webtest/frames/frame_4.html'})
   await frame4.locator('//input[@name="mytext4"]').fill('it is frame 4')
await page.waitForTimeout(1000)

 let frame3=page.frameLocator('//frame[@src="frame_3.html"]')
 await frame3.locator('//input[@name="mytext3"]').fill('it is nested frame')
 await page.waitForTimeout(1000)


 let inside= frame3.frameLocator('//iframe[@src="https://docs.google.com/forms/d/1yfUq-GO9BEssafd6TvHhf0D6QLDVG3q5InwNE2FFFFQ/viewform?embedded=true"]')
await inside.locator("//span[text()='Web Testing']/../../../div[@id='i21']").click()
await page.waitForTimeout(3000)
await inside.locator("//span[text()='Web Testing']/../../../div[@id='i21']").click()
await page.waitForTimeout(1000)

    await page.pause()

 let frame5=page.frame({url:'https://ui.vision/demo/webtest/frames/frame_5.html'})
 await frame5.locator('//input[@name="mytext5"]').fill('it is farme 5')
 await page.waitForTimeout(1000)

  let inside1= frame3.frameLocator('//iframe[@src="https://docs.google.com/forms/d/1yfUq-GO9BEssafd6TvHhf0D6QLDVG3q5InwNE2FFFFQ/viewform?embedded=true"]')
  await inside1.locator("//span[text()='Web Testing']/../../../div[@id='i21']").click()

await page.waitForTimeout(1000)
await inside1.locator("//span[text()='I am a human']/../../../div[1]/div").click()
await page.waitForTimeout(1000)



 let inside2= frame3.frameLocator('//iframe[@src="https://docs.google.com/forms/d/1yfUq-GO9BEssafd6TvHhf0D6QLDVG3q5InwNE2FFFFQ/viewform?embedded=true"]')
await inside2.locator("//span[text()='I am a human']/../../../div[1]/div").unclick()
await page.waitForTimeout(1000)

//  let inside1= frame3.frameLocator('//iframe[@src="https://docs.google.com/forms/d/1yfUq-GO9BEssafd6TvHhf0D6QLDVG3q5InwNE2FFFFQ/viewform?embedded=true"]')
// await inside1.locator("//span[text()='Web Testing']/../../../div[@id='i21']").check()
// await page.waitForTimeout(1000)

//let frame6=page.frameLocator('//frame[@src="frame_3.html"]')
//  await frame6.locator('//input[@name="mytext3"]').fill('it is nested frame')
//  await page.waitForTimeout(1000)
    
}
)


test.skip('demo',async({page})=>{
await page.goto('https://demoapps.qspiders.com/ui/frames?sublist=0')
    let f= page.frames()
    // console.log(f);
    console.log(f.length);
    

    let frame1= page.frameLocator('iframe[class*="w-full h"]')
await frame1.locator('//input[@name="username"]').fill("admin")
await frame1.locator('//input[@id="password"]').fill("maneger")
await frame1.locator('//button[@id="submitButton"]').click()

    
}
)

test.skip('demo1',async({page})=>{
    await page.goto('https://demoapps.qspiders.com/ui/frames/nested?sublist=1')
    let f=page.frames()
    console.log(f.length);

    let frame1=page.frameLocator('iframe[class*="w-full h"]')
    let frame2=frame1.frameLocator('iframe')
    await frame2.locator('//input[@id="email"]').fill("Admin@gmail.com")
    
    
    await frame2.locator('//input[@id="password"]').fill("Admin@1234")
    await page.waitForTimeout(1000)
    await frame2.locator('//input[@id="confirm-password"]').fill("Admin@1234")
    await page.waitForTimeout(1000)
    await frame2.locator('//button[@id="submitButton"]').click()
    await page.waitForTimeout(1000)
    
})

