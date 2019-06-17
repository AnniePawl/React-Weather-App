/* eslint-disable react/jsx-filename-extension */

import React, { Component } from 'react';
import ErrorMessage from './ErrorMessage';
import Weather from './Weather';
import './App.css';
import Title from './Title'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputValue: '', // Holds value entered in input field
      weatherData: null, // Holds data loaded from the weather API
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    const { inputValue: zip } = this.state;
    // ! My own API key!
    const apikey = process.env.REACT_APP_OPENWEATHERMAP_API_KEY;
    // Form an API request URL with the apikey and zip
    const url = `https://api.openweathermap.org/data/2.5/weather?zip=${zip},us&appid=${apikey}&units=imperial`;

    // Get data from the API with fetch
    fetch(url).then((res) => {
      // Handle the response stream as JSON
      return res.json();
    }).then((json) => {
      // If the request successful, assign data to component state
      this.setState({ weatherData: json });
      // This needs better error checking here or at renderWeather()
      // It's possible to get a valid JSON response that is not weather
    }).catch((err) => {
      // If there is no data...
      this.setState({ weatherData: null });
      // Clear the weather data, nothing to display
      console.log('-- Error fetching --');
      console.log(err.message);
    });
  }

  renderWeather() {
    // This method returns undefined or a JSX component
    const { weatherData } = this.state;
    if (weatherData === null) {
      // If there is no data return undefined
      return null;
    }

    if (weatherData.cod === '404') {
      return <ErrorMessage message={weatherData.message} />;
    }

    /*
    This next step needs another level of error checking. It's
    possible to get a JSON response for an invalid zip in which
    case the step below fails.
    */
    return <Weather weatherData={weatherData} />;
  }

  render() {
    const { inputValue } = this.state;
    return (
      <div className="App">
        <div>
          < Title />
        </div>

        <div className="return_weather">
          {/** Conditionally render this component */}
          {this.renderWeather()}
        </div>


        {/** This input uses the controlled component pattern */}
        <form onSubmit={e => this.handleSubmit(e)}>

          {/**
          This pattern is used for input and other form elements
          Set the value of the input to a value held in component state
          Set the value held in component state when a change occurs at the input
          */}
          <div className="form-elements">
            <input
              value={inputValue}
              onChange={e => this.setState({ inputValue: e.target.value })}
              type="text"
              pattern="(\d{5}([\-]\d{4})?)"
              placeholder="zip code"
            />

            <button className="button" type="submit">submit</button>
          </div>
        </form>

      </div>
    );
  }
}

export default App;
