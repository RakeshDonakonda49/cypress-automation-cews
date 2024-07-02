import { commonGetLocators, InvokeAttributes } from "../../support/common-core-libs";
import { dynamicPageOr } from "./locators/dynamic-table.or";

export default class DynamicTableMethods {

    /**
     * @details - Dynamic data table verification
     * @param data - data to be verified should be passed
     * @author - Rakesh Donakonda
     */
    verifyTableData(data: any) {
        this.enterDataAndRefresh(data);
        this.verifyDataInTable(data)
    }

    /**
     * @details - To enter the json data in the input field and click refresh button
     * @param jsonData - json data to be reflected in table should be passed
     * @author - Rakesh Donakonda
     */
    private enterDataAndRefresh(jsonData: any) {
        cy.cClick(dynamicPageOr.tableDataArrow)
        cy.cGet(dynamicPageOr.inputField)
            .invoke(InvokeAttributes.value, JSON.stringify(jsonData).toString()) // Set the value of the input field to the JSON string
            .trigger(commonGetLocators.input); // Trigger an 'input' event to simulate user input
        cy.cClick(dynamicPageOr.refreshButton)
    }

    /**
     * @details - To verify the data entered in input field and data populated in the table is matching
     * @param jsonData - json data to be reflected in table should be passed
     * @author - Rakesh Donakonda
     */
    private verifyDataInTable(jsonData: any) {
        const expectedHeaders = Object.keys(jsonData[0])

        cy.cGet(dynamicPageOr.dynamicTableRow + commonGetLocators.first + ' ' + commonGetLocators.th).each((header, index) => {
            cy.wrap(header).invoke(InvokeAttributes.text).then((txt) => {
                expect(txt.trim()).to.equal(expectedHeaders[index])
            })
        })

        cy.cGet(dynamicPageOr.dynamicTableRow).not(commonGetLocators.first).each((row, index) => {
            expectedHeaders.forEach((header, colIndex) => {
                cy.wrap(row).find(commonGetLocators.td).eq(colIndex).invoke(InvokeAttributes.text).then((txt) => {
                    const cellText = txt.trim()
                    expect(cellText).to.equal(jsonData[index][header].toString())
                })
            })
        })
    }
}