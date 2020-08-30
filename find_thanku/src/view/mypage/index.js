import React from "react";

import * as S from "./styles";
import Layout from "../../component/layout";
import FindBoardHeader from "../../container/find-board-header";
import LostBoardHeader from "../../container/lost-board-header";

import FindBoardList from "../../container/find-board-list";
import LostBoardList from "../../container/lost-board-list";

import { useMyPage } from "./hooks"; //분실물
import { useMyPage2 } from "./hooks2"; //습득물
import { storage } from "../google_login/storage";

const MyPage = () => {
  //뭘 쓸지 몰라서 다 준비해봤어...ㅎㅎㅎ
  const googleId = storage.get("loggedInfo").googleId; //숫자 형식
  const imageurl = storage.get("loggedInfo").imgUrl;
  const username = storage.get("loggedInfo").username; //ex: 정소희[학부재학/컴퓨터학과]
  const email = storage.get("loggedInfo").email; //ex: wjdthgmlgo@korea.ac.kr
  const emailname = email.split("@")[0]; //ex: wjdthgmlgo
  console.log(emailname);

  //각 게시판 posts 설정
  const { posts } = useMyPage(googleId); //분실물 post
  const { posts2 } = useMyPage2(googleId); //습득물 post

  // console.log("posts", posts);
  console.log("posts2", posts2);

  return (
    <Layout>
      <S.MyPage>
        <S.MyInfoContainer>
          <S.Title>내 정보</S.Title>
          <S.MyInfo>
            <S.ImageContainer>
              <img src={imageurl} alt="profile" />
            </S.ImageContainer>
            <S.MetaContainer>
              <S.Meta>이름: {username}</S.Meta>
              <S.Meta>닉네임: {emailname}</S.Meta>
              <S.Meta>이메일: {email}</S.Meta>
            </S.MetaContainer>
          </S.MyInfo>
        </S.MyInfoContainer>

        <S.Title>내가 작성한 글</S.Title>
        <S.Container>
          <S.Label>분실물 게시판</S.Label>
          <S.BoardListContainer>
            <LostBoardHeader />
            <LostBoardList posts={posts} />
          </S.BoardListContainer>
        </S.Container>
        <S.Container>
          <S.Label>습득물 게시판</S.Label>
          <S.BoardListContainer>
            <FindBoardHeader />
            <FindBoardList posts={posts2} />
          </S.BoardListContainer>
        </S.Container>
      </S.MyPage>
    </Layout>
  );
};

export default MyPage;
