import {test} from 'playwright/test';

test('Drop Down', async({page})=>{
    await page.goto('https://www.globalsqa.com/demo-site/select-dropdown-menu/');
    await page.waitForTimeout(3000);
    //await page.selectOption("p>select","Algeria");  // by text
    //await page.selectOption("p>select",{index:2});  //by index
    await page.selectOption("p>select",{value:'ASM'}); // by value
    //await page.selectOption("p>select",{value:['ASM','AFG','ALB']}); //multiple dropdown
    await page.waitForTimeout(2000);
});

test.only('shadow dom',async({page})=>{
    await page.goto('https://shop.polymer-project.org/');
    await page.getByLabel("Men's Outerwear Shop Now").click();
    await page.waitForTimeout(3000);
});