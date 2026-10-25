/* Practice #2 - Multiple Tags

Create 4 simple tests and assign: Test 1: @smoke Test 2: @regression
Test 3: @smoke @regression Test 4: @sanity

Then: 1. Run only @smoke. 2. Run only @regression. 3. Run only @sanity.

QUESTION: When you run @smoke, which test numbers execute? Write the
answer as a comment. */

import { test } from '@playwright/test'

test('Test 1 - Smoke tag', { tag: "@smoke" }, async ({ page }) => {
    console.log("Running smoke test");
});
test('Test 2 - Regression tag', { tag: "@regression" }, async ({ page }) => {
    console.log("Running regression test");
});
test('Test 3 - Smoke & Regression tag', { tag: ["@smoke", "@regression"] }, async ({ page }) => {
    console.log("Running smoke and regression test");
});
test('Test 4 - Sanity tag', { tag: "@sanity" }, async ({ page }) => {
    console.log("Running sanity test");
});

// Smoke would run the test 1 and test 3 -> because it will run all the tests which contains @smoke tag