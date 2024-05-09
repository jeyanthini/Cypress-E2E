describe('json resp',()=>
    {
        let tp=0;
       
        it('get',()=>
        {
            cy.request(
                {
                   method: 'GET',
                    url: 'https://fakestoreapi.com/products',
                    
                }
                )
            .then((response) =>
                {
                    expect(response.status).to.equal(200)
                    response.body.forEach(ele=>
                        {
                            tp=tp+ele.price
                            console.log(tp)
                        }
                    )
                })
    
           
        })
    })