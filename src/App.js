import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import axios from "axios";
import Homescreen from "./screens/homescreen";
import ProductDetails from "./screens/productDetails";
import AddProduct from "./screens/addProduct";
import EditProduct from "./screens/editProduct";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homescreen />} />
      <Route path="/product-details/:id" element={<ProductDetails />} />
      <Route path="/add-product" element={<AddProduct />} />
      <Route path="/edit-product" element={<EditProduct />} />
    </Routes>
  );
}

export default App;
