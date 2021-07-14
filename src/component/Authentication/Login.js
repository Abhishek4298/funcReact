import React, { useState } from 'react';
import PropTypes from 'prop-types';

async function loginUser(cred) {
	let payload = {};
	payload.username = cred.username;
	payload.email = cred.email;
	payload.password = cred.password;

	await fetch('http://localhost:8080/login', {
		method: 'POST',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(payload)
	})
}

export default function Login() {
	const [username, setUserName] = useState();
	const [password, setPassword] = useState();

	const handleSubmit = async e => {
		e.preventDefault();
		const token = await loginUser({
			username,
			password
		});
        console.log("🚀 ~ file: Login.js ~ line 30 ~ Login ~ token", token)
	}

	return (
		<div className="login-wrapper">
			<h1>Please Log In</h1>
			<form onSubmit={handleSubmit}>
				<label>
					<p>Username</p>
					<input type="text" onChange={e => setUserName(e.target.value)} />
				</label>
				<label>
					<p>Password</p>
					<input type="password" onChange={e => setPassword(e.target.value)} />
				</label>
				<div>
					<button type="submit">Submit</button>
				</div>
				<div className="etc-login-form">
					<p>New User? <a href="/registration">click here</a></p>
				</div>
			</form>
		</div>
	)
}

Login.propTypes = {
	setToken: PropTypes.func.isRequired
}