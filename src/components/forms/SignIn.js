import React from "react";
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


// import Navbar from "../homepage/home-navbar";
import { currUser } from "../../actions";
import { findAUser } from "../../serverInterface/server";
import "../css/SignUp.css";
// Notes:
// connect()(signUp) is equal to:
// function connect() {
//   return function() {
//      return 'Hi There'
// }}



class Thumb extends React.Component {
  state = {
    loading: false,
    thumb: undefined,
  };

  componentWillReceiveProps(nextProps) {
    if (!nextProps.file) { return; }

    this.setState({ loading: true }, () => {
      let reader = new FileReader();

      reader.onloadend = () => {
        this.setState({ loading: false, thumb: reader.result });
      };

      reader.readAsDataURL(nextProps.file);
    });
  }

  render() {
    const { file } = this.props;
    const { loading, thumb } = this.state;

    if (!file) { return null; }

    if (loading) { return <p>loading...</p>; }

    return (<img src={thumb}
      alt={file.name}
      className="img-thumbnail mt-2"
      height={200}
      width={200} />);
  }
}

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

      <select {...field} {...props} >
            <option value="none">None</option>
            <option value="asNew">As New</option>
            <option value="good">Good</option>
            <option value="fair">Fair</option>
            <option value="poor">Poor</option>
      </select>
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </div>
  );
};

const MyUpload = ({ label, ...props}) => {
  const [field, meta] = useField(props);

  return (
    <div>
      <label htmlFor={props.id || props.name}>{label}</label>
        <input type='file' {...field}  {...props} />
       
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </div>
  );
};

// And now we can use these
class SignIn extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { title, 
      isbn13, 
      isbn,
      edition,
      binding,
      authors,
      date_published,
      image,
      publisher
     } = this.props.bookInfo
    return (
      <div>

        <Formik
          initialValues={{
            photoFront:"",
            photoInside:"",
            photoBack:"",
            textbookQuality: "",
            courseId: "",
            sellingPrice: "",
            acceptedTerms: false // added for our checkbox
          }}
          validationSchema={Yup.object({
            // firstName: Yup.string()

            //   .max(15, "Must be 15 characters or less")

            //   .required("Required"),
            // lastName: Yup.string()

            //   .max(15, "Must be 15 characters or less")

            //   .required("Required"),
            // username: Yup.string()

            //   .max(15, "Must be 15 characters or less")

            //   .required("Required"),

            textbookQuality: Yup.string("Select your payment method").required("Required"),
            courseId: Yup.string("Select your payment method").required("Required"),
            sellingPrice: Yup.string("Select your payment method").required("Required")
            })}

        //     acceptedTerms: Yup.boolean()

        //       .required("Required")

        //       .oneOf([true], "You must accept the terms and conditions.")
        //   })}
          onSubmit={values => {
            alert(
              JSON.stringify(
                { 
                  title: title,
                  isbn13: isbn13,
                  isbn: isbn,
                  authors: authors,
                  edition: edition,
                  binding: binding,
                  publisher: publisher,
                  published: date_published,
                  photoFront: values.photoFront, 
                  photoInside: values.photoInside,
                  photoBack: values.photoBack,
                  textbookQuality: values.textbookQuality,
                  courseId: values.courseId,
                  sellingPrice: values.sellingPrice
                }
                ,
                null,
                2

            // this.props.history.push({ pathname: "/", state: {email: values.email, password: values.password }});
              ))}}
        >
          <Form>
            <div className="form">

              <MyUpload 
              id="photoFront"
              label="Photo Front"
              name="photoFront"
              type= "file"
              />

              <MyUpload 
              id="photoInside"
              label="Photo Inside"
              name="photoInside"
              type= "file"
              />

              <MyUpload 
              id="photoBack"
              label="Photo Back"
              name="photoBack"
              type= "file"
              />

            <MySelect 
              id="textbookQuality"
              label="Textbook Quality: "
              name="textbookQuality"
              type= "select"
              />

              
              <MyTextInput
                id="courseId"
                label="Course ID"
                name="courseId"
                type="courseId"
                placeholder="ex. MATH 112"
              />

              <MyTextInput
                id="sellingPrice"
                label="Selling Price"
                name="sellingPrice"
                type="sellingPrice"
                placeholder="$0.00"
              />


              <MyCheckbox name="acceptedTerms">
                &nbsp; I accept the terms and conditions
              </MyCheckbox>
            </div>
            <div id="button">
              {" "}
              <Button color="primary" variant="contained" type="submit">
              submit
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
})(SignIn);

// <MySelect label="Job Type" name="jobType">
// <option value="">Select a job type</option>

// <option value="designer">Designer</option>

// <option value="development">Developer</option>

// <option value="product">Product Manager</option>

// <option value="other">Other</option>
// </MySelect>
