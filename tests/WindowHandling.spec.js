import {test} from '@playwright/test';

// page.waitForEvent('Popup') -> to handle popup inside the page (Popup opened by current page)
// context.waitForEvent('Page') -> to handle new window outside the page (Any new tab/window in browser)
// const autoPopup = await page.waitForEvent('popup'); // before navigation

test('Window Handling',async({context,page})=>{

  await page.goto('https://demoqa.com/browser-windows');
  //await page.click('#tabButton');
  //await page.waitForTimeout(2000);
  const [newTab] = await Promise.all([
         context.waitForEvent('page'),
          page.click('#tabButton')
  ]);
  await newTab.waitForLoadState();
  await newTab.bringToFront();
  console.log(await newTab.url()); // new tab first
  const wins = await context.pages(); // -->returns all open pages/tabs in the browser
  for(const p of wins){
   if(p !== newTab){
        console.log(await p.url()); // main page second
    }
  }
});

test('Window Handling - New Tab', async ({ browser }) => {

  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto('https://demoqa.com/browser-windows');

  const [newTab] = await Promise.all([
    context.waitForEvent('page'),
    page.click('#tabButton')
  ]);

  await newTab.waitForLoadState();

  const text = await newTab.locator('#sampleHeading').textContent();
  console.log(text);

});


test.only('Multiple Window Handling', async ({ context }) => {
    const page1 = await context.newPage();
    await page1.goto('https://demoqa.com/browser-windows');

  // Open first new tab
  const [tab1] = await Promise.all([
    context.waitForEvent('page'),
    page1.click('#tabButton')
  ]);
  await tab1.waitForLoadState('domcontentloaded');

  // Open second new tab
  const [tab2] = await Promise.all([
    context.waitForEvent('page'),
    page1.click('#tabButton')
  ]);
  await tab2.waitForLoadState('domcontentloaded');
  
  const text1 = await tab1.locator('#sampleHeading').textContent();
  const text2 = await tab2.locator('#sampleHeading').textContent();
  // Print titles of both new tabs
  console.log('First Tab Title:', text1);
  console.log('Second Tab Title:', text2);

});