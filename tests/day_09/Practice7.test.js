/*  ------------------------------------------------------------------------

Practice #7 - Form Input Practice

1.  Create a test called “Form Input Practice”.
2.  Navigate to: https://www.saucedemo.com
3.  Locate the Username field.
4.  Enter: standard_user
5.  Locate the Password field.
6.  Enter: secret_sauce
7.  Locate the Login button.
8.  Click the Login button.
9.  After login, locate one product and click its product name.

Methods you may need: goto() fill() click()------------------------------------------------------------------------

BONUS Practice - Combine Multiple Actions

1.  Create a test called “SauceDemo Shopping Practice”.
2.  Navigate to: https://www.saucedemo.com
3.  Enter the valid username and password: Username: standard_user
    Password: secret_sauce
4.  Click Login.
5.  Locate a product.
6.  Click the product name to open its details.
7.  Locate and click “Add to cart”.
8.  Locate and click the shopping cart.
9.  Locate and click “Continue Shopping”.
10. Locate another product and open its details.
 */

import { test } from '@playwright/test'

test('Form Input Practice', async ({ page }) => {
    await page.goto("https://www.saucedemo.com");
    const username = page.getByLabel('Username');
    await username.fill("standard_user");
    const password = page.getByLabel('Password');
    await password.fill("secret_sauce");
    const loginButton = page.getByRole('button', { name: 'Login' });
    await loginButton.click();

    const sauceLabsBackpack = page.locator('[data-test="item-4-title-link"]');
    await sauceLabsBackpack.click();

});

test('SauceDemo Shopping Practice', async ({ page }) => {
    await page.goto("https://www.saucedemo.com");
    const username = page.getByLabel('Username');
    await username.fill("standard_user");
    const password = page.getByLabel('Password');
    await password.fill("secret_sauce");
    const loginButton = page.getByRole('button', { name: 'Login' });
    await loginButton.click();
    const sauceLabsBackpack = page.locator('[data-test="item-4-title-link"]');
    await sauceLabsBackpack.click();
    const addToCartButton = page.getByRole('button', { name: 'Add to cart' });
    await addToCartButton.click();
    const shoppingCart = page.locator('[data-test="shopping-cart-link"]');
    await shoppingCart.click();
    const continueShoppingButton = page.getByRole('button', { name: 'Continue Shopping' });
    await continueShoppingButton.click();
    const bikeLight = page.locator('[data-test="item-0-title-link"]');
    await bikeLight.click();
});