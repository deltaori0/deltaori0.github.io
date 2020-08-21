import React from "react";

import * as S from "./styles";
import Layout from "../../component/layout";
import CommentList from "../../container/comment-list";
import { STATIC_URL } from "../../constant";

const FindPost = () => {
  return (
    <Layout>
      <S.FindPost>
        <S.TitleContainer>
          <S.Title>습득물 게시판</S.Title>
        </S.TitleContainer>
        <S.FindPostContainer>
          <S.MetaContainer>
            <S.PostTitle>제목</S.PostTitle>
            <S.Date>날짜 시간 정보</S.Date>
            <S.Label>습득물 명 : </S.Label>
            <S.Label>습득 날짜 : </S.Label>
            <S.Label>습득 장소 : </S.Label>
            <S.Label>보관 장소 : </S.Label>
          </S.MetaContainer>
        </S.FindPostContainer>
        <S.ContentContainer>
          <S.Content>게시글 내용이 들어갈 예정 입니다.</S.Content>
        </S.ContentContainer>
        <CommentList />
        <S.WriteCommentContainer>
          <S.WriteComment placeholder="댓글을 입력하세요." />
          <S.SubmitIcon>
            <img src={STATIC_URL.SUBMIT} alt="submit_icon" />
          </S.SubmitIcon>
        </S.WriteCommentContainer>
      </S.FindPost>
    </Layout>
  );
};

export default FindPost;
