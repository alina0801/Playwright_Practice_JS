/*   Task #7 - JavaScript Confirm - Dismiss
  ------------------------------------------------------------
  Task #8 - JavaScript Prompt

  Application:
  https://the-internet.herokuapp.com/javascript_alerts

  Button: Click for JS Prompt

  Text to enter: Playwright Automation

  1. Set up page.on() before triggering the prompt. 2. Print
  the dialog message. 3. Accept the prompt and provide:
  Playwright Automation 4. Click “Click for JS Prompt”. 5.
  Assert Result contains: You entered: Playwright Automation
  ------------------------------------------------------------ */

import { test, expect } from '@playwright/test'

test('Button: Click for JS Prompt', async ({ page }) => {
  page.goto(process.env.HEROKUAPP_URL + "/javascript_alerts")
  page.on("dialog", async dialog => {
    console.log(dialog.message);
    await dialog.accept("Playwright Automation")
  })
  await page.getByRole('button', { name: 'Click for JS Prompt' }).click()
  await expect(page.locator('#result')).toContainText('You entered: Playwright Automation')

})