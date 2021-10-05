import React from "react";

import Content from "./home-content";
import Navbar from "./home-navbar";
import "./Home.css";


export default function Home() {
  return (
    <div className="homepage">
    
      <Navbar />
      <Content />
    </div>
  );
}
