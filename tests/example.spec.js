// @ts-check
//import { test, expect } from '@playwright/test';

// test('has title', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Expect a title "to contain" a substring.
//   await expect(page).toHaveTitle(/Playwright/);
// });

// test('get started link', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Click the get started link.
//   await page.getByRole('link', { name: 'Get started' }).click();

//   // Expects page to have a heading with the name of Installation.
//   await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
// });

import { test} from '@playwright/test';
test('Launch the url',async({page})=>{
   await page.goto("https://www.facebook.com");
});

test('Get the url',async({page})=>{
    await page.goto("https://www.facebook.com");
    console.log(await page.url());
    let pic = await page.screenshot({path : "file.png"});
    await page.waitForTimeout(3000);
    await page.waitForLoadState();
});

//url->title->wait->screenshot
test.only('Get the url of amazon',async({page})=>{
    await page.goto("https://www.amazon.com");
    const title =await page.title();
    console.log(title);
    await page.waitForTimeout(3000);
    let pic = await page.screenshot({path : "file1.png"});
});