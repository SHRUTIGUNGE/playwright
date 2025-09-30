import { test, expect } from '@playwright/test';

test.beforeAll(async () => {
  console.log('Before tests');
});

test.afterAll(async () => {
  console.log('After tests');
});


test.beforeEach('Open start URL', async ({ page }) => {
  
   await page.goto('https://playwright.dev/docs/api/class-test#test-after-all');
    const t=await page.title()
  console.log(t);
  
});

test.describe('two tagged tests', {
  tag: '@smoke',
}, () => {
  test('one', async ({ page }) => {
    
  });

  test('two', async ({ page }) => {
    
  });
});
test.describe('two tests', () => {
  test('one', async ({ page }) => {
    
  });

  test('two', async ({ page }) => {
    
  });
});

test.beforeEach('Open start URL', async ({ page }) => {
  
   await page.goto('https://demoapps.qspiders.com/ui?scenario=1');
    const t=await page.title()
  console.log(t);
  
});

