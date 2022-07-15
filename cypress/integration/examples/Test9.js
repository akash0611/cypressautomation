/// <reference types='Cypress' />

describe('Login Functionality',function()
{// describe open
    before(function()
    {
        cy.fixture('example').then(function(data)
        {
            this.data= data     
        })

    })

    it('Verify login with username and password',function()
    {// it open

        cy.visit('http://testphp.vulnweb.com/login.php')
        cy.get(':nth-child(1) > :nth-child(2) > input').type(this.data.username)
        cy.get(':nth-child(2) > :nth-child(2) > input').type(this.data.password)
        cy.get(':nth-child(3) > td > input').click()
        //cy.screenshot('logged in')
    
    })// it close

    it('Verify snapshot of wikipedia ',function()
    {// it open

        cy.visit('https://www.wikipedia.org/')
        
        cy.screenshot('wikipedia')
    
    })// it close

})// describe close