import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import {
  InputLabel,
  Select,
  MenuItem,
  Button,
  TextField
} from "@material-ui/core";
import { connect } from "react-redux";

import "../css/ShippingAdd.css";

const validationSchema = yup.object({
  firstName: yup
    .string("Enter your first name")
    .max(15, "Must be 15 characters or less")
    .required("Required"),
  lastName: yup
    .string("Enter your last name")
    .max(15, "Must be 15 characters or less")
    .required("Required"),
  address: yup.string("Enter your address").required("Required"),
  email: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("Required"),
  paymentMethod: yup.string("Select your payment method").required("Required"),
  cardNumber: yup.string("Select your payment method").required("Required")
});

const ShippingAdd = props => {
  const formik = useFormik({
    initialValues: {
      firstName: props.user.firstName,
      lastName: props.user.lastName,
      address: "",
      email: props.user.email,
      paymentMethod: "",
      cardNumber: ""
    },
    validationSchema: validationSchema,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    }
  });

  return (
    <div className="shippingForm">
      <form onSubmit={formik.handleSubmit}>
        <div className="queries">
          <div className="names">
            <TextField
              id="firstName"
              name="firstName"
              label="First Name"
              variant="outlined"
              value={formik.values.firstName}
              onChange={formik.handleChange}
              error={formik.touched.firstName && formik.errors.firstName}
              helperText={formik.touched.firstName && formik.errors.firstName}
            />
            <TextField
              id="lastName"
              name="lastName"
              label="Last Name"
              variant="outlined"
              value={formik.values.lastName}
              onChange={formik.handleChange}
              error={formik.touched.lastName && formik.errors.lastName}
              helperText={formik.touched.lastName && formik.errors.lastName}
            />
          </div>
          <div className="address">
            <TextField
              id="address"
              name="address"
              label="Address"
              variant="outlined"
              value={formik.values.address}
              onChange={formik.handleChange}
              error={formik.touched.address && formik.errors.address}
              helperText={formik.touched.address && formik.errors.address}
            />
          </div>
          <div className="email">
            <TextField
              id="email"
              name="email"
              label="Email"
              variant="outlined"
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && formik.errors.email}
              helperText={formik.touched.email && formik.errors.email}
            />
          </div>
          <div className="payment">
            <Select
              id="paymentMethod"
              name="paymentMethod"
              onChange={formik.handleChange}
              error={
                formik.touched.paymentMethod && formik.errors.paymentMethod
              }
              helperText={
                formik.touched.paymentMethod && formik.errors.paymentMethod
              }
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value="amex">American Express</MenuItem>
              <MenuItem value="visa">Visa</MenuItem>
              <MenuItem value="mastercard">Mastercard</MenuItem>
            </Select>
            <TextField
              id="cardNumber"
              name="cardNumber"
              label="Card Number"
              variant="outlined"
              value={formik.values.cardNumber}
              onChange={formik.handleChange}
              error={formik.touched.cardNumber && formik.errors.cardNumber}
              helperText={formik.touched.cardNumber && formik.errors.cardNumber}
            />
          </div>

          <br></br>
        </div>
        <Button color="primary" variant="contained" type="submit">
          Submit
        </Button>
        <Button
          color="primary"
          variant="contained"
          onClick={() => {
            props.history.push({ pathname: "/" });
          }}
        >
          Go Back
        </Button>
      </form>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    items: state.items,
    user: state.user,
    selectedItem: state.selectedItem
  };
};

export default connect(mapStateToProps)(ShippingAdd);
