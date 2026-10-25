/*
Playwright Homework Practice - Arrays of Elements, JavaScript Alerts,
and iFrames JavaScript

IMPORTANT: - Use Playwright with JavaScript and async/await. - Use
.all() for Array of Elements exercises. - Use page.on(‘dialog’, …) for
JavaScript dialog exercises. - Use iframe handling for iframe
exercises. - URLs and test data are provided below. - Do not use
hard-coded waits.

  ------------------------------------------------------------
  Task #1 - Product Elements with .all()
  ------------------------------------------------------------
  Task #2 - Select an Element from the Array

  Application: https://www.saucedemo.com/ Username:
  standard_user Password: secret_sauce

  1. Login. 2. Locate all product names. 3. Use .all(). 4.
  Print the FIRST product’s text. 5. Print the SECOND
  product’s text. 6. Click the SECOND product using its array
  index. 7. Assert that the detail page displays: Sauce Labs
  Bike Light

  Remember: JavaScript array indexes start at 0.
  ------------------------------------------------------------ */

import { test, expect } from '@playwright/test'
import { clearScreenDown } from 'node:readline';

test('Select an Element from the Array', async ({ page }) => {
    await page.goto(process.env.SAUCEDEMO_URL);
    await (page.getByLabel('Username')).fill(process.env.SAUCEDEMO_USERNAME);
    await (page.getByLabel('Password')).fill(process.env.SAUCEDEMO_PASSWORD);
    await (page.getByRole('button', { name: 'Login' })).click();

    const productNames = page.locator('[data-test="inventory-item-name"]');
    await expect(productNames).toHaveCount(6);

    const allItems = await productNames.all();

    console.log("All items names:");

    for (const item of allItems) {
        console.log("\n", await item.innerText());
    }

    console.log("First Item: ", await allItems[0].innerText());
    console.log("Second Item: ", await allItems[1].innerText());

    await allItems[1].click();
   
    await expect(page.getByText('Sauce Labs Bike Light', { exact: true })).toBeVisible();

});