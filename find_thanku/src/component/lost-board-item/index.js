import React from "react";
import * as S from "./styles";
import { render } from "@testing-library/react";

import axios from "axios";
const headers = { withCredentials: true };

const LostBoardItem = ({ post,idx }) => {
/*
  const getDetail = () => {
    const send_param = {
      headers,
      _id: post._id
    };
    axios
      .post("http://localhost:4000/lost_board", send_param)
      //정상 수행
  }
*/
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
