import React from "react";
import Banner from "../../Banner/Banner";
import Products from "../../Products/Products";
import Agents from "../Agents/Agents";
import BannarLast from "../BannerLast/BannarLast";
import Management from "../Management/Management";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Products></Products>
      <Agents></Agents>
      <Management></Management>
      {/* <BannarLast/> */}
    </div>
  );
};

export default Home;
