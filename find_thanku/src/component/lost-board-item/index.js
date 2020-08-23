import React from "react";
import * as S from "./styles";
import { render } from "@testing-library/react";

const LostBoardItem = ({ post }) => {
  return (
    <S.BoardItem>
      <S.TitleContainer to={"/lost_post"}>
        <S.Label>{post.title}</S.Label>
      </S.TitleContainer>
      <S.NameContainer>
        <S.Label>{post.name}</S.Label>
      </S.NameContainer>
      <S.PlaceContainer>
        <S.Label>{post.place}</S.Label>
      </S.PlaceContainer>
      <S.CommentContainer>
        <S.Label>{post.replynum}</S.Label>
      </S.CommentContainer>
      <S.WriterContainer>
        <S.Label>{post.username}</S.Label>
      </S.WriterContainer>
      <S.DateContainer>
        <S.Label>{post.date.slice(0,10)}</S.Label>
      </S.DateContainer>
    </S.BoardItem>
  );
};

export default LostBoardItem;
