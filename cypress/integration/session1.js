/// <reference types= "cypress" />
describe('suite 1', ()=>{
    it('1 - open google',()=>{
        cy.visit("https://google.com")
        cy.get("input[name=q]").type("cypress{enter}")
        })
        
        it('2 - visit cypress',function(){
            cy.visit("https://cypress.io")
            cy.title().should('eq',"JavaScript End to End Testing Framework | cypress.io testing tools")
            cy.title().should('include',"JavaScript")
        })
})