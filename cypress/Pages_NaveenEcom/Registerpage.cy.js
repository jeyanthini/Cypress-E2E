export class Registerpage

{
    weblocators=
    {
       firstname: '#input-firstname',
       lastname:'#input-lastname',
       email:'#input-email',
       phone:'#input-telephone',
       password:'#input-password',
       passwordconfirm:'#input-confirm',
       checkbox:'input[type="checkbox"]',
       contiue:'.btn.btn-primary',
    }
    openurl()
    {
        cy.visit(Cypress.env('url'))
    }
    enterfirstnmae(fn)
    {
    cy.get(this.weblocators.firstname).type(fn)
    }
    enterlastnmae(ln)
    {
        cy.get(this.weblocators.lastname).type(ln)
        
    }
    enteremail(em)
    {
        cy.get(this.weblocators.email).type(em)
    }
    enterphone(ph)
    {
        cy.get(this.weblocators.phone).type(ph)
    }
    enterpw(pw)
    {
        cy.get(this.weblocators.password).type(pw)
        cy.get(this.weblocators.passwordconfirm).type(pw)
        
    }
    clickcheck()
    {
        cy.get(this.weblocators.checkbox).check()
    }
   
    clickcontinue()
    {
        cy.get(this.weblocators.contiue).click()
    }
    
}