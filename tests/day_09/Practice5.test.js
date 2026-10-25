/* Practice #5 - YouTube Search

1.  Create a test called “YouTube Playwright Search”.
2.  Navigate to: https://www.youtube.com
3.  Locate the Search box.
4.  Click the Search box.
5.  Enter: Playwright Automation Tutorial
6.  Press Enter.
7.  Locate a video from the search results.
8.  Click the video.

IMPORTANT: Do not create a locator that depends on an exact video title
because search results can change. Try to create a locator that can
identify a video result more generally.

Methods you may need: goto() click() fill() press()
*/

import { test } from '@playwright/test'

test('YouTube Playwright Search', async ({ page }) => {

    await page.goto("https://www.youtube.com");
    const searchBox = page.getByRole('combobox', { name: 'Search' });
    await searchBox.click();
    await searchBox.fill("Playwright Automation Tutorial");
    await searchBox.press("Enter");

    const firstVideo = page.locator('ytd-video-renderer a#video-title').first();
    await firstVideo.click();
});