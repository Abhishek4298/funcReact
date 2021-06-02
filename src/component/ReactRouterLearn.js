import React from "react";
import { BrowserRouter, Link, Route, Switch,useParams } from "react-router-dom";

const User = () => {
	const params = useParams();

  console.log(params);

  return <div>This is the user page</div>;
};

const Home = () => {
  return <div>This is the home page</div>;
};

const ReactRouterLearn = () => {
	return (
		
    <div className="App">
      <BrowserRouter>
        <nav>
          <div>
            <Link to="/">Home</Link>
          </div>
          <div>
            <Link to="/user/:id">User</Link>
          </div>
        </nav>
        <Switch>
          <Route path="/user/:id">
            <User />
          </Route>
          <Route path="/" exact>
            <Home />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );}
 
export default ReactRouterLearn;