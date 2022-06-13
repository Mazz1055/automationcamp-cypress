beforeEach('Login',()=>{
    cy.Login()
})
it('faq01',()=>{
    cy.wait(1000)
cy.get('#butler_faq').click()
cy.get('#question-0').click()
cy.get('#disliked-1').click()
cy.get('div[class=_3D3bK]').should('contain','از اینکه این پاسخ به شما کمک کرد بسیار خوشحالیم')
})