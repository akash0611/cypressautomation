/// <reference types='Cypress' />
/// <reference types='Cypress-iframe' />
import 'cypress-iframe'

describe('iframe',function()
{// describe open

    it('iframe ',function()
    {// it open

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        cy.frameLoaded("#courses-iframe")

        cy.iframe().find('a[href*="mentorship"]').eq(0).click()

        cy.iframe().find('h1.pricing-title.text-white.ls-1').should('have.length',2)

        
        
        

    })// it close

})// describe close