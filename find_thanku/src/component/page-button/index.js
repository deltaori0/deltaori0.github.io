import React from "react";

import * as S from "./styles";

const PageButton = ({ board_type, page, start_page, end_page }) => {
  // let url = "/";
  // console.log(board_type);
  // if (board_type === "find") url = "/find/board/";
  // else if (board_type === "lost") url = "/lost/board/";
  // else if (board_type === "notice") url = "/notice/";

  // console.log("현재 페이지:", page);
  // console.log("시작 페이지:", start_page);
  // console.log("끝 페이지:", end_page);

  return (
    <S.PageButton>
      <S.PageButtonContainer>1</S.PageButtonContainer>
      <S.PageButtonContainer>2</S.PageButtonContainer>
      <S.PageButtonContainer>3</S.PageButtonContainer>
      <S.PageButtonContainer>4</S.PageButtonContainer>
      <S.PageButtonContainer>5</S.PageButtonContainer>
    </S.PageButton>
  );
};

export default PageButton;
