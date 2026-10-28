//Task #6 - Select All and Replace

//  URL: https://the-internet.herokuapp.com/inputs
//
//  1.  Enter 12345.
//  2.  Select the entire value using: Mac: Meta+A Windows: Control+A
//  3.  Replace it with 999.
//  4.  Validate the final input value is 999

import {test, expect} from '@playwright/test'

test ('TC6 - Select All and Replace', async ({page}) => {
    await page.goto("https://the-internet.herokuapp.com/inputs")
    const inputField = page.getByRole("spinbutton")
    await inputField.fill("12345")
    await inputField.press('Meta+A')

    await inputField.press('9')
    await inputField.press('9')
    await inputField.press('9')

    await expect(inputField).toHaveValue('999')
})

