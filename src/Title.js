import React, { Component } from 'react';

class Title extends Component {
  render() {
    const name = 'Anna';
    return (
      <div>
        <h1 className="test">
          {this.props.name}
          WHAT'S THE WEATHER
        </h1>
        <h2>Enter Your Zip Below</h2>
      </div>
    );
  }
}

export default Title;
