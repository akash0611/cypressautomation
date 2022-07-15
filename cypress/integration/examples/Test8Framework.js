/// <reference types='Cypress' />
/// <reference types='Cypress-iframe' />
import 'cypress-iframe'

describe('cypress hooks',function()
{// describe open

    before(function()
    {
        cy.fixture('example').then(function(data)
        {
            this.data= data     
        })
       

    })

    it('cypress hooks',function()
    {// it open

       //cy.visit('https://rahulshettyacademy.com/angularpractice')
       cy.visit(Cypress.env('url'))
       // above line : we have declared the 'url' as golabal variable in cypress.config.js file, so we can use that global variable throughout entire test cases
       cy.get('input[name="name"]:nth-child(2)').type(this.data.name)
       cy.get('#exampleFormControlSelect1').select(this.data.gender)

       //********************************************************************************************************************************************/

       cy.get(':nth-child(4) > .ng-untouched').should('have.value',this.data.name)
       cy.get('input[name="name"]:nth-child(2)').should('have.attr','minlength','2')
       // above line: we have to check min acceptable char length of 'name' edit box, so to that just we neer to validate whether 'minlength' attribue 
       // of that dom element is having value '2' or not using ==> should('have.attr','minlength','2')
       cy.get('#inlineRadio3').should('be.disabled')
       // above line: validate whethetr Entrepreneur radio button is disabled or not
       cy.get('#inlineRadio1').should('not.be.disabled')
       // // above line: validate whethetr student radio button is disabled or not

       //*********************************************************************************************************************************************/
       cy.get(':nth-child(2) > .nav-link').click() // click on shop
       cy.selectproduct(this.data.product)
       // above is used to select and add single product to kart
       // cy.selectproduct(this.data.product) ==> 'selectproduct' is an reusable method that we have created inside 'command.js' in support folder
       // selectproduct => this method accept 'productname' as an input, so when this method is called with some input
       // reusable method is run which is present inside commans.js(fixture folder) and click on 'Add' button of respective product
       // so that product is added to kart and we can confirm the same by clicking checkout button

       
       //*********************************************************************************************************************************************/

       this.data.productname.forEach(function(element)
          {
         
             cy.selectproduct(element)

          }) 
        // above is used to select and add multiple products from array
        // "forEach" ( search syntax on google) function is used to iterate through array which is declared in example.json ("productname":["iphone X","Samsung Note 8"])
        // this.data.productname = productname (from example.json file)
        // so here 'this.data.productname' ==> this array contain 2 productname, which is then stored in 'element' variable
        // means loop runs 2 times for 2 products and using 'selectproduct' method products are added to the kart 
 
       //**********************************************************************************************************************************************/


    })// it close

})// describe close