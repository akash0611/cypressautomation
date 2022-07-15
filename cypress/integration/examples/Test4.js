/// <reference types='Cypress' />

describe('PopUps and child window',function()
{// describe open

    it('Alert and Confirm popup child window',function()
    {// it open

        // popus: alert & confirm


        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#alertbtn').click()
        cy.get('#confirmbtn').click()

        cy.on('window:alert',(str)=>
        {
           expect(str).to.equal('Hello , share this practice page and share your knowledge')

        })

        cy.on('window:confirm',(str1)=>
        {
           expect(str1).to.equal('Hello , Are you sure you want to confirm?')

        })
        //cy.on() method is used to trigger these browser events (i.e  window:alert/window:confirm ).
        //cy.on() method accepts 2 arguments one is ‘firing event’ and second is o/p of event in string format in variable
        // To compare 2 strings expect method is used ==> expect(string1).to.equal(string2)




        // child window handling

        cy.wait(2000)
        cy.get('#opentab').invoke('removeAttr','target').click()
        cy.wait(1000)
        cy.title().should('include','Rahul Shetty Academy') // get current title
        cy.url().should('include','https://www.rahulshettyacademy.com/') // get current url
        
        cy.go('back')
        cy.wait(1000)
        cy.go('forward')

        

    })// it close

})// describe close