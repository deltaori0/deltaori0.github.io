import React from "react";

import * as S from "./styles";

const NoticeHeader = () => {
  return (
    <S.BoardHeader>
      <S.NameContainer>
        <S.Label>제목</S.Label>
      </S.NameContainer>
      <S.DateContainer>
        <S.Label>작성 날짜</S.Label>
      </S.DateContainer>
    </S.BoardHeader>
  );
};

export default NoticeHeader;
