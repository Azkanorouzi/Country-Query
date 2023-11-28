import { configureStore } from '@reduxjs/toolkit'
import searchSlice from './features/search/searchDataSlice'

const store = configureStore({
  reducer: {
    searchSlice: searchSlice.reducer,
  },
})
export const {
  setSelectedCountry,
  setSearchTermResult,
  addBookmarks,
  deleteBookmark,
} = searchSlice.actions
export default store
