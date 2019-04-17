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
        Title: {main}</div>
      <div>Desc: {description}</div>
      <div>Icon: {icon}</div>
      <div>Temp: {temp}</div>
      <div>Pressure: {pressure}</div>
      <div>Humidity: {humidity}</div>
      <div>Temp Min: {temp_min} Max:{temp_max}</div>
    </div>
  );
}

export default Weather;
