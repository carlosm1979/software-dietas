import React from 'react'
import { screen } from '@testing-library/react';
import { SearchForm } from '.';
import userEvent from '@testing-library/user-event';

import EdamanController from '../../../../core/controllers/edaman/edamanController';
import { renderWithProviders } from '../../../../test-utils/render';
jest.mock('../../../../core/controllers/edaman/edamanController');

describe('Search form component', () => {

  beforeEach(() => {
    jest.mock('../../../../core/controllers/edaman/edamanController', () => {
      return {
          __esModule: true,
          default: jest.fn().mockImplementation(() => ({
              search: () => {
                return Promise.resolve([{id: '1', description: 'anyDescription'}])
              },
          })),
      };
  });
  });


    it('Given search form loaded When type and accept Then search term',async  () => {
          renderWithProviders(<SearchForm />, {
            preloadedState: {
              search: {
                loading: false,
                items: [],
                error: null,  
              },
            }
          })

          userEvent.type(screen.getByPlaceholderText('search'), 'irrelevant')
          userEvent.click(screen.getByRole('button', {name: 'Search'}))

          expect(await screen.findByText('anyDescription')).toBeInTheDocument()      
    })
})