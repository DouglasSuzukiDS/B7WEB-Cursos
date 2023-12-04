describe('Sobre', () => {
   beforeEach(() => {
      cy.visit('/')
   })

   it('shoud enter about page', () => {
      cy.title().should('contain', 'About')
   })

   it('should incremet count on Raise button', () => {
      cy.get('main h1').then(($h1) => {
         const beforeCount = $h1.text().match(/\((\d+)\)/i)?.at(1)

         if(beforeCount) {
            cy.contains('Raise').click()

            cy.get('main h1').then(($h1) => {
               const afterCount = $h1.text().match(/\((\d+)\)/i)?.at(1)

               if(afterCount) {
                  const after = parseInt(afterCount)
                  const before = parseInt(beforeCount)
                  expect(after).to.be.equal(before + 1)
               }
            })
         }
      })
   })
})