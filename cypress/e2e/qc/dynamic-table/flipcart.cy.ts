
describe('Dynamic HTML Table functionality veification', {tags:['flipKart']}, () => {
    it('To verify the data refelected in data table is matching with data provide in Input field',() => {
      
        cy.visit('https://www.flipkart.com/')
        cy.get('._1XjE3T').each((val) => {
            console.log(val.text(), + '\n')
        })
    });
});