/* 
*Task #7 - Value Assertions with a Failing Assertion

This task does NOT require a website.
Create a test named: Value Assertion Failure Practice
Create:
let expectedTitle = “Automation Testing”; let actualTitle = “Automation
Testing”; let totalStudents = 15; let courseStarted = true;
let topics = [ “JavaScript”, “Playwright”, “API”, “Database”];
* Create PASSING assertions for the following:
1.  expectedTitle and actualTitle are equal.
2.  totalStudents is equal to 15.
3.  courseStarted is true.
4.  topics contains “Playwright”.
5.  topics contains “Database”.
Then add ONE intentionally incorrect assertion:
6.  Assert that totalStudents is equal to: 20
Run the test.
Observe the Playwright error.
Question: What does Playwright show as the Expected value and the
Received value?
Write your answer as a comment.
------------------------------------------------------------------------
 */

import { test, expect } from '@playwright/test'

test('Value Assertion Failure Practice', () => {
    let expectedTitle = "Automation Testing";
    let actualTitle = "Automation Testing";
    let totalStudents = 15;
    let courseStarted = true;
    let topics = ["JavaScript", "Playwright", "API", "Database"];

    expect(expectedTitle).toBe(actualTitle);
    expect(totalStudents).toEqual(15);
    expect(courseStarted).toBe(true);
    expect(topics).toContain("Playwright");
    expect(topics).toContain("Database");

    //expect(totalStudents).toEqual(20);
    //      Expected: 20
    //      Received: 15
})