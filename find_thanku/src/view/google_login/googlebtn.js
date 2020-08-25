import React, { Component } from 'react'
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import axios from "axios";
const headers = { withCredentials: true };

const CLIENT_ID = "920956368020-sk2d48e21kq4rrbl83kc4g5jedclnkom.apps.googleusercontent.com";

export class GoogleBtn extends Component {
    //로그인
    UserLogin = () => {
        console.log(this.state.googleId);
        const send_param = {
          headers,
          accessToken: this.state.accessToken,
          username: this.state.username,
          email: this.state.email,
          googleId: this.state.googleId,
        };
        axios
          .post("http://localhost:4000/user/login", send_param)
          //에러
          .catch((err) => {
            console.log(err);
          });
        alert("로그인 완료!");
    };
    //로그아웃
    UserLogout = async () => {
        const request = await fetch("http://localhost:4000/user/logout/" + this.state.googleId, {
            method: "DELETE",
        });
        if (!request.ok) {
        alert("서버 죽음");
        return;
        }
        await request.json();
    };
    //로그인상태 유지
    Maintain = () => {
        localStorage.setItem(
            "state",
            JSON.stringify({
                accessToken: this.state.accessToken,
                username: this.state.username,
                email: this.state.email,
                googleId: this.state.googleId,
            })
        );
        //window.location.reload(true);
    };
   constructor(props) {
    super(props);

    this.state = {
      isLogined: false,
      accessToken: '',
      username: '',
      email: '',
      googleId: '',
    };

    this.login = this.login.bind(this);
    this.handleLoginFailure = this.handleLoginFailure.bind(this);
    this.logout = this.logout.bind(this);
    this.handleLogoutFailure = this.handleLogoutFailure.bind(this);
  }
//로그인(onclick)
  login (response) {
    if(response.accessToken){
      this.setState(state => ({
        isLogined: true,
        accessToken: response.accessToken,
        username: response.profileObj.name,
        email: response.profileObj.email,
        googleId: response.googleId,
      }));
    }
    console.log(response);
    console.log(response.profileObj.name);
    console.log(response.profileObj.email);
    this.UserLogin(); //upload into userdb
    this.Maintain();
  }
//로그아웃(onclick)
  logout (response) {
    this.UserLogout();
    this.setState(state => ({
      isLogined: false,
      accessToken: '',
      username: '',
      email: '',
      googleId: '',
    }));
    alert("로그아웃 완료!");
  }

  handleLoginFailure (response) {
    alert('Failed to log in')
  }

  handleLogoutFailure (response) {
    alert('Failed to log out')
  }

  render() {
    return (
    <div>
      { this.state.isLogined ?
        <GoogleLogout
          clientId={ CLIENT_ID }
          buttonText='로그아웃'
          onLogoutSuccess={ this.logout }
          onFailure={ this.handleLogoutFailure }
        >
        </GoogleLogout>: <GoogleLogin
          clientId={ CLIENT_ID }
          buttonText='로그인'
          onSuccess={ this.login}
          onFailure={ this.handleLoginFailure }
          cookiePolicy={ 'single_host_origin' }
          responseType='code,token'
        />
      }
    </div>
    )
  }
}

export default GoogleBtn;