import React, { useState } from 'react';
import PropTypes from 'prop-types';

async function register(credentials) {
	return fetch('http://localhost:8080/login', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(credentials)
	})
		.then(data => data.json())
}

const Registration = () => {
	const [username, setUsername] = useState();
	const [email, setEmail] = useState();
	const [password, setPassword] = useState();

	const [data, setData] = useState([])

	// const payload = {};
	const payload = [];

	const handleSubmit = async e => {
		console.log("saving data");
		e.preventDefault();
		// payload.username = username
		// payload.email = email
		// payload.password = 
		payload.push(username, email, password)
		setData(payload)
		console.log("🚀  Registration ~ setData", data)
		// payload.push(username, email, password, conPassword);
		// console.log("dataaa", payload);
	}

	return (<>
		<div className="text-center" styles="padding:50px 0">
			<div className="logo">register</div>
			<div className="login-form-1">
				<form onSubmit={handleSubmit} className="text-left">
					<div className="login-form-main-message"></div>
					<div className="main-login-form">
						<div className="login-group">
							<div className="form-group">
								<label className="sr-only">Username</label>
								<input type="text" onChange={e => setUsername(e.target.value)} className="form-control" placeholder="username" />
							</div>
							<div className="form-group">
								<label className="sr-only">Email</label>
								<input type="email" onChange={e => setEmail(e.target.value)} className="form-control" placeholder="email" />
							</div>
							<div className="form-group">
								<label className="sr-only">Password</label>
								<input type="password" onChange={e => setPassword(e.target.value)} className="form-control" placeholder="password" />
							</div>
						</div>
						<button type="submit" className="btn btn-success">Registration</button>
					</div>
					<div className="etc-login-form">
						<p>already have an account? <a href="/login">login here</a></p>
					</div>
					{data.length > 1 && data.map((el) => <h1>{el}{console.log("Helllo",typeof el)}</h1>)}
				</form>
			</div>
		</div>
	</>);
}

export default Registration;
