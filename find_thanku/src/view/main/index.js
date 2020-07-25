import React from "react";

import * as S from "./styles";
import Layout from "../../component/layout";

const Main = () => {
  return (
    <Layout>
      <S.Main>
        <S.MainContainer>
          <S.BlockContainer to="board_lost">
            <S.Title>분실물</S.Title>
            <S.Description>
              분실물 게시판에 대한 설명이 들어갈 예정입니다.
            </S.Description>
          </S.BlockContainer>
          <S.BlockContainer to="notice">
            <S.Title>공지사항</S.Title>
            <S.Description>
              공지사항에 대한 설명이 들어갈 예정입니다.
            </S.Description>
          </S.BlockContainer>
          <S.BlockContainer to="board_find">
            <S.Title>습득물</S.Title>
            <S.Description>
              습득물 게시판에 대한 설명이 들어갈 예정입니다.
            </S.Description>
          </S.BlockContainer>
        </S.MainContainer>
      </S.Main>
    </Layout>
  );
};

export default Main;
