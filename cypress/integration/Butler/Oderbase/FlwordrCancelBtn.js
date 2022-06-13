///<reference types = "cypress"/>
it('order',()=>{
  cy.visit("https://psa.snappfood.ir/restaurant/pv1l4d")
    cy.wait(1000)
    cy.get('#submitLocation').should('be.visible').click({force:true})
    // cy.wait(2000)
    cy.get('#productId_7887571').children(7).contains("افزودن").click({force:true})
    cy.contains("تکمیل خرید").click({force:true})
    cy.get('.introjs-skipbutton').click()
    cy.get('#basketCheckout-login').click()
    cy.get('#phoneNumber-input').click().type('09100048772')
    cy.get('#submitPhoneNumber').click()
    cy.get('#password-input').click().type("123456")
    cy.get('#submitPassword').click()
    cy.get('#basketCheckout-continue').click()
    cy.contains("انتخاب آدرس").click({force:true})
    cy.get('div[data-test-id=activeAddress]').click()
        .then((findAddress)=>{
            cy.get('._2_YqZ').click({force:true})
        })
    cy.get('#payment-submitOrder').click()
    cy.get('._2sYuk').click({force:true})
    cy.contains("لغو سفارش").click({force:true})
    Cypress.on('uncaught:exception', (err, runnable) => {
        
        return false
      })
    cy.contains("تاخیر فروشگاه در تایید سفارش").click()
    cy.get('._1ee-g').click()
    cy.get('p').should('contain','مبلغ پرداختی به اعتبار')
    cy.contains('بازگشت به ').click()
        cy.url().should('contain','https://psa.snappfood.ir/')
})