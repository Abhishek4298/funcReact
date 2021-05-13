import React, { useState } from 'react'
import AnalogClock from 'analog-clock-react';

const Clock = () => {
    // For digital clock
    const [time, setTime] = useState('');
    setInterval(() => {
        setTime(new Date().toLocaleTimeString())
    }, 1000);

    //For Analog clock
    let options = {
        width: "300px",
        border: true,
        borderColor: "#2e2e2e",
        baseColor: "black",
        centerColor: "#459cff",
        centerBorderColor: "#fff",
        handColors: {
            second: "#d81c7a",
            minute: "limegreen",
            hour: "limegreen"
        }
    };

    return (
        <>
            <h1>Current Time</h1>
            <div>
                <h2 className="clock">{new Date().toLocaleTimeString()}.</h2>
                <AnalogClock {...options} />
            </div>

        </>);
}
export default Clock;

