import App from "./App"

it('stepper should default to 0', () => {
    cy.mount(<App />)
    cy.get('p').should('have.text', 'Software dietas')
    cy.screenshot()
  })