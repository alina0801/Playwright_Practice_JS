/* Task #3 - Using All Four Hooks

Create one test group named: Hooks and Assertions Practice
Use the following application: https://www.saucedemo.com/
Create all four hooks: beforeAll afterAll beforeEach afterEach
beforeAll should print: BeforeAll function is executed
beforeEach should: 1. Print: BeforeEach function is executed 2. Navigate
to: https://www.saucedemo.com/
afterEach should print: AfterEach function is executed
afterAll should print: AfterAll function is executed
Create 3 tests inside the group.
Test Case 01: - Locate the Username input. - Assert that it is visible.
Test Case 02: - Locate the Password input. - Assert that it is visible.
Test Case 03: - Locate the Login button. - Assert that it is visible. -
Assert that it is enabled.
Run all 3 tests.
After running them, write the complete execution order as comments.
For example, determine when these execute: - beforeAll - beforeEach -
Test Case - afterEach - afterAll */

import { test, expect } from '@playwright/test'


test.describe('Hooks and Assertions Practice', () => {

    test.beforeAll(async () => {
        console.log("BeforeAll function is executed");
    });

    test.beforeEach(async ({ page }) => {
        console.log("BeforeEach function is executed");
        await page.goto(process.env.SAUCEDEMO_URL);
    });

    test.afterEach(async () => {
        console.log("AfterEach function is executed");
    });

    test.afterAll(async () => {
        console.log("AfterAll function is executed");
    });

    test('Test Case 01: - Locate the Username input. - Assert that it is visible.', async ({ page }) => {
        await expect(page.locator('[data-test="username"]')).toBeVisible();
    });
    test('Test Case 02: - Locate the Password input. - Assert that it is visible.', async ({ page }) => {
        await expect(page.locator('[data-test="password"]')).toBeVisible();
    });
    test('Test Case 03: - Locate the Login button. - Assert that it is visible. - Assert that it is enabled.', async ({ page }) => {
        await expect(page.locator('[data-test="login-button"]')).toBeVisible();
        await expect(page.locator('[data-test="login-button"]')).toBeEnabled();
    });
});