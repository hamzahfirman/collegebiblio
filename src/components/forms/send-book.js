import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { useMsal } from "@azure/msal-react";
import axios from "axios";
import MenuItem from "@mui/material/MenuItem";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import NumberFormat from "react-number-format";
import { useHistory } from "react-router-dom";

import { UploadImage } from "../../serverInterface/server";
import { addBook } from "../../serverInterface/server";
import "./send-book.css";

/* Price Number Format */
const NumberFormatCustom = React.forwardRef(function NumberFormatCustom(
  props,
  ref
) {
  const { onChange, ...other } = props;

  return (
    <NumberFormat
      {...other}
      getInputRef={ref}
      onValueChange={(values) => {
        onChange({
          target: {
            name: props.name,
            value: values.value,
          },
        });
      }}
      thousandSeparator
      isNumericString
      prefix="$"
      decimalSeparator="."
      fixedDecimalScale={true}
      allowLeadingZeros={true}
      decimalScale="2"
    />
  );
});

const validationSchema = yup.object({
  textbookQuality: yup
    .string("Select your textbook quality")
    .required("Texbook Quality Required"),
  sellingPrice: yup
    .string("Type in book price")
    .required("Book Price Required"),
  courseId: yup.string("Type in course name").required("Course ID Required"),
  // photoFront: yup.string("Upload Front Photo").required("Front Photo Required"),
  // photoInside: yup
  //   .string("Upload Inside Photo")
  //   .required("Inside Photo Required"),
  // photoBack: yup.string("Upload Back Photo").required("Back Photo Required"),
});

const SendNewBook = (props) => {
  let history = useHistory();
  const { instance, accounts } = useMsal();

  const userEmail = accounts[0] && accounts[0].username;
  const { title, isbn13, authors, image } = props.bookInfo;
  let author = "";

  if (typeof authors == "string") {
    author = authors;
  } else {
    for (let i = 0; i < authors.length; i++) {

      if(i == authors.length -1){
          author += "" + authors[i];
      }else {
        author += "" + authors[i] + ",";
      }
     
    } 
  }

  const formik = useFormik({
    initialValues: {
      // photoFront: "",
      // photoInside: "",
      // photoBack: "",
      textbookQuality: "",
      sellingPrice: "",
      courseId: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(author)
      addBook({
        title: title,
        isbn13: isbn13,
        author: author,
        textbookImage: image,
        textbookQuality: values.textbookQuality,
        courseName: values.courseId.toUpperCase(),
        sellingPrice: values.sellingPrice,
        sellerName: userEmail
      });
      history.push("/bookdisplay");
      // UploadImage({ photoFront: values.photoFront });
    },
  });

  return (
    <div>
      <center>
        <form
          className="selling-book-container"
          onSubmit={formik.handleSubmit}
          encType="multipart/form-data"
        >
          {/* Photo Front
        <input
          id="photoFront"
          name="photoFront"
          type="file"
          accept="image/*"
          value={formik.values.photoFront}
          onChange={formik.handleChange}
          error={formik.touched.photoFront && Boolean(formik.errors.photoFront)}
          helperText={formik.touched.photoFront && formik.errors.photoFront}
        />
        Photo Inside
        <TextField
          id="photoInside"
          name="photoInside"
          type="file"
          value={formik.values.photoInside}
          onChange={formik.handleChange}
          error={
            formik.touched.photoInside && Boolean(formik.errors.photoInside)
          }
          helperText={formik.touched.photoInside && formik.errors.photoInside}
        />
        Photo Back
        <TextField
          id="photoBack"
          name="photoBack"
          type="file"
          value={formik.values.photoBack}
          onChange={formik.handleChange}
          error={formik.touched.photoBack && Boolean(formik.errors.photoBack)}
          helperText={formik.touched.photoBack && formik.errors.photoBack}
        /> */}
          <TextField
            id="textbookQuality"
            select
            fullWidth
            name="textbookQuality"
            label="Textbook Quality"
            value={formik.values.textbookQuality}
            onChange={formik.handleChange}
            margin="normal"
            error={
              formik.touched.textbookQuality &&
              Boolean(formik.errors.textbookQuality)
            }
            helperText={
              formik.touched.textbookQuality && formik.errors.textbookQuality
            }
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value="NEW">As New</MenuItem>
            <MenuItem value="GOOD">Good</MenuItem>
            <MenuItem value="FAIR">Fair</MenuItem>
            <MenuItem value="POOR">Poor</MenuItem>
          </TextField>
          <TextField
            fullWidth
            id="courseId"
            name="courseId"
            label="Course ID"
            value={formik.values.courseId}
            onChange={formik.handleChange}
            error={formik.touched.courseId && Boolean(formik.errors.courseId)}
            helperText={formik.touched.courseId && formik.errors.courseId}
          />
          <TextField
            fullWidth
            id="sellingPrice"
            name="sellingPrice"
            label="Selling Price $"
            value={formik.values.sellingPrice}
            onChange={formik.handleChange}
            InputProps={{
              inputComponent: NumberFormatCustom,
            }}
            error={
              formik.touched.sellingPrice && Boolean(formik.errors.sellingPrice)
            }
            helperText={
              formik.touched.sellingPrice && formik.errors.sellingPrice
            }
          />
          <br /> <br />
          <Button color="primary" variant="contained" fullWidth type="submit">
            Submit
          </Button>
        </form>
      </center>
    </div>
  );
};

export default SendNewBook;
