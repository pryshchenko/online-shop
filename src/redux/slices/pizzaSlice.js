import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios";

export const pizzaFetch = createAsyncThunk(
  'pizza/pizzaFetch',
  async params => {
    const { sortBy, order, category, search, currentPage } = params
    const { data } = await axios.get(`https://64a5eb7500c3559aa9c046a9.mockapi.io/items?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}&${search}`)
    return data
  }
)

const initialState = {
  items: [],
  status: 'loading',
}

const pizzaSlice = createSlice({
  name: 'pizza',
  initialState,
  reducers: {
    setItems(state, action) {
      state.items = action.payload;
    },
  },
  extraReducers: {
    [pizzaFetch.pending]: (state) => {
      state.status = 'loading'
      state.items = []
    },
    [pizzaFetch.fulfilled]: (state, action) => {
      state.items = action.payload
      state.status = 'success'
    }, 
    [pizzaFetch.rejected]: (state) => {
      state.status = 'error'
      state.items = []
    } 
  },
});

export const { setItems } = pizzaSlice.actions;

export default pizzaSlice.reducer;