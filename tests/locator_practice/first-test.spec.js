import { test } from '@playwright/test'

test.beforeEach(async ({ page }) => {
    await page.goto("https://playground.bondaracademy.com");
    await page.getByText('Forms').click();
    await page.getByText('Form Layouts').click();
});

test('Locator Syntax Rules', async ({ page }) => {
    // Find by Tag
    page.locator('input');

    // Find by ID
    page.locator('#inputEmail');

    // Find be Class Name
    page.locator('.shape-rectangle');

    // Find by ant Atribute
    page.locator('[placeholder="Email"]');

    // Find by several selectors
    page.locator('input[placeholder="Email"][nbinput]')

    // Find by Xpath (NOT RECOMMENDED)
    page.locator('//*[@id="InputEmail"]');

    // find by exact text match
    page.locator(':text-is("Using the Grid")');
})

test('User-visable locators', async ({ page }) => {
    await page.getByRole('button', { name: 'Sign in' }).first().click();
    await page.getByRole('button', { name: 'Sign in' }).first().click();
    await page.getByRole('textbox', { name: "Email" }).first().fill('test@test.com');

    await page.getByLabel('Email').first().fill('test@test.com');

    await page.getByPlaceholder('Jane Doe').fill('Alina K');

    await page.getByText('Submit').first().click();
    await page.getByTestId('inputEmail1').fill('test@test.com');
    await page.getByTitle('IoT Dashboard').click();
});

test('Locating child elements', async ({page}) => {
    await page.locator('nb-card').locator('nb-radio-group').locator(':text-is("Option 1")').click();

});