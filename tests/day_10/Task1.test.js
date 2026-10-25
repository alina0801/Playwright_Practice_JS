/* Playwright Homework Practice - Tags, Groups, and Hooks JavaScript

IMPORTANT: - Create each practice using Playwright with JavaScript. -
Use async/await where needed. - Pay attention to test names, tags,
test.describe(), and hooks. - Run tests from the Terminal when the task
asks you to run by tag.

------------------------------------------------------------------------

Practice #1 - Add Tags to Tests

Create a file with 4 Playwright tests.

Test 1 - “Google Search” - Tag: @smoke - Navigate to
https://www.google.com - Search for “Playwright Automation”

Test 2 - “Playwright Website” - Tag: @regression - Navigate to
https://playwright.dev - Click “Get started”

Test 3 - “SauceDemo Login” - Tag: @smoke - Navigate to
https://www.saucedemo.com - Login with standard_user / secret_sauce

Test 4 - “Hover Practice” - Tag: @regression - Navigate to
https://the-internet.herokuapp.com/hovers - Hover over one user image.

After creating the tests: 1. Run ALL tests. 2. Run ONLY @smoke tests. 3.
Run ONLY @regression tests. 4. Write the commands you used as comments.

------------------------------------------------------------------------
 */

import { test, expect } from '@playwright/test'

test('TC1 - Google Search', { tag: "@smoke" }, async ({ page }) => {
    await page.goto('https://www.google.com');
    const searchBox = page.locator('[role="combobox"]');
    await searchBox.fill('Playwright Automation');
    await searchBox.press("Enter");
});

test('TC2 - Playwright Website', { tag: "@regression" }, async ({ page }) => {
    await page.goto('https://playwright.dev');
    await page.getByRole('link', { name: 'Get started' }).click();
    await page.waitForTimeout(3000);
    await expect(page).toHaveURL("https://playwright.dev/docs/intro");
});

test('TC3 - SauceDemo Login', { tag: "@smoke" }, async ({ page }) => {
    await page.goto('https://www.saucedemo.com');
    await page.getByPlaceholder('Username').fill('standard_user');
    await page.getByPlaceholder('Password').fill('secret_sauce');
    await page.getByRole('button', { name: 'Login' }).click();
    await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");
});

test('TC4 - Hover Practice', { tag: "@regression" }, async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/hovers');
    const photos = page.getByRole("img", { name: "User Avatar" });
    await expect(photos).toHaveCount(3);
    const thirdPhoto = photos.nth(2);
    await thirdPhoto.hover();
    await expect(page.getByText("name: user3")).toBeVisible();
});