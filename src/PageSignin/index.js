import React, { Component } from 'react';

import Navigation from '../Navigation';
import Container from '../Container';
import Textbox from '../Textbox';
import Button from '../Button';
import Heading1 from '../Heading1';

class Signin extends Component {
  render() {
    return (
      <form className="Signin">
        <Navigation />
        <Container>
          <Heading1 text="Sign in" />
          <form className="Signin">
            <Textbox
              type="text"
              text="Username"
              id="username"
              placeholder="Your Username"
            />
            <Textbox
              type="password"
              text="Password"
              id="password"
              placeholder="Your Password"
            />
            <Button type="submit" text="Sign in" />
          </form>
        </Container>
      </form>
    );
  }
}

export default Signin;
