describe('blog landing page', () => {
    it('should display bio image', () => {
        cy.visit('/')
          .get('picture > img')
          .should('be.visible')
    })
})