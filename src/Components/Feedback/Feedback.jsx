import React from "react";
import "./Feedback.css";

const Feedback = () => {
  return (
    <>
      <section className="feedback_section">
        <div className="container">
          <div className="feedback_text_row">
            <h3>FEEDBACK</h3>
            <h2>What our Patients Think</h2>
            <p>
              Adipiscing nec etiam tortor elit quisque. Arcu aliquet convallis
              aenean eu velit.
            </p>
            <p>
              Mi vestibulum, ullamcorper venenatis imperdiet augue arcu donec
              neque.
            </p>
          </div>
          <div className="feedback_img_row">
            <div className="single_card_bg_img">
              <img src="Images/single_Card_img.png" alt="vaccine" />
              <img src="Images/single_Card_img.png" alt="vaccine" />
              <img src="Images/single_Card_img.png" alt="vaccine" />
            </div>
            <div className="card_row">
              <div className="single_card">
                <div className="heading_Row">
                  <div className="img">
                    <img
                      src="Images/single_card_Heading_Photo_1.png"
                      alt="photo"
                    />
                  </div>
                  <div className="heading_Text">
                    <h2>Oyindamola Maja</h2>
                    <h3>Badagry, Lagos</h3>
                  </div>
                </div>
                <div className="text_row">
                  <p>
                    “Been stressing about a close centre to get the{" "}
                    <span>covid-19</span>
                    vaccine, until i tried Vaccination.ng”
                  </p>
                </div>
              </div>
              <div className="single_card bg-Brand_color">
                <div className="heading_Row">
                  <div className="img">
                    <img
                      src="Images/single_card_Heading_Photo_2.png"
                      alt="photo"
                    />
                  </div>
                  <div className="heading_Text">
                    <h2 className="text-white">Okeowo Lekan</h2>
                    <h3 className="text-white">Ikeja, Lagos</h3>
                  </div>
                </div>
                <div className="text_row">
                  <p className="text-white">
                    “Got my vaccine very close to my house. Was very easy
                    scheduling an appointment.”
                  </p>
                </div>
              </div>
              <div className="single_card">
                <div className="heading_Row">
                  <div className="img">
                    <img
                      src="Images/single_card_Heading_Photo_3.png"
                      alt="photo"
                    />
                  </div>
                  <div className="heading_Text">
                    <h2>Kafaru Temitope</h2>
                    <h3>Obanikoro, Lagos</h3>
                  </div>
                </div>
                <div className="text_row">
                  <p>
                    “Been stressing about a close centre to get the <span>covid-19</span> 
                    vaccine, until i tried Vaccination.ng”
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Feedback;
