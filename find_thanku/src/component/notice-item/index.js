import React from "react";

import * as S from "./styles";

const NoticeItem = ({ post }) => {
  const url = "/notice/post/" + post._id;
  return (
    <S.BoardItem>
      <S.TitleContainer to={url}>
        <S.Label>{post.title}</S.Label>
      </S.TitleContainer>
      <S.DateContainer>
        <S.Label>{post.date.slice(0, 10)}</S.Label>
      </S.DateContainer>
    </S.BoardItem>
  );
};

export default NoticeItem;
