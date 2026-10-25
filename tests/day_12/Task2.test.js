/* Task #2 - Grouping Tests with beforeEach and afterEach

Create one test group named:

SauceDemo Assertion Tests

Use test.describe() to group the tests.

    Application: https://www.saucedemo.com/

Login Data: Username: standard_user Password: secret_sauce

Create a beforeEach hook.

The beforeEach hook should: 1. Navigate to SauceDemo. 2. Enter the
username. 3. Enter the password. 4. Click Login.

Create the following 3 tests inside the group.

    Test 1 - Products Title 1. Locate the “Products” title. 2. Assert that
it is visible.

    Test 2 - Shopping Cart 1. Locate the shopping cart link / icon. 2. Assert
that it is visible.

    Test 3 - Add to Cart Button 1. Locate the “Add to cart” button for the
product: Sauce Labs Backpack 2. Assert that the button is visible. 3.
Assert that the button is enabled.

Create an afterEach hook.

The afterEach hook should print:

AfterEach function is executed

Questions: 1. How many times does beforeEach execute when all 3 tests
run ? 2. How many times does afterEach execute when all 3 tests run ?

    Write your answers as comments in the test file.
 */

import { test, expect } from '@playwright/test'
test.describe('SauceDemo Assertion Tests', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto(process.env.SAUCEDEMO_URL);

        const usernameField = page.getByLabel('Username');
        await usernameField.fill(process.env.SAUCEDEMO_USERNAME);

        const passwordField = page.getByLabel('Password');
        await passwordField.fill(process.env.SAUCEDEMO_PASSWORD);

        const loginButton = page.getByRole('button', { name: 'Login' });
        await loginButton.click();
        await expect(page).toHaveURL(/inventory/); // -> Partial match using regex
    });

    test.afterEach(async ({ page }) => {
        console.log("AfterEach function is executed");
    });

    test('TC01 - Products Title', async ({ page }) => {
        await expect(page.locator('[data-test="title"]')).toBeVisible();
    });

    test('TC02 - Shopping Cart', async ({ page }) => {
        const shoppingCart = page.getByRole('button', { name: /^Cart/ });
        await expect(shoppingCart).toBeVisible();
    });

    test('TC03 - Add to Cart Button', async ({ page }) => {
        const addButton = page.locator('[data-test="shopping-cart-link"]');
        await expect(addButton).toBeVisible();
        await expect(addButton).toBeEnabled(); 
    });
});

