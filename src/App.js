import React, { useState, useEffect } from "react";
import "./App.css";
// import UseStateLearn from "./component/UseStateLearn";
// import Form from "./component/Form";
// import UseEffectLearn from "./component/UseEffectLearn";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Todos from "./component/Todos";
import AddTodo from "./component/AddTodo";
import About from "./component/About";
import Shop from "./component/Shop";
import FlowerAbout from "./component/FlowerAbout";
import SingleProduct from "./component/SingleProduct";
import Clock from "./component/Clock";
import Login from "../src/component/Authentication/Login";
import useToken from "./useToken";
import Registration from "../src/component/Authentication/Registration";
import Payment from "../src/component/Payment";
import ReactRouterLearn from "../src/component/ReactRouterLearn";
import UseFormik from "../src/component/UseFormik";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  let initTodo;

  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const onDelete = (todo) => {
    setTodos(
      todos.filter((e) => {
        return e !== todo;
      })
    );
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const addTodo = (title, desc) => {
    let sno;
    if (todos.length === 0) {
      sno = 0;
    } else {
      sno = todos[todos.length - 1].sno + 1;
    }
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    };
    setTodos([...todos, myTodo]);
  };

  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const about_page = [
    {
      ab_no: 1,
      ab_name: "Khushboo",
      ab_post: "Manager",
      ab_email: "nikita.bhangadiya@bacancy.com.com",
      ab_image: (
        <img
          className="photo"
          src="https://cdn2.iconfinder.com/data/icons/avatars-2-7/128/37-512.png"
          alt="Image"
          styles="width:100%"
        />
      ),
      ab_contact: "12345678",
    },
    {
      ab_no: 2,
      ab_name: "Darshan",
      ab_post: "Sr. Software Engineer",
      ab_email: "darshan.gauswami@bacancy.com",
      ab_image: (
        <img
          className="photo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR91lQXh61zr8mPF0F9Ikqsi7iMFeb6kcrX45MwobCVSY7zOaqDXsZu7wtwlE7lWJNCKZw&usqp=CAU	"
          alt="Image"
          styles="width:100%"
        />
      ),
      ab_contact: "8141393254",
    },
    {
      ab_no: 3,
      ab_name: "Abhishek",
      ab_post: "Software Engineer",
      ab_email: "abhishek.bhavsar@bacancy.com",
      ab_image: (
        <img
          className="photo"
          src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
          alt="Image"
          styles="width:100%"
        />
      ),
      ab_contact: "7227885771",
    },
  ];

  const shop_page = [
    {
      sh_no: 1,
      sh_title: "12 Red Carnations",
      sh_name: "Gift roses ",
      sh_post: "Software Engineer",
      sh_image: (
        <img
          src="https://d1whpkioiz600t.cloudfront.net/Images/product/pw-pinkcarnation-teddy-cadburycelebration.jpg"
          alt="flowerImage"
        />
      ),
      sh_descr: "This is Link company that builds websites, web ",
    },
    {
      sh_no: 2,
      sh_title: "roses in Basket",
      sh_name: "Joyful Baskets Love",
      sh_image: (
        <img
          src="https://d1whpkioiz600t.cloudfront.net/Images/product/pw-white-carnation-blue-orchid-bouquet.jpg"
          alt="flowerImage"
        />
      ),
      sh_descr: "This is Link company that builds websites, web ",
    },
    {
      sh_no: 3,
      sh_title: "Orchid",
      sh_name: "Admirable Orchid",
      sh_post: "Sr. Software Engineer",
      sh_image: (
        <img
          src="https://d1whpkioiz600t.cloudfront.net/Images/product/Joyful-Baskets-Love.jpg"
          alt="Image"
        />
      ),
      sh_descr: "This is Link company that builds websites, web ",
    },
  ];
  const { token, setToken } = useToken();

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
              return (
                <>
                  <Shop shop_page={shop_page} />
                </>
              );
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
