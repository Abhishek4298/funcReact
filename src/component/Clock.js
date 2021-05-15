import React, { useState } from 'react'

const Clock = ({ theme }) => {
	// For digital clock
	const [time, setTime] = useState('');
	setInterval(() => {
		setTime(new Date().toLocaleTimeString())
	}, 1000);

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
					<span className="switch-label" data-on="On" data-off="Off"></span>
					<span className="switch-handle"></span>
				</label>
				<h1>Current Time</h1>
				<h2 className="clock">{new Date().toLocaleTimeString()}.</h2>
			</div>
		</>);
}
export default Clock;

