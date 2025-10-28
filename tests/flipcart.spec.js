import{test,expect} from '@playwright/test'
import data from '../testdata/fdate.json'
import {Flipcart} from './pageobject/flipcart.page'
import {flipcarthomepage} from './pageobject/flipcarthome.page'

test('flipcartbooking',async({browser})=>{
     const context=await browser.newContext(
        {
            permissions:['notifications']
        }
     
    )
      const page=await context.newPage()
      await page.goto(data.url)
      await page.waitForTimeout(2000)
       const fpage=new Flipcart(page)
       await fpage.srcdetail()
        const hpage=new flipcarthomepage(page)
        await hpage.flipdetail(data.frm,data.too)
        await page.waitForTimeout(2000)

    }
)
