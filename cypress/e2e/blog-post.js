describe(`hello world post`, () => {
  it(`should display date`, () => {
    cy.visit(`/hello-world/`)
    cy.findByText(`April 15, 2019`).should(`exist`)
  })

  it(`should display bio`, () => {
    cy.visit(`/hello-world/`)
    cy.get(`picture > img`).should(`exist`)
  })
})
