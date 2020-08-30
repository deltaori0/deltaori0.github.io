import React from "react";
import { STATIC_URL } from "../../constant";
import Layout from "../../component/layout";
import * as S from "./styles";
import "./login.scss";
import { GoogleBtn } from "../google_login/googlebtn";

const Login = () => {
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
