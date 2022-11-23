import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function HomeScreen() {
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
      <ul className="d-flex">
        {products.map((prod, index) => (
          <li className="product-card">
            <div>
              <img src={prod.image} alt="" />
              <h2>{prod.title}</h2>
              <h4>${prod.price}</h4>
              <Link
                to={`/product-details/${prod.id}`}
                className="product-card-button"
              >
                View Details
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HomeScreen;
