/*Task #6 - JavaScript Confirm - Accept

Application: https://the-internet.herokuapp.com/javascript_alerts

Button: Click for JS Confirm

1.  Use page.on() to listen for the dialog.
2.  Print its message.
3.  Accept the dialog.
4.  Click “Click for JS Confirm”.
5.  Assert Result contains: You clicked: Ok  */

import { test, expect } from '@playwright/test'

test('Button: Click for JS Confirm', async ({ page }) => {
    await page.goto(process.env.HEROKUAPP_URL + "/javascript_alerts");
    page.on("dialog", async dialog => {
        console.log(dialog.message);
        await dialog.accept();
    })
    await page.getByRole('button', { name: 'Click for JS Confirm' }).click();
    await expect(page.locator('#result')).toContainText('You clicked: Ok')
})