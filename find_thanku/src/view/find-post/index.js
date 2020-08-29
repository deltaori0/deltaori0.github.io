import React from "react";
import * as S from "./styles";
import Layout from "../../component/layout";
import CommentList from "../../container/comment-list";
import { STATIC_URL } from "../../constant";
import { useBoardFind } from "./hooks";
import { useCommentFind } from "./hooks2";
import { PostDelete, SetReplynum } from "./function";
import axios from "axios";
import { storage } from "../google_login/storage";

const headers = { withCredentials: true };

const FindPost = () => {
  const { posts } = useBoardFind();
  const { comments } = useCommentFind();
  const currentId = storage.get("loggedInfo").googleId;

  //var username;
  var content;
  //삭제,수정 권한
  var editauth;
  var delauth;
  if (currentId === posts.googleId) {
    editauth = true;
    delauth = true;
  } else {
    editauth = false;
    delauth = false;
  }

  const CommentUpload = () => {
    const url = window.location.pathname;
    const send_param = {
      headers,
      username: storage.get("loggedInfo").email.split("@")[0],
      googleId: storage.get("loggedInfo").googleId,
      content: content.value,
      postid: posts._id,
      postkind: "find",
    };
    axios
      .post("https://find-thanku.herokuapp.com" + url + "/comment", send_param)
      //에러
      .catch((err) => {
        console.log(err);
      });
    console.log("url: ", url);
    console.log("https://find-thanku.herokuapp.com" + url + "/comment");
    SetReplynum(1); //댓글수 +1
    alert("댓글 작성 완료!");
    //새로고침
    setTimeout(function () {
      window.location.reload(true);
    }, 1000);
  };
  //게시글 삭제
  const Delete = () => {
    PostDelete(delauth);
    setTimeout(function () {
      window.location.pathname = "/find/board";
    }, 1000);
  };
  //게시글 수정
  const Edit = () => {
    const url = window.location.href; //window.location.pathname;
    const editurl = url + "/edit";
    if (editauth) {
      const placeholder = {
        title: posts.title,
        name: posts.name,
        getplace: posts.getplace,
        putplace: posts.putplace,
        content: posts.content,
      };
      storage.set("editval", placeholder);
      window.location.href = editurl; //editurl로 이동
    } else {
      alert("수정 권한 없음");
      return;
    }
  };
  const post_content = posts.content;

  return (
    <Layout>
      <S.FindPost>
        <S.TitleContainer>
          <S.Title>습득물 게시판</S.Title>
        </S.TitleContainer>
        <S.FindPostContainer>
          <S.PostContainer>
            <S.PostTitle>{posts.title}</S.PostTitle>
            <S.MetaContainer>
              <S.Date>{posts.date}</S.Date>
              <S.IconContainer>
                {editauth ? (
                  <S.Icon onClick={Edit}>
                    <img src={STATIC_URL.EDIT} alt="edit" />
                  </S.Icon>
                ) : (
                  <div></div>
                )}
                {delauth ? (
                  <S.Icon onClick={Delete}>
                    <img src={STATIC_URL.DELETE} alt="delete" />
                  </S.Icon>
                ) : (
                  <div></div>
                )}
              </S.IconContainer>
            </S.MetaContainer>
            <S.Label>습득물 명 : {posts.name}</S.Label>
            <S.Label>습득 장소 : {posts.getplace} </S.Label>
            <S.Label>보관 장소 : {posts.putplace} </S.Label>
            <S.ContentContainer>
              <S.Content>
                <div dangerouslySetInnerHTML={{ __html: post_content }} />
              </S.Content>
            </S.ContentContainer>
          </S.PostContainer>
        </S.FindPostContainer>
        <br />
        <br />
        <S.PostContainer>
          <S.Label>
            {<img src={STATIC_URL.CHAT} alt="chat" width="15x" />} 댓글
          </S.Label>
          <S.CommentsContainer>
            <CommentList comments={comments} />
          </S.CommentsContainer>
          <S.WriteCommentContainer>
            <S.WriteComment
              type="text"
              ref={(ref) => (content = ref)}
              placeholder="댓글을 입력하세요."
            />
            <S.SubmitIcon onClick={CommentUpload}>
              <img src={STATIC_URL.SUBMIT} alt="submit_icon" />
            </S.SubmitIcon>
          </S.WriteCommentContainer>
        </S.PostContainer>
      </S.FindPost>
    </Layout>
  );
};

export default FindPost;
