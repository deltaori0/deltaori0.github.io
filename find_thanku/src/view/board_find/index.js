import React from "react";

import * as S from "./styles";
import Layout from "../../component/layout";
import { STATIC_URL } from "../../constant";
import BoardList from "../../container/board-list";

const BoardFind = () => {
  return (
    <Layout>
      <S.BoardFind>
        <S.BoardFindContainer>
          <S.TitleContainer>
            <S.Title>습득물 게시판</S.Title>
          </S.TitleContainer>
          <S.DescContainer>
            <S.Description>습득물 게시판 설명</S.Description>
          </S.DescContainer>
        </S.BoardFindContainer>
        <S.ToolsContainer>
          <S.SearchBox placeholder="검색" />
          <S.SearchIcon>
            <img
              src={STATIC_URL.MAGNIFYING_GLASS_ICON}
              alt="magnifying-glass"
            />
          </S.SearchIcon>
        </S.ToolsContainer>
        <S.BoardListContainer>
          <BoardList />
        </S.BoardListContainer>
      </S.BoardFind>
    </Layout>
  );
};

export default BoardFind;
