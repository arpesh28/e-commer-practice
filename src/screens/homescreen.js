import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

//  Redux
import { useSelector, useDispatch } from "react-redux";
import { productsReceived } from "../redux/products";

function HomeScreen() {
  const productState = useSelector((state) => state.products);
  const dispatch = useDispatch();

  console.log("products:", productState.products);

  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios({
      method: "GET",
      baseURL: "https://fakestoreapi.com",
      url: "/products",
    }).then((response) => {
      dispatch(productsReceived(response.data));
      // setProducts(response.data);
    });
  }, []);
  const obj = { name: "arpesh", designation: "dev" };
  console.log("local:", localStorage.getItem("theme"));
  const theme = localStorage.getItem("theme");
  console.log("theme:", theme);
  return (
    <div className={`App ${theme === "dark" ? "dark" : "light"}`}>
      <h1>
        Products <Link to="/add-product">Create a new product</Link>
      </h1>
      <button
        onClick={(e) => {
          // if (theme === "light" || theme === null) {
          //   localStorage.setItem("theme", "dark");
          // } else {
          //   localStorage.setItem("theme", "light");
          // }
          localStorage.setItem("obj", JSON.stringify(obj));
          // window.location.reload();
        }}
      >
        Toggle Theme
      </button>{" "}
      <button
        onClick={(e) => {
          // window.location.reload();
          const obj2 = localStorage.getItem("obj");
          const convertedObj = JSON.parse(obj2);
          console.log("obj", convertedObj);
        }}
      >
        Get obj
      </button>
      <ul className="d-flex">
        {productState.products.map((prod, index) => (
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
