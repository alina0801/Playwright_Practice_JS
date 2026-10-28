//  Task #7 - Arrow Keys
//  ------------------------------------------------------------
//  Task #8 - Tab and Enter
//
//  URL: https://www.saucedemo.com/ Username: standard_user
//  Password: secret_sauce
//
//  1. Click Username and enter standard_user. 2. Use Tab to
//  move to Password. 3. Enter secret_sauce. 4. Use Tab to move
//  to the Login button. 5. Press Enter instead of clicking
//  Login. 6. Assert “Products” is visible after login.

import {test, expect} from '@playwright/test'

test ('Tab and Enter', async ({page}) => {
    await page.goto('https://www.saucedemo.com/')
    const loginField = page.getByPlaceholder('Username', { exact: true });
    const passwordField = page.getByPlaceholder('Password', { exact: true });
    const loginButton = page.getByRole('button', {name: 'Login', exact: true,});

    await loginField.fill('standard_user');
    await page.keyboard.press('Tab');
    await expect(passwordField).toBeFocused();
    await page.keyboard.type('secret_sauce');
    await page.keyboard.press('Tab');
    await expect(loginButton).toBeFocused();
    await page.keyboard.press('Enter');
    await expect(page.getByText('Products', { exact: true })).toBeVisible();
})