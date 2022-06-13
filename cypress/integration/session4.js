///<reference types = "cypress" />
// it('Async & Sync',()=>{
//     cy.visit("https://www.wikipedia.org/")
//     cy.get('#js-link-box-en').click()
//     cy.url().should('contain','Main_Page')
//     console.log("test is finished")
// } )
// it('assert text field', ()=>{
//     cy.visit("https://play2.automationcamp.ir/")
//     cy.get('#fname').type("Mazz")
    

// })
// it('Api assertion',()=>{
//     fetch("https://api.spacexdata.com/v3/missions")
//     .then((Response)=>Response.json())
//     .then((data)=>{
//         console.log(data)
//     })
// })
// it('Random Number result = false',()=>{
//     cy.visit("randomNumber.html")
//     let found7=false
//     while(!found7){
//         cy.get('#result').should('not.be.empty')
//         .invoke('text').then(parseInt)
//         .then((number)=>{
//             if(nember === 7){
//                 found7=true
//                 cy.log('number **7** found')
//             }else{
//                 cy.wait(500, {log:false})
//                 cy.reload()
//             }
//         })}

// })
it('found No 7 result = true' , ()=>{
    const reloadAndcheck= ()=>{
        cy.get('#result').should('not.be.empty')
        .invoke('text').then(parseInt)
        .then((number)=>{
            if(number === 7){
                cy.log('number **7** found')
                return
            }else{
                cy.wait(200)
                cy.reload()
                reloadAndcheck()
            }
        })

    }
    cy.visit('randomNumber.html')
    reloadAndcheck()
})
it.only('assert text field', ()=>{
    cy.visit("https://play2.automationcamp.ir/")
    cy.get('#fname').type("Mazz").then((el)=>{
       let input_value = el.val()
       expect(input_value).to.eq("maz")
    })

})
