/* Practice #5 - beforeAll and afterAll

Create test.describe(“Hook Practice”).

beforeAll prints: “BeforeAll function is executed”

afterAll prints: “AfterAll function is executed”

Create 3 tests that print: “Test Case 01 is executed” “Test Case 02 is
executed” “Test Case 03 is executed”

QUESTION: How many times does beforeAll execute? 
Answer1 - Only one time before all the tests 

QUESTION: How many times does afterAll execute? 
Answer2 - Only one time after all tests 

*/

import { test } from '@playwright/test'

test.describe('Hook Practice', () => {

    test.beforeAll(({ }) => {
        console.log("BeforeAll function is executed");
    });

    test('TC01 - practice', () => {
        console.log("Test Case 01 is executed");
    });

    test('TC02 - practice', async () => {
        console.log("Test Case 02 is executed");
    });

    test('TC03 - practice', async () => {
        console.log("Test Case 03 is executed");
    });

    test.afterAll(() => {
        console.log("AfterAll function is executed");
    });
});


