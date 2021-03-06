import React from "react";

import * as S from "./styles";
import Layout from "../../component/layout";
import { STATIC_URL } from "../../constant";
import BoardHeader from "../../container/notice-header";
import BoardList from "../../container/notice-list";
import Pagebar from "../../container/page-bar";
import { storage } from "../google_login/storage";

import { useBoardNotice } from "./hooks";

const Notice = () => {
  const { posts } = useBoardNotice();
  const authentication = () => {
    // 관리자 설정
    var admin = ["112743772853536234615", "115049392299918823209"]; //[eunsoo,sohee]
    try {
      var auth = admin.includes(storage.get("loggedInfo").googleId);
    } catch {
      alert("로그인 하세요!");
    }
    return auth;
  };
  var auth = authentication();
  //검색기능
  var searchval;
  const Search = () => {
    if (searchval.value.length < 2) {
      alert("두 글자 이상 입력해주세요.");
      return;
    }
    const currenturl = window.location.href;
    window.location.href = currenturl + "/search/" + searchval.value;
  };
  return (
    <Layout>
      <S.Notice>
        <S.NoticeContainer>
          <S.TitleContainer>
            <S.Title>공지사항</S.Title>
          </S.TitleContainer>
          <S.DescContainer>
            <S.Description>
              홈페이지 공지사항이 게시되는 페이지 입니다
            </S.Description>
          </S.DescContainer>
          <S.ToolsContainer>
            <S.SearchContainer>
              <S.SearchBox
                placeholder="검색"
                type="text"
                ref={(ref) => (searchval = ref)}
              />
              <S.SearchIcon onClick={Search}>
                <img
                  src={STATIC_URL.MAGNIFYING_GLASS_ICON}
                  alt="magnifying-glass"
                />
              </S.SearchIcon>
            </S.SearchContainer>
            {auth ? (
              <S.WriteButton to="/notice/upload">글 작성</S.WriteButton>
            ) : (
              <div></div>
            )}
          </S.ToolsContainer>
          <S.BoardListContainer>
            <BoardHeader />
            <BoardList posts={posts} />
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
