import React from "react";

import * as S from "./styles";
import Layout from "../../component/layout";
import CommentList from "../../container/comment-list";
import { STATIC_URL } from "../../constant";
import { useBoardLost } from "./hooks";
import { PostDelete, SetReplynum } from "./function";
import { useCommentLost } from "./hooks2";
import { storage } from "../google_login/storage";

import axios from "axios";
const headers = { withCredentials: true };

const LostPost = () => {
  const { posts } = useBoardLost();
  const { comments } = useCommentLost();
  const currentId = storage.get("loggedInfo").googleId;
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

  //댓글 업로드(신규)
  const CommentUpload = () => {
    const url = window.location.pathname;
    const send_param = {
      headers,
      username: storage.get("loggedInfo").email.split("@")[0],
      googleId: storage.get("loggedInfo").googleId,
      content: content.value,
      postid: posts._id,
      postkind: "lost",
    };
    // POST https://find-thanku.herokuapp.com/lost/post/:_id/comment
    axios
      .post("https://find-thanku.herokuapp.com" + url + "/comment", send_param)
      //에러
      .catch((err) => {
        console.log(err);
      });
    SetReplynum(1); //댓글수 +1
    alert("댓글 작성 완료!");

    setTimeout(function () {
      window.location.reload(true);
    }, 1000);
  };
  //게시글 삭제
  const Delete = () => {
    PostDelete(delauth);
    setTimeout(function () {
      window.location.pathname = "/lost/board";
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
        place: posts.place,
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
      <S.LostPost>
        <S.TitleContainer>
          <S.Title>분실물 게시판</S.Title>
        </S.TitleContainer>
        <S.LostPostContainer>
          <S.PostContainer>
            <S.PostTitle>{posts.title}</S.PostTitle>
            <S.MetaContainer>
              <S.Date>{posts.date}</S.Date>
              <S.IconContainer>
                {editauth ? (
                  <S.Icon onClick={Edit}>
                    <div>
                      <img src={STATIC_URL.EDIT} alt="edit" />
                    </div>
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
            <S.Label>분실물 명 : {posts.name} </S.Label>
            <S.Label>분실 장소 : {posts.place} </S.Label>
            <S.ContentContainer>
              <S.Content>
                <div dangerouslySetInnerHTML={{ __html: post_content }} />
              </S.Content>
            </S.ContentContainer>
          </S.PostContainer>
        </S.LostPostContainer>
        <br />
        <br />
        <S.PostContainer>
          <S.Label>
            {<img src={STATIC_URL.CHAT} alt="chat" width="15px" />} 댓글
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
              {<img src={STATIC_URL.SUBMIT} alt="submit_icon" />}
            </S.SubmitIcon>
          </S.WriteCommentContainer>
        </S.PostContainer>
      </S.LostPost>
    </Layout>
  );
};

export default LostPost;
