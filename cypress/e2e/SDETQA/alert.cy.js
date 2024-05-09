describe('alerthandle',()=>
{

it.skip('alert',()=>
{
    cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
    cy.get("button[onClick='jsAlert()']").click();
    cy.wait(3000)
    cy.on('window:alert',(t)=>
{
     expect(t).to.contains('I am a JS Alert')
})
})

it.only('alert1',()=>
{
    cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
    cy.window().then((w2) =>
    {
       cy.stub(w2,'prompt').returns('welcome');
        
    })
    cy.get("button[onClick='jsPrompt()']").click()
    cy.wait(3000)
   
})

})
