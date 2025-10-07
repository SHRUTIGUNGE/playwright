
import { test } from "@playwright/test";
import  {flightspage}   from "./pageobject/flights.page";
import data from "../testdata/data1.json" 

test('check',async({browser})=>{
  

  
  const context = await browser.newContext({
    permissions: [] 
  });

  const page = await context.newPage();

  const flights = new flightspage(page);

  


  await page.goto()
  await flights.enterFrom(data.from);
  await flights.enterTo(data.to);
  await flights.pickDate(data.departureDate);

  
  await flights.searchFlights();

 
  const resultsVisible = await page.locator('.flight-result-card').isVisible();
  console.log('Flight results visible:', resultsVisible);

  
});