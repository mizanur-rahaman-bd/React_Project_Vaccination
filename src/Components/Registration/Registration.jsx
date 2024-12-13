import React from "react";
import "./Registration.css";
import { Link } from "react-router-dom";

const Registration = () => {
  return (
    <>
      <section className="Registration">
        <div className="container">
          <div className="heading">
            <h2>Get your vaccine registration today</h2>
          </div>
          <div className="registration_form_photo_row">
            <div className="img ">
              <img
                className="w-[305px] md:w-[401px] h-[437px] md:h-[575px]"
                src="Images/registration.png"
                alt="registration"
              />
            </div>
            <div className="form">
              <h2>Patient’s Full Name</h2>
              <input placeholder="Full name" type="text" />
              <h2>Mobile Number</h2>
              <p>
                Notifications for appointment and reminders will be sent to this
                provided number
              </p>
              <div className="phone_input">
                <input className="" placeholder="Phone number" type="text" />
                <button>Verify</button>
              </div>
              <div className="submit_button">
                <button>Submit</button>
                <p>Already registered ? <span className="text-Brand_color ml-[20px] md:ml-[46px]"><Link to={''}>Check your status</Link> </span></p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Registration;
