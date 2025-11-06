import {test} from '@playwright/test'
test('tryom' ,async({page})=>{
    page.goto("http://localhost:8080/view/all/newJob")
})