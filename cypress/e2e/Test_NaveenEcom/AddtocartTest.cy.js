import { Addtocartpage } from "../../Pages_NaveenEcom/Addtocartpage.cy";
const adcrt=new Addtocartpage()
import Addtocartdata from "../../fixtures/Addtocartdata.json"
describe('addtocart',()=>
    {
       
        before(()=> {
            adcrt.openurl()
            cy.login(Addtocartdata.un,Addtocartdata.pw)
        })
        it('addtocartmac',()=>
    {
     adcrt.search(Addtocartdata.prn);
     adcrt.verifysuccess();

    })
})