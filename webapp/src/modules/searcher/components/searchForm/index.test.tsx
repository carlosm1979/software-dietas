import React from 'react'
import { screen } from '@testing-library/react';
import { SearchForm } from '.';
import userEvent from '@testing-library/user-event';

import EdamanController from '../../../../core/controllers/edaman/edamanController';
import { renderWithProviders } from '../../../../test-utils/render';
jest.mock('../../../../core/controllers/edaman/edamanController');
const MockedEdamanController = EdamanController as jest.Mock<EdamanController>;

describe('Search form component', () => {

  beforeEach(() => {
    MockedEdamanController.mockImplementation(() => {
      return {
        search: () => {
          return Promise.resolve({items: [{id: '1', description: 'anyDescription'}]})
        },
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

          userEvent.type(screen.getByLabelText('search'), 'irrelevant')
          userEvent.click(screen.getByRole('button'))

          expect(await screen.findByText('anyDescription')).toBeInTheDocument()      
    })
})