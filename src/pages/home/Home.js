import React from "react";

// components
import Footer from "../../components/Footer";
import ActionFeature from "../../components/Svg/ActionFeature";

// pages
import Feature1 from "./components/Feature1";
import Feature2 from "./components/Feature2";
import Feature3 from "./components/Feature3";
import Feature4 from "./components/Feature4";

export default function Home() {
  return (
    <div>
      <Feature1 />
      <Feature2 />
      <Feature3 />
      <Feature4 />
      <ActionFeature />
      <Footer/>
    </div>
  );
}
