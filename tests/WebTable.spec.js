import {test, expect} from "@playwright/test";

test('Webtable',async({page})=>{
    await page.goto('https://demoqa.com/webtables');
    const rowsValue = await page.locator('table tr >td');
    console.log(rowsValue)
    const rowCount = await rowsValue.count();
    console.log(rowCount);

    // Get all the values
    for(let i=0;i<rowCount;i++){
        const val = await rowsValue.nth(i).textContent();
        // if(val?.includes('Email'){

        // })
        console.log(val);  
    }

    //Specific data 
    const spcData = await rowsValue.nth(0).locator('th').nth(2).textContent();
});
