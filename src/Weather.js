/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';

function Weather(props) {
  // eslint-disable-next-line react/prop-types
  const { weatherData } = props;
  const { main, description, icon } = weatherData.weather[0];
  const { temp, pressure, humidity, temp_min, temp_max } = weatherData.main;
  return (
    <div>
      <div>
        Condition: {main}</div>
      <div>Description: {description}</div>
      <div>Icon: {icon}</div>
      <div>Temperature: {temp}</div>
      <div>Pressure: {pressure}</div>
      <div>Humidity: {humidity}</div>
      <div>Min Temp: {temp_min} Max Temp:{temp_max}</div>
    </div>
  );
}

export default Weather;
