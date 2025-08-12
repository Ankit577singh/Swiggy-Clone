import { createSlice } from "@reduxjs/toolkit";

const cart = createSlice({
  name: "cartSlice",
  initialState: {
    items: [],
    counts: 0
  },
  reducers: {
    additems: (state, action) => {
      state.items.push({ ...action.payload, quantity: 1 });
      state.counts += 1;
    },

    Increment: (state, action) => {
      const ele = state.items.find((ite) => ite.id === action.payload.id);
      if (ele) {
        ele.quantity += 1;
        state.counts += 1;
      }
    },

    Decrement: (state, action) => {
      const ele = state.items.find((ite) => ite.id === action.payload.id);
      if (ele) {
        if (ele.quantity > 1) {
          ele.quantity -= 1;
          state.counts -= 1;
        } else {
          state.items = state.items.filter(
            (ite) => ite.id !== action.payload.id
          );
          state.counts -= 1;
        }
      }
    }
  }
});

export const { additems, Increment, Decrement } = cart.actions;
export default cart.reducer;
