import React from "react";

import * as S from "./styles";
import { STATIC_URL } from "../../constant";
import {PostDelete, PostEdit} from "./function";

const Comment = ({comment}) => {
  const username = comment.username;
  const content = comment.content;
  const id = comment._id;
  
  const Delete = () => {
    PostDelete(username,id);
  }
  const Edit = () => {
    PostEdit(username,content,id);
  }
  
  return (
    <S.Comment>
      <S.WriterContainer>
        <S.ProfileIcon>
          <img src={STATIC_URL.PROFILE} alt="profile" />
        </S.ProfileIcon>
        <S.Writer>{username} </S.Writer>
      </S.WriterContainer>
      <S.ContentContainer>
        <S.Content>{content}</S.Content>
        <S.CommentIcon>{<img src={STATIC_URL.EDIT} alt="edit" align='right' onClick={Edit}/>}</S.CommentIcon>
        <S.CommentIcon>{<img src={STATIC_URL.DELETE} alt="delete" align='right' onClick={Delete}/>}</S.CommentIcon>
      </S.ContentContainer>
    </S.Comment>
  );
};

export default Comment;
