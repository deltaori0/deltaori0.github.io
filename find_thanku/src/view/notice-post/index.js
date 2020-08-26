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
  };
  const Edit = () => {
    PostEdit("admin", posts.content);
  };
  return (
    <Layout>
      <S.NoticePost>
        <S.TitleContainer>
          <S.Title>공지사항</S.Title>
        </S.TitleContainer>
        <S.NoticePostContainer>
          <S.PostContainer>
            <S.PostTitle>{posts.title}</S.PostTitle>
            <S.MetaContainer>
              <S.Date>{posts.date}</S.Date>
              <S.IconContainer>
                <S.Icon onClick={Edit}>
                  <img src={STATIC_URL.EDIT} alt="edit" />
                </S.Icon>
                <S.Icon to="/notice" onClick={Delete}>
                  <img src={STATIC_URL.DELETE} alt="delete" />
                </S.Icon>
              </S.IconContainer>
            </S.MetaContainer>
            <S.Content>{posts.content}</S.Content>
          </S.PostContainer>
        </S.NoticePostContainer>
        <S.ContentContainer></S.ContentContainer>
      </S.NoticePost>
    </Layout>
  );
};

export default NoticePost;
