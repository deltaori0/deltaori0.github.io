import React from "react";

import * as S from "./styles";
import Comment from "../../component/comment";

const CommentList = ({ comments }) => {
  return (
    // JSON Object Array의 각각의 JSON 요소를 추출하여 comment 변수로 넣어줌
    // 게시글에 달린 댓글 전부 화면에 표시됨
    <S.CommentList>
      {comments.map((comment, idx) => {
        return <Comment comment={comment} key={idx} />;
      })}
    </S.CommentList>
  );
};

export default CommentList;
