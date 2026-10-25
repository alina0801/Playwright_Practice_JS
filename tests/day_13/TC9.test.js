/* Task #9 - Alert Test Group

Create: test.describe(“JavaScript Alert Tests”, …)

Application: https://the-internet.herokuapp.com/javascript_alerts

beforeEach: - Navigate to the application.

Test 1: - Trigger JS Alert. - Handle it with page.on(). - Accept it. -
Validate: You successfully clicked an alert

Test 2: - Trigger JS Confirm. - Handle it with page.on(). - Dismiss
it. - Validate: You clicked: Cancel

Test 3: - Trigger JS Prompt. - Enter: Loopcamp - Accept it. - Validate:
You entered: Loopcamp

afterEach should print: Alert test completed */

import { test, expect } from '@playwright/test'

test.describe('JavaScript Alert Tests', async => {

    test.beforeEach(async ({ page }) => {
        await page.goto(process.env.HEROKUAPP_URL + "/javascript_alerts")
    })

    test('Test 1: - Trigger JS Alert', async ({ page }) => {
        page.on("dialog", async dialog => {
            console.log(dialog.message())
            await dialog.accept()
        })
        await page.getByRole('button', { name: 'Click for JS Alert' }).click()
        await expect(page.locator('#result')).toContainText("You successfully clicked an alert")
    })

    test('Test 2: - Trigger JS Confirm', async ({ page }) => {
        page.on("dialog", async dialog => {
            console.log(dialog.message())
            await dialog.dismiss()
        })
        await page.getByRole('button', { name: 'Click for JS Confirm' }).click()
        await expect(page.locator('#result')).toContainText("You clicked: Cancel")
    })

    test('Test 3: - Trigger JS Prompt', async ({ page }) => {
        page.on("dialog", async dialog => {
            console.log(dialog.message())
            await dialog.accept("Loopcamp")
        })
        await page.getByRole('button', { name: 'Click for JS Prompt' }).click()
        await expect(page.locator('#result')).toContainText("You entered: Loopcamp")
    })

    test.afterEach(async () => {
        console.log("Alert test completed");
    })
})