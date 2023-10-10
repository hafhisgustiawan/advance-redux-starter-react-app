import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: { items: [], totalQuantity: 0, changed: false },
  reducers: {
    // DONT PERFORM SIDE EFFECT OR ASYNC FUNC IN REDUCER
    addItem: (state, action) => {
      const newItem = action.payload; // contain data
      const existingItem = state.items.find((item) => item.id === newItem.id);
      state.changed = true;

      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          name: newItem.name,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
        });
      } else {
        existingItem.quantity = existingItem.quantity + 1;
        existingItem.totalPrice = existingItem.totalPrice + existingItem.price;
      }
    },
    removeItem: (state, action) => {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      if (!existingItem) return;
      state.changed = true;

      if (existingItem.quantity === 1) {
        state.items = state.items.filter((el) => el.id !== id);
      } else {
        existingItem.quantity--;
        existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
      }
    },
    replaceItem: (state, action) => {
      // disini gabisa langsung set state = action.payload
      state.items = action.payload.items || [];
      state.totalQuantity = action.payload.totalQuantity || 0;
    },
  },
});

export default cartSlice;
