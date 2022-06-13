it('5- Random number: ✅ CORRECT ', function () {
    const reloadAndCheck = () => {
        cy.get('#result').should('not.be.empty')
            .invoke('text').then(parseInt)
            .then((number) => {
                if (number === 7) {
                    cy.log('Number **7** Found')
                    return
                } else {
                    cy.wait(200)
                    cy.reload()
                    reloadAndCheck()
                }
            })
    }
    cy.visit('randomNumber.html')
    reloadAndCheck()
})