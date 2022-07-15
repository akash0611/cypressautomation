/// <reference types='Cypress' />

describe('checkbox/radio/dropdown',function()
{// describe open

    it('verify checkboxes',function()
    {// it open
        
        // checkbox

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.title().should('include','Practice Page')
        cy.get('#checkBoxOption1').check().should('be.checked').and('have.value','option1')
        // 'and' is used to concanicate assertions instead of using should multiple times just use 'and'
        cy.wait(2000)
        cy.get('#checkBoxOption1').uncheck()
        cy.get('#checkBoxOption1').should('not.be.checked')
        cy.wait(2000)
        cy.get('input[type="checkbox"]').check(['option2','option3'])

        // static dropdown

        cy.get('select[name="dropdown-class-example"]').select('option2').should('have.value','option2')
        // above: get hold over satic dropdown and using select method select option2 and put asertion to validate the name/value of option2


        // Dynamic dropdown


        // Scenario: type ind in dynamic dropdown and select India from them
         cy.get('#autocomplete').type('ind')
         // get control over dynamic dropdown and type 'ind' and right click on India & click on inspect to indentify locator's for 3 options
         cy.get('.ui-menu-item div').each(($el, index, $list)=>
                { // each open

                  if($el.text()==='India')
                     {
                        cy.wrap($el).click({force:true})

                     }

                }) // each close

         cy.get('#autocomplete').should('have.value','India') // validate output using assertion  
         
         
         // Visible & Invisible element

         cy.get('#displayed-text').type('akash').should('be.visible')
         cy.wait(2000)
         cy.get('#hide-textbox').click()
         cy.get('#displayed-text').should('not.be.visible')
         cy.wait(3000)
         cy.get('#show-textbox').click()
         cy.get('#displayed-text').should('be.visible')

         // Radio Button

         cy.get('.radioButton').check(['radio1']).should('be.checked') // hold over all radio buttons & selecting only 1 using 'value' attribute
         

    })// it close

})// describe close