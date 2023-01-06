import React, { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";

//  Redux
import { useSelector, useDispatch } from "react-redux";
import { productsReceived } from "../redux/products";

function Card({ data }) {
  return (
    <div className={`card col-4`}>
      <h1>{data.title}</h1>
      <p>{data.description}</p>
      <p>{data.price}</p>
    </div>
  );
}

export default Card;
