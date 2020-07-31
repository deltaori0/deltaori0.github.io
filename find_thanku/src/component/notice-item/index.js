import React from "react";

import * as S from "./styles";

const NoticeItem = () => {
  return (
    <S.BoardItem>
      <S.NameContainer>
        <S.Label>제목</S.Label>
      </S.NameContainer>
      <S.DateContainer>
        <S.Label>작성 날짜</S.Label>
      </S.DateContainer>
    </S.BoardItem>
  );
};

export default NoticeItem;
