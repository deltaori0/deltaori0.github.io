import React from "react";

import * as S from "./styles";
import Layout from "../../component/layout";

const Join = () => {
  return (
    <Layout>
      <S.Join>
        <S.JoinContainer>
          <S.IDInputBox />
          <S.PWInputBox />
          <S.PWConfirmInputBox />
          <S.SubmitButton>확인</S.SubmitButton>
        </S.JoinContainer>
      </S.Join>
    </Layout>
  );
};

export default Join;
