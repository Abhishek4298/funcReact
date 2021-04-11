import React, { useState } from "react";

export function Form() {
	const [name, setName] = useState("");
	const [age, setAge] = useState("");

	const handleSubmit = (evt) => {
		evt.preventDefault();
		alert(`Submitting Name ${name} Age ${age}`)

	}
	const changeName = (e) => {
		setName(e.target.value)
	}
	const changeAge = (e) => {
		setAge(e.target.value)
	}
	return (
		<form onSubmit={handleSubmit}>
			<br />
			<br />
			<label>
				Frirst Name:
				        <input
					type="text"
					value={name}
					onChange={changeName}
				/>
			</label>
			<input type="submit" value="Submit" />

			<label>
				Age:
				        <input
					type="number"
					value={age}
					onChange={changeAge}
				/>
			</label>
			<input type="submit" value="Submit" />
		</form>
	);
}
export default Form;