import * as cypress from "cypress";

declare global {
    namespace Cypress {
        interface Chainable<Subject> {
            cGet(selector  :string) : Chainable;
            cType(selector: string, value: any): Chainable;
            cClick(selector: string, options? : any) : Chainable
        }
    }
}