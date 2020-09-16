describe(`a note`, () => {
  it(`should render inside the layout`, () => {
    cy.visit(`/notes/hello`)
    cy.contains(`Shadowed Site Title`).should(`exist`)
  })

  it(`should render markdown link`, () => {
    cy.contains(`homepage`).click()
  })
})
