import { configureStore } from "@reduxjs/toolkit";
import { productsApiSlice } from "../Services/eCommerceApi";
import cartReducer from "../features/ProductSlice"

export const store = configureStore({
  reducer: {
      cart:cartReducer,
    api: productsApiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApiSlice.middleware),
});
