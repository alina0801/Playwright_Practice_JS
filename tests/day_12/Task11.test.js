/* Task #11 - Combine Tags, Groups, Hooks, and Assertions

Create one group named: Complete Playwright Practice

Application: https://www.saucedemo.com/

Login Data: Username: standard_user Password: secret_sauce
Add all four hooks:

beforeAll beforeEach afterEach afterAll
beforeAll: - Print: BeforeAll function is executed
beforeEach: 1. Print: BeforeEach function is executed 2. Navigate to: https://www.saucedemo.com/

afterEach: - Print: AfterEach function is executed
afterAll: - Print: AfterAll function is executed

Inside the group create these tests:
Test 1: Name: Username Validation Tag: @smoke

-   Locate Username.
-   Assert it is visible.
-   Assert it is enabled.

Test 2: Name: Password Validation Tag: @smoke

-   Locate Password.
-   Assert it is visible.
-   Assert it is enabled.

Test 3: Name: Login Button Validation Tag: @regression

-   Locate Login.
-   Assert it is visible.
-   Assert it is enabled.

Test 4: Name: Successful Login Tag: @regression

-   Enter: Username: standard_user Password: secret_sauce
-   Click Login.
-   Locate the “Products” title.
-   Assert that it is visible.
-   Assert that it has the text: Products

Run:

1.  All tests.
2.  Only @smoke tests.
3.  Only @regression tests.

Questions:

1.  How many tests execute when you run @smoke? 2 tests
2.  How many tests execute when you run @regression? 2 tests
3.  When running only @smoke, how many times does beforeEach execute? 2
4.  When running only @smoke, how many times does beforeAll execute? 1
5.  When running only @smoke, how many times does afterAll execute? 1

Write your answers as comments. */

import { test, expect } from '@playwright/test'

test.describe('Complete Playwright Practice', () => {

    test.beforeAll(async () => {
        console.log("BeforeAll function is executed");
    });

    test.beforeEach(async ({ page }) => {
        console.log("BeforeEach function is executed");
        await page.goto("https://www.saucedemo.com/")
    });

    test.afterEach(async () => {
        console.log("AfterEach function is executed");
    });

    test.afterAll(async () => {
        console.log("AfterAll function is executed");
    });

    test('Test 1: Name: Username Validation Tag: @smoke', { tag: "@smoke" }, async ({ page }) => {
        const usernameField = page.locator('[data-test="username"]');
        await expect(usernameField).toBeVisible();
        await expect(usernameField).toBeEnabled();

    });

    test('Test 2: Name: Password Validation Tag: @smoke', { tag: "@smoke" }, async ({ page }) => {
        const passwordField = page.locator('[data-test="password"]');
        await expect(passwordField).toBeVisible();
        await expect(passwordField).toBeEnabled();
    });

    test('Test 3: Name: Login Button Validation Tag: @regression', { tag: "@regression" }, async ({ page }) => {
        const loginButton = page.locator('[data-test="login-button"]');
        await expect(loginButton).toBeVisible();
        await expect(loginButton).toBeEnabled();
    });

    test('Test 4: Name: Successful Login Tag: @regression', { tag: "@regression" }, async ({ page }) => {
        const loginButton = page.locator('[data-test="login-button"]');
        const usernameField = page.getByLabel('Username');
        await usernameField.fill('standard_user');

        const passwordField = page.getByLabel('Password');
        await passwordField.fill('secret_sauce');
        await loginButton.click();

        const products = page.locator('[data-test="title"]')
        await expect(products).toBeVisible();
        await expect(products).toHaveText("Products");

    });
});