/* Task #4 - Element Assertions

Test name:

SauceDemo Element Assertions

Application: https://www.saucedemo.com/

Login Data: Username: standard_user Password: secret_sauce

Before logging in:

1.  Locate the Username input.
2.  Assert that it is visible.
3.  Assert that it is enabled.
4.  Locate the Password input.
5.  Assert that it is visible.
6.  Assert that it is enabled.
7.  Locate the Login button.
8.  Assert that it is visible.
9.  Assert that it is enabled.

Then:

10. Enter the username.
11. Enter the password.
12. Click Login.

After logging in:

13. Locate the “Products” title.
14. Assert that it is visible.
15. Assert that it has the text: Products
16. Locate the shopping cart.
17. Assert that it is visible.
 */

import { test, expect } from '@playwright/test'

test('SauceDemo Element Assertions', async ({ page }) => {
    await page.goto(process.env.SAUCEDEMO_URL);

    const usernameField = page.getByLabel('Username');
    await expect(usernameField).toBeVisible();
    await expect(usernameField).toBeEnabled();

    const passwordField = page.getByLabel('Password');
    await expect(passwordField).toBeVisible();
    await expect(passwordField).toBeEnabled();

    const loginButton = page.getByRole('button', { name: 'Login' });
    await expect(loginButton).toBeVisible();
    await expect(loginButton).toBeEnabled();

    await usernameField.fill(process.env.SAUCEDEMO_USERNAME);
    await passwordField.fill(process.env.SAUCEDEMO_PASSWORD);

    await loginButton.click();
    await expect(page).toHaveURL(/inventory/);

    const productsTitle = page.locator('[data-test="title"]');
    await expect(productsTitle).toBeVisible();
    await expect(productsTitle).toContainText("Products");

    const shoppingCart = page.locator('[data-test="shopping-cart-link"]');
    await expect(shoppingCart).toBeVisible;
});
