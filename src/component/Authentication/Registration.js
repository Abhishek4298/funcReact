import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Registration = () => {
	const [username, setUsername] = useState();
	const [email, setEmail] = useState();
	const [password, setPassword] = useState();
	const [conPassword, setConPassword] = useState();

	const handleSubmit = async e => {
		console.log("saving data");
		e.preventDefault();
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
								<input type="text" onChange={e => setEmail(e.target.value)} className="form-control" placeholder="email" />
							</div>
							<div className="form-group">
								<label className="sr-only">Password</label>
								<input type="password" onChange={e => setPassword(e.target.value)} className="form-control" placeholder="password" />
							</div>
							<div className="form-group">
								<label className="sr-only">Password Confirm</label>
								<input type="password" onChange={e => setConPassword(e.target.value)} className="form-control" placeholder="confirm password" />
							</div>
						</div>
						<button type="submit" className="btn btn-success">Registration</button>
					</div>
					<div className="etc-login-form">
						<p>already have an account? <a href="/login">login here</a></p>
					</div>
				</form>
			</div>
		</div>
	</>);
}

export default Registration;



