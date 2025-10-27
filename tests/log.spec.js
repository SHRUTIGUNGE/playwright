import {test} from '@playwright/test'
import {Lpage} from './l.page'
import data from '../testdata/l.json'


data.forEach(({username,password},index)=>{
    test(`login test ${index+1}`,async ({page})=>{
        await page.goto('https://demoblaze.com/index.html')

        const l=new Lpage(page)
        await l.input(username,password)
        await waitForTimeout(3000)
    })
})