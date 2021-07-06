import React from "react";
import ReactDOM from "react-dom";
import { Formik, Form, useField } from "formik";
import * as Yup from "yup";
import { connect } from "react-redux";
import {
  InputLabel,
  Select,
  MenuItem,
  Button,
  TextField
} from "@material-ui/core";

import { currUser } from "../../actions";
import "../css/SignUp.css";
// Notes:
// connect()(signUp) is equal to:
// function connect() {
//   return function() {
//      return 'Hi There'
// }}
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

// And now we can use these
class Signup extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <div className="formTitle">
          {" "}
          <h3 id="h3">Sign up</h3>
          <hr id="hr"></hr>
        </div>

        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            username: "",
            email: "",
            password: "",
            acceptedTerms: false // added for our checkbox
          }}
          validationSchema={Yup.object({
            firstName: Yup.string()

              .max(15, "Must be 15 characters or less")

              .required("Required"),
            lastName: Yup.string()

              .max(15, "Must be 15 characters or less")

              .required("Required"),
            username: Yup.string()

              .max(15, "Must be 15 characters or less")

              .required("Required"),

            password: Yup.string()

              .min(8, "Must be at least 8 characters")

              .required("Required"),
            email: Yup.string()
              .email("Invalid email address")
              .required("Required"),

            acceptedTerms: Yup.boolean()

              .required("Required")

              .oneOf([true], "You must accept the terms and conditions.")
          })}
          onSubmit={values => {
            this.props.history.push({ pathname: "/", state: values });
          }}
        >
          <Form>
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
                id="username"
                label="Username"
                name="username"
                type="text"
              />

              <MyTextInput
                id="email"
                label="Email Address"
                name="email"
                type="email"
                placeholder="jane@formik.com"
              />

              <MyTextInput
                id="password"
                label="Password"
                name="password"
                type="password"
              />

              <MyCheckbox name="acceptedTerms">
                &nbsp; I accept the terms and conditions
              </MyCheckbox>
            </div>
            <div id="button">
              {" "}
              <Button color="primary" variant="contained" type="submit">
                Submit
              </Button>
            </div>
          </Form>
        </Formik>
      </div>
    );
  }
}
// Notes:
// 'connect' helps to call actions and puts into dispatch functions
const mapStateToProps = state => {
  return { items: state.items };
};

export default connect(mapStateToProps, {
  currUser
})(Signup);

// <MySelect label="Job Type" name="jobType">
// <option value="">Select a job type</option>

// <option value="designer">Designer</option>

// <option value="development">Developer</option>

// <option value="product">Product Manager</option>

// <option value="other">Other</option>
// </MySelect>
