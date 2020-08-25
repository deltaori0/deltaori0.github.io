import React, { useState } from "react";
import { STATIC_URL } from "../../constant";
import Layout from "../../component/layout";
import * as S from "./styles";
import "./login.scss";
import axios from "axios";

import { GoogleLogin} from "react-google-login";
import {GoogleBtn} from "../google_login/googlebtn";

axios.defaults.withCredentials = true;

//로그인 페이지
const idbox = "Google 계정";
const pwbox = "Password";

const Login = () => {
  const [inputs, setInputs] = useState({
    id: "",
    pw: "",
  });

  const { id, pw } = inputs; //여기에 값이 저장됨

  const onChange = (e) => {
    //입력시
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const onReset = () => {
    //버튼클릭시
    setInputs({
      id: "",
      pw: "",
    });
  };

  // Google Login
  const responseGoogle = (res) => {
    console.log(res);
  };

  // Login Fail
  const responseFail = (err) => {
    console.error(err);
  };

  return (
    <Layout>
      <S.Login>
        <div>
          <img src={STATIC_URL.LOGO} width="200px" height="90px" alt="logo" />
        </div>
        <br /><br />  
        <S.Container>
          <GoogleLogin
            clientId="920956368020-sk2d48e21kq4rrbl83kc4g5jedclnkom.apps.googleusercontent.com"
            buttonText="Google 계정으로 로그인"
            onSuccess={responseGoogle}
            onFailure={responseFail}
          />
        </S.Container>
        <br /><br />  
        <S.Container>
          <GoogleBtn/>sohee's 시도
        </S.Container>
      </S.Login>
    </Layout>
  );
};

export default Login;

/*임시저장
     <div>
          <img src={STATIC_URL.LOGO} width="200px" height="90px" alt="logo" />
        </div>
        <div>
          <br />
          <br />
          <input
            class="input_box"
            name="id"
            placeholder={idbox}
            onChange={onChange}
            value={id}
          />
          <br />
          <br />
          <input
            class="input_box"
            type="password"
            name="pw"
            placeholder={pwbox}
            onChange={onChange}
            value={pw}
          />
          <br />
          <br />
          <button class="login_button" onClick={onReset}>
            로그인
          </button>
          <div>
            id / pw:
            {id} / {pw}
          </div>
        </div>
        */