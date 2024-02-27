import React, { PropsWithChildren } from 'react'
import { render, RenderOptions } from '@testing-library/react';
import { SearchForm } from '.';
import { Provider } from 'react-redux';
import userEvent from '@testing-library/user-event';
import { AppStore, RootState, buildStore } from '../../../../core/store';

import { http, HttpResponse, delay } from 'msw';

import { setupServer } from 'msw/node';

// This type interface extends the default options for render from RTL, as well
// as allows the user to specify other things such as initialState, store.
interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
  preloadedState?: Partial<RootState>
  store?: AppStore
}

export function renderWithProviders(
  ui: React.ReactElement,
  {
    preloadedState = {},
    // Automatically create a store instance if no store was passed in
    store = buildStore(preloadedState),
    ...renderOptions
  }: ExtendedRenderOptions = {}
) {
  function Wrapper({ children }: PropsWithChildren<{}>): JSX.Element {
    return <Provider store={store}>{children}</Provider>
  }
  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) }
}


export const handlers = [
  http.get('/api/search', async () => {
    await delay(150)
    return HttpResponse.json({items:  [{id: '1', description: 'any'}]})
  })
]

const server = setupServer(...handlers)


describe('search form', () => {
  beforeAll(() => server.listen())

// Reset any runtime request handlers we may add during the tests.
afterEach(() => server.resetHandlers())

// Disable API mocking after the tests are done.
afterAll(() => server.close())


    it('Given search form loaded When type and accept Then search term',async  () => {
          const {getByLabelText, getByRole, findByText} = renderWithProviders(<SearchForm />)

          userEvent.type(getByLabelText('search'))
          userEvent.click(getByRole('button'))


          expect(await findByText('any')).toBeInTheDocument()      
    })
})