import { test } from '@playwright/test';
import {amezon1page}  from './pageobject/amezon1page';
import product from '../testdata/data2.json';

test('Select dress and get details', async ({ page }) => {
    const amazon = new amezon1page(page);

    // console.log(product);
    await page.goto('https://www.amazon.in/')
    

    // await amazon.goto();
    // await amazon.searchItem(inputData.searchItem);
    // await amazon.selectFirstItem();
await page.waitForTimeout(2000)
    const details = await amazon.getProductDetails();
    await page.waitForTimeout(2000)
    console.log('Product Details:', details);



    for (const item of product) {
            await amazon.searchFor(item.searchItems);

            await page.waitForTimeout(1000)
            console.log(`Searched for: ${item.searchItems}`);

            
             
        }

})