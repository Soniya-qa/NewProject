import {test} from '@playwright/test';

// frame        --> return Single frame object , Work with one specific frame
// frames       --> return all frames (Array of frames), Work with all frames
// frameLocator --> return Frame locator , Directly interact with elements inside iframe with built-in waiting.

test('Handling frames', async ({ page }) => {
    await page.goto('https://demoqa.com/frames');
    //const frame1 = page.frameLocator('#frame1');
    //console.log(await frame1.locator('#sampleHeading').textContent()); 
    console.log(await page.frameLocator('#frame1').locator('#sampleHeading').textContent());
    console.log(await page.frameLocator('#frame2').locator('#sampleHeading').textContent());
});

test('Print text from frames', async ({ page }) => {
    await page.goto('https://demoqa.com/frames');
    const frames = page.frames();
    for (const frame of frames) {
        const heading = frame.locator('#sampleHeading');
        if (await heading.count() > 0) {
            console.log(await heading.textContent());
        }
    }
});

test.only('Handling nested frames',async({page})=>{
    await page.goto('https://demo.automationtesting.in/Frames.html');
    await page.frameLocator('#singleframe').locator("(//input[@type='text'])[1]").fill("Single frame");
    await page.waitForTimeout(3000);

    await page.getByText('Iframe with in an Iframe').click();
    await page.frameLocator("iframe[src='MultipleFrames.html']")
              .frameLocator("iframe[src='SingleFrame.html']")
              .locator("input").fill("Nested frame");
    await page.waitForTimeout(3000);

});