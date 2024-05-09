import {Registerpage} from "../../Pages_NaveenEcom/Registerpage.cy"
const rp=new Registerpage()
import Registerdata from "../../fixtures/Registerdata.json"
describe('registertest',()=>
{
    it('registertest',()=>
{
rp.openurl()
rp.enterfirstnmae(Registerdata.fn)
rp.enterlastnmae(Registerdata.ln)
rp.enterphone(Registerdata.ph)
rp.enteremail(Registerdata.em)
rp.enterpw(Registerdata.pw)
rp.clickcheck()
rp.clickcontinue()
})

    
})