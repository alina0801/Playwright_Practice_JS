/* Task #3 - Find an Element While Looping

Application: https://www.saucedemo.com/ Username: standard_user
Password: secret_sauce

1.  Login.
2.  Get all product-name elements using .all().
3.  Loop through them with a traditional for loop.
4.  Print every product name.
5.  Find: Sauce Labs Fleece Jacket
6.  When found, print: Product Found
7.  Click that product.
8.  Assert the detail page contains: Sauce Labs Fleece Jacket */

import { test, expect } from '@playwright/test'

test('Find an Element While Looping', async ({ page }) => {

    await page.goto(process.env.SAUCEDEMO_URL);
    await (page.getByLabel('Username')).fill(process.env.SAUCEDEMO_USERNAME);
    await (page.getByLabel('Password')).fill(process.env.SAUCEDEMO_PASSWORD);
    await (page.getByRole('button', { name: 'Login' })).click();

    const productNames = page.locator('[data-test="inventory-item-name"]');
    await expect(productNames).toHaveCount(6);

    const allItems = await productNames.all();

    for (let i = 0; i < allItems.length; i++) {
        console.log(await allItems[i].innerText());
        if ((await allItems[i].innerText()).includes("Sauce Labs Fleece Jacket")) {
            console.log("Product Found");
            await allItems[i].click();
            await expect(
                page.getByText('Sauce Labs Fleece Jacket', { exact: true })
            ).toBeVisible();
            break;
        }
    }
});