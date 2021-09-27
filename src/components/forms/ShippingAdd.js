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
import { orderPlaced } from "../../actions";

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
  phone: yup
    .string("Enter your phone")
    .max(10, "Must be 10 digits")
    .min(10, "Must be 10 digits")
    .required("Required"),
  paymentMethod: yup.string("Select your payment method").required("Required"),
  cardMonth: yup.string("Select your payment method").required("Required"),
  cardYear: yup.string("Select your payment method").required("Required"),
  cardNumber: yup
    .string("Select your payment method")
    .max(16, "Must be 16 digits")
    .min(16, "Must be 16 digits")
    .required("Required"),
  cvvNumber: yup
    .string("Select your payment method")
    .max(3, "Must be 3 digits")
    .min(3, "Must be 3 digits")
    .required("Required"),
  cardMonth: yup
    .string("Select your payment method")
    .max(2, "Must be 2 digits")
    .min(2, "Must be 2 digits")
    .required("Required"),
  cardYear: yup
    .string("Select your payment method")
    .max(4, "Must be 4 digits")
    .min(4, "Must be 4 digits")
    .required("Required")
});

const ShippingAdd = props => {
  const formik = useFormik({
    initialValues: {
      firstName: props.user.firstName,
      lastName: props.user.lastName,
      address: "",
      email: props.user.email,
      phone: "",
      paymentMethod: "",
      cardNumber: "",
      cvvNumber: "",
      cardMonth: "",
      cardYear: ""
    },
    validationSchema: validationSchema,
    onSubmit: values => {
      props.orderPlaced();
      alert("Thank you for shopping!");
      props.history.push({ pathname: "/" });
    }
  });

  return (
    <div className="shippingForm">
      <div className="formTitle">
        {" "}
        <h3>Shipping Address & Payment Method</h3>
        <h8>FREE SHIPPING</h8>
        <hr></hr>
      </div>

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
              placeholder="example@example.com"
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && formik.errors.email}
              helperText={formik.touched.email && formik.errors.email}
            />
            <TextField
              id="phone"
              name="phone"
              label="Phone"
              variant="outlined"
              placeholder="xxx-xxx-xxxx"
              value={formik.values.phone}
              onChange={formik.handleChange}
              error={formik.touched.phone && formik.errors.phone}
              helperText={formik.touched.phone && formik.errors.phone}
            />
          </div>
          <div className="payment">
            <div className="paymentMethod">
              <InputLabel id="demo-simple-select-helper-label">
                Payment Method
              </InputLabel>
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
            </div>
            <div className="cardDetails">
              {" "}
              <TextField
                id="cardNumber"
                name="cardNumber"
                label="Card Number"
                variant="outlined"
                value={formik.values.cardNumber}
                onChange={formik.handleChange}
                error={formik.touched.cardNumber && formik.errors.cardNumber}
                helperText={
                  formik.touched.cardNumber && formik.errors.cardNumber
                }
              />
              <div className="cardExpiration">
                <TextField
                  id="cardMonth"
                  name="cardMonth"
                  label="Month"
                  variant="outlined"
                  placeholder="xx"
                  value={formik.values.cardMonth}
                  onChange={formik.handleChange}
                  error={formik.touched.cardMonth && formik.errors.cardMonth}
                  helperText={
                    formik.touched.cardMonth && formik.errors.cardMonth
                  }
                />

                <TextField
                  id="cardYear"
                  name="cardYear"
                  label="Year"
                  variant="outlined"
                  placeholder="xxxx"
                  value={formik.values.cardYear}
                  onChange={formik.handleChange}
                  error={formik.touched.cardYear && formik.errors.cardYear}
                  helperText={formik.touched.cardYear && formik.errors.cardYear}
                />
              </div>
              <div className="cvvNumber">
                {" "}
                <TextField
                  id="cvvNumber"
                  name="cvvNumber"
                  label="CVV #"
                  variant="outlined"
                  placeholder="xxx"
                  value={formik.values.cvvNumber}
                  onChange={formik.handleChange}
                  error={formik.touched.cvvNumber && formik.errors.cvvNumber}
                  helperText={
                    formik.touched.cvvNumber && formik.errors.cvvNumber
                  }
                />
                <br></br>
                <b id="totalCost">
                  Total Cost: ${Math.floor(props.totalCost * 100) / 100}
                </b>
              </div>
            </div>
          </div>

          <br></br>
        </div>
        <div className="buttons">
          <Button
            id="goBack"
            color="primary"
            variant="contained"
            onClick={() => {
              props.history.push({ pathname: "/" });
            }}
          >
            Go Back
          </Button>
          <Button id="submit" color="primary" variant="contained" type="submit">
            Place My Order
          </Button>
        </div>
      </form>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    items: state.items,
    user: state.user,
    selectedItem: state.selectedItem,
    totalCost: state.currentCost
  };
};

export default connect(mapStateToProps, { orderPlaced })(ShippingAdd);
