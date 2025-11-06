import {test,expect} from '@playwright/test'
import { Swiggy } from './pageobject/sswiggy.page'
import data from '../testdata/swiggy.json'

data.forEach(({sch},index)=>{
test(`swiggy order ${index}`,async ({page})=>{
    const swig= new Swiggy(page)
        await  swig.go()

        
        await swig.seacrhh(sch)
        
        // await swig.seleee()
        // await swig.addd()

        await swig.besel.click()
        await swig.psel.click()
        await swig.basel.click()
        await swig.bedcart()
        await swig.bagcart()
        await swig.pencart()



        // await swig .sizee()
        await swig.cheakCart()
        
    })
})


