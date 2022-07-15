/// <reference types='Cypress' />
describe('my first test suite',function()
{

    it('my first test case',function()
    {
        // Scenario :visit the URL ==> type 'ca' in SearchBar ==> it will show 4 products with names starting with 'ca' ==> validate no of products
        // using assertion ==> then select 3rd product & add to cart ==> then select product who's name is 'Cashews' and add the same in cart

       cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
        
        cy.get('input.search-keyword').type('ca');
        
        cy.wait(2000);

        //cy.get('div.product').should('have.length',4) ==> this will give an error beacuse of 5th invisible elements
        // To solve above issue , use this==> cy.get(‘locator:visible’), check below line
       // cy.get('div.product:visible').should('have.length',4);

        // also we can acheive the same result as above using '.find('locator') method after locator cy.get() , to decrease scope of webpage to 4 products only.
        cy.get('.products').find('.product').should('have.length',4);
        // in above line ==> cy.get('.products').find('.product') <== retrive 4 products & .should('have.length',4) is an assertion used from chai library
        
        cy.get('.products').find('.product').eq(2).contains('ADD TO CART').click() 
        // cy.get('.products').find('.product').eq(2) ===> control is move to product who's index is 2 (i.e 3rd product)

        cy.get('.products').find('.product').each(($el, index, $list)=>
            { // each open

               const textveg = $el.find('h4.product-name').text()   
               if(textveg.includes('Cashews'))
               {
                   cy.wrap($el).contains('ADD TO CART').click() 
                   // or cy.wrap($el).find('button').click()
               }
                   // line 25: 4 retrieved products store in array using 'each' method, $e1 ==> store 4 elements who's locator is '.product'
                   // as no of products is 4 , loop runs 4 times. in 1st loop '$e1' having control over 1st product
                  // from 1st product we need product name as text, so we need to traverse from 'product'(parent) to product-name(child) ==> $el.find('h4.product-name').text()
                 // line 28: grab product name from 1st product and store it in one variable 'textveg'
                // line 29: if that product name matches with expected i.e Cashews, then line 31: click on 'ADD To CART' either using 'contains' or 'find' method

                }) // each close

                // scenario: Grab the Logo Text 'GREENKART' and print in console
                cy.get('.brand').then(function(logoelement)
                {
                    cy.log(logoelement.text())
                    // we can put assertion to crosscheck the Text grabbed from webelement
                    cy.log(logoelement.text()).should('have.text','GREENKART')
                })

                cy.screenshot('screenshot');


                // in selenium we can do the above ==>finding locator & storing the same in one variable ==> const logoname =cy.get('.brand').text();
                // but here in cypress this is not allow as this is a non cypress code
                // cy.get('.brand') ===> is resolved by cypress as it is valid cypress code , but we need to use '.then' if we have to garb the text
                // from catched webelement (cy.get('.brand')), 
                // so here we have to resolved the promise manually using '.then' method(Line:43), catch what it resolve in one variable inside 'then' function
                // and then on that variable we can apply text() method to grab the text and print in console

    })// 1st it close

})// describe close