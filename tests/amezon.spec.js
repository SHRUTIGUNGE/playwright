import { test } from '@playwright/test';

import { AmazonPage } from './pageobject/Amezonpage';

import  productes from '../testdata/data1.json';


    test('Search items from JSON', async ({page}) => {
        const amazon = new AmazonPage(page);
        // await amazon.open();
        await page.goto('https://www.amazon.in/');

        for (const item of productes) {
            await amazon.searchFor(item.searchItems);

            
            console.log(`Searched for: ${item.searchItems}`);

            
             
        }

//         console.log(productes);
//         productes.forEach((data)=>{
// console.log(data.productes);

//         })
        
    });
