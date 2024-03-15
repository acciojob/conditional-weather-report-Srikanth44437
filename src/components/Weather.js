import React from "react";

const WeatherInput = ({temperature, conditions}) => {
    return (
        <div>
            <p>Temperature: 25<span style={{color: "red"}}></span></p>
            <p>Conditions: Sunny</p>
        </div>
    );
}
export default WeatherInput;