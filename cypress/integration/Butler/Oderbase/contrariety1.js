beforeEach('order',()=>{
    cy.Order2()
})
it('Contrariety',()=>{
    cy.get('#support-fab').click({force:true}).then((orderIssue)=>{
        cy.get('#order_issues').click({force:true})
    })
    const path='support/select-order';
    cy.url().then(($url) => {
        if($url.includes(path)) {
            cy.get('#order-0').click()
        }
    })
    cy.get('#contrariety_issues').click({force:true})
cy.get('#product-issue-0').click()
cy.get('#button-INCORRECT_ITEM').click()
cy.contains('۲ عدد').click()
cy.get('._3niBC').should('be.visible')
    cy.contains('ادامه').click()
    cy.get('textarea').type('این گزارش برای تست ثبت میشود')
    cy.contains('ادامه').click()
    cy.get('#button-RETURN_MISSING_PRICE_TO_WALLET').click()
    cy.contains('تایید').click()
    cy.get('p').should('contain',
    'تیم پشتیبانی اسنپ‌فود درخواست شما را با فروشگاه بررسی کرده و تا ۱۵ دقیقه دیگر نتیجه را به شما اعلام خواهند کرد.')
    cy.contains('بازگشت به ').click()
        cy.url().should('contain','https://psa.snappfood.ir/')
})