import React from "react";

import * as S from "./styles";

import BoardItem from "../../component/find-board-item";

const BoardList = ({ posts }) => {
  console.log(posts);

  return (
    <S.BoardList>
      {posts.map((post, idx) => {
        return <BoardItem post={post} key={idx} />;
      })}
    </S.BoardList>
  );
};

export default BoardList;
