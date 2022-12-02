import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

//  Redux
import { useSelector, useDispatch } from "react-redux";
import { addProduct } from "../redux/products";

function AddProduct() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [data, setData] = useState({
    title: "",
    description: "",
    price: "",
    image: null,
  });

  const submitProduct = (e) => {
    e.preventDefault();
    axios({
      method: "POST",
      baseURL: "https://fakestoreapi.com",
      url: `/products`,
      data: data,
    }).then((response) => {
      console.log("response:", response.data);
      dispatch(addProduct(response.data));
      navigate("/");
    });
  };

  return (
    <div className="App">
      <h1>Add a new Product</h1>
      <form className="d-flex justify-content-center flex-column">
        <div className="d-flex flex-column">
          <label>Title</label>
          <input
            type="text"
            value={data.title}
            onChange={(e) => {
              setData({ ...data, title: e.target.value });
            }}
          />
        </div>
        <div className="d-flex flex-column">
          <label>Description</label>
          <textarea
            value={data.description}
            onChange={(e) => {
              setData({ ...data, description: e.target.value });
            }}
          />
        </div>{" "}
        <div className="d-flex flex-column">
          <label>Price</label>
          <input
            type="text"
            value={data.price}
            onChange={(e) => {
              setData({ ...data, price: e.target.value });
            }}
          />
        </div>
        <div className="d-flex flex-column">
          <label>Image</label>
          <input
            type={"file"}
            onChange={(e) => {
              setData({
                ...data,
                image: URL.createObjectURL(e.target.files[0]),
              });
            }}
          />
          <img
            src={data.image}
            style={{ objectFit: "cover", height: 100, width: 100 }}
          />
        </div>
        <button onClick={submitProduct}>Submit Product</button>
      </form>
    </div>
  );
}

export default AddProduct;
