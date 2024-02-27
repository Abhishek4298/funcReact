import React, { useEffect } from "react";
import "./App.css";
// import UseStateLearn from "./component/UseStateLearn";
// import Form from "./component/Form";
// import UseEffectLearn from "./component/UseEffectLearn";
import Header from "./component/Header";
import Footer from "./component/Footer";
// import Todos from "./component/Todos";
// import AddTodo from "./component/AddTodo";
// import About from "./component/About";
import Shop from "./component/Shop";
import FlowerAbout from "./component/FlowerAbout";
import SingleProduct from "./component/SingleProduct";
import Clock from "./component/Clock";
// import Login from "../src/component/Authentication/Login";
// import useToken from "./useToken";
import Registration from "../src/component/Authentication/Registration";
import Payment from "../src/component/Payment";
import ReactRouterLearn from "../src/component/ReactRouterLearn";
import UseFormik from "../src/component/UseFormik";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { about_page, shop_content } from "./component/constant";

function App() {
  let initTodo;

  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  // const onDelete = (todo) => {
  //   setTodos(
  //     todos.filter((e) => {
  //       return e !== todo;
  //     })
  //   );
  //   localStorage.setItem("todos", JSON.stringify(todos));
  // };

  // const addTodo = (title, desc) => {
  //   let sno;
  //   if (todos.length === 0) {
  //     sno = 0;
  //   } else {
  //     sno = todos[todos.length - 1].sno + 1;
  //   }
  //   const myTodo = {
  //     sno: sno,
  //     title: title,
  //     desc: desc,
  //   };
  //   setTodos([...todos, myTodo]);
  // };

  const todos = initTodo;
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);



 
  // const { token, setToken } = useToken();

  // if (!token) {
  // 	return <Login  />
  // }

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
          <Route
            exact
            path="/about"
            render={() => {
              return (
                <>
                  <FlowerAbout about_page={about_page} />
                </>
              );
            }}
          ></Route>
          <Route
            exact
            path="/reactrouterlearn"
            render={() => {
              return (
                <>
                  <ReactRouterLearn />
                </>
              );
            }}
          ></Route>
          <Route
            exact
            path="/shop"
            render={() => {
              return <Shop shop_page={shop_content} />;
            }}
          ></Route>
          <Route exact path="/singleProduct">
            <SingleProduct />
          </Route>
          <Route
            exact
            path="/clock"
            render={() => {
              return (
                <>
                  <Clock theme="lightTheme" />
                </>
              );
            }}
          ></Route>
          <Route exact path="/registration">
            <Registration />
          </Route>
          <Route exact path="/payment">
            <Payment />
          </Route>
          <Route exact path="/useFormik">
            <UseFormik />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
