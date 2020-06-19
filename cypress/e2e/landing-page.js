describe(`blog landing page`, () => {
  it(`should display bio image`, () => {
    cy.visit(`/`).get(`picture > img`).should(`exist`)
  })

  it(`should list posts`, () => {
    cy.findByText(/Hello World/i).click()

    cy.url().should(`eq`, `${Cypress.config().baseUrl}/hello-world/`)
  })

  it(`should support skipnav`, () => {
    cy.visit(`/`)
    cy.findByText(/Skip to content/i).click({ force: true })
  })

  it(`should add notes to header`, () => {
    cy.findByText(/Notes/i).click()
    cy.url().should(`eq`, `${Cypress.config().baseUrl}/notes`)
  })

  it('should shadow styles', () => {
    cy.visit(`/`)
    cy.findByText(/New Beginnings/i)
    .should('have.css', 'color')
    .and('eq', 'rgb(255, 99, 71)')
  })
})
