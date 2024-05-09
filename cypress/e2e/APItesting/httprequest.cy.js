describe('http requests',()=>
{
    it('GET',()=>
    {
        cy.request('GET','https://jsonplaceholder.typicode.com/posts/1')
        .its('status')
        .should('equal',200)

    })
    it('POST',()=>
    {
        cy.request(
            {
               method: 'POST',
                url: 'https://jsonplaceholder.typicode.com/posts/',
                body:
                {
                    title:'test',
                    body: 'this is post',
                    userid:1
                }
            }
            )
        .then((response) =>
            {
                expect(response.status).to.equal(201)
                
            })

       
    })
})