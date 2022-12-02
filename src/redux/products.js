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
      state.productDetails = action.payload;
    },
    addProduct: (state, action) => {
      console.log("action:", action.payload);
      state.products = [...state.products, action.payload];
    },
  },
});

export const { productsReceived, productDetailsReceived, addProduct } =
  productSlice.actions;

export default productSlice.reducer;
