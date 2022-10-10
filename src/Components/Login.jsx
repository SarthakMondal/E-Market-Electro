import React from 'react';

import "../Styles/Login.css";
import { faArrowRightLong} from '@fortawesome/free-solid-svg-icons';
import { faGooglePlusSquare, faFacebookSquare, faTwitterSquare } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


import { Formik, Form, Field } from "formik";
import * as Yup from 'yup';


function Login() {

  //method to handle login form submit
  const handleLoginFormSubmit = (formData, onSubmitProps) => {
    console.log("Form Data: ", formData);
    onSubmitProps.setSubmitting(false);
    onSubmitProps.resetForm();
  }

  const loginFormSchema = Yup.object().shape({
    email: Yup.string().email('Enter a Valid Email').required('Email is Required'),
    password: Yup.string().required('Password is Reqired')
  });

  const formFields = {
    email: "",
    password: ""
  };

  return (
    <div className="container-fluid">
      <div className="row" id="wrapper-login">
        <div className="col-sm-12 d-flex justify-content-center">
          <div className="form-wrap">
            <h3>Hey User, please Login</h3>
            <Formik id="contact-form"
              initialValues={formFields}
              validationSchema={loginFormSchema}
              onSubmit={(formData, onSubmitProps) => {
                handleLoginFormSubmit(formData, onSubmitProps);
              }}
            >
              {({ errors, touched }) => (
                <Form>

                  <label htmlFor="email">Your Email: </label>
                  <Field name="email" type="email" id="email" placeholder="eg. jondoe@gmail.com" />
                  {errors.email && touched.email ? (<p>{errors.email}</p>) : null}

                  <label htmlFor="password">Your Password: </label>
                  <Field name="password" type="password" id="password" placeholder="eg. **********" />
                  {errors.password && touched.password ? <p>{errors.password}</p> : null}

                  <button type="submit">Submit Form <FontAwesomeIcon icon={faArrowRightLong} /></button>
                </Form>
              )}
            </Formik>
            <h2>Not a Member of Us?.... <a href="/signup">Signup-Now</a></h2>
            <div className="social-login">
              <h3>Login with Social Media</h3>
              <div className="icon-wrap d-flex flex-row justify-content-center">
                <FontAwesomeIcon icon={faGooglePlusSquare} id="icons"/>
                <FontAwesomeIcon icon={faFacebookSquare} id="icons" className="mx-3"/>
                <FontAwesomeIcon icon={faTwitterSquare} id="icons"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login