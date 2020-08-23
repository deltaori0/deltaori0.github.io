import React from "react";

import * as S from "./styles";

const NoticeItem = ({ post }) => {
  const url = "/notice_post/" + post._id;
  return (
    <S.BoardItem>
      <S.NameContainer to={url}>
        <S.Label>{post.title}</S.Label>
      </S.NameContainer>
      <S.DateContainer>
        <S.Label>{post.date.slice(0, 10)}</S.Label>
      </S.DateContainer>
    </S.BoardItem>
  );
};

export default NoticeItem;
