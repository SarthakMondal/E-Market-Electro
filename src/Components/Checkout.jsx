import React from 'react';

import { Formik, Form, Field } from "formik";
import * as Yup from 'yup';

import { faArrowRightLong, faCreditCard, faMoneyBill, faBitcoinSign } from '@fortawesome/free-solid-svg-icons';
import { } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


import "../Styles/Checkout.css";

function Checkout() {

    const formFields = {
        name: "",
        contact: "",
        address: "",
        method: "Card",
    }


    //method to handle signup form submit
    const handleCheckoutFormSubmit = (formData, onSubmitProps) => {
        console.log("Form Data: ", formData);
        onSubmitProps.setSubmitting(false);
        onSubmitProps.resetForm();

        window.location.href = "/track-order";
    }

    const checkoutFormSchema = Yup.object().shape({
        name: Yup.string().min(5, 'Name sould be min 5 letters').max(50, 'Name sould be max 50 letters').required('Name is Required'),
        contact: Yup.string().min(10, 'Contact sould be 10 digits').max(10, 'Contact sould be 10 digits').required('Contact is Required'),
        address: Yup.string().min(5, 'Address sould be min 5 letters').max(500, 'Address sould be max 500 letters').required('Address is Required'),
        method: Yup.string().required('Payment Method is Required')
    });

    return (
        <div className="container-fluid">
            <div className="row" id="wrapper-checkout">
                <div className="col-sm-12 d-flex justify-content-center ">
                    <div className="form-wrap">
                        <h4>Hoolaa, it's 85000/-</h4>
                        <div className="icon-wrap d-flex flex-row justify-content-center">
                            <h2><FontAwesomeIcon icon={faCreditCard} /></h2>
                            <h2 class="mx-3"><FontAwesomeIcon icon={faBitcoinSign} /></h2>
                            <h2><FontAwesomeIcon icon={faMoneyBill} /></h2>
                        </div>
                        <Formik id="contact-form"
                            initialValues={formFields}
                            validationSchema={checkoutFormSchema}
                            onSubmit={(formData, onSubmitProps) => {
                                handleCheckoutFormSubmit(formData, onSubmitProps);
                            }}
                        >
                            {({ errors, touched }) => (
                                <Form>
                                    <label htmlFor="name">Your Name: </label>
                                    <Field name="name" id="name" placeholder="eg. Jon Doe" />
                                    {errors.name && touched.name ? (<p>{errors.name}</p>) : null}

                                    <label htmlFor="contact">Your Contact: </label>
                                    <Field name="contact" type="number" id="contact" placeholder="eg. 9852410374" />
                                    {errors.contact && touched.contact ? (<p>{errors.contact}</p>) : null}

                                    <label htmlFor="address">Delivery Address: </label>
                                    <Field name="address" id="address" placeholder="eg. abc road, xyz city pin-000000" />
                                    {errors.address && touched.address ? (<p>{errors.address}</p>) : null}

                                    <label htmlFor="method">Payment Method: </label>
                                    <Field name="method" as="select" id="method">
                                        <option value="Card">Card</option>
                                        <option value="Net-Banking">Net-Banking</option>
                                        <option value="COD">Cash-On-Delivery</option>
                                    </Field>
                                    {errors.gender && touched.gender ? (<p>{errors.gender}</p>) : null}

                                    <button type="submit">Place-Order <FontAwesomeIcon icon={faArrowRightLong} /></button>
                                </Form>
                            )}
                        </Formik>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default Checkout