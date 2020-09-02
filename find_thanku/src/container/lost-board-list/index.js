import React from "react";

import * as S from "./styles";

import LostBoardItem from "../../component/lost-board-item";

const LostBoardList = ({ posts }) => {
  return (
    <S.BoardList>
      {posts.map((post, idx) => {
        // JSON Object Array의 각각의 JSON 요소를 추출하여 post 변수로 넣어줌
        return <LostBoardItem post={post} key={idx} />;
      })}
    </S.BoardList>
  );
};

export default LostBoardList;
