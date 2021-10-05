import React from "react";
import Button from "@mui/material/Button";
import { Redirect } from "react-router-dom";





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

