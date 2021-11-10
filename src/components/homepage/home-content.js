import React from "react";
import { AuthenticatedTemplate, UnauthenticatedTemplate } from "@azure/msal-react";

import "./Home.css";
import { findAUser } from "../../serverInterface/server";
import HomeTemplate from "./home-template";


 class Content extends React.Component { 
  constructor(props) {
    super(props)
    this.state = {
      data: {}
    }
  }

  componentDidMount() {
    // let user_info= this.props.location.state;
    // // let password = this.props.location.state.password;
    // if(user_info){
    //   let user_email = user_info.email
    //   let user_pass = user_info.password
    //   fetch(findAUser({"email": user_email, "password": user_pass}))
    //   .then(x => this.setState({data: x})).catch(e => console.log(e));
      
    // }
    // findAUser()
  }
  render() {
    // if(this.state.data.length >= 1){
    //   console.log(this.stat)
    // }
    
    return (
      <>
      <HomeTemplate>
        <UnauthenticatedTemplate>
        <h5><center>You are not signed in! Please sign in</center></h5>
        </UnauthenticatedTemplate>
        <AuthenticatedTemplate>
        <h5><center>Welcome to College Biblio!</center></h5>
        </AuthenticatedTemplate>
      </HomeTemplate>
      </>
    );
  }}

  export default Content;

