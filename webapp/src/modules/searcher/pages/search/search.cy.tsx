import {  RouterProvider, createMemoryRouter } from 'react-router-dom';
import { routesConfig } from '../../../../App';

describe('Search page', () => {
  it('stepper should default to 0', () => {
    const router = createMemoryRouter(routesConfig, {
      initialEntries: ["/search"],
    });
    cy.mount(<RouterProvider router={router} />)
    
    cy.get('h1').should('have.text', 'Software dietas')
    cy.contains('search')
    cy.screenshot()
  })
})