import React from "react";

import * as S from "./styles";

import LostBoardItem from "../../component/lost-board-item";

const LostBoardList = () => {
  return (
    <S.BoardList>
      <LostBoardItem />
      <LostBoardItem />
      <LostBoardItem />
      <LostBoardItem />
      <LostBoardItem />
    </S.BoardList>
  );
};

export default LostBoardList;
