import {test,} from '@playwright/test'
import {Formy} from './pageobject/formy.page.js'
import dataaa from '../testdata/formy.json'

dataaa.forEach(({firstname,lastname,jobtitle,edu,date,exp},index)=>{
test(`formy register ${index}`,async ({page})=>{
    const chekk= new Formy(page)
        await  chekk.Handle(firstname,lastname,jobtitle)

        
        await chekk.selectEdu(edu)
        await chekk.Date(date)
        await chekk.SelectExp(exp)



        await chekk.submitForm()
    })
})


