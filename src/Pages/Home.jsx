import React from "react";
import Banner from "../Components/Banner/Banner";
import CompanyList from "../Components/CompanyList/CompanyList";
import DataBaseCheck from "../Components/DataBaseCheck/DataBaseCheck";
import Registration from "../Components/Registration/Registration";
import Symptoms from "../Components/Symptoms/Symptoms";
import Feedback from "../Components/Feedback/Feedback";
import Footer from "../Components/Footer/Footer";

const Home = () => {
  return (
    <>
      <Banner />
      <CompanyList />
      <DataBaseCheck />
      <Registration />
      <Symptoms />
      <Feedback />
      <Footer />
    </>
  );
};

export default Home;
