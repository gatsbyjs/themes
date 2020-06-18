describe(`blog landing page`, () => {
  it(`should display bio image`, () => {
    cy.visit(`/`).get(`picture > img`).should(`exist`)
  })

  it(`should list posts`, () => {
    cy.visit(`/`)
    cy.findByText(/Hello World/i).click()

    cy.url().should(`eq`, `${Cypress.config().baseUrl}/hello-world/`)
  })

  it(`should support skipnav`, () => {
    cy.visit(`/`)
    cy.findByText(/Skip to content/i).click({ force: true })
  })

  it(`should add notes to header`, () => {
    cy.visit(`/`)
    cy.findByText(/Notes/i).click()
    cy.url().should(`eq`, `${Cypress.config().baseUrl}/notes`)
  })
})
