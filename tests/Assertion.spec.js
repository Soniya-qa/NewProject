import {test, expect} from "@playwright/test";

//Assertion

// 1. hard -> execution stops
// 2. soft -> it wont stop the execution

// toBeVisible()
// toBeEnabled()
// toBeDisabled()
// toHaveText()
// toContainText()
// toHaveURL()
// toHaveTitle()


test('Soft Assertions',async({page})=>{

    await page.goto('https://demoblaze.com/index.html')

    /* //Hard assertions
    await expect(page).toHaveTitle('STORE')
    await expect(page).toHaveURL('https://demoblaze.com/index.html')
    await expect(page.locator('.navbar-brand')).toBeVisible() */

    //Soft assertions
    await expect.soft(page).toHaveTitle('STORE')
    await expect.soft(page).toHaveURL('https://demoblaze.com/index.html')
    await expect.soft(page.locator('.navbar-brand')).toBeVisible()
})

