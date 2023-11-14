import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  searchTerm: '',
}
const searchSlice = createSlice({
  initialState,
  name: 'search',
  reducers: {
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload
    },
  },
})

export default searchSlice
