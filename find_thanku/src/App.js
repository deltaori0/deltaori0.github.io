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
import FindUpload from "./view/find-upload";
import LostUpload from "./view/lost-upload";
import Notice from "./view/notice";
import NoticeUpload from "./view/notice-upload";
import JoinForm from "./view/join";
import FindPost from "./view/find-post";
import LostPost from "./view/lost-post";
import NoticePost from "./view/notice-post";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/board_lost" exact component={BoardLost} />
        <Route path="/board_find" exact component={BoardFind} />
        <Route path="/login" exact component={Login} />
        <Route path="/find_upload" exact component={FindUpload} />
        <Route path="/lost_upload" exact component={LostUpload} />
        <Route path="/notice" exact component={Notice} />
        <Route path="/notice_upload" exact component={NoticeUpload} />
        <Route path="/join" exact component={JoinForm} />
        <Route path="/find_post/:_id" exact component={FindPost} />
        <Route path="/lost_post/:_id" exact component={LostPost} />
        <Route path="/notice_post/:_id" exact component={NoticePost} />
        <Redirect from="*" to="/" />
      </Switch>
    </Router>
  );
}

export default App;
