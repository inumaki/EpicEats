import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addToCart: (state, action) => {
      state.items.push(action.payload);
      console.log(action.payload);
    },
    removeItems: (state, action) => {
      state.items = state.items.filter(
        (item) => action.payload.itemName != item.itemName
      ); //@todo replace it with id or unique specifier
    },
  },
});

export const { addToCart, removeItems } = cartSlice.actions;

export default cartSlice.reducer;
