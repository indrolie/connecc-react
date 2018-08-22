import React, { Component } from 'react';

import './index.css';

class Heading1 extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      text: 'Sign up'
    };
  }

  handleChange(event) {
    this.setState({
      text: event.target.value
    });
  }

  render() {
    return <p className="h1">{this.props.text}</p>;
  }
}

export default Heading1;
