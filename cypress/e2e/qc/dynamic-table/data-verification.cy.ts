/****************************Test Script Valication Details*********************************
 * 1). visit the url in browser
 * 2). enter the json data in the input field
 * 3). click Refresh Table button
 * 4). verify the data reflected in table is matching with json data provided
 */

import DynamicTableMethods from "../../../app-module-libs/dynamic-table/dynamic-table.methods";

describe('Dynamic HTML Table functionality veification', {tags:['flipKart', 'datatable']}, () => {
    let jsonData: any
    before(() => {
        cy.fixture('table-data.json').then((data) => {
            jsonData = data
        })
    })

    const dynamicTable = new DynamicTableMethods();
    it('To verify the data refelected in data table is matching with data provide in Input field', () => {
        cy.visit('https://testpages.herokuapp.com/styled/tag/dynamic-table.html')
        dynamicTable.verifyTableData(jsonData)
    })
})