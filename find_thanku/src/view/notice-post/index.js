import React from "react";
import * as S from "./styles";
import Layout from "../../component/layout";
import { STATIC_URL } from "../../constant";
import { useNoticePost } from "./hooks";
import { PostDelete, PostEdit } from "./function";

const NoticePost = () => {
  const { posts } = useNoticePost();
  const Delete = () => {
    PostDelete("admin");
  }
  const Edit = () => {
    PostEdit("admin",posts.content);
  }
  return (
    <Layout>
      <S.NoticePost>
        <S.TitleContainer>
          <S.Title>공지사항</S.Title>
        </S.TitleContainer>
        <S.NoticePostContainer>
          <S.MetaContainer>
            <S.PostTitle>{posts.title}</S.PostTitle>
            <S.Date>
              {posts.date}
              <S.Icon to='/notice'>{<img src={STATIC_URL.DELETE} alt="delete" width='20x' align='right' onClick={Delete}/>}</S.Icon>
              <S.Icon>{<img src={STATIC_URL.EDIT} alt="edit" width='20x' align='right' onClick={Edit}/>}</S.Icon>
            </S.Date>
            <S.Content>{posts.content}</S.Content>
          </S.MetaContainer>
        </S.NoticePostContainer>
        <S.ContentContainer></S.ContentContainer>
      </S.NoticePost>
    </Layout>
  );
};

export default NoticePost;
