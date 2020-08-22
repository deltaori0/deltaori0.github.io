import React from "react";

import * as S from "./styles";

import LostBoardItem from "../../component/lost-board-item";

const LostBoardList = ({ posts }) => {
  console.log(posts);

  return (
    <S.BoardList>
      {posts.map((post, idx) => {
        return <LostBoardItem post={post} key={idx} />;
      })}
    </S.BoardList>
  );
};

export default LostBoardList;
