/* Playwright Homework Practice Tags, Groups, Hooks, and Assertions
JavaScript

Test Data Used in This Homework:

SauceDemo: URL: https://www.saucedemo.com/ Username: standard_user
Password: secret_sauce

The Internet Login: URL: https://the-internet.herokuapp.com/login
Username: tomsmith Password: SuperSecretPassword!

Playwright: URL: https://playwright.dev/

The Internet Hovers: URL: https://the-internet.herokuapp.com/hovers

------------------------------------------------------------------------

Task #1 - Tags with Element Assertions

Create 4 separate Playwright tests in the same test file.

Test 1: Test name: SauceDemo Login Page Tag: @smoke

Steps: 1. Navigate to: https://www.saucedemo.com/ 2. Locate the Username
input field. 3. Assert that the Username input field is visible. 4.
Locate the Password input field. 5. Assert that the Password input field
is visible. 6. Locate the Login button. 7. Assert that the Login button
is visible. 8. Assert that the Login button is enabled. */

import { test, expect } from '@playwright/test'

test('TC1 (day12) - SauceDemo Login Page', async ({ page }) => {
   await page.goto(process.env.SAUCEDEMO_URL);

   const usernameField = page.getByLabel('Username');
   await expect(usernameField).toBeVisible();

   const passwordField = page.getByLabel('Password');
   await expect(passwordField).toBeVisible();

   const loginButton = page.getByRole('button', { name: 'Login' });
   await expect(loginButton).toBeVisible();
   await expect(loginButton).toBeEnabled();
});