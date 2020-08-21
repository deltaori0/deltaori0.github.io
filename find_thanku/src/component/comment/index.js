import React from "react";

import * as S from "./styles";
import { STATIC_URL } from "../../constant";

const Comment = () => {
  return (
    <S.Comment>
      <S.WriterContainer>
        <S.ProfileIcon>
          <img src={STATIC_URL.PROFILE} alt="profile" />
        </S.ProfileIcon>
        <S.Writer>작성자</S.Writer>
      </S.WriterContainer>
      <S.ContentContainer>
        <S.Content>댓글 내용</S.Content>
      </S.ContentContainer>
    </S.Comment>
  );
};

export default Comment;
