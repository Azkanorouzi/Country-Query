import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  selectedCountry: null,
  searchResult: [],
  userCountry: '',
  bookmarks: JSON.parse(localStorage?.getItem('bookmarks')) ?? [],
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
    addBookmarks: (state, action) => {
      state.bookmarks = [...state.bookmarks, action.payload]
      localStorage.setItem('bookmarks', JSON.stringify([...state.bookmarks]))
    },
    deleteBookmark: (state, action) => {
      state.bookmarks = state.bookmarks.filter(
        (bookmark) => bookmark?.name?.common !== action.payload?.name?.common
      )
    },
  },
})

export default searchSlice
