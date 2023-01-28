import axios from "axios";
import React, { useEffect, useState } from "react";
import List from "./List";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

const ProductsList = () => {
  const [productData, setProductData] = useState([]);
  useEffect(() => {
    const getProductData = async () => {
      const response = await axios.get(
        `https://63d4ac100e7ae91a00a0aac3.mockapi.io/products`
      );
      setProductData(response.data);
    };
    getProductData();
  }, []);
  const navigate = useNavigate();
  return (
    <div className="product-container">
      <h1 className="heading">Stock List</h1>
      <div className="addNew-Button">
        <Button
          variant="contained"
          size="large"
          onClick={() => {
            navigate("/products/add");
          }}
        >
          Add a New Product
        </Button>
      </div>
      <div className="procduct-list">
        <List productData={productData} />
      </div>
    </div>
  );
};

export default ProductsList;
