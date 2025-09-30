// import { Loginpage } from "../pageobjects/Register.page.js"
import { Loginpage } from './pageobject/register.page.js'

import {test} from '@playwright/test'
import tdata from "../testdata/data.json"

// test.skip('login action new', async({page})=>{
//     const lpage=new Loginpage(page)
//         await page.goto(tdata.url)
//         await lpage.register(tdata.name,tdata.email,tdata.pwd)
            
//         await page.waitForTimeout(2000)
// })


tdata.forEach(({url,name,email,pwd} ,index)=>{

    //const url=data.url
    //const name=data.name


    test(`new #${index+1}`, async({page})=>{
    await page.goto(url)
    const lpage=new Loginpage(page)
   await lpage.register(name,email,pwd)

})

})