import React from "react";

import * as S from "./styles";
import Layout from "../../component/layout";
import { STATIC_URL } from "../../constant";
import BoardHeader from "../../container/notice-header";
import BoardList from "../../container/notice-list";
import Pagebar from "../../container/page-bar";
import { storage } from "../google_login/storage";

import { useBoardSearch } from "./hooks";

const NoticeSearch = () => {
  const { posts } = useBoardSearch();
  return (
    <Layout>
      <S.Notice>
        <S.NoticeContainer>
          <S.TitleContainer>
            <S.Title>공지사항</S.Title>
          </S.TitleContainer>
          <S.ToolsContainer>
            <S.Description>검색 결과</S.Description>
            <S.WriteButton to="/notice/upload">목록으로</S.WriteButton>
          </S.ToolsContainer>
          <S.BoardListContainer>
            <BoardHeader />
            <BoardList posts={posts} />
          </S.BoardListContainer>
          <S.PagebarContainer>
            <Pagebar board_type="notice" />
          </S.PagebarContainer>
        </S.NoticeContainer>
      </S.Notice>
    </Layout>
  );
};

export default NoticeSearch;
