/* 
Practice #8 - Combine Groups, Hooks, and Tags

Create test.describe(“Regression Practice”).

Add all four hooks: beforeAll, afterAll, beforeEach, afterEach

Each hook should print its name.

Create: 1. “Google Search” - @smoke 2. “Playwright Documentation” -
@regression 3. “SauceDemo Login” - @smoke 4. “Hover Test” - @regression

Run: 1. All tests. 2. Only @smoke. 3. Only @regression.

QUESTIONS: 1. When only @smoke runs, does beforeEach run for @regression
tests? 2. How many times does beforeEach run for @smoke? 3. How many
times does beforeAll run? 4. How many times does afterAll run? */

// npx playwright test tests/day_10/Task8.test.js --grep @smoke --workers=1 -->>> Tells Playwright to use only one worker process. A worker is like a separate test-execution process. Using one worker means the selected tests execute one at a time:

import { test } from '@playwright/test'

test.describe('Regression Practice', () => {
    test.beforeAll('Before all - Execution', () => {
        console.log('Before all - Executing ... Regression Practice');
    });
    test.afterAll('After all - Execution', () => {
        console.log('After all - Executing ... Regression Practice');
    });
    test.beforeEach('Before each - Execution', () => {
        console.log('Before each - Executing ... Regression Practice');
    });
    test.afterEach('After each - Execution', () => {
        console.log('After each - Executing ... Regression Practice');
    });
    test('TC1 - Google Search', {tag: "@smoke"}, () =>{
        console.log("TC 1 - excecuting smoke tag for Google test");
    });
    test('TC2 - Playwright Documentation', {tag: "@regression"}, () =>{
        console.log("TC 2 - excecuting regression tag for Playwright test");
    });
    test('TC3 - SauceDemo Login', {tag: "@smoke"}, () =>{
        console.log("TC 3 - excecuting smoke tag for SauceDemo");
    });
    test('TC4 - Hover Test', {tag: "@regression"}, () =>{
        console.log("TC 4 - excecuting regression tag for Hover Test");
    });
});