import {test} from '@playwright/test';

test('Mouse Hover',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');
    await page.hover("//button[text()='Point Me']");
    await page.click("//a[text()='Mobiles']");
    await page.dblclick('//button[text()="Copy Text"]');
     await page.dragAndDrop('#draggable','#droppable'); 

    //await page.dblclick(''); //-->Double click
    // Right click-> Context click
    //await page.click('[name="email"]',{button :'right'});
    // await page.hover('');
    // await page.dragAndDrop('drag','drop'); //-->drag and drop
    // await page.waitForTimeout(3000);
});

// cntl+/ -> source page

test.only('Keyboard actions',async({page})=>{
    // await page.goto('');
    // await page.keyboard.press('Control+V');  // to press tab,caps lock,enter
    // await page.keyboard.type(); 

  await page.goto('https://testautomationpractice.blogspot.com/');
  // await page.click('#name');
  // await page.keyboard.type('Soniya');
  await page.locator('#name').fill('Soniya');
  await page.keyboard.press('Control+A');
  await page.keyboard.press('Control+C');
  await page.locator('#email').click();
  await page.keyboard.press('Control+V');
  await page.waitForTimeout(3000);
});