import React from "react";

import * as S from "./styles";
import Layout from "../../component/layout";
import CommentList from "../../container/comment-list";
import { STATIC_URL } from "../../constant";
import { useBoardFind } from "./hooks";

const FindPost = () => {
  const { posts } = useBoardFind();
  return (
    <Layout>
      <S.FindPost>
        <S.TitleContainer>
          <S.Title>습득물 게시판</S.Title>
        </S.TitleContainer>
        <S.FindPostContainer>
          <S.MetaContainer>
            <S.PostTitle>{posts.title}</S.PostTitle>
            <S.Date>{posts.date}</S.Date>
            <S.Label>습득물 명 : {posts.name}</S.Label>
            <S.Label>습득 장소 : {posts.getplace} </S.Label>
            <S.Label>보관 장소 : {posts.putplace} </S.Label>
            <S.ContentContainer>
              <S.Content> {posts.content} </S.Content>
            </S.ContentContainer>
          </S.MetaContainer>
        </S.FindPostContainer>
        <br />
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
