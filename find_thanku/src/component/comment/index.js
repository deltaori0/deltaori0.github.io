import React from "react";

import * as S from "./styles";
import { STATIC_URL } from "../../constant";
import { PostDelete, PostEdit } from "./function";
import { storage } from "../../view/google_login/storage";

const Comment = ({ comment }) => {
  // 댓글 JSON Object Array를 comment 변수로 받아옴
  const googleId = comment.googleId; // 댓글 작성자의 구글 아이디
  const content = comment.content;
  const id = comment._id;
  const date = comment.date;
  const username = comment.username;
  const currentId = storage.get("loggedInfo").googleId; // local storage를 사용하여 접속자의 구글 아이디 정보를 가져옴

  // 작성자 == 접속자인 경우 삭제/수정 권한 부여
  var editauth;
  var delauth;
  if (currentId === googleId) {
    editauth = true;
    delauth = true;
  } else {
    editauth = false;
    delauth = false;
  }

  const Delete = () => {
    PostDelete(delauth, id);
  };

  const Edit = () => {
    PostEdit(delauth, content, id);
  };

  return (
    <S.Comment>
      <S.WriterContainer>
        <S.ProfileIcon>
          <img src={STATIC_URL.PROFILE} alt="profile" />
        </S.ProfileIcon>
        <S.Writer>{username}</S.Writer>
        <S.Date>{date.slice(0, 10)}</S.Date>
      </S.WriterContainer>
      <S.ContentContainer>
        <S.Content>{content}</S.Content>
        <S.IconContainer>
          {editauth ? (
            <S.Icon onClick={Edit}>
              <img src={STATIC_URL.EDIT} alt="edit" />
            </S.Icon>
          ) : (
            <div></div>
          )}
          {delauth ? (
            <S.Icon to="find/board" onClick={Delete}>
              <img src={STATIC_URL.DELETE} alt="delete" />
            </S.Icon>
          ) : (
            <div></div>
          )}
        </S.IconContainer>
      </S.ContentContainer>
    </S.Comment>
  );
};

export default Comment;
