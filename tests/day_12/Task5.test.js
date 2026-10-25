/* Task #5 - Text Assertions

Test name: Login Text Assertions
Application: https://the-internet.herokuapp.com/login

Login Data: Username: tomsmith Password: SuperSecretPassword!

Steps:

1.  Navigate to the application.
2.  Locate the page heading: Login Page
3.  Assert that the heading contains: Login Page
4.  Enter the username.
5.  Enter the password.
6.  Click the Login button.

After successful login:

7.  Locate the success message.
8.  Assert that the message contains: You logged into a secure area!
9.  Locate the Logout button.
10. Assert that the Logout button is visible.
 */

import { test, expect } from '@playwright/test'

test('Login Text Assertions', async ({ page }) => {
    await page.goto(process.env.HEROKUAPP_URL);
    const pageHeading = page.getByRole('heading', { name: 'Login Page' });
    await expect(pageHeading).toContainText("Login Page");

    const usernameField = page.getByRole('textbox', { name: 'Username' });
    await usernameField.fill(process.env.HEROKUAPP_USERNAME);

    const passwordField = page.getByRole('textbox', { name: 'Password' });
    await passwordField.fill(process.env.HEROKUAPP_PASSWORD);

    const loginButton = page.getByRole('button', { name: 'Login' });
    await loginButton.click();

    const successMessage = page.getByText('You logged into a secure area');
    await expect(successMessage).toContainText("You logged into a secure area!")

    const logoutButton = page.getByRole('link', { name: 'Logout' });
    await expect(logoutButton).toBeVisible();
});