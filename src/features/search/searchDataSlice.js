import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  selectedCountry: null,
  searchResult: [],
  userCountry: '',
}
const searchSlice = createSlice({
  initialState,
  name: 'search',
  reducers: {
    setSelectedCountry: (state, action) => {
      state.selectedCountry = action.payload
    },
    setSearchTermResult: (state, action) => {
      state.searchResult = action.payload.slice(0, 30)
      if (state.searchResult.length === 0) state.selectedCountry = null
    },
  },
})

export default searchSlice
