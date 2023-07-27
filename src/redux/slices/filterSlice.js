import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  categoryId: 0,
  selectedSort: {
    name: 'За рейтингом (спад)',
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
    },
    setFilters(state, action) {
      state.categoryId = Number(action.payload.categoryId)
      state.searchText = action.payload.searchText
      state.selectedSort = action.payload.selectedSort
      state.currentPage = Number(action.payload.currentPage)
    }
  }
});

export const { setCategoryId, setSearchText, setSelectedSort, setCurrentPage, setFilters } = filterSlice.actions;

export default filterSlice.reducer;