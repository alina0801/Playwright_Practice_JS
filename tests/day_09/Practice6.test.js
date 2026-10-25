/* 
Practice #6 - Hover Practice

1.  Create a test called “Playwright Hover Practice”.
2.  Navigate to: https://the-internet.herokuapp.com/hovers
3.  Locate one of the user images.
4.  Hover over the image.
5.  After hovering, locate the “View profile” link that appears.
6.  Click the “View profile” link.

Methods you may need: goto() hover() click()

------------------------------------------------------------------------

Practice #8 - Keyboard Press Practice

1.  Create a test called “Keyboard Press Practice”.
2.  Navigate to: https://the-internet.herokuapp.com/key_presses
3.  Locate the input field.
4.  Click the input field.
5.  Press Enter using Playwright.
6.  Then press Escape.
7.  Then press Tab.

Methods you may need: goto() click() press()

*/

import { test } from '@playwright/test'

test('Playwright Hover Practice', async ({ page }) => {
    page.goto("https://the-internet.herokuapp.com/hovers");
    const avatars = page.getByAltText("User Avatar");
    await avatars.first().hover();
    const viewProfile = page.getByRole("link", { name: "View profile" });
    await viewProfile.click();
});

test('Keyboard Press Practice', async ({ page }) => {
    page.goto("https://the-internet.herokuapp.com/key_presses");
    const keyField = page.locator("#target");
    await keyField.click();
    await keyField.press("Enter");
    await keyField.press("Tab");
   
});