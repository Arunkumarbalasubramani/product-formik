import { useFormik } from "formik";
import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import Alert from "react-bootstrap/Alert";
import axios from "axios";

const productValidationSchema = yup.object({
  productName: yup.string().required("Fill This Product Name"),
  productID: yup
    .string("Product Id is Manadatory")
    .matches(/^[0-9]+$/, "Must be only digits")
    .min(4, " Must be Four Digits")
    .max(4, " Must be Four Digits"),
  hsncode: yup
    .string("Must be only digits")
    .matches(/^[0-9]+$/, "Must be only digits")
    .min(6, " Must be Six Digits")
    .max(6, " Must be Six Digits"),
  warhouse: yup.string().required("Fill Which Department it is allocated "),
  stock: yup
    .string("Must be only digits")
    .matches(/^[0-9]+$/, "Must be only digits"),
  warhouse: yup.string().required("Fill the city where the WereHouse is"),
});

const AddProduct = () => {
  const navigate = useNavigate();
  const addNewProduct = async (newProduct) => {
    axios
      .post(`https://63d4ac100e7ae91a00a0aac3.mockapi.io/products`, newProduct)
      .then(() => navigate("/"));
  };

  const { handleSubmit, values, handleChange, handleBlur, touched, errors } =
    useFormik({
      initialValues: {
        productName: "",
        productID: "",
        hsncode: "",
        department: "",
        stock: "",
        warhouse: "",
      },
      validationSchema: productValidationSchema,
      onSubmit: (newProduct) => {
        addNewProduct(newProduct);
      },
    });

  return (
    <div className="add-product-container">
      <Form className="add-product-form" onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="productName">
          <Form.Label className="label">Product Name</Form.Label>
          <Form.Control
            type="productName"
            placeholder="Enter Product Name"
            className="input"
            value={values.productName}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.productName && errors.productName}
          />

          {touched.productName && errors.productName ? (
            <Alert variant="danger">{errors.productName} </Alert>
          ) : null}
        </Form.Group>
        <Form.Group className="mb-3" controlId="productID">
          <Form.Label className="label">Product Id</Form.Label>
          <Form.Control
            type="productID"
            placeholder="Enter Product ID"
            value={values.productID}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.productID && errors.productID}
          />
          {touched.productID && errors.productID ? (
            <Alert variant="danger">{errors.productID} </Alert>
          ) : null}
        </Form.Group>

        <Form.Group className="mb-3" controlId="hsncode">
          <Form.Label className="label">HSN Code</Form.Label>
          <Form.Control
            type="hsncode"
            placeholder="Enter HSN Code"
            value={values.hsncode}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.hsncode && errors.hsncode}
          />
          {touched.hsncode && errors.hsncode ? (
            <Alert variant="danger">{errors.hsncode} </Alert>
          ) : null}
        </Form.Group>

        <Form.Group className="mb-3" controlId="department">
          <Form.Label className="label">Department</Form.Label>
          <Form.Control
            type="department"
            placeholder="Enter Department"
            value={values.department}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.department && errors.department}
          />
          {touched.department && errors.department ? (
            <Alert variant="danger">{errors.department} </Alert>
          ) : null}
        </Form.Group>

        <Form.Group className="mb-3" controlId="stock">
          <Form.Label className="label">Stocks Available</Form.Label>
          <Form.Control
            type="stock"
            placeholder="Enter Available stock"
            value={values.stock}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.stock && errors.stock}
          />
          {touched.stock && errors.stock ? (
            <Alert variant="danger">{errors.stock} </Alert>
          ) : null}
        </Form.Group>
        <Form.Group className="mb-3" controlId="warhouse">
          <Form.Label className="label">Stored WareHouse</Form.Label>
          <Form.Control
            type="warhouse"
            placeholder="Enter Warehouse City"
            value={values.warhouse}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.warhouse && errors.warhouse}
          />
          {touched.warhouse && errors.warhouse ? (
            <Alert variant="danger">{errors.warhouse} </Alert>
          ) : null}
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default AddProduct;
