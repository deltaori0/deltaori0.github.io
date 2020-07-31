import React from "react";

import * as S from "./styles";

import BoardItem from "../../component/find-board-item";

const BoardList = () => {
  return (
    <S.BoardList>
      <BoardItem />
      <BoardItem />
      <BoardItem />
      <BoardItem />
      <BoardItem />
    </S.BoardList>
  );
};

export default BoardList;
