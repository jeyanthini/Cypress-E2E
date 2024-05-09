describe('CSSlocators',()=>
{
    it("csslocaros",()=>
    {
        cy.visit("https://www.amazon.com/")
        cy.get("[name='field-keywords']").type("T")
       
        cy.wait(1000)
        cy.get("div.s-suggestion-container").each(($el,index, $list) =>
        {
            if($el.text()=='trash bags')
            {
                cy.wrap($el).click()
            }
        })
        cy.xpath("//input[@id='twotabsearchtextbox']").should('have.value',"trash bags")
        cy.url().should('include','ama')
        cy.get('#nav-link-accountList-nav-line-1').click()
        cy.get("#ap_email").type("kjeyanthini@gmail.com")
        cy.get("#continue").click()
        cy.get("#ap_password").type("Omsuba1!")
        
        cy.get("#signInSubmit").click()
        cy.get("#nav-events-mday").click()
       cy.xpath("//a[@aria-label='Under $10']").click()
       cy.xpath("//span[@class='a-truncate-cut' and (text()='Most Loved')]").click()
       let expnam="suba";
       cy.get("#nav-link-accountList-nav-line-1").then(x=>
        {
            let nam=x.text()
            expect(nam).to.not.equal(expnam)// BDD
            assert.equal(expnam,nam)//TDD
        })
        


    })
})
