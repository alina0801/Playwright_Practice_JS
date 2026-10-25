/* 
Task #8 - Hard Assertion

This task does NOT require a website.

Create a test named: Hard Assertion Practice

Steps:
1.  Print: Step 1 is executed
2.  Create: let actualResult = 10;
3.  Create a normal/hard assertion that expects actualResult to equal:
    20
IMPORTANT: This assertion is intentionally incorrect.
4.  AFTER the assertion, add:
    console.log(“Step 4 is executed”);
Run the test.
Questions:

1.  Does “Step 4 is executed” appear in the Terminal? - no
2.  Does Playwright continue executing the remaining code after the hard
    assertion fails? - no
3.  Does the test PASS or FAIL? - FAIL

Write your answers as comments.
------------------------------------------------------------------------
 */
import { test, expect } from '@playwright/test'

test('Hard Assertion Practice', () => {
    console.log("Step 1 is executed");
    let actualResult = 10;
    expect(actualResult).toBe(20);
    console.log("Step 4 is executed");
});