//Task #9 - Read All Web Table Rows
//
//URL: https://the-internet.herokuapp.com/tables Table: Example 1
//
//1.  Locate all tbody rows in Example 1.
//2.  Use .all() to get an array.
//3.  Use a traditional for loop.
//4.  Print every row’s text.
//5.  Determine how many data rows exist.

import {test} from '@playwright/test'

test('Read All Web Table Rows', async ({page}) => {

    await page.goto("https://the-internet.herokuapp.com/tables")
    const tableOneRows = await page.locator('#table1 tbody tr').all()

    for (let i = 0; i < tableOneRows.length; i++) {
        console.log(await tableOneRows[i].innerText())
    }

    console.log(`Number of data rows: ${tableOneRows.length}`)
})