import React, { Component } from 'react';

import './index.css';

class Button extends Component {
  render() {
    return (
      <button id={this.props.id} className="button" type={this.props.type}>
        {this.props.text}
      </button>
    );
  }
}

export default Button;
