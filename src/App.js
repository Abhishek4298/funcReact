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
import Clock from './component/Clock';

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

	const about_page =
		[
			{
				ab_no: 1,
				ab_name: "Abhishek",
				ab_post: "Software Engineer",
				ab_email: "abhishek.bhavsar@bacancy.com",
				ab_image: <img className="photo" src="https://1.bp.blogspot.com/-Ybb3sd6z49Y/X8iVAuWrpvI/AAAAAAAAV0w/IYrlua9yum4WBerYjdeMaaWUjlZ_ezWPQCLcBGAsYHQ/s1920/Allu%2BArjun.jpg" alt="Image" styles="width:100%" />

			},
			{
				ab_no: 2,
				ab_name: "Darshan",
				ab_post: "Sr. Software Engineer",
				ab_email: "darshan.gauswami@bacancy.com",
				ab_image: <img className="photo" src="https://1.bp.blogspot.com/-Ybb3sd6z49Y/X8iVAuWrpvI/AAAAAAAAV0w/IYrlua9yum4WBerYjdeMaaWUjlZ_ezWPQCLcBGAsYHQ/s1920/Allu%2BArjun.jpg" alt="Image" styles="width:100%" />
			},
			{
				ab_no: 3,
				ab_name: "Nikita",
				ab_post: "Sr. Software Engineer",
				ab_email: "nikita.bhangadiya@bacancy.com.com",
				ab_image: <img className="photo" src="https://1.bp.blogspot.com/-Ybb3sd6z49Y/X8iVAuWrpvI/AAAAAAAAV0w/IYrlua9yum4WBerYjdeMaaWUjlZ_ezWPQCLcBGAsYHQ/s1920/Allu%2BArjun.jpg" alt="Image" styles="width:100%" />
			},
		]

	return (
		<>
			<Router>
				{/* <UseStateLearn name="Data"/> */}
				{/* <Form /> */}
				{/* <UseEffectLearn /> */}
				<Header title="Abhishek" searchBar={false} />
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
					<Route exact path="/about" render={() => {
						return (
							<>
								<FlowerAbout about_page={about_page} />
							</>)
					}}>
					</Route>

					<Route exact path="/shop">
						<Shop />
					</Route>
					<Route exact path="/singleProduct">
						<SingleProduct />
					</Route>
					<Route exact path="/clock">
						<Clock />
					</Route>
				</Switch>
				<Footer />

			</Router>
		</>
	);
}

export default App;
