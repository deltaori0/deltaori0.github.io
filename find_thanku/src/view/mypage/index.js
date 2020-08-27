import React from "react";

import * as S from "./styles";
import Layout from "../../component/layout";
import { STATIC_URL } from "../../constant";
import BoardHeader from "../../container/find-board-header";
import BoardList from "../../container/find-board-list";
import { useMyPage } from "./hooks"; //분실물
import { useMyPage2 } from "./hooks2"; //습득물
import { storage } from "../google_login/storage"

const MyPage = () => {    
  //뭘 쓸지 몰라서 다 준비해봤어...ㅎㅎㅎ
  const googleId = storage.get('loggedInfo').googleId; //숫자 형식
  const imageurl = storage.get('loggedInfo').imgUrl;
  const username = storage.get('loggedInfo').username; //ex: 정소희[학부재학/컴퓨터학과]
  const email = storage.get('loggedInfo').email; //ex: wjdthgmlgo@korea.ac.kr
  const emailname = email.split("@")[0]; //ex: wjdthgmlgo
  console.log(emailname);

  //각 게시판 posts 설정
  //const { posts } = useMyPage(googleId); //분실물 post
  const { posts } = useMyPage2(googleId); //습득물 post
 
  return (
    <Layout>
      <S.MyPage>
        <S.Temp>내 정보</S.Temp>
        <S.ImageContainer>
          <img src={imageurl}  alt="image" />
        </S.ImageContainer>
        <br/><br/>
        <S.Temp>내가 작성한 글</S.Temp>
        <br/>
        <S.Temp>분실물 게시판</S.Temp>
        <S.BoardListContainer>
          <BoardHeader />
          <BoardList posts={ posts } />
        </S.BoardListContainer>
        <br/>
        <S.Temp>습득물 게시판</S.Temp>
        <S.BoardListContainer>
          <BoardHeader />
          <BoardList posts={ posts } />
        </S.BoardListContainer>

      </S.MyPage>
    </Layout>
  );
};

export default MyPage;
