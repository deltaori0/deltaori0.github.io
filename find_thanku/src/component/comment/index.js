import React from "react";

import * as S from "./styles";
import { STATIC_URL } from "../../constant";

const Comment = ({comment}) => {
  //const url = "/find_post/" + post._id;
  return (
    <S.Comment>
      <S.WriterContainer>
        <S.ProfileIcon>
          <img src={STATIC_URL.PROFILE} alt="profile" />
        </S.ProfileIcon>
        <S.Writer>작성자: {comment.username} </S.Writer>
      </S.WriterContainer>
      <S.ContentContainer>
        <S.Content>{comment.content} </S.Content>
      </S.ContentContainer>
    </S.Comment>
  );
};

export default Comment;
