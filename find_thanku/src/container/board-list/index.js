import React from "react";

import * as S from "./styles";

import BoardItem from "../../component/board-item";

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
