/* Practice #6 - Use All Four Hooks

Create test.describe(“All Hooks Practice”).

Add: - beforeAll - afterAll - beforeEach - afterEach

Each hook should print its name.

Create 3 tests that each print their test-case name.

After running, determine: 1. Which hook runs first? 2. Which hook runs
before every test? 3. Which hook runs after every test? 4. Which hook
runs only after ALL tests finish? 5. How many times does each hook
execute? */

import { test } from '@playwright/test'

test.describe('All Hooks Practice', () => {
    test.beforeAll('Before all - Test', () => {
        console.log("Before all - Test Excecuted");
    });

    test.beforeEach('Before each - Test', () => {
        console.log("Before each executing.. ");
    });

    test('TC1 - My first test', () => {
        console.log("My first test");
    });
    test('TC2 - My second test', () => {
        console.log("My second test");
    });
    test('TC3 - My third test', () => {
        console.log("My third test");
    });

    test.afterEach('After each - Test', () => {
        console.log("After each executing.. ");
    });

    test.afterAll('After all - Test', () => {
        console.log("After all - Test Excecuted");
    });
});
