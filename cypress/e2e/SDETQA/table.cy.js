describe('',() =>
{
it('handling tables',()=>
{
    cy.visit("https://demo.opencart.com/")
    cy.get('.fas.fa-user').click()
    cy.get('.dropdown-menu.dropdown-menu-right.show>li:nth-child(2)').click()
    cy.get('#input-email').type('demo')
    cy.get('#input-password').type('demo')
    cy.get("button[type='submit']").click()
})
})