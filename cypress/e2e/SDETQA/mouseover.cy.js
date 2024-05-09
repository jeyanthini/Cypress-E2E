describe('mousetr',()=>
{
    it('trigger',()=>
{
cy.visit('https://www.amazon.com/')
cy.get('#nav-link-accountList').trigger('mouseover')
cy.xpath("//span[contains(text(),'Customer Service')]").click()
})
}
)