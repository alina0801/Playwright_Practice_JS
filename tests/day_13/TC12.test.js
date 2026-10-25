/* 
Task #12 - Main Page vs iFrame

Application: https://the-internet.herokuapp.com/iframe

MAIN PAGE: 1. Locate the heading: An iFrame containing the TinyMCE
WYSIWYG Editor 2. Assert it is visible.

IFRAME: 3. Access the iframe. 4. Locate the editable area. 5. Assert it
is visible. 6. Enter: Loopcamp Playwright 7. Assert it contains:
Loopcamp Playwright

Question: Which element belongs to the main page and which belongs to
the iframe? */

import { test, expect } from '@playwright/test'

test('Main Page vs iFrame', async ({ page }) => {
    await page.goto(process.env.HEROKUAPP_URL + "/iframe")
    const iframeLocator = page.frameLocator('iframe[title="Rich Text Area"]')
    await expect(page.getByRole('heading', { name: 'An iFrame containing the' })).toBeVisible();

    const editField = iframeLocator.locator('body')

    await expect(editField).toBeVisible();
    await expect(editField).toBeEditable();
    await editField.fill("Loopcamp Playwright")
    await expect(editField).toContainText('Loopcamp Playwright')
})