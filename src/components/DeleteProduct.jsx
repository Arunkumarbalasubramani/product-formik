import axios from "axios";
import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const DeleteProduct = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    const deleteData = async () => {
      const response = await axios
        .delete(
          `https://63d4ac100e7ae91a00a0aac3.mockapi.io/products/${productId}`
        )
        .then(() => navigate("/"));
    };
    deleteData();
  }, [productId]);

  return (
    <div className="delete-page-container">
      <h1 className="heading">Producted Deleted Successfully</h1>
    </div>
  );
};

export default DeleteProduct;
