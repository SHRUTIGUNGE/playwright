import {expect, test} from '@playwright/test'
import {Qavbox} from './pageobject/qavbox.page.js'
import data from '../testdata/qav.json'

data.forEach(({year,skil,usname,eml,mblnum,gender,filepath,tool},index) => {
    test(`qavbox register ${index}` ,async ({page})=>{

    const check=new Qavbox(page,year,skil)
    await check.dummy(usname,eml,mblnum,gender)
     
     await check.selectCheckBox(skil)
     await check.selecetTool(tool)
     await check.uploadfile(filepath)
     
     await check.selectExp()
     await page.waitForTimeout(2000)
     await check.submitForm()
     await page.waitForTimeout(2000)
})
});
