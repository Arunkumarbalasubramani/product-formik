import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import HomeIcon from "@mui/icons-material/Home";
const InterPage = () => {
  const navigate = useNavigate();

  return (
    <div className="inter-page-container">
      <h1 className="heading">Producted Added Successfully</h1>
      <div className="action-btn">
        <Button
          variant="contained"
          endIcon={<HomeIcon />}
          onClick={() => navigate("/")}
        >
          Back to Home
        </Button>
      </div>
    </div>
  );
};

export default InterPage;
