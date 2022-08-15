import React from "react";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import { Categories } from "../components/Categories";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Products from "../components/Products";
import Slider from "../components/Slider";
import { Divide4 } from "../components/Divider";

const Body = styled.div`

`

const Home = () => {
  return (
    <Body>
      <Announcement />
      <Navbar />
      <Slider />
      <Divide4 />
      <Categories />
      <Products/>
      <Newsletter/>
      <Footer/>
    </Body>
  );
};

export default Home;
