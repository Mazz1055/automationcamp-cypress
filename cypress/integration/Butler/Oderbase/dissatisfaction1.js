///<reference types="cypress"/>
beforeEach(()=>{
    cy.Order()
})
it('uploadPhoto',()=>{
    cy.get('#support-fab').click({force:true}).then((orderIssue)=>{
        cy.get('#order_issues').click({force:true})})
        const path='support/select-order';
        cy.url().then(($url) => {
            if($url.includes(path)) {
                cy.get('#order-0').click()
            }
        })
    cy.get('#quality_issues').click({force:true})
    cy.get('#product-issue-0').click()
    cy.contains('تاریخ انقضا').click()
    cy.contains('ادامه').click()
    cy.uploadPhoto().then((photoassertion)=>{
        cy.get('#photo-upload').find('img').should('have.attr','alt','تصویر')
       })
    cy.contains('ادامه').should('be.disabled')
    cy.get('textarea').type('این گزارش برای تست ثبت میشود')
    cy.contains('ادامه').click()
    cy.get('#button-RETURN_LOW_QUALITY_PRICE_TO_WALLET').click()
    cy.contains('تایید').click()
    cy.get('p').should('contain','درخواست شما را با فروشگاه بررسی کرده و تا ۱۵ دقیقه دیگر نتیجه ')
    cy.contains('بازگشت به ').click()
        cy.url().should('contain','https://psa.snappfood.ir/')
    
})