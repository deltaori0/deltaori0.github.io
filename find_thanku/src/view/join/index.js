import React, { Component } from "react";

import * as S from "./styles";
import Layout from "../../component/layout";
// import { render } from "@testing-library/react";
import axios from "axios";
const headers = { withCredentials: true };

class JoinForm extends Component {
  Join = () => {
    const send_param = {
      headers,
      title: this.title.value,
      description: this.description.value,
    };
    axios
      .post("https://find-thanku.herokuapp.com/join", send_param)
      //정상 수행

      //에러
      .catch((err) => {
        console.log(err);
      });
  };
  render() {
    return (
      <Layout>
        <S.Join>
          <S.JoinContainer>
            <S.IDInputBox
              type="text"
              maxLength="20"
              ref={(ref) => (this.title = ref)}
              placeholder="id"
            />
            <S.PWInputBox
              type="text"
              maxLength="20"
              ref={(ref) => (this.description = ref)}
              placeholder="pw"
            />
            <S.PWConfirmInputBox />
            <S.SubmitButton onClick={this.Join} type="button" block>
              확인
            </S.SubmitButton>
          </S.JoinContainer>
        </S.Join>
      </Layout>
    );
  }
}

export default JoinForm;
