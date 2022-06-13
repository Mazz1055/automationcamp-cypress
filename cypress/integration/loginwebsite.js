it('loginthroughwebsite',()=>{
    cy.visit("https://website.snappfood.dev/")
    Cypress.on('uncaught:exception', (err, runnable) => {
    
        return false
      })
    cy.contains('ورود').click({force:true})
    cy.get('.sc-dJjZJu > [data-testid="mobile-login-input"]').type('')
    cy.contains('ادامه').click()
    cy.get('.LoginPass__CardContentLoginPassContainer-dhh6nb-0 > .sc-dJjZJu > .sc-hGPAah').type('')
    cy.get('[data-testid="submit-login-modal-btn"]').click()
})