/// <reference types='Cypress' />

describe('mouse hover',function()
{// describe open

    it('Mouse Hovering using click({force:true}) and show function ',function()
    {// it open

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        // cy.get('.mouse-hover-content').invoke('show') // .invoke('show) helps to display the hidden elements; Top & Reload
        // cy.contains('Top').click()           // cy.contains(''Top) => used to hold & click over 'Top' mouse hover

        // above step is also achieve without line 10, using ==> click({force:true}) in line 11.
        cy.contains('Top').click({force:true})
        cy.url().should('include','https://rahulshettyacademy.com/AutomationPractice/#top')

        
        

    })// it close

})// describe close