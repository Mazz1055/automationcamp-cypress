beforeEach(()=>{
    cy.Login()
})
it('cancel',()=>{
    cy.wait(2000)
    cy.get('#order_issues').click({force:true})

    const path='support/select-order';
    cy.url().then(($url) => {
        if($url.includes(path)) {
            cy.get('#order-0').click()
        }
    })
    cy.get('#cancel_order').click()
    const path2='support/failure';
    cy.url().then(($url) => {
        if($url.includes(path2)) {
            cy.get('p').should('contain','متأسفانه در حال حاضر این قابلیت برای شما در دسترس نیست')
            cy.pause()
        } })
    cy.get('#button-submit').should('be.disabled')
    cy.get('#button-OTHER').click()
    cy.get('#button-submit').click()
    cy.get('p').should('contain','مبلغ پرداختی به اعتبار')
    cy.contains('بازگشت به ').click()
        cy.url().should('contain','https://psa.snappfood.ir/')
})