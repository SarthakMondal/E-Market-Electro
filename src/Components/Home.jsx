import React from 'react';
import { useState, useEffect } from 'react';

import "../Styles/Home.css";
import { faArrowRightLong, faPhoneVolume, faMoneyCheckDollar, faTruckFast, faArrowRotateLeft, faPhoneSquare, faEnvelopeSquare, faMapPin } from '@fortawesome/free-solid-svg-icons';
import { faWhatsappSquare } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Background from "../Images/bg1.png";
import face1 from "../Images/face1.jpeg";
import face2 from "../Images/face2.jpeg";
import face3 from "../Images/face3.jpeg";
import face4 from "../Images/face4.jpeg";

import { Formik, Form, Field} from "formik";
import * as Yup from 'yup';


function Home() {

  const [itemToShow, setItemToShow] = useState({});
  let customerReviews = [
    {
      id: 1,
      name: "Lilly Potter",
      image: face1,
      text: "“You should try out. Organizes all the newsletters very neastly. Still in pretty early stage but it's great so far.A paragraph is a series of related sentences developing a central idea, called the topic. Try to think about paragraphs in terms of thematic unity.”"
    },
    {
      id: 2,
      name: "Ron Weasley",
      image: face2,
      text: "“Wow, can't believe I have only just found Mecca been after such a service for years, super excited! Thank you guys for developing. A paragraph is a series of related sentences developing a central idea, called the topic. Try to think about paragraphs in terms of thematic unity.”"
    },
    {
      id: 3,
      name: "Draco Malfoy",
      image: face3,
      text: "Thank you for the wonderful experience! I now have a job I really enjoy, and make a good living while doing something I love. A paragraph is a series of related sentences developing a central idea, called the topic. Try to think about paragraphs in terms of thematic unity."
    },
    {
      id: 4,
      name: "Luna Lovegood",
      image: face4,
      text: "I have tried the Products and it's something out of this world! and great, which is why I recommend this company to all my friends!A paragraph is a series of related sentences developing a central idea, called the topic. Try to think about paragraphs in terms of thematic unity."
    }
  ];

  //use-effect method to set initial value of testimonial
  useEffect(() => {
    setItemToShow(customerReviews[0]);
  }, []);

  //method to change testimonials
  const changeReview = (id) => {
    let index = id - 1;
    setItemToShow(customerReviews[index]);
  }

  //method to handle contact form submit
  const handleCotactFormSubmit = (formData, onSubmitProps) => {
    console.log("Form Data: ", formData);
    onSubmitProps.setSubmitting(false);
    onSubmitProps.resetForm();
  }

  const contactFormSchema = Yup.object().shape({
    name: Yup.string().min(5, 'Name is Too Short!').max(50, 'Name is Too Long!').required('Name is Required'),
    email: Yup.string().email('Enter a Valid Email').required('Email is Required'),
    message: Yup.string().min(5, 'Message is Too Short!').max(1000, 'Message is Too Long!').required('Message is Required')
  });

  const formFields = {
    name: "",
    email: "",
    message: ""
  };


  return (
    <div className="container-fluid">
      <div className="row" id="wrapper-landing">
        <div className="col-sm-7">
          <h1>E-Market-Electro</h1>
          <p>
            This is an Indian e-commerce company, headquartered in Bangalore, and incorporated in Singapore as a private limited company. The main focus of the company is on all kinds of Electronics Gadgets like Desktops, Laptops, Mobile Phones, Tables, Smart Watch etc.
          </p>
          <a href="/products"><button>Our Products <FontAwesomeIcon icon={faArrowRightLong} /></button></a>
        </div>
        <div className="col-sm-5 d-flex flex-column align-items-center">
          <img src={Background} alt="background" />
        </div>
      </div>
      <div className="row" id="wrapper-points">
        <div className="col-sm-12 d-flex flex-wrap justify-content-center">
          <div className="card m-3">
            <div className="card-body">
              <FontAwesomeIcon icon={faPhoneVolume} id="icon" />
              <h5 class="card-title">24*7 Customer Support</h5>
              <p class="card-text">
                Get stuck anywhere, we are ready to help to 24*7, reach to us for any qurey, assistance anything you need.
              </p>
            </div>
          </div>
          <div className="card my-3">
            <div className="card-body">
              <FontAwesomeIcon icon={faMoneyCheckDollar} id="icon" />
              <h5 class="card-title">Different Payment Methods</h5>
              <p class="card-text">
                Hey User, you can make your payment through Card, NetBaking, UPI, even COD after delivery.
              </p>
            </div>
          </div>
          <div className="card m-3">
            <div className="card-body">
              <FontAwesomeIcon icon={faTruckFast} id="icon" />
              <h5 class="card-title">Super Fast Delivery</h5>
              <p class="card-text">
                Cann't wait to use your brand new product, we are here with super fast delivery to your door.
              </p>
            </div>
          </div>
          <div className="card my-3">
            <div className="card-body">
              <FontAwesomeIcon icon={faArrowRotateLeft} id="icon" />
              <h5 class="card-title">Easy Return Availabe</h5>
              <p class="card-text">
                Changed your mind, don't worry. Return or Exchange your product within 7 days from delivery
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="row" id="wrapper-aboutus">
        <div className="col-sm-12">
          <h2>About <strong style={{ color: "var(--primarybg)" }}>E</strong>-Market-Electro</h2>
          <p>
            E-commerce (electronic commerce) is the activity of electronically buying or selling of products on online services or over the Internet. E-commerce draws on technologies such as mobile commerce, electronic funds transfer, supply chain management, Internet marketing, online transaction processing, electronic data interchange (EDI), inventory management systems, and automated data collection systems. E-commerce is in turn driven by the technological advances of the semiconductor industry, and is the largest sector of the electronics industry.
            The term was coined and first employed by Dr. Robert Jacobson, Principal Consultant to the California State Assembly's Utilities & Commerce Committee, in the title and text of California's Electronic Commerce Act, carried by the late Committee Chairwoman Gwen Moore (D-L.A.) and enacted in 1984.
            E-commerce typically uses the web for at least a part of a transaction's life cycle although it may also use other technologies such as e-mail. Typical e-commerce transactions include the purchase of products (such as books from Amazon) or services (such as music downloads in the form of digital distribution such as iTunes Store). There are three areas of e-commerce: online retailing, electronic markets, and online auctions. E-commerce is supported by electronic business. The existence value of e-commerce is to allow consumers to shop online and pay online through the Internet, saving the time and space of customers and enterprises, greatly improving transaction efficiency, especially for busy office workers, but also saving a lot of valuable time.
          </p>
        </div>
      </div>
      <div className="row" id="wrapper-review">
        <div className="col-sm-5 d-flex justify-content-end">
          <div className="card d-flex justify-content-end">
            <img src={itemToShow.image} alt="users" />
            <div className="card-body">
              <h3>{itemToShow.name}</h3>
              <p>{itemToShow.text}</p>
            </div>
          </div>
        </div>
        <div className="col-sm-7 d-flex flex-column justify-content-start">
          <p>Testimonal</p>
          <h3>What They said after using <br /> <strong style={{ color: "var(--primarybg)" }}>E-Market-Electro</strong></h3>
          <div className="scroll-hld">
            {
              customerReviews.map(items =>
                <div className="list-itms d-flex flex-row" onClick={() => changeReview(items.id)}>
                  <div className="img-hld">
                    <img src={items.image} alt="face" />
                  </div>
                  <div className="txt-hld">
                    <h6>{items.name}</h6>
                    <p>{items.text.substring(0, 40) + " ..........."}</p>
                  </div>
                </div>
              )
            }
          </div>
        </div>
      </div>
      <div className="row" id="wrapper-contact">
        <h2>Contact <strong style={{ color: "var(--primarybg)" }}>U</strong>s</h2>
        <p>In case you are qurious about our Locations, or Contact details or willing to Write somthing to us</p>
        <div className="col-sm-6 d-flex flex-column align-items-end">
          <div className="card">
            <h6>
              <FontAwesomeIcon icon={faMapPin} id="icon" style={{ color: "var(--primarybg)", fontSize: "35px" }} /> <strong>Address1: </strong>
              Shopno 4 Street, Dhake Colony, J P Road, Opposite Wadia High School, Andheri (w), Mumbai, Maharastra-803341
            </h6><br />
            <h6>
              <FontAwesomeIcon icon={faMapPin} id="icon" style={{ color: "var(--primarybg)", fontSize: "35px" }} /> <strong>Address2: </strong>
              Sf-18, Panorama Complex, Opp Hotel Welcome, Alkapuri, Vadodara, Gujrat-745230
            </h6><br />
            <h6>
              <FontAwesomeIcon icon={faPhoneSquare} id="icon" style={{ color: "var(--primarybg)", fontSize: "35px" }} /> <strong>Contact: </strong>
              (033) 8652-9652, (033) 4259-6371
            </h6><br />
            <h6>
              <FontAwesomeIcon icon={faEnvelopeSquare} id="icon" style={{ color: "var(--primarybg)", fontSize: "35px" }} /> <strong>Email: </strong>
              writetous.eme.2022@gmail.com
            </h6><br />
            <h6>
              <FontAwesomeIcon icon={faWhatsappSquare} id="icon" style={{ color: "var(--primarybg)", fontSize: "35px" }} /> <strong>Whatsapp: </strong>
              +91-8632014527
            </h6>
          </div>
        </div>
        <div className="col-sm-6 d-flex flex-column align-items-start">
          <div className="form-wrap">
            <h3>Reach us for any Query</h3>
            <Formik id="contact-form"
              initialValues={formFields}
              validationSchema={contactFormSchema}
              onSubmit={(formData, onSubmitProps) => {
                handleCotactFormSubmit(formData, onSubmitProps);
              }} 
            >
              {({ errors, touched }) => (
                <Form>
                  
                  <label htmlFor="name">Your Name: </label>
                  <Field name="name" id="name" placeholder="eg. Jon Doe"/>
                  {errors.name && touched.name ? (<p>{errors.name}</p>) : null}

                  <label htmlFor="email">Your Email: </label>
                  <Field name="email" type="email" id="email" placeholder="jondoe@gmail.com"/>
                  {errors.email && touched.email ? (<p>{errors.email}</p>) : null}

                  <label htmlFor="message">Your Message: </label>
                  <Field name="message" id="message" placeholder="eg. This is a Message"/>
                  {errors.message && touched.message ? <p>{errors.message}</p> : null}

                  <button type="submit">Submit Form <FontAwesomeIcon icon={faArrowRightLong} /></button>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home