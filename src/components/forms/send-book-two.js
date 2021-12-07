import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const Form = () => (
    <Formik
      initialValues={{"photoFront": ""}}
      validationSchema = {Yup.object({
        // textbookQuality: {Yup}
        //   .string("Select your textbook quality")
        //   .required("Texbook Quality Required"),
        // sellingPrice: {Yup}
        //   .string("Type in book price")
        //   .required("Book Price Required"),
        // courseId: {Yup}.string("Type in course name").required("Course ID Required"),
        photoFront: Yup.string("Upload Front Photo").required("Front Photo Required"),
        // photoInside: {Yup}
        //   .string("Upload Inside Photo")
        //   .required("Inside Photo Required"),
        // photoBack: {Yup}.string("Upload Back Photo").required("Back Photo Required"),
      })}     
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);

      }}

      render={({ values, handleSubmit, handleChange, handleBlur }) => (
        <Form onSubmit={handleSubmit}>
          <Field
            name="photoFront"
            value={values.photoFront}
            render={({ field, form }) => (
              <input
                {...field}
                onChange={e => {
                  handleChange(e)
                  form.setFieldValue('photoFront', e.target.files[0] )
                }}
              />
            )}
          />
          <input
            name="mail.domain"
            value={values.mail.domain}
            onChange={handleChange}
            onBlur={handleBlur}
          />
         <button type="submit">Submit</button>
        </Form>
      )}
    />
  )