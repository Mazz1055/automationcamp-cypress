beforeEach(()=>{
    cy.Order()
})
it('EditAddress',()=>{

    cy.get('#support-fab').click({force:true}).then((orderIssue)=>{
        cy.get('#order_issues').click({force:true})
    })
    const path='support/select-order';
    cy.url().then(($url) => {
        if($url.includes(path)) {
            cy.get('#order-0').click()
        }
    })
    cy.get('#edit_address').click().then((viewAdresses)=>{
        cy.wait(5000)
        cy.contains('جردن - پارک ملت، مهرداد، تقاطع سید رضا سعیدی، test').click()
    })
    
    cy.contains('ثبت').click()
    cy.get('h3').should('contain','آدرس تحویل سفارش با موفقیت تغییر یافت.')
    cy.contains('بازگشت به ').click()
        cy.url().should('contain','https://psa.snappfood.ir/')
    
    
})