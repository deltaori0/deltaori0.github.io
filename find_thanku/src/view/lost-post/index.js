import React from "react";

import * as S from "./styles";
import Layout from "../../component/layout";
import CommentList from "../../container/comment-list";
import { STATIC_URL } from "../../constant";

import { useBoardLost } from "./hooks";

const LostPost = () => {
  const { posts } = useBoardLost();
  return (
    <Layout>
      <S.LostPost>
        <S.TitleContainer>
          <S.Title>분실물 게시판</S.Title>
        </S.TitleContainer>
        <S.LostPostContainer>
          <S.MetaContainer>
            <S.PostTitle>{posts.title}</S.PostTitle>
            <S.Date>{posts.date}</S.Date>
            <S.Label>분실물 명 : {posts.name} </S.Label>
            <S.Label>분실 장소 : {posts.place} </S.Label>
            <S.ContentContainer>
              <S.Content>게시글 내용이 들어갈 예정 입니다.</S.Content>
            </S.ContentContainer>
          </S.MetaContainer>
        </S.LostPostContainer>
        <br/>
        <CommentList />
        <S.WriteCommentContainer>
          <S.WriteComment placeholder="댓글을 입력하세요." />
          <S.SubmitIcon>
            <img src={STATIC_URL.SUBMIT} alt="submit_icon" />
          </S.SubmitIcon>
        </S.WriteCommentContainer>
      </S.LostPost>
    </Layout>
  );
};

export default LostPost;
