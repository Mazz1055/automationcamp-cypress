// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import 'cypress-file-upload';
Cypress.Commands.add('Order',()=>{
    cy.visit("http://psa.snappfood.ir/restaurant/pv1l4d")
     cy.get('#submitLocation').click()
    cy.get('#productId_7887571').children(7).contains("افزودن").dblclick({force:true})
    cy.contains("تکمیل خرید").click({force:true})
    cy.get('.introjs-skipbutton').click()
    cy.get('#basketCheckout-login').click()
    cy.get('#phoneNumber-input').click().type('09100048772')
    cy.get('#submitPhoneNumber').click()
    cy.get('#password-input').click().type("123456")
    cy.get('#submitPassword').click()
    cy.get('#basketCheckout-continue').click({force:true})
    cy.wait(1000)
    cy.contains("انتخاب آدرس").click({force:true})
    cy.get('div[data-test-id=activeAddress]').click({force:true})
    .then((findAddress)=>{
        cy.contains('تایید').click({force:true})
    })
    cy.get('#payment-submitOrder').click({force:true})
    cy.contains('صفحه اصلی').click({force:true})

})
Cypress.Commands.add('Login',()=>{
    cy.visit("https://psa.snappfood.ir/support")
    cy.get('#order_issues').click({force:true})
    cy.get('#phoneNumber-input').click().type('09100048772')
    cy.get('#submitPhoneNumber').click()
    cy.get('#password-input').click().type("123456")
    cy.get('#submitPassword').click()

})

Cypress.Commands.add('Order2',()=>{
    cy.visit("https://psa.snappfood.ir/restaurant/pv1l4d")
        cy.get('#submitLocation').click()
    cy.get('#productId_7887571').children(7).contains("افزودن").click({force:true}).wait(500)
    cy.get('#plus-button > svg > g > [fill="#D8D8D8"]').dblclick({force:true})
    cy.contains("تکمیل خرید").click({force:true})
    cy.get('.introjs-skipbutton').click()
    cy.get('#basketCheckout-login').click()
    cy.get('#phoneNumber-input').click().type('09100048772')
    cy.get('#submitPhoneNumber').click()
    cy.get('#password-input').click().type("123456")
    cy.get('#submitPassword').click()
    cy.get('#basketCheckout-continue').click({force:true})
    cy.wait(1000)
    cy.contains("انتخاب آدرس").click({force:true})
    cy.get('div[data-test-id=activeAddress]').click({force:true})
    .then((findAddress)=>{
        cy.contains('تایید').click({force:true})
    })
    cy.get('#payment-submitOrder').click({force:true})
    cy.contains('صفحه اصلی').click({force:true})

})
Cypress.Commands.add('uploadPhoto',function(){
    const filepath='testPhoto.jpg'
        cy.get('input[type="file"]').attachFile(filepath)
})

