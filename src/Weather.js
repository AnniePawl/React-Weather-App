/* eslint-disable react/jsx-one-expression-per-line */
eslint - disable react / jsx - filename - extension
import React from 'react';

function Weather(props) {
  // eslint-disable-next-line react/prop-types
  const { weatherData } = props;
  const { main, description } = weatherData.weather[0];
  const { temp, pressure, humidity, temp_min, temp_max, wind_speed } = weatherData.main;
  return (
    <div>
      <div className="weather">Condition: {main} </div>
      <div className="weather">Details:   {description}</div>
      <div className="weather">Temperature:   {temp} °F </div>
      <div className="weather">Min Temp:   {temp_min} °F </div>
      <div className="weather"> Max Temp:  {temp_max} °F </div>
      {/* <div className="weather"> Wind Speed:  {wind_speed} </div> */}
      <div className="weather">Pressure:   {pressure} hPa</div>
      <div className="weather">Humidity:   {humidity} %</div>

    </div>
  );
}

export default Weather;
