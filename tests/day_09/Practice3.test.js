/* ------------------------------------------------------------------------

Practice #3 - Playwright Website Navigation

1.  Create a test called “Playwright Website Navigation”.
2.  Navigate to: https://playwright.dev
3.  Locate the “Get started” link/button.
4.  Click it.
5.  On the next page, locate the “Writing tests” link in the navigation.
6.  Click it.

Methods you may need: goto() click()

------------------------------------------------------------------------

Practice #4 - Playwright Website Search

1.  Create a test called “Playwright Documentation Search”.
2.  Navigate to: https://playwright.dev
3.  Locate and click the Search button.
4.  Locate the search input.
5.  Enter: locators
6.  Locate one of the displayed search results related to Locators.
7.  Click the result.

Methods you may need: goto() click() fill()
*/

import { test } from '@playwright/test'

test.beforeEach(async ({ page }) => {
    await page.goto("https://playwright.dev");
});

test('Playwright Website Navigation', async ({ page }) => {

    const getStartedLink = page.getByRole('link', { name: 'Get started' });
    await getStartedLink.click();

    const writingTestsLink = page.getByRole('link', { name: 'Next Writing tests' });
    await writingTestsLink.click();
});


test('Playwright Documentation Search', async ({ page }) => {

    const searchButton = page.getByRole('button', { name: 'Search (Meta+k)' });
    await searchButton.click();

    const searchInput = page.locator("//input[@id='docsearch-input']");

    await searchInput.fill("locators");
    await page.waitForTimeout(3000);
    await searchInput.press('Enter');
    const firstSearchResult = page.locator('a[href="/docs/api/class-locator"]').first();
    await firstSearchResult.click();

});
