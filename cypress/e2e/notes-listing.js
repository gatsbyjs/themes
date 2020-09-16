describe(`notes listing page`, () => {
  it(`should render a list of notes`, () => {
    cy.visit(`/notes/`)
    cy.findByText(`example-dir`).should(`exist`)
  })

  it(`should render inside the layout`, () => {
    cy.contains(`Shadowed Site Title`).should(`exist`)
  })
})
