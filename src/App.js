import React, { useState,useEffect } from 'react';
import './App.css';
// import UseStateLearn from "./component/UseStateLearn";
// import Form from "./component/Form";
// import UseEffectLearn from "./component/UseEffectLearn";
import Header from './component/Header';
import Footer from './component/Footer';
import Todos from './component/Todos';
import AddTodo from './component/AddTodo';


function App() {
	let initTodo;
	if (localStorage.getItem("todos") === null) {
		initTodo = [];
	}
	else {
		initTodo = JSON.parse(localStorage.getItem("todos"));
	}

	const onDelete = (todo) => {
		console.log("I am ondelete of todo", todo);

		setTodos(todos.filter((e) => {
			return e !== todo;
		}));
		console.log("deleted", todos)
		localStorage.setItem("todos", JSON.stringify(todos));
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

	const [todos, setTodos] = useState(initTodo);
	useEffect(() => {
		localStorage.setItem("todos", JSON.stringify(todos));
	}, [todos])

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
