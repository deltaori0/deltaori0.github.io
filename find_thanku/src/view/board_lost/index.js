import React from "react";

import * as S from "./styles";
import Layout from "../../component/layout";
import { STATIC_URL } from "../../constant";
import BoardHeader from "../../container/lost-board-header";
import BoardList from "../../container/lost-board-list";
import Pagebar from "../../container/page-bar";

import { useBoardLost } from "./hooks";

const BoardLost = () => {
  const { posts } = useBoardLost();
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
      <S.BoardLost>
        <S.BoardLostContainer>
          <S.TitleContainer>
            <S.Title>분실물 게시판</S.Title>
          </S.TitleContainer>
          <S.DescContainer>
            <S.Description>
              교내에서 잃어버린 물건에 대한 정보를 올리는 게시판입니다.
            </S.Description>
          </S.DescContainer>
        </S.BoardLostContainer>
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
          <S.WriteButton to="/lost/upload">글 작성</S.WriteButton>
        </S.ToolsContainer>
        <S.BoardListContainer>
          <BoardHeader />
          <BoardList posts={posts} />
        </S.BoardListContainer>
        <S.PagebarContainer>
          <Pagebar board_type="lost" />
        </S.PagebarContainer>
      </S.BoardLost>
    </Layout>
  );
};

export default BoardLost;
