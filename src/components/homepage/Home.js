import React from "react";

import Content from "./home-content";
import Navbar from "./home-navbar";
import "./Home.css";


export default function Home(props) {
  let email =''
  let password =''

  if (props.location.state){
     email = props.location.state.email;
     password = props.location.state.password;
  }
  return (
    <div className="homepage">
    
      <Navbar />
      <Content email={email} password={password} />
    </div>
  );
}
