//Task #3 - Right Click
//
//URL: https://swisnl.github.io/jQuery-contextMenu/demo.html
//
//1.  Locate “right click me”.
//2.  Right-click it.
//3.  Assert that the context-menu option “Edit” is visible.
//4.  Click “Edit”.
//
//Practice: click() with the right mouse button.

import {test, expect} from '@playwright/test'
test('TC2 - Right Click', async ({page}) => {
    await page.goto('https://swisnl.github.io/jQuery-contextMenu/demo.html')
    const rightClick = page.locator('span.context-menu-one')
    await rightClick.click({ button: 'right' });
    const editOption = page.getByText('Edit', { exact: true });
    await expect(editOption).toBeVisible();
    await editOption.click()
})