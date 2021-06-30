import React from "react";
import TodoContainer from "./TodoContainer";
import Form from "./Form";
import Navbar from "./Navbar";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Route component={Form} />
        <div className="container">
          <Switch>
            <Route
              exact
              path="/"
              render={() => <TodoContainer complete={false} />}
            />
            <Route
              path="/complete"
              render={() => <TodoContainer complete={true} />}
            />
            <Redirect to="/" />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
