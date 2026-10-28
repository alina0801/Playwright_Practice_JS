//  ------------------------------------------------------------
//    Task #1 - Mouse Hover
//    ------------------------------------------------------------
//    Task #2 - Double Click
//
//    URL: https://testautomationpractice.blogspot.com/
//
//    1. Find the Double Click section. 2. Locate the “Copy Text”
//    button. 3. Confirm the source field contains “Hello World!”.
//    4. Double-click “Copy Text”. 5. Validate the second field
//    now contains “Hello World!”.
//
//    Practice: dblclick()
//    ------------------------------------------------------------

import { test, expect } from '@playwright/test';

test('TC1 - Double Click', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');

  const doubleClickText = page.getByRole('heading', {name: 'Double Click', exact: true,});

  await expect(doubleClickText).toHaveText('Double Click');

  const copyTextButton = page.getByRole('button', { name: 'Copy Text' });
  await expect(copyTextButton).toBeVisible();
  await copyTextButton.dblclick();

  const secondField = page.locator('#field2');
  await expect(secondField).toHaveValue('Hello World!');
});




