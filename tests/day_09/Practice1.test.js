/* 

    - Try to use Playwright locators such as getByRole(), getByPlaceholder(), getByText(), or locator(css/xpath) when appropriate.
    - Note: Use the promt we created to get the test() skeleton

------------------------------------------------------------------------

Practice #1 - Bing Search

1.  Create a test called “Bing Search”.
2.  Navigate to: https://www.bing.com
3.  Locate the search box.
4.  Click the search box.
5.  Enter: Playwright Automation
6.  Press Enter.
7.  Observe the search results.

Methods you may need: goto() click() fill() press()
 */

import { test } from '@playwright/test';

test('Bing Search', async ({ page }) => {

    await page.goto('https://www.bing.com');
    let searchBox = page.locator("//textarea[@id='sb_form_q']");
    await searchBox.click();
    await searchBox.fill('Playwright Automation');
    await searchBox.press('Enter');
});