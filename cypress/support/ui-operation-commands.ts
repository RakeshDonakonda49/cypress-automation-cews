// ***********************************************
// This example ui-operation-commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- custom command to get the selector - cGet
Cypress.Commands.add('cGet', (selector: string) => { return cy.get(selector) })

//- custom command to type - cType
Cypress.Commands.add('cType', (selector: string, value: any)=> { cy.cGet(selector).clear().then(()=> {
    cy.cGet(selector).type(value)
}) })

//- custom command to click - cClick
Cypress.Commands.add('cClick', (selector: string, options? : any)=> { cy.cGet(selector).click(options)})