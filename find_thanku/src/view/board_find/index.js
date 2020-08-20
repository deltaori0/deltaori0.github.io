import React from "react";

import * as S from "./styles";
import Layout from "../../component/layout";
import { STATIC_URL } from "../../constant";
import BoardHeader from "../../container/find-board-header";
import BoardList from "../../container/find-board-list";
import Pagebar from "../../container/page-bar";

const BoardFind = () => {
  return (
    <Layout>
      <S.BoardFind>
        <S.BoardFindContainer>
          <S.TitleContainer>
            <S.Title>습득물 게시판</S.Title>
          </S.TitleContainer>
          <S.DescContainer>
            <S.Description>습득물 게시판에 대한 간단한 설명</S.Description>
          </S.DescContainer>
        </S.BoardFindContainer>
        <S.ToolsContainer>
          <S.SearchContainer>
            <S.SearchBox placeholder="제목 검색" />
            <S.SearchIcon>
              <img
                src={STATIC_URL.MAGNIFYING_GLASS_ICON}
                alt="magnifying-glass"
              />
            </S.SearchIcon>
          </S.SearchContainer>
          <S.WriteButton to="find_upload">글 작성</S.WriteButton>
        </S.ToolsContainer>
        <S.BoardListContainer>
          <BoardHeader />
          <BoardList />
        </S.BoardListContainer>
        <S.PagebarContainer>
          <Pagebar />
        </S.PagebarContainer>
      </S.BoardFind>
    </Layout>
  );
};

export default BoardFind;
