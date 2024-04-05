import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { FetchRestClient } from '../../../core/rest-client/fetch';
import EdamanController from '../../../core/controllers/edaman/edamanController';

export const makeSearch = createAsyncThunk('search/makeSearch', async (searchValue: string) => {
  try {
    const response = await new EdamanController(new FetchRestClient()).search(searchValue)
    return {items: response}
  
  }catch(e) {
    return e
  }
})

const searchSlide = createSlice({
  name: 'search',
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  reducers: {

  },
  extraReducers: builder => {
    builder
      .addCase(makeSearch.pending, (state, action) => {
        state.loading = true
      })
      .addCase(makeSearch.fulfilled, (state, action: any) => {
        state.items = action.payload.items
        state.loading = false
      })
      .addCase(makeSearch.rejected, (state, action) => {
        state.error = (action.payload as any).message
        state.items = []
        state.loading = false
      })
  }
})

export const searchReducer =  searchSlide.reducer 