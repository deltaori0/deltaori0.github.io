import React from "react";

import * as S from "./styles";
import { STATIC_URL } from "../../constant";
import { PostDelete, PostEdit } from "./function";
import { storage } from '../../view/google_login/storage';

const Comment = ({ comment }) => {
  const googleId = comment.googleId;
  const content = comment.content;
  const id = comment._id;
  const date = comment.date;
  const username =  comment.username;
  const currentId =  storage.get('loggedInfo').googleId;
  //삭제,수정 권한
  var editauth; var delauth;
  if(currentId === googleId){
    editauth = true;
    delauth = true;
  }
  else{
    editauth = false;
    delauth = false;
  }

  const Delete = () => {
    PostDelete(delauth,id);
  };
  const Edit = () => {
    PostEdit(delauth, content, id);
  };

  return (
    <S.Comment>
      <S.WriterContainer>
        <S.ProfileIcon><img src={STATIC_URL.PROFILE} alt="profile" /></S.ProfileIcon>
        <S.Writer>{username}</S.Writer>
        <S.Date>{date.slice(0, 10)}</S.Date>
      </S.WriterContainer>
      <S.ContentContainer>
        <S.Content>{content}</S.Content>
        <S.IconContainer>
          {editauth?
          <S.Icon onClick={Edit}>
            <img src={STATIC_URL.EDIT} alt="edit" />
          </S.Icon>: <div></div>}
          {delauth?
          <S.Icon to="find/board" onClick={Delete}>
            <img src={STATIC_URL.DELETE} alt="delete" />
          </S.Icon>: <div></div>}
        </S.IconContainer>
        {/* <S.CommentIcon>{<img src={STATIC_URL.EDIT} alt="edit" align='right' onClick={Edit}/>}</S.CommentIcon> */}
        {/* <S.CommentIcon>{<img src={STATIC_URL.DELETE} alt="delete" align='right' onClick={Delete}/>}</S.CommentIcon> */}
      </S.ContentContainer>
    </S.Comment>
  );
};

export default Comment;