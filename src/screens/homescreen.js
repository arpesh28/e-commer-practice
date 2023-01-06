import React, { Fragment, useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import Card from "./card";
import axios from "axios";

//  Redux
import { useSelector, useDispatch } from "react-redux";
import { productsReceived } from "../redux/products";
function HomeScreen() {
  const [loading, setLoading] = useState("Product");
  const [page, setPage] = useState(1);

  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products.data);

  const counterRef = useRef(0);
  const inputRef = useRef();
  const [name, setName] = useState("");
  // const [count, setCount] = useState(0);

  // useEffect(() => {
  //   setLoading(true);
  //   axios({
  //     method: "GET",
  //     baseURL: "https://api.storerestapi.com",
  //     url: `/products}`,
  //   }).then((response) => {
  //     dispatch(productsReceived(response.data.data));
  //     // setProduct(response.data);
  //     setLoading(false);
  //   });
  // }, [page]);
  useEffect(() => {
    counterRef.current = counterRef.current + 1;
    // setCount(count + 1);
  });
  console.log("ref:", inputRef);
  return (
    <>
      <div className={`App container`}>
        <h1>Products</h1>
      </div>
      <input
        ref={inputRef}
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <h1>My name is {name}</h1>

      <h1>I rendered {counterRef.current} times.</h1>
      <button
        onClick={(e) => {
          inputRef.current.focus();
        }}
      >
        Focus
      </button>
    </>
  );
}

export default HomeScreen;
