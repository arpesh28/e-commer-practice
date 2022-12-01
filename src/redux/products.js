import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    productDetails: null,
  },
  reducers: {
    productsReceived: (state, action) => {
      state.products = action.payload;
    },
    productDetailsReceived: (state, action) => {
      console.log("action:", action);
      state.productDetails = action.payload;
    },
  },
});

export const { productsReceived, productDetailsReceived } =
  productSlice.actions;

export default productSlice.reducer;
