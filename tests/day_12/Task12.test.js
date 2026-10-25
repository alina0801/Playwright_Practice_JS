/* BONUS Task - Mini Login Regression Suite
Create one group named: Login Regression Suite
Application: https://www.saucedemo.com/
Login Data: Username: standard_user Password: secret_sauce

Requirements:
1.  Use: beforeAll beforeEach afterEach afterAll
2.  Create at least 4 tests.
3.  At least 2 tests must have: @smoke
4.  At least 2 tests must have: @regression
5.  beforeEach must navigate to: https://www.saucedemo.com/
6.  At least one test must validate:
    -   Username is visible
    -   Password is visible
    -   Login is visible
7.  At least one test must perform a successful login using: Username:
    standard_user Password: secret_sauce
8.  After successful login, validate: Products
9.  At least one test must contain JavaScript value assertions.
Use this data:

let course = “Playwright”; let students = 20; let active = true;

Validate: - course equals “Playwright” - students equals 20 - active is
true

10. At least one test must contain multiple SOFT assertions.

For the soft assertion practice, use:

let expectedBrowser = “Chrome”; let actualBrowser = “Firefox”;

Create an intentionally failing soft assertion comparing these values.

After that assertion, print:

Soft assertion allowed execution to continue

Then add another correct assertion of your choice.

Finally run:

1.  The complete suite.
2.  Only @smoke.
3.  Only @regression.

Observe: - Which tests execute - Which hooks execute - How many times
each hook executes - How Playwright reports the failed soft assertion */

import { test, expect } from '@playwright/test'

test.describe('Complete Playwright Practice', () => {

    test.beforeAll(async () => {
        console.log("BeforeAll function is executed");
    });

    test.beforeEach(async ({ page }) => {
        console.log("BeforeEach function is executed");
        await page.goto(process.env.SAUCEDEMO_URL);
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
        await usernameField.fill(process.env.SAUCEDEMO_USERNAME);

        const passwordField = page.getByLabel('Password');
        await passwordField.fill(process.env.SAUCEDEMO_PASSWORD);
        await loginButton.click();

        const products = page.locator('[data-test="title"]')
        await expect(products).toBeVisible();
        await expect(products).toHaveText("Products");

    });

    test('Test 5: Value Assertion Practice', { tag: "@regression" }, () => {
        let course = "Playwright";
        let students = 20;
        let active = true;

        expect(course).toBe("Playwright");
        expect(students).toEqual(20);
        expect(active).toBe(true);
    });

    test('Test 6: Value Soft Assertions Practice', { tag: "@regression" }, () => {

        let expectedBrowser = "Chrome";
        let actualBrowser = "Firefox";

        expect.soft(expectedBrowser).toEqual(actualBrowser);
    });

    test('Test 7: Assertion Practice After Sof Assertion Failed Test ', () => {
        let actualResult = 10;
        expect.soft(actualResult).toBe(10);
    });
});