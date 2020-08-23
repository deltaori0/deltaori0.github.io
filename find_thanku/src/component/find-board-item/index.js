import React from "react";

import * as S from "./styles";
import { FindPost } from "../../view/find-post/styles";
import axios from "axios";
const headers = { withCredentials: true };

const FindBoardItem = ({ post }) => {
  const getDetail = () => {
    alert("이 게시글의 id는: " + post._id + " (임시 alert임)");
    const send_param = {
      headers,
      _id: post._id, //_id를 post
    };
    axios
      .post("http://localhost:4000/find_post", send_param)
      //정상 수행
      .catch(err => {
        console.log(err);
      });
    alert("getDetail 실행!(임시 alert임)");
  }
 
  return (
    <S.BoardItem>
      <S.TitleContainer onClick={getDetail} to='/find_post'>
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
        <S.Label>{post.date.slice(0,10)}</S.Label>
      </S.DateContainer>
    </S.BoardItem>
  );
};

export default FindBoardItem;
