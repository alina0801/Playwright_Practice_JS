/*   ------------------------------------------------------------
  Task #13 - iFrame with Hooks
  ------------------------------------------------------------
  BONUS - Combine All Three Topics

  Create: test.describe(“Advanced Playwright Practice”, …)

  Test 1 - Array of Elements URL: 
  Username: standard_user Password: secret_sauce

  - Login. - Get all product names using .all(). - Loop
  through them. - Print each name. - Find and click: Sauce
  Labs Onesie - Assert the detail page contains: Sauce Labs
  Onesie

  Test 2 - JavaScript Dialog URL:
  https://the-internet.herokuapp.com/javascript_alerts

  - Trigger the JS Prompt. - Handle it using page.on(). -
  Enter: Loopcamp Student - Accept it. - Assert Result
  contains: You entered: Loopcamp Student

  Test 3 - iFrame URL:
  https://the-internet.herokuapp.com/iframe

  - Access the iframe. - Locate the editable area. - Enter:
  Final Playwright Practice - Assert it contains: Final
  Playwright Practice
  ------------------------------------------------------------ */

import { test, expect } from '@playwright/test'

test.describe('Advanced Playwright Practice', async => {
  test("Test 1 - Array of Elements URL", async ({ page }) => {
    await page.goto(process.env.SAUCEDEMO_URL)
    await page.getByPlaceholder('Username').fill(process.env.SAUCEDEMO_USERNAME);
    await page.getByPlaceholder('Password').fill(process.env.SAUCEDEMO_PASSWORD);
    await page.getByRole('button', { name: 'Login' }).click();

    const allItems = await page.locator('[data-test="inventory-item-name"]').all();

    for (const each of allItems) {
      console.log(await each.textContent());
      if (each === ("SauceLabs Onesie")) {
        await page.each.click()
        await expect(page).toHaveTitle("SauceLabs Onesie")
      }
    }
  })

  test('Test 2 - JavaScript Dialog URL', async ({ page }) => {
    await page.goto(`${process.env.HEROKUAPP_URL}/javascript_alerts`)
    page.on("dialog", async dialog => {
      console.log(dialog.message())
      await dialog.accept("Loopcamp Student")
    })
    await page.getByRole('button', { name: 'Click for JS Prompt' }).click()
    await expect(page.locator('#result')).toContainText('You entered: Loopcamp Student')
  })

  test('Test 3 - iFrame URL', async ({ page }) => {
    await page.goto(`${process.env.HEROKUAPP_URL}/iframe`)

    let iframe = page.frameLocator('iframe[title="Rich Text Area"]')
    let textField = iframe.locator('#tinymce')
    await textField.fill("Final Playwright Practice")
    expect(textField).toContainText("Final Playwright Practice")
  })
})