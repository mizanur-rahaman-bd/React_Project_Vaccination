import React from "react";
import "./Banner.css";
import CommonButton from "../Common/CommonButton";

const Banner = () => {
  return (
    <>
      <section className="banner">
        <div className="container">
          <div className="banner_row">
            <div className="text_img_row lg:flex lg:justify-between">
              <div className="banner_text_col">
                <h2>Get Vaccinated. Boost your Immune System</h2>
                <h1>COVID-19 Vaccination Got Easier With, </h1>
                <span className="text-Brand_color font-montstarate font-extrabold text-[24px] md:text-[36px] lg:text-[48px] mb-[20px] md:mb-[40px] lg:mb-[50px]">
                  Vaccination.ng
                </span>
                <p>
                  Vaccination.ng will help you find the nearest centre for
                  vaccination, in all 36 states in Nigeria.
                </p>
                <div className="banner_button mb-[50px] md:mb[55px] lg:mb-0 flex gap-[20px]">
                  <CommonButton CommonButtonText={"Get Vaccine"} />
                  <CommonButton CommonButtonText={"Help Centre"} />
                </div>
              </div>
              <div className="banner_img_col">
                <img src="Images/banner.png" alt="banner" />
                <div className="banner_mini_1">
                  <img src="Images/banner_mini_1.png" alt="Banner" />
                </div>
                <div className="banner_mini_2">
                  <img src="Images/banner_mini_2.png" alt="Banner" />
                </div>
                <div className="banner_mini_Bottom">
                  <img src="Images/banner_mini_bottom.png" alt="Banner" />
                </div>
              </div>
            </div>
            <div className="schedule_row">
              <div className="flex items-center gap-[20px] mb-[20px]">
                <img
                  className="w-[30px] md:w-[50px] h-[30px] md:h-[50px]"
                  src="Images/shedule_clock_icon.png"
                  alt="clock"
                />
                <h2 className="font-montstarate font-bold text-[14px] md:text-[24px] text-white">
                  Schedule your Vaccination
                </h2>
              </div>
              <div className="shedule_info_row md:flex gap-[40px] items-center p-[40px]">
                <div className="shedule_info_col_1_for_md lg:flex items-center gap-[12px]">
                  <div className="location_col mb-[14px] flex items-center gap-[20px]">
                    <div className="img">
                      <img src="Images/shedule_location.png" alt="location" />
                    </div>
                    <div className="text">
                      <h3 className="font-montstarate font-semibold text-[14px] md:text-[20px] lg:text-[24px] text-[#FFFFFF] opacity-[.5]">
                        Location
                      </h3>
                      <p className="font-montstarate font-bold text-[14px] md:text-[20px] lg:text-[24px] text-[#FFFFFF] ">
                        Ikeja Lagos, Nigeria
                      </p>
                    </div>
                  </div>
                  <div className="date_col mb-[14px] flex items-center gap-[20px]">
                    <div className="img">
                      <img src="Images/shedule_date.png" alt="clock" />
                    </div>
                    <div className="text">
                      <h3 className="font-montstarate font-semibold text-[14px] md:text-[20px] lg:text-[24px] text-[#FFFFFF] opacity-[.5]">
                        Date
                      </h3>
                      <p className="font-montstarate font-bold text-[14px] md:text-[20px] lg:text-[24px] text-[#FFFFFF] ">
                        29 February, 2022
                      </p>
                    </div>
                  </div>
                </div>
                <div className="shedule_info_col_2_for_md lg:flex gap-[14px] items-center">
                  <div className="type_col mb-[30px] lg:mb-[14px] flex items-center mr-[15px] gap-[20px]">
                    <div className="img">
                      <img src="Images/shedule_vac_type.png" alt="location" />
                    </div>
                    <div className="text">
                      <h3 className="font-montstarate font-semibold text-[14px] md:text-[20px] lg:text-[24px] text-[#FFFFFF] opacity-[.5]">
                        29 February, 2022
                      </h3>
                      <p className="font-montstarate font-bold text-[14px] md:text-[20px] lg:text-[24px] text-[#FFFFFF] ">
                        Mordena
                      </p>
                    </div>
                  </div>

                  <div className="shedule_submit_button">
                    <CommonButton CommonButtonText={"Submit"} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
