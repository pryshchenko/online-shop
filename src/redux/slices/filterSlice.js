import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  categoryId: 0,
  sort: {
    name: 'популярности(убыв)',
    sortProperty: 'rating',
  },
  searchText: '',
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
      state.sort = action.payload;
    }
  }
});

export const { setCategoryId, setSearchText, setSelectedSort } = filterSlice.actions;

export default filterSlice.reducer;