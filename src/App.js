import React, { useState } from 'react';
import './App.css';
// import UseStateLearn from "./component/UseStateLearn";
// import Form from "./component/Form";
// import UseEffectLearn from "./component/UseEffectLearn";
import Header from './component/Header';
import Footer from './component/Footer';
import Todos from './component/Todos';
import AddTodo from './component/AddTodo';


function App() {
	let [todos, setTodos] = useState([
		{
			sno: "1",
			title: "Hello title 1",
			desc: "complete React"
		},
		{
			sno: "2",
			title: "Hello title 2",
			desc: "complete AWS"
		},
		{
			sno: "3",
			title: "Hello title 3",
			desc: "complete Mern"
		}
	]);

	const onDelete = (todo) => {
		console.log("I am ondelete of todo", todo);
		setTodos(todos.filter((e) => {
			return e !== todo;
		}))
		console.log("🚀 ~ file: App.js ~ line 33 ~ setTodos ~ setTodos", setTodos.legth)

	}
	const addTodo = (title, desc) => {
		console.log("I am adding this todo", title, desc)
		let sno;
		if (todos.length === 0) {
			sno = 0;
		}
		else {
			sno = todos[todos.length - 1].sno + 1;
		}
		const myTodo = {
			sno: sno,
			title: title,
			desc: desc,
		}
		setTodos([...todos, myTodo]);
		console.log(myTodo);
	}
	return (
		<>
			{/* <UseStateLearn name="Data"/> */}
			{/* <Form /> */}
			{/* <UseEffectLearn /> */}
			<Header title="Todo's List" searchBar={true} />
			<AddTodo addTodo={addTodo} />
			<Todos todos={todos} onDelete={onDelete} />
			<Footer />
		</>
	);
}

export default App;
