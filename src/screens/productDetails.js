import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function ProductDetails() {
  const [product, setProduct] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    axios({
      method: "GET",
      baseURL: "https://fakestoreapi.com",
      url: `/products/${id}`,
    }).then((response) => {
      setProduct(response.data);
    });
  }, []);
  console.log("product:", product);
  return (
    <div className="App">
      {product && (
        <>
          <h1>{product.title}</h1>
          <img src={product.image} alt="" />
          <h4>{product.description}</h4>
          <h3>${product.price}</h3>
        </>
      )}
    </div>
  );
}

export default ProductDetails;
