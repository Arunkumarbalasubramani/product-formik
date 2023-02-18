import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import EditForm from "./EditForm";
import CircularProgress from "@mui/material/CircularProgress";

const EditProduct = () => {
  const { productId } = useParams();
  const [productData, setProductData] = useState();

  useEffect(() => {
    const getEditData = async () => {
      const response = await axios.get(
        `https://63d4ac100e7ae91a00a0aac3.mockapi.io/products/${productId}`
      );

      setProductData(response.data);
    };
    getEditData();
  }, [productId]);

  return (
    <div>
      {!productData ? (
        <div className="add-product-container">
          <CircularProgress color="inherit" />
        </div>
      ) : (
        <EditForm productData={productData} />
      )}
    </div>
  );
};

export default EditProduct;
