import React from "react";

import Content from "./home-content";
import Navbar from "./home-navbar";
import SignUp from "../forms/SignUp";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Content />
      <SignUp />
    </div>
  );
}
