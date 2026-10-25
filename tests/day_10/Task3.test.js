/* Practice #3 - Group Tests with test.describe()

Create ONE test.describe() group called “Search Engine Tests”.

Inside it create: 1. Google Search - search for “Playwright” 2. Bing
Search - search for “JavaScript” 3. DuckDuckGo Search - search for
“Automation Testing”

All 3 tests must be inside the same test.describe() block. */
import { test } from '@playwright/test'

test.describe("Search Engine Tests", () => {
    test('Test 1 - Google Search - search for “Playwright”', async ({ page }) => {
        await page.goto("https://www.google.com");
        const searchBox = page.getByRole('combobox', {name: 'Search'});
        await searchBox.click();
        await searchBox.fill('Playwright Automation');
        await searchBox.press('Enter');
        console.log("Google Search -> test executed");
    });

    test('Test 2 - Bing Search - search for “JavaScript”', async ({ page }) => {
        await page.goto('https://www.bing.com');
        const searchBox = page.locator("//textarea[@id='sb_form_q']");
        await searchBox.click();
        await searchBox.fill('JavaScript Automation');
        await searchBox.press('Enter');
        console.log("Bing Search -> test executed");
    });

    test('Test 3 - DuckDuckGo Search - search for “Automation Testing”', async ({ page }) => {
        await page.goto("https://duckduckgo.com/");
        const searchBox = page.getByLabel('Search with DuckDuckGo');
        await searchBox.click();
        await searchBox.fill('JavaScript Automation');
        await searchBox.press('Enter');
        console.log("DuckDuckGo Search -> test executed");
    });
});

