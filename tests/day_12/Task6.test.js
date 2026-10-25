/* Task #6 - Assertions with JavaScript Values

This task does NOT require a website.

Create a test named: Value Assertions Practice

Create the following variables:

let firstName = “John”; let lastName = “Smith”; let age = 25; let
isStudent = true; let tools = [“Playwright”, “Selenium”, “Postman”];

Write assertions that validate:

1.  firstName is equal to: John
2.  lastName is equal to: Smith
3.  age is equal to: 25
4.  isStudent is: true
5.  tools contains: Playwright
6.  tools contains: Postman

Then create:

let expectedBrowser = “Chrome”; let actualBrowser = “Chrome”;

7.  Assert that expectedBrowser and actualBrowser are equal.

All assertions in this task should PASS.

---------------------- */

import { test, expect } from '@playwright/test'
// Generic Assertions 

test('Value Assertions Practice', () => {
    let firstName = "John";
    let lastName = "Smith";
    let age = 25;
    let isStudent = true;
    let tools = ["Playwright", "Selenium", "Postman"];

    expect(firstName).toEqual("John");
    expect(lastName).toBe("Smith");
    expect(age).toStrictEqual(25);
    expect(isStudent).toBe(true);
    expect(tools).toContain("Playwright")

    let expectedBrowser = "Chrome";
    let actualBrowser = "Chrome";

    expect(expectedBrowser).toEqual(actualBrowser);

})