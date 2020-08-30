import React from "react";

import * as S from "./styles";

import PageButton from "../../component/page-button";

const Pagebar = () => {
  return (
    <S.Pagebar>
      <S.ArrowBlock>
        <S.Arrow className="left"></S.Arrow>
      </S.ArrowBlock>
      <S.Buttons>
        <PageButton />
      </S.Buttons>
      <S.ArrowBlock>
        <S.Arrow className="right"></S.Arrow>
      </S.ArrowBlock>
    </S.Pagebar>
  );
};

export default Pagebar;
