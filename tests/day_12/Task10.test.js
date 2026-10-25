/* Task #10 - Hard vs Soft Assertions with Elements
Application: https://www.saucedemo.com/
Create TWO separate tests.
*Test 1: Test name: Hard Element Assertion
Steps: 1. Navigate to SauceDemo. 2. Locate the Username input field. 3.
Create an intentionally incorrect HARD assertion by asserting that the
Username input is NOT visible. 4. After the assertion, add:
console.log(“Code after hard assertion”);
Run the test and observe the Terminal.
*Test 2: Test name: Soft Element Assertion
Steps: 1. Navigate to SauceDemo. 2. Locate the Username input field. 3.
Create an intentionally incorrect SOFT assertion by asserting that the
Username input is NOT visible. 4. After the assertion, add:
console.log(“Code after soft assertion”);
5.  Locate the Login button.
6.  Correctly assert that the Login button is visible.
Run the test and observe the Terminal.
*Questions:
1.  Which console message executes? - Code after soft assertion 
2.  Which test continues after the failed assertion? - Test name: Soft Element Assertion
3.  Do both tests ultimately fail? Yes
------------------------------------------------------------------------*/
import { test, expect } from '@playwright/test'

let usernameField;

test.beforeEach(async ({ page }) => {
    await page.goto("https://www.saucedemo.com/");
    usernameField = page.locator('[data-test="username"]');

});

test('Test name: Hard Element Assertion', async ({ page }) => {
    await expect(usernameField).not.toBeVisible();
    console.log("Code after hard assertion");
});

test('Test name: Soft Element Assertion', async ({ page }) => {
    await expect.soft(usernameField).not.toBeVisible();
    console.log("Code after soft assertion");

    let loginButton = page.locator('[data-test="login-button"]');
    await expect(loginButton).toBeVisible();
});