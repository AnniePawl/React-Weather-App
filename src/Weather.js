import React from 'react';

function Weather(props) {
    const { main, description, icon } = props.weatherData.weather[0]
    const { temp, pressure, humidity, temp_min, temp_max } = props.weatherData.main
    return (
        <div>
            <div>Title: {main}</div>
            <div>Desc: {description}</div>
            <div>Icon: {icon}</div>
            <div>Temp: {temp}</div>
            <div>Pressure: {pressure}</div>
            <div>Humidity: {humidity}</div>
            <div>Temp Min: {temp_min} Max:{temp_max}</div>
        </div>
    )
}

export default Weather
