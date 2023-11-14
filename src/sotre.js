import { configureStore } from '@reduxjs/toolkit'
import searchSlice from './features/search/searchDataSlice'

const store = configureStore({
  reducer: {
    searchSlice: searchSlice.reducer,
  },
})
export const { setSearchTerm } = searchSlice.actions
export default store
