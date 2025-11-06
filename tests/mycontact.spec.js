import {test} from '@playwright/test'
import {Mycontact} from './pageobject/mycontct.page.js'
import data from '../testdata/mycontckdata.json'
import { match } from 'assert'

data.forEach(({Name,email,username,pwd,repass},index) => {
    test(`my cont register ${index}` ,async ({page})=>{
        

    const my=new Mycontact(page)
    await page.goto('https://www.mycontactform.com/signup.php')
    const random = Math.floor(Math.random()*10000)
    my.FillInfo(`${Name}${random}`,`${email}`,`${username}${random}`,`${pwd}${random}`,`${repass}${random}`)
     await page.waitForTimeout(2000)
    my.subbmitt()
    })
})
