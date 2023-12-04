import App from "./App"

it('stepper should default to 0', () => {
    cy.mount(<App />)
    cy.get('p').should('have.text', 'Edit src/App.tsx and save to reload.')
    cy.screenshot()
  })