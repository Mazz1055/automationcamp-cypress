///<reference types="cypress"/>
beforeEach(()=>{
    cy.Order()
})
it('Confirmation of presence at the origin',()=>{
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
cy.get('#button-MISSING').click()
cy.contains('ادامه').click()
cy.get('textarea').type('این گزارش برای تست ثبت میشود')
cy.contains('ادامه').click()
cy.get('#button-SEND_MISSING_PRODUCT').click()
cy.contains('تایید').click()
cy.contains('آیا تا زمان تحویل اقلام در آدرس ثبت شده حضور خواهید داشت؟').should('be.visible')
cy.contains('بله، ارسال شود').click({force:true})
cy.contains('بازگشت به اسنپ‌فود').should('be.visible')
cy.contains('بازگشت به ').click()
        cy.url().should('contain','https://psa.snappfood.ir/')
})