//Task #11 - Read a Cell from a Matching Row
//
//  URL: https://the-internet.herokuapp.com/tables Table:
//  Example 1
//
//  Person: Jason Doe Expected Email: jdoe@hotmail.com
//
//  1. Loop through the rows. 2. Find Jason Doe. 3. Locate the
//  Email cell INSIDE that matching row. 4. Print its value. 5.
//  Assert it equals jdoe@hotmail.com.
//
//  Do not locate the email globally after finding the row.
//  ------------------------------------------------------------

import {test} from '@playwright/test'

test ('TC11 - Read a Cell from a Matching Row', async({page}) => {

await page.goto("https://the-internet.herokuapp.com/tables")
const allRowsTableOne = await page.locator('#table1 tbody tr').all()

for (let i = 0; i<allRowsTableOne.length; i++){
console.log(await allRowsTableOne[i].innerText())
if ((allRowsTableOne[i].innerText()==="Doe")&&(allRowsTableOne[i+1].innerText()==="Jason")){
break;
}
}
})
