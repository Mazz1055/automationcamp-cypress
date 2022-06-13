/// <reference types = "cypress"/>
it('login',()=>{
    cy.visit("https://psa.snappfood.ir//support")
    cy.get('#order_issues').click()
    cy.get('#phoneNumber-input').type("09100048772")
    cy.get('#submitPhoneNumber').click()
    cy.get('#password-input').click().type("123456")
    cy.get('#submitPassword').click()
    cy.url().should('eq',"https://psa.snappfood.ir/support")

    
})