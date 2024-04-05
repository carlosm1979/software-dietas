import React from 'react'
import {  RouterProvider, createMemoryRouter } from 'react-router-dom';
import { routesConfig } from '../../App';

describe('Dashboard page', () => {
  it('stepper should default to 0', () => {
    const router = createMemoryRouter(routesConfig, {
      initialEntries: ["/"],
    });
    cy.mount(<RouterProvider router={router} />)
    
    cy.get('h1').should('have.text', 'Software dietas')
    cy.contains('Dashboard')
    cy.screenshot()
  })
})