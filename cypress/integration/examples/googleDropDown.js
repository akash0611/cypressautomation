/// <reference types='Cypress' />

describe('google',function()
{// describe open

    it('google dropdown',function()
    {// it open

        cy.visit('https://www.google.co.in/')
        cy.wait(1000)
        cy.get('input[title="Search"]').type('ind')
        cy.wait(2000)

        cy.get('li[role="presentation"] div span').each(($el, index, $list)=>
        {
            if($el.text()==='India Post')
            {
                 cy.wrap($el).click()
            }


        })

        
    })// it close

})// describe close
