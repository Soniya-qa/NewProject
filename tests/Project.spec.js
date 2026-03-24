import { test, expect } from '@playwright/test';

test('Amazon flow', async ({ page }) => {
  await page.goto('https://www.amazon.com/');

  //search
  await page.locator('#twotabsearchtextbox').fill('iphone');
  await page.click('#nav-search-submit-button');

  await page.locator("//body/div[@id='a-page']/div[@id='search']/div[@class='s-desktop-width-max s-desktop-content s-opposite-dir s-wide-grid-style sg-row']/div[@class='sg-col-20-of-24 s-matching-dir sg-col-16-of-20 sg-col sg-col-8-of-12 sg-col-12-of-16']/div[@class='sg-col-inner']/span[@class='rush-component s-latency-cf-section']/div[@class='s-main-slot s-result-list s-search-results sg-row']/div[@id='7780a184-2ba8-42d8-9ce0-fac706a04501']/div[@class='sg-col-inner']/div[@class='s-widget-container s-spacing-small s-widget-container-height-small celwidget slot=MAIN template=SEARCH_RESULTS widgetId=search-results_1']/div[@class='rush-component']/div[contains(@class,'rush-component s-featured-result-item')]/span[@class='a-declarative']/div[@class='puis-card-container s-card-container s-overflow-hidden aok-relative desktop-list-view puis-include-content-margin puis puis-v3uwpqlsvuzuoa1ytbiamvceou3 s-latency-cf-section puis-card-border']/div[@class='a-section']/div[@class='puisg-row']/div[@class='puisg-col puisg-col-0-of-4 puisg-col-0-of-8 puisg-col-4-of-12 puisg-col-8-of-16 puisg-col-12-of-20 puisg-col-12-of-24 puis-list-col-right']/div[1]").click();
  
  await page.locator('#add-to-cart-button').click();
  await page.locator('[name="proceedToRetailCheckout"]').click();
  
});


test('Amazon iPhone purchase flow', async ({ page }) => {

  // Go to Amazon
  await page.goto('https://www.amazon.com/');

  // Search iphone
  await page.locator('#twotabsearchtextbox').fill('iphone');
  await page.locator('#nav-search-submit-button').click();

  // Wait for search results
  await page.waitForSelector('[data-component-type="s-search-result"]');

  // Sort High → Low
  await page.locator('#s-result-sort-select').selectOption('price-desc-rank');

  // Wait for sorted results
  await page.waitForSelector('[data-component-type="s-search-result"]');

  // Click first product dynamically
  await page.locator('[data-component-type="s-search-result"] h2 a').first().click();

  // Wait for product page
  await page.waitForSelector('#add-to-cart-button');

  // Add to cart
  await page.locator('#add-to-cart-button').click();

  // Proceed to checkout
  await page.locator('input[name="proceedToRetailCheckout"]').click();

});



test.only('Amazon search add to cart flow', async ({ page }) => {

  // 1. Go to Amazon
  await page.goto('https://www.amazon.com/');

  // 2. Close location banner if present
  const dismiss = page.locator("input[value='Dismiss']");
  if (await dismiss.isVisible().catch(() => false)) {
    await dismiss.click();
  }

  // 3. Search iPhone
  await page.fill('#twotabsearchtextbox', 'iphone');
  await page.click('#nav-search-submit-button');

  // 4. Wait for results
  await page.waitForSelector('[data-component-type="s-search-result"]');

  // 5. Sort High → Low
  await page.locator('#s-result-sort-select').selectOption('price-desc-rank');

  // 6. Wait for sorted results
  await page.waitForSelector('[data-component-type="s-search-result"]');

  // 7. Click first available product (dynamic)
  await page.locator('[data-component-type="s-search-result"] h2 a').first().click();

  // 8. Wait for product page
  await page.waitForSelector('#add-to-cart-button');

  // 9. Add to cart
  await page.click('#add-to-cart-button');

  // 10. Proceed to checkout
  await page.click('input[name="proceedToRetailCheckout"]');

});
