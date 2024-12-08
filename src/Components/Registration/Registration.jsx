import React from "react";
import "./Registration.css";

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
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Registration;
