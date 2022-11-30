import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    productDetails: null,
  },
  reducers: {
    // blogsReceived: (state, action) => {
    //   state.blogs = action.payload;
    // },
    productsReceived: (state, action) => {
      state.products = action.payload;
    },
  },
});

// this is for dispatch
export const { productsReceived } = productSlice.actions;

// this is for configureStore
export default productSlice.reducer;
