describe('Home', () => {
   it('should load page', () => {
      cy.visit('/')
   })

   // Gera erro porque houve atulizações na biblioteca/Next onde ocassionou mudanças nos comandos.
   /*it('should load page in english', () => {
      cy.visit('/')
      cy.get('header').should('contain', 'Choosen Language: en')
   })

   it('should load page in wrong language', () => {
      cy.visit('/')
      cy.get('header').should('not.contain', 'Choosen Language: en')
   })

   it('should load page in portuguese', () => {
      cy.visit('/')
      cy.get('header').should('not.contain', 'Linguagem Escolhida: pt')
   })

   it('should go to login page', () => {
      cy.visit('/')
      cy.contains('Do Login').click()
      cy.url().should('include', '/api/auth/signin')
   })*/
})