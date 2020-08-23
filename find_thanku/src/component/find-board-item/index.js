import React from "react";

import * as S from "./styles";

const FindBoardItem = ({ post }) => {
  const url = "/find_post/" + post._id;
  return (
    <S.BoardItem>
      <S.TitleContainer to={url}>
        <S.Label>{post.title}</S.Label>
      </S.TitleContainer>
      <S.NameContainer>
        <S.Label>{post.name}</S.Label>
      </S.NameContainer>
      <S.LostPlaceContainer>
        <S.Label>{post.getplace}</S.Label>
      </S.LostPlaceContainer>
      <S.FindPlaceContainer>
        <S.Label>{post.putplace}</S.Label>
      </S.FindPlaceContainer>
      <S.CommentContainer>
        <S.Label>{post.replynum}</S.Label>
      </S.CommentContainer>
      <S.WriterContainer>
        <S.Label>{post.username}</S.Label>
      </S.WriterContainer>
      <S.DateContainer>
        <S.Label>{post.date.slice(0, 10)}</S.Label>
      </S.DateContainer>
    </S.BoardItem>
  );
};

export default FindBoardItem;
