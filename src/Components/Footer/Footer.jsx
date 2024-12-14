import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import { IoPaperPlaneOutline } from "react-icons/io5";

const Footer = () => {
  return (
    <>
      <section className="footer_section">
        <div className="container">
          <div className="footer_menu_content">
            <div className="menu_logo">
              <img
                className="w-[142px] md:w-[200px] lg:w-[251px] h-[32px] md:h-[44px]"
                src="Images/logo.png"
                alt="LOgo"
              />
            </div>
            <div className="footer_main_menu">
              <ul>
                <li>
                  <Link to="">Home</Link>
                </li>
                <li>
                  <Link to="">Services</Link>
                </li>
                <li>
                  <Link to="">Schedule</Link>
                </li>
                <li>
                  <Link to="">Contact us</Link>
                </li>
              </ul>
            </div>
            <div className="footer_social_link">
              <Link to={""}>
                <img src="Images/footer_youtube.png" alt="youtube" />
              </Link>
              <Link to={""}>
                <img src="Images/footer_insta.png" alt="insta" />
              </Link>
              <Link className="mr-[-9px]" to={""}>
                <img src="Images/footer_twitter.png" alt="twitter" />
              </Link>
              <Link to={""}>
                <img src="Images/footer_fb.png" alt="fb" />
              </Link>
            </div>
          </div>
          <div className="footer_mail_box">
            <div className="footer_mail_small_box">
              <h2>Get a quote</h2>
              <p>Please do enter your email address below</p>
              <div className="footer_input_row">
              <input placeholder="lenux.ng@gmail.com" type="text" />
              <button type="submit"><IoPaperPlaneOutline className="w-[23px] h-[20px] md:w-[40px] md:h-[40px] text-white" /></button>

              </div>
              
              

            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
