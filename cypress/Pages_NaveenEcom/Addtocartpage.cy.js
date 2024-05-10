export class Addtocartpage
{
Weblocators=
{
searchbox: 'input[name="search"]',
searchproduct: 'h4>a',
searchicon: 'button.btn.btn-default.btn-lg',
addtocart:'button#button-cart',
successmsg:'div.alert.alert-success.alert-dismissible',
viewcart:'span#cart-total'
}
openurl()
{
    cy.visit(Cypress.env('baseUrl'))
}
search(productname)
{
    cy.get(this.Weblocators.searchbox).type(productname)
    cy.get(this.Weblocators.searchicon).click()
    cy.scrollTo('center')
    cy.get(this.Weblocators.searchproduct).click()
    cy.get(this.Weblocators.addtocart).click()
}
verifysuccess()
{
return cy.get(this.Weblocators.successmsg)
}
}