import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slice"; // use camelCase for reducer names

export const store = configureStore({
  reducer: {
    cartSlice: cartReducer, // "cart" is the slice name in the store
  },
});
