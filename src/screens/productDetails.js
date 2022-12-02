import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

//  Redux
import { useSelector, useDispatch } from "react-redux";
import { productDetailsReceived } from "../redux/products";

function ProductDetails() {
  const dispatch = useDispatch();
  const productDetails = useSelector((state) => state.products.productDetails);

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios({
      method: "GET",
      baseURL: "https://fakestoreapi.com",
      url: `/products/${id}`,
    }).then((response) => {
      dispatch(productDetailsReceived(response.data));
      // setProduct(response.data);
      setLoading(false);
    });
  }, []);
  console.log("loading:", loading);
  return (
    <div className="App">
      {loading ? (
        <h1 className="d-flex align-items-center justify-content-center">
          Loading...
        </h1>
      ) : (
        productDetails && (
          <>
            <h1>{productDetails.title}</h1>
            <img src={productDetails.image} alt="" />
            <h4>{productDetails.description}</h4>
            <h3>${productDetails.price}</h3>
          </>
        )
      )}
    </div>
  );
}

export default ProductDetails;
