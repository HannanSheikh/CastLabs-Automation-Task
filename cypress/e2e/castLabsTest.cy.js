 /// <reference types="cypress" />

 describe('Recruitment Test Cast Labs',()=>{
    it('Video Functionality test',()=>{
        cy.visit('https://demo.castlabs.com/')
        cy.contains('HLS').click()

        cy.wait(10000)
        cy.get('.pp-ui-overlay.pp-ui-stretch.pp-ui-hidden > div > div').click({force:true})
        cy.get(".pp-ui-bar-range-thumb.pp-ui-bar-range-thumb-background")
        .invoke('attr', 'style', 'left: 70%;')
        .should('have.attr', 'style', 'left: 70%;')
        // .click();

        cy.visit('https://demo.castlabs.com/')
        cy.contains('HLS').click()
        cy.get('.pp-ui-overlay.pp-ui-stretch.pp-ui-hidden > div > div').click({force:true})
        cy.get(".pp-ui-button-22.pp-ui-button.pp-ui-button-options").click()
         cy.contains(" Video ").click()

        cy.get("div[class='pp-ui-options-selection'] div:nth-child(2)").click({force:true})
       
    })       
   
})