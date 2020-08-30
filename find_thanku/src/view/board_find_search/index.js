import React from "react";

import * as S from "./styles";
import Layout from "../../component/layout";
import BoardHeader from "../../container/find-board-header";
import BoardList from "../../container/find-board-list";
import Pagebar from "../../container/page-bar";

import { useBoardSearch } from "./hooks";

const BoardFindSearch = () => {
  const { posts } = useBoardSearch();
  return (
    <Layout>
      <S.BoardFind>
        <S.BoardFindContainer>
          <S.TitleContainer>
            <S.Title>습득물 게시판</S.Title>
          </S.TitleContainer>
        </S.BoardFindContainer>
        <S.ToolsContainer>
          <S.Description>검색 결과</S.Description>
          <S.WriteButton to="/find/board">목록으로</S.WriteButton>
        </S.ToolsContainer>
        <S.BoardListContainer>
          <BoardHeader />
          <BoardList posts={posts} />
        </S.BoardListContainer>
        <S.PagebarContainer>
          <Pagebar />
        </S.PagebarContainer>
      </S.BoardFind>
    </Layout>
  );
};

export default BoardFindSearch;
