import { useState } from 'react';

export default function useToken() {
	const getToken = () => {
		const tokenString = localStorage.getItem('token');
        console.log("🚀 ~ file: useToken.js ~ line 6 ~ getToken ~ tokenString", tokenString)
		const userToken = JSON.parse(tokenString);
		return userToken?.token
	};

	const [token, setToken] = useState(getToken());

	const saveToken = userToken => {
    console.log("🚀 ~ ----------------- ~ userToken", userToken)
		localStorage.setItem('token', JSON.stringify(userToken));
		setToken(userToken.token);
	};

	return {
		setToken: saveToken,
		token
	}
}