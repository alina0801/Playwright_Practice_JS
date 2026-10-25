/* Practice #4 - beforeEach and afterEach

Create test.describe(“SauceDemo Tests”).

beforeEach should: - Print “BeforeEach function is executed” - Navigate
to https://www.saucedemo.com - Enter standard_user and secret_sauce -
Click Login

Create 3 tests: 1. Click one product. 2. Click another product. 3. Click
the shopping cart.

afterEach should print: “AfterEach function is executed”

QUESTIONS: How many times does beforeEach execute? How many times does
afterEach execute? 

Answer: beforeEach and afterEach executed - 3 times each
 */

import { test } from '@playwright/test'


test.describe('SauceDemo Tests', () => {
    test.beforeEach(async ({ page }) => {
        console.log("BeforeEach function is executed");
        page.goto("https://www.saucedemo.com");

        await page.getByLabel('Username').fill("standard_user");
        await page.getByLabel('Password').fill("secret_sauce");
        await page.getByRole('button', { name: 'Login' }).click();
    });

    test.afterEach(async ({ }) => {
        console.log("AfterEach function is executed");
    });

    test('TC1 - Click one product.', async ({ page }) => {
        const sauceLabsBackpack = page.locator('[data-test="item-4-title-link"]');
        await sauceLabsBackpack.click();
    });
    test('TC2 - Click another product.', async ({ page }) => {
        const bikeLight = page.locator('[data-test="item-0-title-link"]');
        await bikeLight.click();
    });
    test('TC3 - Click the shopping cart.', async ({ page }) => {
        const shoppingCart = page.locator('[data-test="shopping-cart-link"]');
        await shoppingCart.click();
    });

});