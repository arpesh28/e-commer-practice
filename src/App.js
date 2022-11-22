import logo from "./logo.svg";
import "./App.css";
import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios({
      method: "GET",
      baseURL: "https://fakestoreapi.com",
      url: "/products",
    }).then((response) => {
      setProducts(response.data);
    });
  }, []);
  return (
    <div className="App">
      <h1>Products</h1>
      <ul>
        {products.map((prod, index) => (
          <li>
            <div>
              <img src={prod.image} alt="" />
              <h2>{prod.title}</h2>
              <h4>${prod.price}</h4>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
