import React from 'react';

import "../Styles/Profile.css";

import { faArrowRightLong, faUserShield} from '@fortawesome/free-solid-svg-icons';
import {  } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { useState, useEffect } from 'react';

function Profile() {

  const [profile, setProfile] = useState({});

  useEffect(() => {
    setProfile({
      name: "Jon Doe",
      email: "jondoe@gmail.com",
      phone: 9830485102,
      age: 29,
      gender: "Male",
      address: "Flt No 101, Lapapma Caves Apts, Banjarahills, Hyderabad, Andhra Pradesh-500034"
    })
  }, []);

  const handleSessionLogout = () => {
    console.log("Session Logout Completed");
  }
  
  return (
    <div className="container-fluid">
      <div className="row" id="wrapper-profile">
      <div className="col-sm-12 d-flex flex-column justify-content-center align-items-center">
        <div className="card">
          <div className="img-wrap">
            <h2><FontAwesomeIcon icon={faUserShield} /></h2>
          </div>
          <div className="data-wrap">
            <h4><b>Name:</b> {profile.name}</h4>
            <h4><b>Email-Id:</b> {profile.email}</h4>
            <h4><b>Phone-No:</b> {profile.phone}</h4>
            <h4><b>Age:</b> {profile.age} Years</h4>
            <h4><b>Gender:</b> {profile.gender}</h4>
            <h4><b>Address:</b> {profile.address}</h4>
            <button onClick={handleSessionLogout}>Logout-Now <FontAwesomeIcon icon={faArrowRightLong} /></button>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Profile