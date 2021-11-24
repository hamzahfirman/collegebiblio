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

}

const validationSchema = yup.object({
  
 textbookQuality: yup.string("Select your payment method").required("Required"),
  courseId: yup.string("Select your payment method").required("Required"),
  sellingPrice: yup.string("Select your payment method").required("Required")

});


const ShippingAdd = props => {
  const formik = useFormik({
    initialValues: {
      isbnThirteen: "",
      isbnTen: "",
      authors: "",
      edition: "",
      binding: "",
      textbookQuality: "",
      courseId: "",
      sellingPrice: ""
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
        <h3>Boo Details</h3>
        <hr></hr>
      </div>

      <form onSubmit={formik.handleSubmit}>
        <div className="queries">
          <div className="payment">
            <div className="paymentMethod">
              <InputLabel id="demo-simple-select-helper-label">
                Textbook Quality
              </InputLabel>
              <Select
                id="textbookQuality"
                name="textbookQuality"
                onChange={formik.handleChange}
                error={
                  formik.touched.textbookQuality && formik.errors.textbookQuality
                }
                helperText={
                  formik.touched.textbookQuality && formik.errors.textbookQuality
                }
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value="asNew">As New</MenuItem>
                <MenuItem value="good">Good</MenuItem>
                <MenuItem value="fair">Fair</MenuItem>
                <MenuItem value="poor">Poor</MenuItem>
              </Select>
            </div>
            <div className="cardDetails">
            <InputLabel id="demo-simple-select-helper-label">
                Course ID:
              </InputLabel>
              {" "}
              <TextField
                id="courseId"
                name="courseId"
                label="ex. MATH 112"
                variant="outlined"
                value={formik.values.courseId}
                onChange={formik.handleChange}
                error={formik.touched.courseId && formik.errors.courseId}
                helperText={
                  formik.touched.courseId && formik.errors.courseId
                }
              />
              <div className="cvvNumber">
              <InputLabel id="demo-simple-select-helper-label">
                Selling Price:
              </InputLabel>
                {" "}
                <TextField
                  id="sellingPrice"
                  name="sellingPrice"
                  label="$0.00"
                  variant="outlined"
                  placeholder="xxx"
                  value={formik.values.sellingPrice}
                  onChange={formik.handleChange}
                  error={formik.touched.sellingPrice && formik.errors.sellingPrice}
                  helperText={
                    formik.touched.sellingPrice && formik.errors.sellingPrice
                  }
                />
            
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
