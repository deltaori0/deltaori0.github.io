import React from "react";
import { STATIC_URL } from "../../constant";
import Layout from "../../component/layout";
import * as S from "./styles";
import "./login.scss";
import { GoogleBtn } from "../google_login/googlebtn";

const Login = () => {
  // // Google Login
  // const responseGoogle = (res) => {
  //   console.log(res);
  // };

  // // Login Fail
  // const responseFail = (err) => {
  //   console.error(err);
  // };

  return (
    <Layout>
      <S.Login>
        <div>
          <img src={STATIC_URL.LOGO} width="200px" height="90px" alt="logo" />
        </div>
        <br />
        <br />
        <br />
        <br />
        <S.Container>
          <GoogleBtn />
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
