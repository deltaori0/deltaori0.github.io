import React from "react";

import * as S from "./styles";
import Comment from "../../component/comment";

const CommentList = ({comments}) => {
  console.log(comments);
  return (
    <S.CommentList>
      {comments.map((comment, idx) => {
        return <Comment comment={comment} key={idx}/>;
      })}
    </S.CommentList>
  );
};

export default CommentList;
