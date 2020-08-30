import React, { Component } from "react";
import { GoogleLogin, GoogleLogout } from "react-google-login";
import { storage } from "./storage";

// GoogleAPI를 통해 받아온 Client ID
const CLIENT_ID =
  "920956368020-sk2d48e21kq4rrbl83kc4g5jedclnkom.apps.googleusercontent.com";

export class GoogleBtn extends Component {
  // 로그인(onclick)
  login(response) {
    // access token을 받아왔으면 JSON state 지정
    if (response.accessToken) {
      this.setState((state) => ({
        isLogined: true,
        accessToken: response.accessToken,
        username: response.profileObj.name,
        email: response.profileObj.email,
        googleId: response.googleId,
        imgUrl: response.profileObj.imageUrl,
      }));
    }
    this.UserLogin(); //upload into userdb
    window.location.href = "/"; // 메인 페이지로 이동
  }
  // 로그인 함수
  UserLogin = () => {
    //local storage에 저장
    storage.set("loggedInfo", this.state);
    storage.set("isLogged", true);
    alert("로그인 완료!");
  };
  // 로그아웃(onclick)
  logout(response) {
    this.setState((state) => ({
      isLogined: false,
      accessToken: "",
      username: "",
      email: "",
      googleId: "",
      imgUrl: "",
    }));
    this.UserLogout();
    alert("로그아웃 완료!");
    window.location.href = "/"; // 메인 페이지로 이동
  }
  // 로그아웃
  UserLogout = async () => {
    // localstorage에서 user데이터 삭제
    storage.remove("loggedInfo");
    storage.set("isLogged", false);
  };

  constructor(props) {
    super(props);

    this.state = {
      isLogined: false,
      accessToken: "",
      username: "",
      email: "",
      googleId: "",
      imgUrl: "",
    };

    this.login = this.login.bind(this);
    this.handleLoginFailure = this.handleLoginFailure.bind(this);
    this.logout = this.logout.bind(this);
    this.handleLogoutFailure = this.handleLogoutFailure.bind(this);
  }
  handleLoginFailure(response) {
    alert("Failed to log in");
  }

  handleLogoutFailure(response) {
    alert("Failed to log out");
  }

  render() {
    return (
      <div>
        {storage.get("isLogged") ? (
          <GoogleLogout
            clientId={CLIENT_ID}
            buttonText="로그아웃"
            onLogoutSuccess={this.logout}
            onFailure={this.handleLogoutFailure}
          />
        ) : (
          <GoogleLogin
            clientId={CLIENT_ID}
            buttonText="로그인"
            onSuccess={this.login}
            onFailure={this.handleLoginFailure}
            cookiePolicy={"single_host_origin"}
            responseType="code,token"
          />
        )}
      </div>
    );
  }
}

export default GoogleBtn;
