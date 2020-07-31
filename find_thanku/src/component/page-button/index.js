import React from "react";

import * as S from "./styles";

const PageButton = () => {
  return (
    <S.PageButton>
      <S.PageButtonContainer to="/board_find">1</S.PageButtonContainer>
      <S.PageButtonContainer to="/board_find">2</S.PageButtonContainer>
      <S.PageButtonContainer to="/board_find">3</S.PageButtonContainer>
      <S.PageButtonContainer to="/board_find">4</S.PageButtonContainer>
      <S.PageButtonContainer to="/board_find">5</S.PageButtonContainer>
    </S.PageButton>
  );
};

export default PageButton;
