// import {test, expect} from'@playwright/test'
// import { permission } from 'process'
//  import path from 'path'
test.skip('upload',async({page})=>{
    await  page.goto('https://testautomationpractice.blogspot.com/')
    console.log(__dirname)
    
    await page.locator('#multipleFilesInput').setInputFiles([path.join(__dirname,'../Shruti Gunge resume.pdf'),
        path.join(__dirname,'../qspider.html')])

await page.getByRole('button',{name:"Upload Multiple Files"}).click()

let filetext = await page.locator("#multipleFilesStatus").textContent();
console.log(filetext);
    

await expect(page.locator("#multipleFilesStatus")).toContainText("Shruti Gunge resume","qspider")
await page.waitForTimeout(2000)
 })

 test.skip('authontication',async({browser})=>{
    let context=await browser.newContext(
    //     {
    //   httpCredentials:{
    //     username:'admin',
    //     password:'admin'
    //   }  
    //     }

    )
 let page=await context.newPage()
 await page.goto('https://admin:admin@basic-auth-git-main-shashis-projects-4fa03ca5.vercel.app/')
 await page.waitForTimeout(2000)

    })


    test.skip('notification' ,async({browser})=>{
       let context= await browser.newContext(
        {
        permissions:['notifications']
       })
      let page= await context.newPage()
      await page.goto('https://demoapps.qspiders.com/ui/browserNot?sublist=0')
      await page.getByRole('button',{name:'Notification'}).click()
      
    
      let res=await page.evaluate(()=>{return Notification.permission})
      console.log(res);
      
    })

// import {test} from '@playwright/test'
    import path from'path'
     import fs from'fs'

    test.only('downoad file',async({page})=>{

      let customfolder ='C:/Users/hp/OneDrive/Desktop/downoad'
      let customfilename='downloadedFile.txt'

      let fullpath=path.join(customfolder,customfilename)

      await page.goto('https://demoapps.qspiders.com/ui/download?sublist=0')
      await page.getByPlaceholder('Enter text here').fill('the downloaded  file')

      const [downloadfile]=await Promise.all([
         page.waitForEvent('download'),
         page.getByRole('button',{name:'Download'}).click()
      ])
      
      
      // console.log(fullpath)
      await downloadfile.saveAs(fullpath)
   
    if(fs.existsSync(fullpath)){
      console.log("the file is saved"+fullpath)
    }
    else{
      console.log("the file is not saved"+fullpath)
    }

   })


import {test} from'@playwright/test'
test.skip('downoldfile',async({page})=>{
   let folder='C:/Users/hp/OneDrive/Desktop/pract'
   let filee='dfile.txt'
   let full=path.join(folder,filee)
   await page.goto('https://testautomationpractice.blogspot.com/p/download-files_25.html')
   await page.getByText('Enter Text:').fill('the file downloaded')
   await page.getByText('Generate and Download Text File').click()
   // page.getByRole('button',{name:'Download Text File'}).click()

   const [downloadfile]=await Promise.all([
      page.waitForEvent('download'),
      page.locator('//*[@id="txtDownloadLink"]').click()
      
   ])
await downloadfile.saveAs(full)

if(fs.existsSync(full)){
      console.log("the file is saved "+full)
    }
    else{
      console.log("the file is not saved"+full)
    }

   })


