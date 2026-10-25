/* Practice #2 - DuckDuckGo Search

1.  Create a test called “DuckDuckGo Search”.
2.  Navigate to: https://duckduckgo.com
3.  Locate the search box.
4.  Fill the search box with: JavaScript Automation
5.  Press Enter.
6.  Observe the search results.

Methods you may need: goto() fill() press() */

import { test } from '@playwright/test';

test('DuckDuckGo Search', async ({ page }) => {
    await page.goto('https://duckduckgo.com');
    const searchBox = page.getByRole('combobox', { name: 'Search with DuckDuckGo' });
    await searchBox.fill('JavaScript Automation');
    await searchBox.press('Enter');
    await page.waitForTimeout(3000);
}); 
