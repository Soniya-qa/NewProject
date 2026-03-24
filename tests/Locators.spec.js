import {test} from 'playwright/test';

// xpath -> It is a locator
// 1. Relative -> starts with //
//                 We can directly findout from anywhere in the DOM
// 1. Basic syntax -> //tagname[@att ='value']
//                    //input[@autocomplete="username webauthn"]
// 2. Using index  -> (//tagname[@att='value'])[index]
//                    (//div[@class="x78zum5 xdt5ytf xh8yej3"])[2]
// 3. Using text   -> //tagname[text()='value']
//                    //label[text()='Email address or mobile number']
// 4. Contains     -> //tagname[contains(att,'value')] 

// 2. Absolute -> starts with /
//                starts from the HTML tag
//  /html/body/div/div/div/div/div/div/div/div/div/div/div/div[3]/div/div/div/div/div/div/div/div/div/div/div[2]/form/div/div/div/div[1]/div/div/div/input

// parent ->parent::tagname[@att='value']
// preceding-sib::tagname

// CSS 
// 1. id -> #
// 2. class -> .
// 3. [att='value']
// 4. syntax ->tagname[att='vale']
// 5. starts with -> tagname[att$='value']
// 6. ends with -> tagname[att^='value']
// 7. contains -> tagname[att*='value']
// 8. parent -> child
// 9. direct child -> '>'
// 10. nth child tagname: nth-child(1)
// 11. combine attributes 
// all tag -> //*[@autocomplete="username webauthn"]
// //*[contains(@placeholder,'e')]

// getByRole('{button:}') -> button,link,headings
// getByText('') -> visible text
// getByPlaceholder('') -> Attribute
// getByLabel('') -> input type
// getByAltText() -> Attribute
// getByTestId() -> Developer
// getByTitle() -> Title


test('Clicking the image',async ({page}) => {
    await page.goto('https://www.amazon.in/');
    await page.waitForTimeout(2000);
    await page.getByAltText('Up to 45% off | Laptops').click();
    await page.waitForTimeout(3000);
});

