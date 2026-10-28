//  Task #5 - Keyboard Enter
//
//  URL: https://www.google.com/ Search: Playwright Automation
//
//  1. Enter the search text. 2. Do NOT click the Search button.
//  3. Press Enter using a keyboard action. 4. Verify the
//  results page is displayed.

import {test, expect} from '@playwright/test'

test('Keyboard Enter', async({page}) => {
await page.goto("https://www.google.com/")
const searchField = page.getByRole('combobox', {name: 'Search', exact: true,})

await searchField.fill("Playwright Automation")
await searchField.press("Enter")
await expect(page).toHaveTitle('Playwright Automation - Google Search');
})