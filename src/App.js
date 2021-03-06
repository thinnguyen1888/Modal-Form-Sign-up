import React, { Component } from "react";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import "bootstrap/dist/css/bootstrap.min.css";
import Hook from "./components/Hook";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      signUp: false,
      login: true,
    };
  }

  updateComponentAppear = (componentName) => {
    console.log(componentName);
    if (componentName == "signUp") {
      this.setState({ signUp: false, login: true });
    }

    if (componentName == "login") {
      this.setState({ signUp: true, login: false });
    }
  };

  render() {
    const { signUp, login } = this.state;
    return (
      <div>
        {signUp ? (
          <SignUp updateComponentAppear={this.updateComponentAppear} />
        ) : (
          ""
        )}
        {login ? (
          <Login updateComponentAppear={this.updateComponentAppear} />
        ) : (
          ""
        )}
        <Hook />
      </div>
    );
  }
}
export default App;
