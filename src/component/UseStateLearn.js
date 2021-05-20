import React, { useState } from 'react';
import '../index.css';

const UseStateLearn = ({ name }) => {
	let [count, setCount] = useState(0);
	let [myString, setMyString] = useState("xyzz");

	// changing string using useState
	const stringChange = () => {
		setMyString("Dherumval")
	}

	// changing number using useState
	const counterAdd = () => setCount(count + 1);
	const counterMinus = () => setCount(count - 1)

	return (
		<>
			<h1>Registration {name} </h1>
			<button onClick={counterAdd} type="button" className="btn btn-primary">+</button>
			{count}
			<button onClick={counterMinus} type="button" className="btn btn-primary">-</button><br/><br/>
			<button onClick={stringChange} type="button" className="btn btn-success">Text Change</button>
			<br/>
			<h2>{myString} </h2>
		</>);
}

export default UseStateLearn;