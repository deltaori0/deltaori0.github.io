import React from "react";

import * as S from "./styles";

const PageButton = ({ focus }) => {
  return (
    <S.PageButton focus={focus}>
      <S.PageButtonContainer to="/board">1</S.PageButtonContainer>
    </S.PageButton>
  );
};

export default PageButton;
