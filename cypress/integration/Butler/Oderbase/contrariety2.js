beforeEach('order',()=>{
    cy.Order()
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
    cy.get('#button-DISPLACED').click()
    cy.contains('ادامه').click()
    cy.get('textarea').type('این گزارش برای تست ثبت میشود')
    cy.contains('ادامه').should('be.disabled')
    cy.uploadPhoto().then((photoassertion)=>{
            cy.get('#photo-upload').find('img').should('have.attr','alt','تصویر')
        })
       cy.contains('ادامه').click()
       cy.get('#button-EDIT_DISPLACED_PRICE').click()
       cy.contains('تایید').click()
       cy.get('p').should('contain',
       'تیم پشتیبانی اسنپ‌فود درخواست شما را با فروشگاه بررسی کرده و تا ۱۵ دقیقه دیگر نتیجه را به شما اعلام خواهند کرد.')
       cy.contains('بازگشت به ').click()
        cy.url().should('contain','https://psa.snappfood.ir/')

})