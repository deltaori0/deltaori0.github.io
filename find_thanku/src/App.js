import React from "react";
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect,
} from "react-router-dom";

import Main from "./view/main";
import BoardLost from "./view/board_lost";
import Login from "./view/login";
import BoardFind from "./view/board_find";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/board_lost" exact component={BoardLost} />
        <Route path="/board_find" exact component={BoardFind} />
        <Route path="/login" exact component={Login} />
        <Redirect from="*" to="/" />
      </Switch>
    </Router>
  );
}

export default App;
