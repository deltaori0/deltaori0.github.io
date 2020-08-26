import React from "react";

import * as S from "./styles";

import PageButton from "../../component/page-button";

const Pagebar = ({ board_type }) => {
  return (
    <S.Pagebar>
      <S.ArrowBlock>
        <S.Arrow className="left"></S.Arrow>
      </S.ArrowBlock>
      <S.Buttons>
        <PageButton board_type={board_type} />
      </S.Buttons>
      <S.ArrowBlock>
        <S.Arrow className="right"></S.Arrow>
      </S.ArrowBlock>
    </S.Pagebar>
  );
};

export default Pagebar;
