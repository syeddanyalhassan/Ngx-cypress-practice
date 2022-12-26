/// <reference types="cypress"/>

const { Dropdown } = require("bootstrap")

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

        cy.contains('nb-card','Horizontal form').find('[type="email"]')
    })
    it('then and wrap methods',()=>{
        cy.visit('/')
        cy.contains('Forms').click()
        cy.contains('Form Layouts').click()
        cy.contains('nb-card','Using the Grid')
        .find('[for="inputEmail1"]')
        .should('contain','Email')
        cy.contains('nb-card','Using the Grid')
        .find('[for="inputPassword2"]')
        .should('contain','Password')
        cy.contains('nb-card','Using the Grid')
        .find('[for="inputPassword2"]')
        .should('contain','Password')
        cy.contains('nb-card','Basic form')
        .find('[for="exampleInputEmail1"]')
        .should('contain','Email address')
        cy.contains('nb-card','Basic form')
        .find('[for="exampleInputPassword1"]')
        .should('contain','Password')


        cy.contains('nb-card','Using the Grid').then(firstForm=>{
             const emaillabelcheck=firstForm.find('[for="inputEmail1"]').text()
             const passwordlabelcheck=firstForm.find('[for="inputPassword2"]').text()
             expect(emaillabelcheck).to.equal('Email')
             expect(passwordlabelcheck).to.equal('Password')
             
        

        cy.contains('nb-card','Basic form').then(secondForm=>{
            const emaillabelchecksecond=secondForm.find('[for="exampleInputEmail1"]').text()
            const passwordlabelchecksecond=secondForm.find('[for="exampleInputPassword1"]').text()
            expect(emaillabelchecksecond).to.equal('Email address')
            expect(passwordlabelchecksecond).to.equal('Password')
            expect(passwordlabelchecksecond).to.equal(passwordlabelcheck)
        
            cy.wrap(secondForm).find('[for="exampleInputEmail1"]').should('contain','Email address')
            })
        })
    })

    it('invoke commands',()=>{
        cy.visit('/')
        cy.contains('Forms').click()
        cy.contains('Form Layouts').click()

        //1
        cy.get('[for="exampleInputEmail1"]').should('contain','Email address')

        //2
        cy.get('[for="exampleInputEmail1"]').then(label=>{
          expect(label.text()).to.equal('Email address')
        })

        //c3
        cy.get('[for="exampleInputEmail1"]').invoke('text').then(text=>{
            expect(text).to.equal('Email address')
        })
        
        cy.contains('nb-card','Basic form')
        .find('nb-checkbox')
        .click()
        .find('.custom-checkbox')
        .invoke('attr','class')
       // .should('contain','checked')
        .then(classValue=>{
            expect(classValue).to.contain('checked')
        })

    })
    it('assert property',()=>{
      cy.visit('/')
        cy.contains('Forms').click()
        cy.contains('Datepicker').click()
        cy.contains('nb-card','Common Datepicker').find('input').then(input=>{
            cy.wrap(input).click()
            cy.get('nb-calendar-picker').contains('16').click()
            cy.wrap(input).invoke('prop','value').should('contain','Dec 16, 2022')
        })
        
    })
    it('radio button',()=>{
        cy.visit('/')
        cy.contains('Forms').click()
        cy.contains('Form Layouts').click()
        cy.contains('nb-card','Using the Grid').find('[type="radio"]').then(radioButtons=>{
        cy.wrap(radioButtons)
            .first()
            .check({force:true})
            .should('be.checked')
        cy.wrap(radioButtons)
            .eq(1)
            .check({force:true})
            .should('be.checked')
        cy.wrap(radioButtons)
            .eq(0)
            .should('not.be.checked')
        cy.wrap(radioButtons)
            .eq(2)
            .should('be.disabled')    

        })
        
    })
    it('checkboxes',()=>{
            cy.visit('/')
            cy.contains('Modal & Overlays').click()
            cy.contains('Toastr').click()
            //cy.get('[type="checkbox"]').check({force:true})
            //cy.get('[type="checkbox"]').eq(0).click({force:true})
            cy.get('[type="checkbox"]').eq(0).click({force:true})
            
    })
    it.only('lists and drop down',()=>{
        cy.visit('/')
        
        //1
        //cy.get('nav nb-select').click()
        //cy.get('.options-list').contains('Dark').click()
        //cy.get('nav nb-select').should('contain','Dark')
        //cy.get('nb-layout-header nav').should('have.css','background-color','rgb(34, 43, 69)')
    
       //2
       cy.get('nav nb-select').then(dropDown=>{
        cy.wrap(dropDown).click()
        cy.get('.options-list nb-option').each( (listItem,index)=>{
            const itemText=listItem.text().trim()

            const colors = {
                "Light" : "rgb(255, 255, 255)",
                "Dark" : "rgb(34, 43, 69)",
                "Cosmic" : "rgb(50, 50, 89)",
                "Corporate" : "rgb(255, 255, 255)"
            }

            cy.wrap(listItem).click()
            cy.wrap(dropDown).should('contain',itemText)
            cy.get('nb-layout-header nav').should('have.css','background-color',colors[itemText])
           if (index<3)
           {
            cy.wrap(dropDown).click()
           }
            
        })
       })
    
    })

})