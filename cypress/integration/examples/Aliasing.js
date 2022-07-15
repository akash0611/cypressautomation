/// <reference types='Cypress' />

describe('use of aliasing',function()
{// describe open

    it('aliasing',function()
    {// it open
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
        
        cy.get('input.search-keyword').type('ca');
        cy.wait(2000);

        cy.get('.products').as('productslocator')
        // here in above line we alias the locator with some name (i.e => '.products' with 'productslocator')
        // means we stored the 'locator' in one variable using cypress method 'as'
        // bacause of this we can reuse the locator whereever it is required in code without calling every time
        

        cy.get('@productslocator').find('.product').should('have.length',4);
        cy.get('@productslocator').find('.product').eq(2).contains('ADD TO CART').click() 


    })// it close

})// describe close