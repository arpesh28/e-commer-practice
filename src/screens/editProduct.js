import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate, useLocation } from "react-router-dom";

//  Redux
import { useSelector, useDispatch } from "react-redux";
import { addProduct } from "../redux/products";

function EditProduct() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const [data, setData] = useState({
    title: "",
    description: "",
    price: "",
    image: null,
  });

  const submitProduct = (e) => {
    e.preventDefault();
    axios({
      method: "PUT",
      baseURL: "https://fakestoreapi.com",
      url: `/products/${location.state.id}`,
      data: data,
    }).then((response) => {
      dispatch(addProduct(response.data));
      navigate("/");
    });
  };

  useEffect(() => {
    const data = location.state;
    console.log(location.state.id);
    setData({
      title: data.title,
      description: data.description,
      price: data.price,
      image: data.image,
    });
  }, []);

  return (
    <div className="App">
      <h1>Edit Product</h1>
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

export default EditProduct;
