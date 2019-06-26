import React from 'react';

function Weather(props) {

  const { weatherData } = props;
  const { main, description } = weatherData.weather[0];
  const { temp, pressure, humidity, temp_min, temp_max } = weatherData.main;
  const { speed, deg } = weatherData.wind
  return (
    <div>
      <div className="weather"><span className="bold">Condition:</span> {main} </div>
      <div className="weather"><span className="bold">Details:</span>   {description}</div>
      <div className="weather"><span className="bold">Temperature:</span>   {Math.round(temp)} °F </div>
      <div className="weather"><span className="bold">Min Temp:</span>   {Math.round.temp_min} °F </div>
      <div className="weather"><span className="bold">Max Temp:</span>  {temp_max} °F </div>
      <div className="weather"><span className="bold">Pressure: </span>   {pressure} hPa</div>
      <div className="weather"><span className="bold">Humidity: </span>  {humidity} %</div>
      <div className="weather"><span className="bold">Wind Speed: </span>  {speed} mph</div>
      <div className="weather"><span className="bold"> Wind Direction:  </span>  {deg} deg</div>

    </div>
  );
}

export default Weather;
