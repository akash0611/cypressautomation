/// <reference types='Cypress' />

describe('End to End Product Purchasing',function()
{// describe open

    it('EtoE',function()
    {// it open
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
        
        cy.get('input.search-keyword').type('ca');
        cy.wait(2000);

        cy.get('.products').as('productslocator')
        
        cy.get('.products').find('.product').each(($el, index, $list)=>
        { // each open

           const textveg = $el.find('h4.product-name').text()   
           if(textveg.includes('Cashews'))
           {
               cy.wrap($el).contains('ADD TO CART').click() 
               // or cy.wrap($el).find('button').click()
           }
               

            }) // each close

            cy.get('.cart-icon > img').click()
            cy.contains('PROCEED TO CHECKOUT').click()
            cy.contains('Place Order').click()

    })// it close

})// describe close