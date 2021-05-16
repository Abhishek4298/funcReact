import React, { useState } from 'react'

const Clock = ({ theme }) => {
	// For digital clock
	let time = new Date().toLocaleTimeString();
	let [ctime, setCTime] = useState();
	const updateTime = () => {
		time = new Date().toLocaleTimeString();
		setCTime(time);
	}
	setInterval(updateTime, 1000);

	// Theme
	let [myTheme, setmyTheme] = useState(theme);

	const handleDayNightToggle = (e) => {
		setmyTheme(myTheme === "lightTheme" ? "darkTheme" : "lightTheme")
	}
	return (
		<>
			<div className={`container ${myTheme}`}>
				<label className="switch">
					<input onChange={handleDayNightToggle} type="checkbox" className="switch-input" />
					<span className="switch-label" data-on="Light" data-off="Dark"></span>
					<span className="switch-handle"></span>
				</label>
				<h1>Current Time</h1>
				<h2 className="clock">{ctime}</h2>
			</div>
		</>);
}
export default Clock;

