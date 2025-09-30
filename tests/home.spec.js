

import { homepage } from './pageobject/home.page'
import {test} from '@playwright/test'

test('home page', async({page})=>{
    const hpage=new homepage(page)
        await page.goto('https://demoapps.qspiders.com/ui?scenario=1')
        await hpage.home('shruti','shrutigunge@gmail.com','89716927774')
        await page.waitForTimeout(2000)
})
