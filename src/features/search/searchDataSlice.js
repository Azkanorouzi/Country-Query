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
      state.searchResult = action.payload
    },
  },
})

export default searchSlice
