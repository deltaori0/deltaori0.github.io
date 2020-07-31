import React from "react";

import * as S from "./styles";
import Layout from "../../component/layout";
import { STATIC_URL } from "../../constant";
import BoardHeader from "../../container/notice-header";
import BoardList from "../../container/notice-list";
import Pagebar from "../../container/page-bar";

const Notice = () => {
  return (
    <Layout>
      <S.Notice>
        <S.NoticeContainer>
          <S.TitleContainer>
            <S.Title>공지사항</S.Title>
          </S.TitleContainer>
          <S.DescContainer>
            <S.Description>공지사항에 대한 간단한 설명</S.Description>
          </S.DescContainer>
          <S.ToolsContainer>
            <S.SearchContainer>
              <S.SearchBox placeholder="검색" />
              <S.SearchIcon>
                <img
                  src={STATIC_URL.MAGNIFYING_GLASS_ICON}
                  alt="magnifying-glass"
                />
              </S.SearchIcon>
            </S.SearchContainer>
            <S.WriteButton to="notice_upload">글 작성</S.WriteButton>
          </S.ToolsContainer>
          <S.BoardListContainer>
            <BoardHeader />
            <BoardList />
          </S.BoardListContainer>
          <S.PagebarContainer>
            <Pagebar />
          </S.PagebarContainer>
        </S.NoticeContainer>
      </S.Notice>
    </Layout>
  );
};

export default Notice;
