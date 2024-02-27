import { createSlice } from '@reduxjs/toolkit'

const searchSlide = createSlice({
  name: 'search',
  initialState: {
    loading: false
  },
  reducers: {
    search(state, action) {
      state.loading = true;
      return state
    },
  }
})

export const { search } = searchSlide.actions
export const searchReducer =  searchSlide.reducer 