import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './CartSlice';

// Create Redux store with cart slice
const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default store;
