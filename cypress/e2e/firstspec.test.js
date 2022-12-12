/// <reference types="cypress"/>

describe ('My first suite',()=>{
    it ('my first test',()=>{
        // to select input

        cy.visit('/')
        cy.contains('Forms').click()
        cy.contains('Form Layouts').click()
        
        cy.get('input')

         // to select id

         cy.get('#inputEmail1')

         // to select class

         cy.get('.input-full-width')

         // to select by class value

         cy.get('[class="input-full-width size-medium shape-rectangle"]')
         
         // to selecct by tag value pair

         cy.get('input[placeholder="Email"]')

         // to select by placeholder and second attribute 

         cy.get('input[placeholder="Email"]')

         // to select two attributes

         cy.get('input[placeholder="Email"][type="email"]')

        // to select two attributes  

        cy.get('input[placeholder="Email"]#inputEmail1')

       // recommended cypress step 
       
  

        })

    it('my second test case',()=>{
        cy.visit('/')
        cy.contains('Forms').click()
        cy.contains('Form Layouts').click()
        cy.get('[data-cy="signInButton"]')    
        cy.contains('Sign in');
        cy.contains('[status="warning"]','Sign in')
        cy.get("#inputEmail3")
        .parents('form')
        .find('button')
        .should('contain','Sign in')
        .parents('form')
        .find('nb-checkbox')
        .click()
    })
})