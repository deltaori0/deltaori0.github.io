import React from "react";

import * as S from "./styles";
import Layout from "../../component/layout";
import { STATIC_URL } from "../../constant";

const Main = () => {
  return (
    <Layout>
      <S.Main>
        <S.ContentContainer>
          <S.MainContent>
            <S.MainLabel>FIN:D THANKU!</S.MainLabel>
            <S.MainLabel>
              고려대학교 구성원을 위한 스마트 분실물센터
            </S.MainLabel>
          </S.MainContent>
          <S.SubContent>
            <S.SubLabel>
              찾아주셔서(FIN:D) 고맙습니다(THANKU)의 의미를 가지는 FIN:D
              THANKU는
              <br />
              고려대학교 구성원을 위한 분실물센터입니다.
            </S.SubLabel>
            <S.SubLabel>
              구성원 누구나 잃어버린 물건을 쉽게 찾을 수 있도록 하는 것이 FIN:D
              THANKU의 목표입니다.
            </S.SubLabel>
          </S.SubContent>
        </S.ContentContainer>
        <S.MainContainer>
          <S.BlockContainer to="lost/board">
            <S.Icon>
              <img src={STATIC_URL.SAD} alt="sad" />
            </S.Icon>
            <S.Title>분실물</S.Title>
            <S.Description>잃어버린 물건 보러가기</S.Description>
          </S.BlockContainer>
          <S.BlockContainer to="notice">
            <S.Icon>
              <img src={STATIC_URL.MEGAPHONE} alt="sad" />
            </S.Icon>
            <S.Title>공지사항</S.Title>
            <S.Description>FIN:D THANKU 공지사항 보러가기</S.Description>
          </S.BlockContainer>
          <S.BlockContainer to="find/board">
            <S.Icon>
              <img src={STATIC_URL.SMILE} alt="sad" />
            </S.Icon>
            <S.Title>습득물</S.Title>
            <S.Description>찾은 물건 보러가기</S.Description>
          </S.BlockContainer>
        </S.MainContainer>
      </S.Main>
    </Layout>
  );
};

export default Main;
