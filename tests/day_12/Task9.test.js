/*  Task #9 - Soft Assertion
This task does NOT require a website.
Create a test named: Soft Assertion Practice

Steps:
1.  Print: Step 1 is executed
2.  Create: let actualResult = 10;
3.  Create a SOFT assertion that expects actualResult to equal: 20 IMPORTANT: This assertion is intentionally incorrect.
4.  AFTER the soft assertion, print:
    Step 4 is executed
5.  Create:
    let browser = “Chrome”;
6.  Create a correct assertion that validates browser is equal to:
    Chrome
Run the test.
Questions:

1.  Does “Step 4 is executed” appear in the Terminal? - Yes
2.  Does Playwright continue after the failed soft assertion? - Yes
3.  Even though execution continues, does the overall test PASS or FAIL? - FAIL
4.  What difference did you observe between the hard assertion and soft
    assertion? - A hard assertion stops the test immediately when it fails. A soft assertion lets the test continue, but the overall test still fails at the end.

Write your answers as comments.

------------------------------------------------------------------------
 */

import { test, expect } from '@playwright/test'

test('Soft Assertion Practice', () => {
    console.log("Step 1 is executed");
    let actualResult = 10;
    expect.soft(actualResult).toBe(20);
    console.log("Step 4 is executed");
    let browser = "Chrome";
    expect(browser).toEqual("Chrome")
});