import React from "react";

import * as S from "./styles";
import Layout from "../../component/layout";
import { STATIC_URL } from "../../constant";
import BoardHeader from "../../container/lost-board-header";
import BoardList from "../../container/lost-board-list";
import Pagebar from "../../container/page-bar";

import { useBoardLost } from "./hooks";

const BoardLost = () => {
  const { posts } = useBoardLost();

  return (
    <Layout>
      <S.BoardLost>
        <S.BoardLostContainer>
          <S.TitleContainer>
            <S.Title>분실물 게시판</S.Title>
          </S.TitleContainer>
          <S.DescContainer>
            <S.Description>분실물 게시판에 대한 간단한 설명</S.Description>
          </S.DescContainer>
        </S.BoardLostContainer>
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
          <S.WriteButton to="/lost/upload">글 작성</S.WriteButton>
        </S.ToolsContainer>
        <S.BoardListContainer>
          <BoardHeader />
          <BoardList posts={posts} />
        </S.BoardListContainer>
        <S.PagebarContainer>
          <Pagebar board_type="lost" />
        </S.PagebarContainer>
      </S.BoardLost>
    </Layout>
  );
};

export default BoardLost;
