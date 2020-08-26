import React, { Component } from 'react'
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import { storage } from './storage';
import axios from "axios";
const headers = { withCredentials: true };

const CLIENT_ID = "920956368020-sk2d48e21kq4rrbl83kc4g5jedclnkom.apps.googleusercontent.com";

export class GoogleBtn extends Component {
//로그인(onclick)
  login (response) {
    if(response.accessToken){
      this.setState(state => ({
        isLogined: true,
        accessToken: response.accessToken,
        username: response.profileObj.name,
        email: response.profileObj.email,
        googleId: response.googleId,
        imgUrl: response.profileObj.imageUrl,
      }));
    }
    this.UserLogin(); //upload into userdb
    window.location.href = '/'; // 홈페이지로 새로고침
    console.log(response);
  }
     //로그인
     UserLogin = () => {
      console.log(this.state.googleId);
      console.log(this.state.imgUrl);
      // const send_param = {
      //   headers,
      //   accessToken: this.state.accessToken,
      //   username: this.state.username,
      //   email: this.state.email,
      //   googleId: this.state.googleId,
      // };
      // axios
      //   .post("http://localhost:4000/user/login", send_param)
      //   //에러
      //   .catch((err) => {
      //     console.log(err);
      //   });
      //local storage에 저장
      storage.set('loggedInfo',this.state);
      storage.set('isLogged',true);
      console.log(storage.get('loggedInfo'));
      alert("로그인 완료!");
    };
  //로그아웃(onclick)
  logout (response) {
    this.setState(state => ({
      isLogined: false,
      accessToken: '',
      username: '',
      email: '',
      googleId: '',
      imgUrl: '',
    }));
    this.UserLogout();
    alert("로그아웃 완료!");
    window.location.href = '/'; // 홈페이지로 새로고침
  }
    //로그아웃
    UserLogout = async () => {
      // const request = await fetch("http://localhost:4000/user/logout/" + this.state.googleId, {
      //     method: "DELETE",
      // });
      // if (!request.ok) {
      // alert("서버 죽음");
      // return;
      // }
      // await request.json();
      
      //localstorage에서 user데이터 삭제
      storage.remove('loggedInfo');
      storage.set('isLogged',false);
      //console.log(storage.get('loggedInfo'));
    };
  
  constructor(props) {
    super(props);

    this.state = {
      isLogined: false,
      accessToken: '',
      username: '',
      email: '',
      googleId: '',
      imgUrl: '',
    };

  this.login = this.login.bind(this);
  this.handleLoginFailure = this.handleLoginFailure.bind(this);
  this.logout = this.logout.bind(this);
  this.handleLogoutFailure = this.handleLogoutFailure.bind(this);
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
      { storage.get('isLogged')==true ?
        <GoogleLogout
          clientId={ CLIENT_ID }
          buttonText='로그아웃'
          onLogoutSuccess={ this.logout }
          onFailure={ this.handleLogoutFailure }
        />: 
        <GoogleLogin
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