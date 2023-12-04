describe('Home', () => {
   it('should load page', () => {
      cy.visit('/')
   })

   it('should load page in english', () => {
      cy.visit('/')
      cy.get('header').should('contain', 'Choosen Language: en')
   })

   it('should load page in wrong language', () => {
      cy.visit('/')
      cy.get('header').should('not.contain', 'Choosen Language: en')
   })
})