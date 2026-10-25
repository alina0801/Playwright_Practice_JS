/*  ------------------------------------------------------------
                   Task #4 - Array of Buttons
  ------------------------------------------------------------
                   Task #5 - JavaScript Alert

                          Application:
      https://the-internet.herokuapp.com/javascript_alerts

                   Button: Click for JS Alert

    1. Navigate to the page. 2. BEFORE clicking the button,
     create a dialog listener using page.on(). 3. Print the
  dialog message. 4. Accept the dialog. 5. Click “Click for JS
    Alert”. 6. Assert the Result contains: You successfully
                        clicked an alert
  ------------------------------------------------------------ */
import { test, expect } from '@playwright/test'

test('JavaScript Alert', async ({ page }) => {
  await page.goto(process.env.HEROKUAPP_URL + "/javascript_alerts");
  page.on("dialog", async dialog => {
    console.log(dialog.message());
    await dialog.accept();
  })
  await page.getByRole('button', { name: 'Click for JS Alert' }).click();
  await expect(page.locator('#result')).toContainText(
    'You successfully clicked an alert'
  );
});
