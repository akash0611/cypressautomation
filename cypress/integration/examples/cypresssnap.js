/// <reference types='Cypress' />
/// <reference types='Cypress-iframe' />
import 'cypress-iframe'

describe('cypress snapshot',function()
{// describe open

    it('cypress snapshot ',function()
    {// it open

        cy.visit('https://www.wikipedia.org/')
       // cy.get('.inline-flex > .block').click();
        cy.screenshot('wikipedia Official')

    })// it close

})// describe close