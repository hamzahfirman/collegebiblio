import React from "react";
import { useFormik, useField } from "formik";
import * as yup from "yup";
import {
  InputLabel,
  Select,
  MenuItem,
  Button,
  TextField
} from "@material-ui/core";
import { connect } from "react-redux";

import { orderPlaced } from "../../actions";


const MyTextInput = ({ label, ...props }) => {
    // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  
    // which we can spread on <input>. We can use field meta to show an error
  
    // message if the field is invalid and it has been touched (i.e. visited)
  
    // '...field' = onChange, onBlur,  value & '...props' = name, id, type
    const [field, meta] = useField(props);
  
    return (
      <div className="textField">
        <TextField
          htmlFor={props.id || props.name}
          label={label}
          variant="outlined"
          className="text-input"
          error={meta.touched && meta.error ? meta.error : null}
          helperText={meta.touched && meta.error ? meta.error : null}
          {...field}
          {...props}
        />
      </div>
    );
  };
  
  const MyCheckbox = ({ children, ...props }) => {
    // React treats radios and checkbox inputs differently other input types, select, and textarea.
  
    // Formik does this too! When you specify `type` to useField(), it will
  
    // return the correct bag of props for you -- a `checked` prop will be included
  
    // in `field` alongside `name`, `value`, `onChange`, and `onBlur`
  
    const [field, meta] = useField({ ...props, type: "checkbox" });
  
    return (
      <div>
        <label className="checkbox-input">
          <input type="checkbox" {...field} {...props} />
  
          {children}
        </label>
  
        {meta.touched && meta.error ? (
          <div className="error">{meta.error}</div>
        ) : null}
      </div>
    );
  };
  
  const MySelect = ({ label, ...props }) => {
    const [field, meta] = useField(props);
  
    return (
      <div>
        <label htmlFor={props.id || props.name}>{label}</label>
  
        <select {...field} {...props} />
  
        {meta.touched && meta.error ? (
          <div className="error">{meta.error}</div>
        ) : null}
      </div>
    );
  };

const validationSchema = yup.object({
  
    firstName: yup.string()

    .min(2, "Too short")

    .required("Required"),
  lastName: yup.string()

    .min(2, "Too short")

    .required("Required"),
  phoneNumber: yup.string()

    .length(10, "Must be 10-digits")

    .required("Required"),
  email: yup.string()
    .lowercase()
    .email("Must be a valid email!")
    .required("Required"),

  acceptedTerms: yup.boolean()

    .required("Required")

    .oneOf([true], "You must accept the terms and conditions.")
});


const SignUpNow = props => {
    const username = props.email;
    const formik = useFormik({
        initialValues: {
            firstName: "",
            lastName:"",
            phoneNumber: "",
            email: username,
            acceptedTerms: false // added for our checkbox
        },
        validationSchema: validationSchema,
        onSubmit: values => {
        alert("Thank you for shopping!");
        props.history.push({ pathname: "/" });
        }
    });

    return (
        <div className="shippingForm">
        <form onSubmit={formik.handleSubmit}>
            <div className="form">
            <MyTextInput
                    id="firstName"
                    label="First Name"
                    name="firstName"
                    type="text"
                />
                <MyTextInput
                    id="lastName"
                    label="Last Name"
                    name="lastName"
                    type="text"
                />
                <MyTextInput
                    id="phoneNumber"
                    label="Phone Number"
                    name="phoneNumber"
                    type="text"
                />

                <MyTextInput
                    id="email"
                    label="Student Email"
                    name="email"
                    type="email"
                    placeholder="example@example.com"
                />

                {/* <MyTextInput
                    id="password"
                    label="password"
                    name="password"
                    type="password"
                /> */}

                <MyCheckbox name="acceptedTerms">
                    &nbsp; I accept the terms and conditions
                </MyCheckbox>

    
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

export default connect(mapStateToProps, { orderPlaced })(SignUpNow);
