import React, { useState, useEffect } from 'react';
import './App.css';
// import UseStateLearn from "./component/UseStateLearn";
// import Form from "./component/Form";
// import UseEffectLearn from "./component/UseEffectLearn";
import Header from './component/Header';
import Footer from './component/Footer';
import Todos from './component/Todos';
import AddTodo from './component/AddTodo';
import About from './component/About';
import Shop from './component/Shop';
import FlowerAbout from './component/FlowerAbout';
import SingleProduct from './component/SingleProduct';

import {
	BrowserRouter as Router,
	Switch,
	Route
} from "react-router-dom";


function App() {
	let initTodo;
	if (localStorage.getItem("todos") === null) {
		initTodo = [];
	}
	else {
		initTodo = JSON.parse(localStorage.getItem("todos"));
	}

	const onDelete = (todo) => {

		setTodos(todos.filter((e) => {
			return e !== todo;
		}));
		localStorage.setItem("todos", JSON.stringify(todos));
	}

	const addTodo = (title, desc) => {
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
	}

	const [todos, setTodos] = useState(initTodo);
	useEffect(() => {
		localStorage.setItem("todos", JSON.stringify(todos));
	}, [todos])

	return (
		<>
			<Router>
				{/* <UseStateLearn name="Data"/> */}
				{/* <Form /> */}
				{/* <UseEffectLearn /> */}
				<Header title="Dhaval Pandya" searchBar={false} />
				<Switch>
					{/* <Route exact path="/" render={() => {
						return (
							<>
								<AddTodo addTodo={addTodo} />
								<Todos todos={todos} onDelete={onDelete} />
							</>)
					}}>
					</Route>
					<Route exact path="/about">
						<About />
					</Route> */}
					<Route exact path="/">
						<FlowerAbout />
					</Route>
					<Route exact path="/about">
						<FlowerAbout />
					</Route>
					<Route exact path="/shop">
						<Shop />
					</Route>
					<Route exact path="/singleProduct">
					<SingleProduct />
					</Route>

				</Switch>
				<Footer />
			</Router>
		</>
	);
}

export default App;