// ststus of an element
import { test, expect } from '@playwright/test';

test.skip('verify element status', async ({ page }) => {
  await page.goto('https://demoapps.qspiders.com/ui?scenario=1');
  const btn = page.locator('//button[@type="submit"]');
  await expect(btn).toBeVisible();
  await expect(btn).toBeEnabled();
});

///Verify CSS attributes
test.skip('verify css attributes', async ({ page }) => {
  await page.goto('https://demoapps.qspiders.com/ui?scenario=1');
  const el = page.locator('//button[@type="submit"]');
  const color = await el.evaluate(e => getComputedStyle(e).color);
  console.log('Color is:', color);
});


//Verify error/success messages
test.skip('verify console messages', async ({ page }) => {
  page.on('console', msg => console.log('Browser log:', msg.text()));
  await page.goto('https://demoapps.qspiders.com/ui?scenario=1');
});


test.skip('get element size & location', async ({ page }) => {
  await page.goto('https://demoapps.qspiders.com/ui?scenario=1');
  
  const box = await page.locator('//input[@id="name"]').boundingBox();
  
await page.waitForTimeout(2000)
  console.log('X:', box.x, 'Y:', box.y, 'W:', box.width, 'H:', box.height);
  await page.waitForTimeout(2000)
});


//Verify browser elements
test.skip('verify elements', async ({ page }) => {
  await page.goto('https://demoapps.qspiders.com/ui?scenario=1');
  await expect(page.locator('//input[@id="name"]')).toBeVisible();
  await expect(page.locator('//input[@id="password"]')).toBeVisible();
});


//Navigation operations

test.skip('navigation', async ({ page }) => {
  await page.goto('https://demoapps.qspiders.com/ui?scenario=1');
    await page.waitForTimeout(2000)
  await page.goto('https://playwright.dev');
  await page.goBack();
  await page.waitForTimeout(2000)
  await page.goForward();
    await page.waitForTimeout(2000)
  await page.reload();
});

//Maximize/Minimize window
test.skip('maximize/minimize', async ({ browser }) => {
  const context = await browser.newContext({ viewport: { width: 1920, height: 1080 } });
  const page = await context.newPage();
  await page.goto('https://demoapps.qspiders.com/ui?scenario=1');
});

//autosuggestion
test.skip('auto suggestion', async ({ page }) => {
  await page.goto('https://google.com');
  await page.locator('textarea[name="q"]').fill('playwright');
  await page.waitForTimeout(1000);
  await page.locator('li span:has-text("playwright")').first().click();
});


//custom
test.skip('custom dropdown', async ({ page }) => {
  await page.goto('https://demoqa.com/select-menu');
  await page.locator('#withOptGroup').click();
  await page.locator('div[id*="react-select"]').locator('text=Group 2, option 1').click();
});


test.skip('select & deselect', async ({ page }) => {
  await page.goto('https://demoqa.com/select-menu');
  const select = page.locator('#oldSelectMenu');
  await select.selectOption('red'); 
  await select.evaluate(s => s.selectedIndex = -1); 
});



test('multi select', async ({ page }) => {
  await page.goto('https://demoqa.com/select-menu');
  const multi = page.locator('#cars');
  await page.waitForTimeout(2000)
  await multi.selectOption(['volvo', 'saab']);
  
});
