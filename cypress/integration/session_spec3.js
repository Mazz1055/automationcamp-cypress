///<reference types = "cypress"/>

describe('session3' , ()=>{
    // it('keyboard Actions > type' , ()=>{
    //     cy.visit("https://www.google.com/")
    //     cy.get("input[name=q]").type("آموزش سایپرس{enter}")
    // })
    // it('keyboard Actions sequences > type' , ()=>{
    //     cy.visit("https://www.google.com/")
    //     // cy.get("input[name=q]").type("Cypress").type("{backspace}").type("{home}").type("{del}")
    //     cy.get("input[name=q]").type("Cypress").type("{backspace}{home}{del}")
    // })
    // it.only('real press',()=>{

    //     cy.visit("https://www.google.com/")
    //     cy.get("input[name=q]").type("cypress")
    //     .realPress(['Control','A'])
    //     .realPress(['Control','X'])
    //     .realPress(['Control','V'])
    // })
    // it('mouse actions',()=>{
    //     cy.visit("https://play2.automationcamp.ir/")
    //     // cy.get('input[id=male]').click()
    //     // cy.contains("Double-click me").dblclick()
    //     // cy.contains("Your Sample Double Click worked!")
    //     cy.get('[href="contact.html"]').click({ctrlKey:true})
    // })
    //    it('mouse hover test',()=>{
    //        cy.visit("Hover-test.html")
    //        cy.get("#left11").should('not.be.visible')
    //        cy.get("#menu1").trigger('mouseover')
    //        cy.get("#left11").should('be.visible')

    //        cy.get("#left21").should('not.be.visible')
    //        cy.get("#menu2").realHover()
    //        cy.get("#right22").should('be.visible')


    //    })
    // it('long click',()=>{
    //     cy.visit("https://demos.telerik.com/kendo-ui/circular-gauge/index")
    //     cy.get('#onetrust-accept-btn-handler').click()
    //     cy.get('[role=button][title=Increase]').trigger('mousedown',{which: 1})
    //     .wait(1000).trigger('mouseup',{force:true})
    //     cy.get('[role=slider]').invoke("attr",'aria-valuenow')
    //     .should('not.equal','55')

    // })
    // it('drag and drop',()=>{
    //     cy.visit("https://selenium08.blogspot.com/2020/01/drag-drop.html")
    //     cy.get('#draggable')
    // })
    it('drag and drop',()=>{
        cy.visit("https://selenium08.blogspot.com/2020/01/drag-drop.html")
        cy.get('#draggable').trigger('mousedown',{which: 1})
        .get('#droppable')
        .trigger('mousemove')
        .trigger('mouseup',{force:true})
        
    })
})