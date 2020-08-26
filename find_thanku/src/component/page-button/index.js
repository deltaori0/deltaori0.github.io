import React from "react";

import * as S from "./styles";

const PageButton = ({ board_type }) => {
  let url = "/";
 // console.log(board_type);
  if (board_type === "find") url = "/find/board/";
  else if (board_type === "lost") url = "/lost/board/";
  else if (board_type === "notice") url = "/notice/";

  return (
    <S.PageButton>
      <S.PageButtonContainer to={url + "1"}>1</S.PageButtonContainer>
      <S.PageButtonContainer to={url + "2"}>2</S.PageButtonContainer>
      <S.PageButtonContainer to={url + "3"}>3</S.PageButtonContainer>
      <S.PageButtonContainer to={url + "4"}>4</S.PageButtonContainer>
      <S.PageButtonContainer to={url + "5"}>5</S.PageButtonContainer>
    </S.PageButton>
  );
};

export default PageButton;
