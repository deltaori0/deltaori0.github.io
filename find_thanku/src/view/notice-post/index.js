import React from "react";

import * as S from "./styles";
import Layout from "../../component/layout";

const NoticePost = () => {
  return (
    <Layout>
      <S.NoticePost>
        <S.TitleContainer>
          <S.Title>공지사항</S.Title>
        </S.TitleContainer>
        <S.NoticePostContainer>
          <S.MetaContainer>
            <S.PostTitle>제목</S.PostTitle>
            <S.Date>날짜 시간 정보</S.Date>
            <S.Content>게시글 내용이 들어갈 예정 입니다.</S.Content>
          </S.MetaContainer>
        </S.NoticePostContainer>
        <S.ContentContainer></S.ContentContainer>
      </S.NoticePost>
    </Layout>
  );
};

export default NoticePost;
