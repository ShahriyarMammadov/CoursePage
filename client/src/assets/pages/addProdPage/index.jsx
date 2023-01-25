import React from "react";
import "./index.scss";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import {Helmet} from "react-helmet";
import axios from 'axios'

const AddProdPage = () => {
  const SignupSchema = Yup.object().shape({
    cardImage: Yup.string()
      .min(2, "Too Short!")
      .max(150, "Too Long!")
      .required("Required"),
    text: Yup.string()
      .min(2, "Too Short!")
      .max(150, "Too Long!")
      .required("Required"),
    text2: Yup.string()
      .min(2, "Too Short!")
      .max(250, "Too Long!")
      .required("Required"),
    userImage: Yup.string()
      .min(2, "Too Short!")
      .max(150, "Too Long!")
      .required("Required"),
    userName: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    price: Yup.number()
      .min(2, "Too Short!")
      .max(2050, "Too Long!")
      .required("Required"),
  });
  return (
    <div className="formikYup">
      <Helmet>
        <title>Formik Yup</title>
        <meta name="description" content="Helmet application" />
      </Helmet>
      <h1>addProducts</h1>
      <Formik
        initialValues={{
          cardImage: "",
          text: "",
          text2: "",
          userImage: "",
          userName: "",
          price: "",
        }}
        validationSchema={SignupSchema}
        onSubmit={(values) => {
          axios.post(`http://localhost:3000/products`, values);
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <Field name="cardImage" placeholder="cardImage" />
            {errors.cardImage && touched.cardImage ? (
              <div>{errors.cardImage}</div>
            ) : null}
            <Field name="text" placeholder="text" />
            {errors.text && touched.text ? <div>{errors.text}</div> : null}
            <Field name="text2" placeholder="text2" />
            {errors.text2 && touched.text2 ? <div>{errors.text2}</div> : null}
            <Field name="userImage" placeholder="userImage" />
            {errors.userImage && touched.userImage ? (
              <div>{errors.userImage}</div>
            ) : null}
            <Field name="userName" placeholder="userName" />
            {errors.userName && touched.userName ? (
              <div>{errors.userName}</div>
            ) : null}
            <Field name="price" type="number" placeholder="Price" />
            {errors.price && touched.price ? <div>{errors.price}</div> : null}
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default AddProdPage;
