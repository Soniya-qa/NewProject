import {test} from '@playwright/test';

// Single file upload	 --> setInputFiles()
// Multiple file upload	 --> setInputFiles([file1,file2])
// Hidden input upload	 --> setInputFiles()
// System file dialog	 --> waitForEvent('filechooser')


test('File uploading',async({page})=>{
    await page.goto('https://demoqa.com/upload-download');
    //await page.locator('#uploadFile').setInputFiles('testData/Picture.jpeg');
    await page.setInputFiles('#uploadFile','testData/Picture.jpeg');
    //await page.setInputFiles('#uploadFile',["testData/Picture.jpeg","testData/Picture1.jpeg","testData/Picture3.jpeg"]);
    await page.waitForTimeout(3000);
});

test.only('File chooser popup', async ({ page }) => {
  await page.goto('https://cgi-lib.berkeley.edu/ex/fup.html');
  const [fileChooser] = await Promise.all([
    page.waitForEvent('filechooser'),
    page.click('input[type="file"]')
  ]);
  await fileChooser.setFiles('testData/Picture.jpeg');

});