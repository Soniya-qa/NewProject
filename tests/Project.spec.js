import { test, expect } from '@playwright/test';



test('Amazon iPhone flow', async ({ page , context }) => {

  // Go to Amazon
  await page.goto('https://www.amazon.in/');
  
  // Search iphone
  await page.locator('#twotabsearchtextbox').fill('iphone');
  await page.locator('#nav-search-submit-button').click();

  // Wait for search results
  await page.waitForSelector('[data-component-type="s-search-result"]');

  // Sort High → Low
  await page.locator('#s-result-sort-select').selectOption('price-desc-rank');

  //await page.locator("//div[@data-component-type='s-search-result']//span[contains(text(),'iPhone 17 Pro Max')]").click();

   const [newPage] = await Promise.all([
    context.waitForEvent('page'),
   page.locator("//div[@data-component-type='s-search-result']//span[contains(text(),'iPhone 17 Pro Max')]").click()
  ]);
  await newPage.locator('#add-to-cart-button:visible').click();
 
  // Add to cart
  //await page.locator('#add-to-cart-button').click();

  // Proceed to checkout
  await newPage.locator('input[name="proceedToRetailCheckout"]').click();

});
