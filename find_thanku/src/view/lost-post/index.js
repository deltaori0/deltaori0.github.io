import React from "react";

import * as S from "./styles";
import Layout from "../../component/layout";
import CommentList from "../../container/comment-list";
import { STATIC_URL } from "../../constant";

const LostPost = () => {
  return (
    <Layout>
      <S.LostPost>
        <S.TitleContainer>
          <S.Title>분실물 게시판</S.Title>
        </S.TitleContainer>
        <S.LostPostContainer>
          <S.MetaContainer>
            <S.PostTitle>제목</S.PostTitle>
            <S.Label>분실물 명 : </S.Label>
            <S.Label>분실 날짜 : </S.Label>
            <S.Label>분실 장소 : </S.Label>
          </S.MetaContainer>
        </S.LostPostContainer>
        <S.ContentContainer>
          <S.Content>게시글 내용이 들어갈 예정 입니다.</S.Content>
        </S.ContentContainer>
        <CommentList />
        <S.WriteCommentContainer>
          <S.WriteComment placeholder="댓글을 입력하세요." />
          <S.SubmitIcon>
            <img src={STATIC_URL.PENCIL_ICON2} alt="pencil" />
          </S.SubmitIcon>
        </S.WriteCommentContainer>
      </S.LostPost>
    </Layout>
  );
};

export default LostPost;
