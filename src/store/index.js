import { configureStore } from '@reduxjs/toolkit';
import uiSlice from './ui-slice';
import cartSlice from './cart-slice';

const store = configureStore({
  reducer: { ui: uiSlice.reducer, cart: cartSlice.reducer },
});

export const { toggle, showNotification } = uiSlice.actions;

export const { addItem, removeItem, replaceItem } = cartSlice.actions;

export default store;
