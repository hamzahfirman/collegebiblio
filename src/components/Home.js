import React from "react";
import { Button } from "react-bootstrap";
import { Link, Redirect } from "react-router-dom";
import "./css/Home.css";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      signedIn: false,
      signUp: false
    };
  }
  //Event Handlers
  handleOnClickSignUp = () => {
    this.setState({ signUp: true });
  };

  handleOnClickSignUp = () => {
    this.setState({ signUp: true });
  };
  // componentDidMount() {
  //   console.log(this.props.history);
  // }
  render() {
    let { signedIn, signUp } = this.state;
    let location = this.props.history.location;

    // Check for sign up values
    // if(location){
    //   if(location.state){

    //   }
    // }
    if (signedIn) {
      return <div>Home: I am signed in!</div>;
    }
    if (signUp) {
      return <Redirect to={{ pathname: "/signup" }} />;
    }
    return (
      <div>
        Home: Not signed in. New?
        <div className="loginButtons">
          <Button
            variant="dark"
            size="sm"
            id="signIn"
            onClick={this.handleOnClickSignUp}
          >
            Sign up
          </Button>
          <Button variant="dark" size="sm" id="signIn">
            Log in
          </Button>
        </div>
      </div>
    );
  }
}

export default Home;
