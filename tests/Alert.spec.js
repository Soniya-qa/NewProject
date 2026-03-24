import {test} from '@playwright/test';

// popup --> JS Popup
// 1.Simple    --> only have 'OK' button
// 2.Confirm   --> OK and CANCEL 
// 3.Prompt    --> have TEXTBOX

// page.on            -> Global ,Listens to all dialogs that appear on the page.
// page.once          -> Listens for only the next dialog ,
//                        One-off, automatically removed after first dialog.
// page.waitForEvent  -> Explicitly waits for a dialog to appear and returns the Dialog object , 
//                      Controlled, you can use await to pause execution until alert appears.

// test('Handling Alert',async({page})=>{
//     await page.on('dialog',async(dialog)=>{
//     console.log(await dialog.message());
//    //expect(dialog.message()).toContain('alert');
//    //console.log(await dialog.type());
//     await dialog.accept("hi");
//  })

test('Handling Alert', async ({ page }) => {
    await page.on('dialog', async (dialog) => {
    console.log(`Dialog type: ${dialog.type()}`);
    console.log(`Dialog message: ${dialog.message()}`);

    if (dialog.type() === 'prompt') {
      await dialog.accept('hi');             // send text to prompt
      console.log('Sent to prompt: hi');     // log to terminal
    } else {
      await dialog.accept();                 // accept alert/confirm
    }
  });    
   
    await page.goto("https://demoqa.com/alerts");
    await page.click("#alertButton");
    await page.click("#timerAlertButton");
    await page.waitForTimeout(8000);
    await page.click("#confirmButton");
    await page.click("#promtButton");
});

test.skip('Handling alert with once', async ({ page }) => {
  await page.goto('https://demoqa.com/alerts');

  // Simple alert
  await page.once('dialog', async(dialog) => {
  await dialog.accept();
  });
  await page.click('#alertButton');

  // Timer alert
  page.once('dialog', dialog => dialog.accept());
  await page.click('#timerAlertButton');

  // Confirm dialog
  page.once('dialog', dialog => dialog.accept()); // use dialog.dismiss() for cancel
  await page.click('#confirmButton');

  // Prompt dialog
  page.once('dialog', dialog => dialog.accept('hi'));
  await page.click('#promtButton');
});

test.skip('Handling alerts using waitForEvent', async ({ page }) => {
  await page.goto("https://demoqa.com/alerts");

  // Simple alert
  let dialog = await page.waitForEvent('dialog');  // start waiting
  await page.click('#alertButton');               // trigger alert
  console.log(`Alert message: ${dialog.message()}`);
  await dialog.accept();                          // accept alert

  // Timer alert
  dialog = await page.waitForEvent('dialog');
  await page.click('#timerAlertButton');          // trigger delayed alert
  console.log(`Timer alert message: ${dialog.message()}`);
  await dialog.accept();

  // Confirm alert 
  dialog = await page.waitForEvent('dialog');
  await page.click('#confirmButton');
  console.log(`Confirm message: ${dialog.message()}`);
  await dialog.accept();                          // or dialog.dismiss() to cancel

  // Prompt alert 
  dialog = await page.waitForEvent('dialog');
  await page.click('#promtButton');
  console.log(`Prompt message: ${dialog.message()}`);
  await dialog.accept('hi');                      // send text to prompt
});

