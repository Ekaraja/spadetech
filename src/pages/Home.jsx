import React from "react";
import Services from "../components/home/Services";
import Slider from "../components/home/Slider";
import Solutions from "../components/home/Solutions";
import Header from "../components/header/Header";
import {homeHeader} from "../utils/contents/headers-contents/headerContents"

const Home = () => {

  return (
    <>
      <Header header={homeHeader}/>
      <Solutions />
      <Services />
      <Slider />
    </>
  );
};

export default Home;
