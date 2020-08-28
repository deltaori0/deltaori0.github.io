import React from "react";

import * as S from "./styles";
import Layout from "../../component/layout";
import BoardHeader from "../../container/find-board-header";
import BoardList from "../../container/find-board-list";
import { useMyPage } from "./hooks";

const MyPage = () => {
  const { posts } = useMyPage();

  return (
    <Layout>
      <S.MyPage>
        <S.TitleContainer>
          <S.Title>마이페이지</S.Title>
        </S.TitleContainer>
        <S.TitleContainer>
          <S.Title>작성 글 목록</S.Title>
        </S.TitleContainer>
        <S.TitleContainer>
          <S.Label>분실물 게시판</S.Label>
        </S.TitleContainer>
        <S.BoardListContainer>
          <BoardHeader />
          <BoardList posts={posts} />
        </S.BoardListContainer>

        <S.TitleContainer>
          <S.Label>습득물 게시판</S.Label>
        </S.TitleContainer>
        <S.BoardListContainer>
          <BoardHeader />
          <BoardList posts={posts} />
        </S.BoardListContainer>
      </S.MyPage>
    </Layout>
  );
};

export default MyPage;
