import React from "react";

import * as S from "./styles";
import Layout from "../../component/layout";
import BoardHeader from "../../container/lost-board-header";
import BoardList from "../../container/lost-board-list";
import Pagebar from "../../container/page-bar";

import { useBoardSearch } from "./hooks";

const BoardLostSearch = () => {
  const { posts } = useBoardSearch();

  return (
    <Layout>
      <S.BoardLost>
        <S.BoardLostContainer>
          <S.TitleContainer>
            <S.Title>분실물 게시판</S.Title>
          </S.TitleContainer>
        </S.BoardLostContainer>
        <S.ToolsContainer>
          <S.Description>검색 결과</S.Description>
          <S.WriteButton to="/lost/board">목록으로</S.WriteButton>
        </S.ToolsContainer>
        <S.BoardListContainer>
          <BoardHeader />
          <BoardList posts={posts} />
        </S.BoardListContainer>
        <S.PagebarContainer>
          <Pagebar />
        </S.PagebarContainer>
      </S.BoardLost>
    </Layout>
  );
};

export default BoardLostSearch;
