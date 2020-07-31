import React from "react";

import * as S from "./styles";
import Layout from "../../component/layout";

const Main = () => {
  return (
    <Layout>
      <S.Main>
        <S.MainContainer>
          <S.BlockContainer>
            <S.Title>분실물</S.Title>
            <S.Description>
              분실물 게시판에 대한 설명이 들어갈 예정입니다.
            </S.Description>
            <S.GoButton to="board_lost">바로가기 ▷</S.GoButton>
          </S.BlockContainer>
          <S.BlockContainer>
            <S.Title>공지사항</S.Title>
            <S.Description>
              공지사항에 대한 설명이 들어갈 예정입니다.
            </S.Description>
            <S.GoButton to="notice">바로가기 ▷</S.GoButton>
          </S.BlockContainer>
          <S.BlockContainer>
            <S.Title>습득물</S.Title>
            <S.Description>
              습득물 게시판에 대한 설명이 들어갈 예정입니다.
            </S.Description>
            <S.GoButton to="board_find">바로가기 ▷</S.GoButton>
          </S.BlockContainer>
        </S.MainContainer>
      </S.Main>
    </Layout>
  );
};

export default Main;
