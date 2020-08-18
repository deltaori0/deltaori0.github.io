import React, { useState, useCallback } from "react";

import * as S from "./styles";
import Layout from "../../component/layout";

const Join = () => {
  const [userID, setUserID] = useState("");

  const handleSubmit = useCallback(async () => {
    const searchResponse = await fetch(
      `http://localhost:4000/api/user?id=${userID}`
    );
  }, [userID]);
  return (
    <Layout>
      <S.Join>
        <S.JoinContainer>
          <S.IDInputBox placeholder="아이디" />
          <S.PWInputBox placeholder="비밀번호" />
          <S.PWConfirmInputBox placeholder="비밀번호 확인" />
          <S.SubmitButton onClick={handleSubmit}>확인</S.SubmitButton>
        </S.JoinContainer>
      </S.Join>
    </Layout>
  );
};

export default Join;
