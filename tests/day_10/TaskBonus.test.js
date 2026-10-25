/* 
BONUS - Two Groups with Different Tags

Create TWO test.describe() groups.

Group 1: “Login Tests” - 2 tests tagged @smoke - beforeAll, beforeEach,
afterEach, afterAll

Group 2: “Navigation Tests” - 2 tests tagged @regression - beforeAll,
beforeEach, afterEach, afterAll

Every hook should print both the group and hook name.

Example: Login Tests - BeforeEach Navigation Tests - BeforeEach

Run: 1. All tests. 2. Only @smoke. 3. Only @regression.

Observe which groups and hooks execute. */

//workers are what Playwright uses to run tests in parallel, but the two terms are not identical.
//- Parallel execution means multiple tests are allowed to run simultaneously.
//- Workers are the separate processes that execute those tests.

import { test } from '@playwright/test'

test.describe('Login Tests', () => {
    test.beforeAll('Before all - Execution', () => {
        console.log('Before all - Executing ... Login Tests');
    });
    test.afterAll('After all - Execution', () => {
        console.log('After all - Executing ... Login Tests');
    });
    test.beforeEach('Before each - Execution', () => {
        console.log('Before each - Executing ... Login Tests');
    });
    test.afterEach('After each - Execution', () => {
        console.log('After each - Executing ... Login Tests');
    });
    test('TC1 - Google LOGIN', {tag: "@smoke"}, () =>{
        console.log("TC 1 - excecuting smoke tag for Google test");
    });
    test('TC2 - Playwright LOGIN', {tag: "@regression"}, () =>{
        console.log("TC 2 - excecuting regression tag for Playwright test");
    });
});

test.describe('Navigation Tests', () => {
    test.beforeAll('Before all - Execution', () => {
        console.log('Before all - Executing ... Navigation Tests');
    });
    test.afterAll('After all - Execution', () => {
        console.log('After all - Executing ... Navigation Tests');
    });
    test.beforeEach('Before each - Execution', () => {
        console.log('Before each - Executing ... Navigation Tests');
    });
    test.afterEach('After each - Execution', () => {
        console.log('After each - Executing ... Navigation Tests');
    });
    test('TC3 - SauceDemo NAVIGATION', {tag: "@smoke"}, () =>{
        console.log("TC 3 - excecuting smoke tag for SauceDemo");
    });
    test('TC4 - Hover Test NAVIGATION', {tag: "@regression"}, () =>{
        console.log("TC 4 - excecuting regression tag for Hover Test");
    });
});