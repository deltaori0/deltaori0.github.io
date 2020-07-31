import React from "react";

import * as S from "./styles";

const FindBoardHeader = () => {
  return (
    <S.BoardHeader>
      <S.NameContainer>
        <S.Label>습득물 명</S.Label>
      </S.NameContainer>
      <S.LostPlaceContainer>
        <S.Label>분실 장소</S.Label>
      </S.LostPlaceContainer>
      <S.FindPlaceContainer>
        <S.Label>습득 장소</S.Label>
      </S.FindPlaceContainer>
      <S.CommentContainer>
        <S.Label>댓글 수</S.Label>
      </S.CommentContainer>
      <S.WriterContainer>
        <S.Label>작성자</S.Label>
      </S.WriterContainer>
      <S.DateContainer>
        <S.Label>작성 날짜</S.Label>
      </S.DateContainer>
    </S.BoardHeader>
  );
};

export default FindBoardHeader;
