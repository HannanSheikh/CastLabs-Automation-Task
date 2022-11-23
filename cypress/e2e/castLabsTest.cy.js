 /// <reference types="cypress" />

 describe('Recruitment Test Cast Labs',()=>{
    it('Video Functionality test',()=>{
        // open the web page
        cy.visit('https://demo.castlabs.com/')
        //select the HLS video
        cy.contains('HLS').click()

        cy.wait(10000)
        //seek the video for 70% 
        cy.get('.pp-ui-overlay.pp-ui-stretch.pp-ui-hidden > div > div').click({force:true})
        cy.get(".pp-ui-bar-range-thumb.pp-ui-bar-range-thumb-background")
        .invoke('attr', 'style', 'left: 70%;')
        .should('have.attr', 'style', 'left: 70%;')
        
        //Clicking on 3 dots button to change resolution
        cy.get("[class='pp-ui-button-22 pp-ui-button pp-ui-button-options']").click()
        cy.get("[class='pp-ui-clickable']").eq(3).then(videobutton=>{
        cy.wrap(videobutton).click()
        cy.wrap(videobutton).find("span").should("contain"," 960x540 @ 2.48 Mbps " )
        })
  }) 
})