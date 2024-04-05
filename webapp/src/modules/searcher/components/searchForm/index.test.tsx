import React from 'react'
import { screen } from '@testing-library/react';
import { SearchForm } from '.';
import userEvent from '@testing-library/user-event';

import EdamanController from '../../../../core/controllers/edaman/edamanController';
import { renderWithProviders } from '../../../../test-utils/render';
import { FetchRestClient } from '../../../../core/rest-client/fetch';
import { Food } from '../../models/food';
jest.mock('../../../../core/controllers/edaman/edamanController');
const MockedEdamanController = EdamanController as jest.Mock<EdamanController>;

describe('Search form component', () => {

  beforeEach(() => {
    MockedEdamanController.mockImplementation(() => {
      return {
        search: () => {
          return Promise.resolve([new Food({id: '1', description: 'anyDescription', fat: 0, fiber: 0, kcal: 0, netCarbohydrates:0 }) ])
        },
        restClient: () => new FetchRestClient()
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