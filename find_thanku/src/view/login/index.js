import React, { useState } from "react";
import { STATIC_URL } from "../../constant";
import Layout from "../../component/layout";
import * as S from "./styles";
import "./login.scss";
import axios from "axios";
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

  return (
    <Layout>
      <S.Login>
        <div>
          <img src={STATIC_URL.LOGO} width="200px" alt="logo" />
        </div>
        <div>
          <br />

          <input
            class="input_box"
            name="id"
            placeholder={idbox}
            onChange={onChange}
            value={id}
          />
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
      </S.Login>
    </Layout>
  );
};

export default Login;