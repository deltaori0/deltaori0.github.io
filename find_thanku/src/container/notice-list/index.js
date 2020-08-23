import React from "react";

import * as S from "./styles";

import NoticeItem from "../../component/notice-item";

const NoticeList = ({ posts }) => {
  console.log(posts);

  return (
    <S.BoardList>
      {posts.map((post, idx) => {
        return <NoticeItem post={post} key={idx} />;
      })}
    </S.BoardList>
  );
};

export default NoticeList;
