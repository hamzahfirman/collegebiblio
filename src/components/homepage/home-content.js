import React from "react";
import Button from "@mui/material/Button";
import { Redirect } from "react-router-dom";

import { findAUser } from "../../serverInterface/server";



class Content extends React.Component { 
  constructor(props) {
    super(props)
    this.state = {
      registered: false
    }
  }


  handleOnClickRegisterButton = () => {
    this.setState({registered: true})
   
  }

  componentDidMount() {
    const { email, password } = this.props;
    let data = {}
    if(this.props.email.length > 1 && this.props.password.length > 1){
      
      data = {email: email, password: password}
      findAUser(data);
    }
    // user_data = findAUser(this.props.history.state)
  }

  render(){
   
    if(this.state.registered) {
      return(
        <Redirect to= {{pathname: "/signup"}}/>
        );
    
    }
    return (
      <div>
        <Button variant="contained" onClick={this.handleOnClickRegisterButton}>REGISTER</Button>
      </div>
    );
    }}

export default Content;

