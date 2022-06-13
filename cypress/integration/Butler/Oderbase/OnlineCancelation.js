beforeEach(()=>{
    cy.Order()
})
it('cancel',()=>{
    cy.get('#support-fab').click({force:true}).then((orderIssue)=>{
        cy.get('#order_issues').click({force:true})
    })
    const path='support/select-order';
    cy.url().then(($url) => {
        if($url.includes(path)) {
            cy.get('#order-0').click()
        }
    })
    cy.get('#cancel_order').click()
    cy.get('#button-OTHER').click()
    cy.get('#button-submit').click()
    cy.get('p').should('contain','مبلغ پرداختی به اعتبار')
    cy.contains('بازگشت به ').click()
        cy.url().should('contain','https://psa.snappfood.ir/')
})