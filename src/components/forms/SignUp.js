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
import {  Link } from "react-router-dom";


// import Navbar from "../homepage/home-navbar";
import { currUser } from "../../actions";
import { pushANewUser } from "../../serverInterface/server";
import "../css/SignUp.css";
import { useHistory } from "react-router-dom";
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
class SignUp extends React.Component {
  constructor(props) {
    super(props);
  }
  handleSubmit = (values) => {

    // actions.setSubmitting(true)
    console.log(values)
    // console.log(actions)
    const { history } = this.props
    this.props.history.push({ pathname: "/", state: {firstName: values.firstName}})
  }

  render() {
    const {history} = this.props;
    const username = this.props.email;
    return (
      <div className="signUpForm">

        <div className="formTitle">
        <h5><center>Hi! {username}</center></h5>
        <h5><center>Complete your profile</center></h5>
        </div>

        <Formik
          initialValues={{
            firstName: "",
            lastName:"",
            phoneNumber: "",
            email: username,
            acceptedTerms: false // added for our checkbox
          }}
          validationSchema={Yup.object({
            firstName: Yup.string()

              .min(2, "Too short")

              .required("Required"),
            lastName: Yup.string()

              .min(2, "Too short")

              .required("Required"),
            phoneNumber: Yup.string()

              .length(10, "Must be 10-digits")

              .required("Required"),
            email: Yup.string()
              .lowercase()
              .email("Must be a valid email!")
              .required("Required"),

            acceptedTerms: Yup.boolean()

              .required("Required")

              .oneOf([true], "You must accept the terms and conditions.")
          })}
          onSubmit={fields => {
            this.props.history.push({ pathname: "/bookdisplay", state: {firstName: fields.firstName}});
            // this.handleSubmit(fields)
            
            // history.push({ pathname: "/", state: {firstName: values.firstName}});
            // pushANewUser({
            //   firstName: values.firstName,
            //   lastName: values.lastName,
            //   phoneNumber: values.phoneNumber,
            //   email: values.email
            // })
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
            <div id="button">
              {" "}
              <Button color="primary" variant="contained" type="submit">
                DONE
              </Button>
            </div>
          </Form>
        </Formik>
      </div>
    );
  }
}
// Notes:
// 'connect' helps to call actions and puts into  functions
const mapStateToProps = state => {
  return { items: state.items };
};

export default connect(mapStateToProps, {
  currUser
})(SignUp);
