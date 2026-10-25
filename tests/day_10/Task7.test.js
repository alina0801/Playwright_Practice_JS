/* Practice #7 - Predict the Execution Order
Create test.describe(“Execution Order Practice”) with: - beforeAll -
afterAll - beforeEach - afterEach - Test Case 01 - Test Case 02
Each hook and test must print its name.
DO NOT run it at first.

Write the order you EXPECT: 1. Before all 2. Before each
3. Test Case 01  
4. After each 5. Before each
6. Test Case 02  7. After each  8. After all

Before all
Before each
After each
After all
Test Case 01
Test Case 02

Then run it and compare your prediction with the Terminal output.  */

import { test } from '@playwright/test'

test.describe('Execution Order Practice', () => {
    test.beforeAll('Before all - Execution', () => {
        console.log('Before all - Executed 1 time before all tests in test.describe suite');
    });
    test.afterAll('After all - Execution', () => {
        console.log('After all - Executed 1 time after all tests in test.describe suite are excecuted');
    });
    test.beforeEach('Before each - Execution', () => {
        console.log('Before each - Executed before every test in test.describe suite');
    });
    test.afterEach('After each - Execution', () => {
        console.log('After each - Executed after every test in test.describe suite');
    });
    test('Test Case 01', () =>{
        console.log("TC 1 - excected after before all and after before each");
    });
    test('Test Case 02', () =>{
        console.log("TC 2 - excected after before all and after before each and then after TC01");
    });
});