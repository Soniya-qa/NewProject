import {test, expect} from "@playwright/test";

test('Page screenshot',async({page})=>{
   await page.goto('https://demo.opencartmart.com/ordercoupon/')
   await page.screenshot({path:'tests/screenshots/'+Date.now()+'HomePage.png'})
})

test('Full page screenshot',async({page})=>{
   await page.goto('https://demo.opencartmart.com/ordercoupon/')
   await page.screenshot({path:'tests/screenshots/'+Date.now()+'FullPage.png',fullPage:true})
})

test.only('Element screenshot',async({page})=>{
   await page.goto('https://demo.opencartmart.com/ordercoupon/')
   await page.locator("//body/div[@id='common-home']/div[@class='row']/div[@id='content']/div[@class='row']/div[1]").screenshot({path:'tests/screenshots/'+Date.now()+'Macbook.png'})
})