import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { searchReducer } from '../../modules/searcher/store/reducer'

const rootReducer = combineReducers({
  search: searchReducer,
})

export const buildStore = (preloadedState?: Partial<any>) =>  configureStore({
  reducer: rootReducer,
  preloadedState
})

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof buildStore>
export type AppDispatch = AppStore['dispatch']