import React from 'react'
import {  RouterProvider, createMemoryRouter } from 'react-router-dom';
import { routesConfig } from '../../../../App';
import { Provider } from 'react-redux';
import { buildStore } from '../../../../core/store';

describe('Search page', () => {
  it('stepper should default to 0', () => {
    const router = createMemoryRouter(routesConfig, {
      initialEntries: ["/search"],
    });
    cy.mount(<Provider store={buildStore()}><RouterProvider router={router} /></Provider> )
    
    cy.get('h1').should('have.text', 'Software dietas')
    cy.get('h2').should('have.text', 'Search')
    cy.screenshot()
  })
})