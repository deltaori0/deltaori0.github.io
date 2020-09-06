import React from "react";

import * as S from "./styles";
import Layout from "../../component/layout";
import { STATIC_URL } from "../../constant";
import BoardHeader from "../../container/find-board-header";
import BoardList from "../../container/find-board-list";
import Pagebar from "../../container/page-bar";

import { useBoardFind } from "./hooks";

const BoardFind = () => {
  const { posts } = useBoardFind();

  //게시글 검색
  var searchval;
  const Search = () => {
    if (searchval.value.length < 2) {
      alert("두 글자 이상 입력해주세요.");
      return;
    }
    const currenturl = window.location.href;
    // 검색한 내용을 포함하여 수정된 url로 페이지를 이동
    window.location.href = currenturl + "/search/" + searchval.value;
  };

  return (
    <Layout>
      <S.BoardFind>
        <S.BoardFindContainer>
          <S.TitleContainer>
            <S.Title>습득물 게시판</S.Title>
          </S.TitleContainer>
          <S.DescContainer>
            <S.Description>
              교내에서 습득한 물건에 대한 정보를 올리는 게시판입니다.
            </S.Description>
          </S.DescContainer>
        </S.BoardFindContainer>
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
          <S.WriteButton to="/find/upload">글 작성</S.WriteButton>
        </S.ToolsContainer>
        <S.BoardListContainer>
          <BoardHeader />
          <BoardList posts={posts} />
        </S.BoardListContainer>
        <S.PagebarContainer>
          <Pagebar />
        </S.PagebarContainer>
      </S.BoardFind>
    </Layout>
  );
};

export default BoardFind;
