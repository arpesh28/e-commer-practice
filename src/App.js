import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import axios from "axios";
import Homescreen from "./screens/homescreen";
import ProductDetails from "./screens/productDetails";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homescreen />} />
      <Route path="/product-details/:id" element={<ProductDetails />} />
    </Routes>
  );
}

export default App;
