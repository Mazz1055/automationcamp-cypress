beforeEach('Login',()=>{
    cy.Login()
})
it('faq01',()=>{
    cy.wait(1000)
cy.get('#butler_faq').click()
cy.get('#question-1').click()
cy.get('#liked-2').click()
cy.get('textarea').click().type('اینپیام برای تست ثبت میشود')
cy.contains('ثبت بازخورد').click()
cy.get('p').should('contain','بازخوردتان ثبت شد و برای بهبود این پاسخ از آن کمک خواهیم گرفت')
})