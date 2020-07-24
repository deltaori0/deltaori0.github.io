import React from "react";
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect,
} from "react-router-dom";

//import Main from "./view/main";
import Board from "./view/board_lost";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Board} />
        {/* <Route path="/login" exact component={Login} /> */}
        <Redirect from="*" to="/" />
      </Switch>
    </Router>
  );
}

export default App;
