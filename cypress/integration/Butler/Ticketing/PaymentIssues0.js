beforeEach(()=>{
    cy.Login()
})
it('payment ticket',()=>{
    cy.wait(2000)
        cy.get('#payment_issues').click()
    cy.wait(1000)
    cy.get('#ticketing-0').click()
     cy.get('textarea').type('این تیکت برای تست گزارش میشود،لطفا آن را ببندید')
     cy.get('._3VA9S').should('be.disabled')
     cy.get('#select-transaction').click()
     cy.get('#select-transaction-modal').should('be.visible')
     cy.get('#transaction-0').click()
     cy.get('._3VA9S').should('be.enabled')
     cy.get('._3VA9S').click()
     cy.wait(1000)
     cy.get('h3').should('contain','درخواست شما با موفقیت ثبت شد.')
    
})