import { configureStore } from '@reduxjs/toolkit'
import { searchReducer } from '../../modules/searcher/store/reducer'

export const buildStore = () =>  configureStore({
  reducer: {
    search: searchReducer,
  }
})