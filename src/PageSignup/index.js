import React, { Component } from 'react';

import Navigation from '../Navigation';
import Container from '../Container';
import Textbox from '../Textbox';
import Button from '../Button';
import Heading1 from '../Heading1';
import signUp from '../function/signup';

class Signup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      email: '',
      password: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    signUp();
  }

  render() {
    return (
      <div className="Signup">
        <Navigation />
        <Container>
          <Heading1 text="Sign up" />
          <form
            id="signup-form"
            className="Signup"
            onSubmit={this.handleSubmit}
          >
            <Textbox
              type="text"
              text="Username"
              id="signup-username"
              placeholder="Your Username"
            />
            <Textbox
              type="email"
              text="Email"
              id="signup-email"
              placeholder="Your Email"
            />
            <Textbox
              type="password"
              text="Password"
              id="signup-password"
              placeholder="Your Password"
            />
            <Button id="button-signup" type="submit" text="Sign up" />
          </form>
        </Container>
      </div>
    );
  }
}

export default Signup;
