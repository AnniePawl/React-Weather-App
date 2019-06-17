/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';

function Weather(props) {
  // eslint-disable-next-line react/prop-types
  const { weatherData } = props;
  const { main, description } = weatherData.weather[0];
  const { temp, pressure, humidity, temp_min, temp_max } = weatherData.main;
  return (
    <div>
      <div className="weather">Condition: {main} </div>
      <div className="weather">Details:   {description}</div>
      <div className="weather">Temperature:   {temp} fahrenheit </div>
      <div className="weather">Pressure:   {pressure}</div>
      <div className="weather">Humidity:   {humidity}</div>
      <div className="weather">Min Temp:   {temp_min} fahrenheit </div>
      <div className="weather"> Max Temp:  {temp_max} fahrenheit </div>
    </div>
  );
}

export default Weather;
