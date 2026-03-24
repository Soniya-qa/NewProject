import {test} from 'playwright/test';

// page             --> Single tab
// browser context  --> separate window
test('Run in headed mode', async ({page}) =>{
   await page.goto('https://www.facebook.com');
   await page.waitForTimeout(2000);
});

// test('Record a video',async ({browser}) => {
//    const context = await browser.newContext({
//      recordVideo :{
//          dir : 'videos/'
//      }
//    });
//    let page = await context.newPage();
//    await page.goto('https://www.facebook.com');
//    await page.waitForTimeout(1000);
//    await page.goto('https://www.instagram.com');
//    await page.goBack();
//    await page.reload();
//    await page.goForward();
// })

test('Record a video',async ({page}) => {
   await page.goto('https://www.facebook.com');
   await page.waitForTimeout(1000);
   await page.goto('https://www.instagram.com');
   await page.goBack();
   await page.reload();
   await page.goForward();
});

// id    --> #
// name  --> [name = '']
// class --> .

test.only("Locate an element",async({page}) =>{
   await page.goto('https://www.facebook.com');
   //const username = await page.locator('#_R_1h6kqsqppb6amH1_');
   //await username.fill('soniya');
   await page.fill('#_R_1h6kqsqppb6amH1_','soniya');
   await page.fill("[name='pass']","welcome123");
   await page.click(".xqbgfmv");
   await page.waitForTimeout(5000);
}); 

