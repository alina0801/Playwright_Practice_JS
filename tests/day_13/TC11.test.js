/*   ------------------------------------------------------------
  Task #10 - Locate Content Inside an iFrame
  ------------------------------------------------------------
  Task #11 - Enter Text Inside an iFrame

  Application: https://the-internet.herokuapp.com/iframe

  Text: Playwright iFrame Practice

  1. Navigate to the page. 2. Access the iframe. 3. Locate the
  editable area inside it. 4. Clear the existing text if
  needed. 5. Enter: Playwright iFrame Practice 6. Assert that
  the editable area contains: Playwright iFrame Practice
  ------------------------------------------------------------ */

import { test, expect } from '@playwright/test'

test('Playwright iFrame Practice', async ({ page }) => {
  await page.goto(process.env.HEROKUAPP_URL + "/iframe")
  const iframeLocator = page.frameLocator('iframe[title="Rich Text Area"]')

  const editField = iframeLocator.locator('body')
  await editField.clear();
  await editField.fill('Playwright iFrame Practice')
  await expect(editField).toContainText('Playwright iFrame Practice')
})