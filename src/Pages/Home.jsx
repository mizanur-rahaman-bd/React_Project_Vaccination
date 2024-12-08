import React from "react";
import Banner from "../Components/Banner/Banner";
import CompanyList from "../Components/CompanyList/CompanyList";
import DataBaseCheck from "../Components/DataBaseCheck/DataBaseCheck";
import Registration from "../Components/Registration/Registration";

const Home = () => {
  return (
    <>
      <Banner />
      <CompanyList />
      <DataBaseCheck />
      <Registration />
    </>
  );
};

export default Home;
