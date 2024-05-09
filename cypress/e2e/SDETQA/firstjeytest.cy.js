describe('first test', function()  {
  it('test1', () => {
    cy.visit("https://amazon.com")
    cy.title().should('eq','amazon')
    
  })
})