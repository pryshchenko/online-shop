import { createSlice } from "@reduxjs/toolkit"
import { getCartFromLS } from '../../utils/getCartFromLS'

const {items, totalPrice} = getCartFromLS()

const initialState = {
  items,
  totalPrice,
  finishShopping: false,
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
      const findItem = state.items.find(obj => obj.id === action.payload.id)
      if(findItem) {
        findItem.count ++
      } else {
        state.items.push({
            ...action.payload,
            count: 1
          })
        state.finishShopping = 0;
      }

      state.totalPrice = state.items.reduce((sum, obj) => {
            return (obj.price * obj.count) + sum
          }, 0)
    },
    removeItem(state, action) {
      const findItem = state.items.find(obj => obj.id === action.payload)
        findItem.count--
        if (findItem.count === 0) {
          state.items = state.items.filter(obj => obj.id !== action.payload)
        }

      state.totalPrice = state.items.reduce((sum, obj) => {
        return (obj.price * obj.count) + sum
      }, 0)
    },
    removeItemCart(state, action) {
      const findItem = state.items.find(obj => obj.id === action.payload)
      if (findItem.count > 1) {
        findItem.count--
      }
      
      state.totalPrice = state.items.reduce((sum, obj) => {
        return (obj.price * obj.count) + sum
      }, 0)
    },

    removeItems(state, action) {
      state.items = state.items.filter(obj => obj.id !== action.payload)

      state.totalPrice = state.items.reduce((sum, obj) => {
        return (obj.price * obj.count) + sum
      }, 0)
    },
    clearItems(state) {
      state.items = []
      
      state.totalPrice = 0
     },

     setFinishShopping(state, action) {
      state.finishShopping = action.payload;
     }
  }
});

export const { addItem, removeItem, clearItems, removeItems, removeItemCart, setFinishShopping } = cartSlice.actions;

export default cartSlice.reducer;