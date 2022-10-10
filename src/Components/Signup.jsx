import React from 'react';

import "../Styles/Login.css";
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


import { Formik, Form, Field } from "formik";
import * as Yup from 'yup';


function Signup() {

  //method to handle signup form submit
  const handleSignupFormSubmit = (formData, onSubmitProps) => {
    console.log("Form Data: ", formData);
    onSubmitProps.setSubmitting(false);
    onSubmitProps.resetForm();
  }
  

  const signupFormSchema = Yup.object().shape({
    name: Yup.string().min(5, 'Name sould be min 5 letters').max(50, 'Name sould be max 50 letters').required('Name is Required'),
    email: Yup.string().email('Enter a Valid Email').required('Email is Required'),
    contact: Yup.string().min(10, 'Contact sould be 10 digits').max(10, 'Contact sould be 10 digits').required('Contact is Required'),
    age: Yup.number().min(18, 'Age required is 18').max(120, 'Age is not Valid').required('Age is Required'),
    gender: Yup.string().required('Gender is required'),
    address: Yup.string().min(5, 'Address sould be min 5 letters').max(500, 'Address sould be max 500 letters').required('Address is Required'),
    password: Yup.string().required('Password is Reqired').matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#%&])(?=.{8,15})/, 'Must Contain 8 to 15 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character')

  });

  const formFields = {
    name: "",
    email: "",
    contact: "",
    age: 0,
    gender: "Male",
    address: "",
    password: ""
  };

  return (
    <div className="container-fluid">
      <div className="row" id="wrapper-login">
        <div className="col-sm-12 d-flex justify-content-center">
          <div className="form-wrap">
            <h3>Hey User, please Signup</h3>
            <Formik id="contact-form"
              initialValues={formFields}
              validationSchema={signupFormSchema}
              onSubmit={(formData, onSubmitProps) => {
                handleSignupFormSubmit(formData, onSubmitProps);
              }}
            >
              {({ errors, touched }) => (
                <Form>

                  <label htmlFor="name">Your Name: </label>
                  <Field name="name" id="name" placeholder="eg. Jon Doe" />
                  {errors.name && touched.name ? (<p>{errors.name}</p>) : null}

                  <label htmlFor="email">Your Email: </label>
                  <Field name="email" type="email" id="email" placeholder="eg. jondoe@gmail.com" />
                  {errors.email && touched.email ? (<p>{errors.email}</p>) : null}

                  <label htmlFor="contact">Your Phone-No: </label>
                  <Field name="contact" type="number" id="contact" placeholder="eg. 9862017423" />
                  {errors.contact && touched.contact ? (<p>{errors.contact}</p>) : null}

                  <label htmlFor="age">Your Age: </label>
                  <Field name="age" type="number" id="age" placeholder="eg. 23" />
                  {errors.age && touched.age ? (<p>{errors.age}</p>) : null}

                  <label htmlFor="gender">Your Gender: </label>
                  <Field name="gender" as="select" id="gender" >
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </Field>
                  {errors.gender && touched.gender ? (<p>{errors.gender}</p>) : null}

                  <label htmlFor="address">Your Address: </label>
                  <Field name="address" id="address" placeholder="eg. abc road, xyz city, pin-000000" />
                  {errors.address && touched.address ? (<p>{errors.address}</p>) : null}

                  <label htmlFor="password">Your Password: </label>
                  <Field name="password" type="password" id="password" placeholder="eg. **********" />
                  {errors.password && touched.password ? <p>{errors.password}</p> : null}

                  <button type="submit">Submit Form <FontAwesomeIcon icon={faArrowRightLong} /></button>
                </Form>
              )}
            </Formik>
            <h2>Already with Us?.... <a href="/login">Login-Now</a></h2>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup