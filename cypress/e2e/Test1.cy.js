describe('smoke testing', () => {
    it('verify search menu', () => {
      cy.visit('https://practicetestautomation.com/')
      cy.get('#menu-item-20').click()
      cy.url().should('include','practice')
      cy.go('back').
      cy.get('#menu-item-21').click()
      cy.url().should('include','courses') 
      cy.get('#selenium-webdriver-with-java-for-beginners').eq(0).invoke('removeAttr','target').click()
      cy.url().should('contains','selenium-webdriver')     
    })
  })