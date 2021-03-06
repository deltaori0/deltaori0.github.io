import React from "react";
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect,
} from "react-router-dom";

import Main from "./view/main";
import BoardLost from "./view/board_lost";
import BoardLostSearch from "./view/board_lost_search";
import Login from "./view/login";
import BoardFind from "./view/board_find";
import BoardFindSearch from "./view/board_find_search";
import FindUpload from "./view/find-upload";
import LostUpload from "./view/lost-upload";
import Notice from "./view/notice";
import NoticeSearch from "./view/notice_search";
import NoticeUpload from "./view/notice-upload";
import FindPost from "./view/find-post";
import LostPost from "./view/lost-post";
import NoticePost from "./view/notice-post";
import FindEdit from "./view/find-upload/edit";
import LostEdit from "./view/lost-upload/edit";
import MyPage from "./view/mypage";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/lost/board" exact component={BoardLost} />
        <Route path="/lost/board/:page_number" exact component={BoardLost} />
        <Route
          path="/lost/board/search/:searchval"
          exact
          component={BoardLostSearch}
        />
        <Route path="/find/board" exact component={BoardFind} />
        <Route path="/find/board/:page_number" exact component={BoardFind} />
        <Route
          path="/find/board/search/:searchval"
          exact
          component={BoardFindSearch}
        />
        <Route path="/login" exact component={Login} />
        <Route path="/find/upload" exact component={FindUpload} />
        <Route path="/lost/upload" exact component={LostUpload} />
        <Route path="/notice" exact component={Notice} />
        <Route path="/notice/upload" exact component={NoticeUpload} />
        <Route
          path="/notice/search/:searchval"
          exact
          component={NoticeSearch}
        />

        <Route path="/notice/:page_number" exact component={Notice} />
        <Route path="/find/post/:_id" exact component={FindPost} />
        <Route path="/find/post/:_id/edit" exact component={FindEdit} />
        <Route path="/lost/post/:_id" exact component={LostPost} />
        <Route path="/lost/post/:_id/edit" exact component={LostEdit} />
        <Route path="/notice/post/:_id" exact component={NoticePost} />
        <Route path="/mypage" exact component={MyPage} />
        <Redirect from="*" to="/" />
      </Switch>
    </Router>
  );
}

export default App;
