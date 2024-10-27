import React from "react";
import Header from "./Component/Header.jsx/Index";
import Cards from "./Component/Cards.jsx/Index";
import Feature from "./Component/Feature.jsx/Index";
import Partners from "./Component/Partners.jsx/Index";
import Footer from "./Component/Footer.jsx/Index";
import Form from "./Component/Form.jsx/Index";
import { Routes, Route } from "react-router-dom";
export { Form };
export default function PricingPlans() {
  return (

      <div className="">
        <Header />
        <Cards />
        <Feature />
        <Partners />
        <Footer />
      </div>
  );
}
