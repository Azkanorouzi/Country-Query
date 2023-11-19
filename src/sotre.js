import { configureStore } from '@reduxjs/toolkit'
import searchSlice from './features/search/searchDataSlice'

const store = configureStore({
  reducer: {
    searchSlice: searchSlice.reducer,
  },
})
export const { setSearchTerm, setSelectedCountry, setSearchTermResult } =
  searchSlice.actions
export default store
