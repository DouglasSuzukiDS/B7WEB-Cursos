describe('Login', () => {
   beforeEach(() => {
      cy.visit('/api/auth/signin')
   })

   it('should enter login page', () => {
      cy.title().contains('contain', 'Sign In')
   })

   it('should get an error on login with wrong credentials', () => {
      const email = 'email@email.com'
      const password = '1234'
      // 'Digita' no input
      cy.get('#input-email-for-credentials-provider').type(email)
      cy.get('#input-password-for-credentials-provider').type(password)
      cy.contains('Sign in with Credentials').click()
      cy.contains('Sign in failed')
      cy.url().should('contain', 'error=CredentialsSignin')
   })

   it('should do credentials login properly', () => {
      const email = 'shanks@email.com'
      const password = '1234'
      // 'Digita' no input
      cy.get('#input-email-for-credentials-provider').type(email)
      cy.get('#input-password-for-credentials-provider').type(password)
      cy.contains('Sign in with Credentials').click()
      cy.get('button:contains("Logout")').should('exist')
      // cy.get('button').should('have.text', 'Logout')
   })

   it('should do logout', () => {
      const email = 'shanks@email.com'
      const password = '1234'
      // 'Digita' no input
      cy.get('#input-email-for-credentials-provider').type(email)
      cy.get('#input-password-for-credentials-provider').type(password)
      cy.contains('Sign in with Credentials').click()
      cy.get('button:contains("Logout")').click()
      cy.get('button:contains("Do Login")').should('exist')
   })
})