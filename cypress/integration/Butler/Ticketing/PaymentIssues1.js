beforeEach(()=>{
    cy.Login()
})
it('payment ticket',()=>{
    cy.wait(2000)
        cy.get('#payment_issues').click()
    cy.wait(1000)
    cy.get('#ticketing-1').click()
    cy.contains('ثبت').should('be.disabled')
     cy.get('textarea').type('این تیکت برای تست گزارش میشود،لطفا آن را ببندید')
     cy.contains('ثبت').click().wait(1000)
     cy.get('h3').should('contain','درخواست شما با موفقیت ثبت شد.')
    
})