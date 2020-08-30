import React from "react";
import * as S from "./styles";
import Layout from "../../component/layout";
import { STATIC_URL } from "../../constant";
import { useNoticePost } from "./hooks";
import { PostDelete, PostEdit } from "./function";
import { storage } from "../google_login/storage";

const NoticePost = () => {
  const { posts } = useNoticePost();
  const authentication = () => {
    var admin = ["112743772853536234615", "115049392299918823209"]; //[eunsoo,sohee]
    var auth = admin.includes(storage.get("loggedInfo").googleId);
    return auth;
  };
  var auth = authentication(); //admin 권한
  // 게시글 삭제
  const Delete = () => {
    PostDelete(auth);
  };
  // 게시글 수정
  const Edit = () => {
    PostEdit(auth, posts.content);
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
              {auth ? (
                <S.IconContainer>
                  <S.Icon onClick={Edit}>
                    <img src={STATIC_URL.EDIT} alt="edit" />
                  </S.Icon>
                  <S.Icon to="/notice" onClick={Delete}>
                    <img src={STATIC_URL.DELETE} alt="delete" />
                  </S.Icon>
                </S.IconContainer>
              ) : (
                <div></div>
              )}
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
