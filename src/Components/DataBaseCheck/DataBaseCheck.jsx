import React from "react";
import "./DataBaseCheck.css";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const DataBaseCheck = () => {
  return (
    <>
      <section className="DataBaseCheck">
        <div className="data_base_row">
          <div className="dataBaseHeadingtext">
            <h3>Check your COVID-19 result on our Database</h3>
          </div>
          <div className="input_section">
            <input placeholder="Okeowo" type="text" />
            <input placeholder="NIK Number" type="text" />
            <button>Check</button>
          </div>
          <div className="certificate_text">
            <h3>
              Need a certificate for your COVID-19 result? Please{" "}
              <Link to={""}>
                click <span className="underline">here</span>{" "}
              </Link>{" "}
            </h3>
          </div>
        </div>
        <div className="get_vaccinated_Row">
          <div className="Get_vaccinated_text_row">
            <div className="w-[265px] md:w-[504px] lg:w-[536px] font-montstarate font-bold text-[24px] md:text-[36px] lg:text-[50px] text-[#FFFFFF]">
              <h3>Why get vaccinated today?</h3>
            </div>
            <div className="w-[300px] md:w-[536px] font-montstarate font-normal text-[14px] md:text-[20px] text-[#FFFFFF]">
              <p>
                Magna adipiscing at elit at ornare lectus nibh lorem. Ac, sed ac
                lorem pellentesque vestibulum risus matti. In molestie
                condimentum malesuada non.
              </p>
            </div>
          </div>
          <div className="get_vaccinated_card_row">
            <div className="immune">
              <img src="Images/immune.png" alt="immune" />
              <h3>Protects your immune system against viruses</h3>
              <p>Velit ut consectetur mauris, orci amet, faucibus.</p>
              <p>
                Sit turpis fringilla ipsum pretium, dictum. Dolor eget vel nulla
                lorem ac.
              </p>
              <Link to={""}>
                Read More <FaArrowRight className="inline-block" />
              </Link>
            </div>
            <div className="spread_virus">
              <img src="Images/spread_virus.png" alt="virus" />
              <h3>Minimize the spread of the Virus</h3>
              <Link to={""}>
                Read More <FaArrowRight className="inline-block" />
              </Link>
            </div>
            <div className="protect"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DataBaseCheck;
