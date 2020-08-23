import React from "react";

import * as S from "./styles";
import Layout from "../../component/layout";
import { useNoticePost } from "./hooks";

const NoticePost = () => {
  const { posts } = useNoticePost();
  return (
    <Layout>
      <S.NoticePost>
        <S.TitleContainer>
          <S.Title>공지사항</S.Title>
        </S.TitleContainer>
        <S.NoticePostContainer>
          <S.MetaContainer>
            <S.PostTitle>{posts.title}</S.PostTitle>
            <S.Date>{posts.date}</S.Date>
            <S.Content>{posts.content}</S.Content>
          </S.MetaContainer>
        </S.NoticePostContainer>
        <S.ContentContainer></S.ContentContainer>
      </S.NoticePost>
    </Layout>
  );
};

export default NoticePost;
