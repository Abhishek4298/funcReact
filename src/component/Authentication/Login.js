import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

async function loginUser() {
	return fetch('http://localhost:8080/login', {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json'
		},
	})
		.then(data => console.log("1111111111111----",data.json()))
}

export default function Login({ setToken }) {
	const [username, setUserName] = useState();
	const [password, setPassword] = useState();
	const fetchData = () => {
		return fetch("http://localhost:8080/list")
			.then((response) => response.json())
			.then((data) => data.map((el)=>{
					return console.log("username",el.username);
			}));
	}
	useEffect(() => {
		fetchData();
	}, []);

	const handleSubmit = async e => {
		e.preventDefault();
		const token = await loginUser({
			username,
			password
		});
		setToken(token);
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