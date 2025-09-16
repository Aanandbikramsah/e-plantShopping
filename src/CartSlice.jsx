import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Array of cart items
  },
  reducers: {
    addItem: (state, action) => {
      const plant = action.payload;
      const existingItem = state.items.find(item => item.name === plant.name);

      if (existingItem) {
        existingItem.quantity += 1; // Increase quantity if already exists
      } else {
        state.items.push({ ...plant, quantity: 1 }); // Add new item with quantity 1
      }
    },

    removeItem: (state, action) => {
      const plantName = action.payload;
      state.items = state.items.filter(item => item.name !== plantName);
    },

    updateQuantity: (state, action) => {
      const { name, quantity } = action.payload;
      const item = state.items.find(item => item.name === name);
      if (item) {
        item.quantity = quantity; // Set new quantity
      }
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
