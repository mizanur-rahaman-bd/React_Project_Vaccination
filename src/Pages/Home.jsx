import React from "react";
import Banner from "../Components/Banner/Banner";
import CompanyList from "../Components/CompanyList/CompanyList";
import DataBaseCheck from "../Components/DataBaseCheck/DataBaseCheck";

const Home = () => {
  return (
    <>
      <Banner />
      <CompanyList />
      <DataBaseCheck />
    </>
  );
};

export default Home;
