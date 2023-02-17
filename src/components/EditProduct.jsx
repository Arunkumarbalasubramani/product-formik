import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate, useParams } from "react-router-dom";
import * as yup from "yup";
import Alert from "react-bootstrap/Alert";
import axios from "axios";

const editProductValidationSchema = yup.object({
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
  department: yup.string().required("Fill Which Department it is allocated "),
  stock: yup
    .string("Must be only digits")
    .matches(/^[0-9]+$/, "Must be only digits"),
  warhouse: yup.string().required("Fill the city where the WereHouse is"),
});

const EditProduct = () => {
  const { productId } = useParams();
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    const getEditData = async () => {
      const response = await axios.get(
        `https://63d4ac100e7ae91a00a0aac3.mockapi.io/products/${productId}`
      );

      setProductData(response.data);
    };
    getEditData();
  }, [productId]);

  const navigate = useNavigate();
  const editProduct = async (editData) => {
    // axios
    //   .put(
    //     `https://63d4ac100e7ae91a00a0aac3.mockapi.io/products/${productId}`,
    //     editData
    //   )
    //   .then(() => navigate("/"));
    console.log(editData);
  };
  console.log(productData);
  const { handleSubmit, handleChange, values, handleBlur, touched, errors } =
    useFormik({
      initialValues: {
        productName: "Nut and Bolt",
        productID: "1234",
        hsncode: "123456",
        department: "Manufacturing",
        stock: "89",
        warhouse: "Chennai",
        // productName: "Nut and Bolt",
        // productID: productData.productID,
        // hsncode: productData.hsncode,
        // department: productData.department,
        // stock: productData.stock,
        // warhouse: productData.warhouse,
      },
      validationSchema: editProductValidationSchema,
      onSubmit: (editData) => {
        editProduct(editData);
      },
    });

  return (
    <div className="add-product-container">
      <Form className="add-product-form" onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="productName">
          <Form.Label className="label">Product Name</Form.Label>
          <Form.Control
            type="text"
            name="productName"
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
            name="productID"
            type="text"
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
            name="hsncode"
            type="text"
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
            name="department"
            type="text"
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
            name="stock"
            type="text"
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
            name="warhouse"
            type="text"
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
          Edit Product
        </Button>
      </Form>
    </div>
  );
};

export default EditProduct;
