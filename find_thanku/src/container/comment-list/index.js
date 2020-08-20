import React from "react";

import * as S from "./styles";
import Comment from "../../component/comment";

const CommentList = () => {
  return (
    <S.CommentList>
      <S.CommentsContainer>
        <Comment />
        <Comment />
        <Comment />
      </S.CommentsContainer>
    </S.CommentList>
  );
};

export default CommentList;
