import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  categoryId: 0,
  selectedSort: {
    name: 'популярности(убыв)',
    sortProperty: 'rating',
  },
  searchText: '',
  currentPage: 1,
}

const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setCategoryId(state, action) {
      console.log('State:', state)
      console.log('Action:', action)
      console.log('Action.payload:', action.payload)
      state.categoryId = action.payload;
    },
    setSearchText(state, action) {
      state.searchText = action.payload;
    },
    setSelectedSort(state, action) {
      state.selectedSort = action.payload;
    },
    setCurrentPage(state, action) {
      state.currentPage = action.payload
    }
  }
});

export const { setCategoryId, setSearchText, setSelectedSort, setCurrentPage } = filterSlice.actions;

export default filterSlice.reducer;