import React from "react";

import * as S from "./styles";
import Layout from "../../component/layout";
import { STATIC_URL } from "../../constant";
import BoardHeader from "../../container/find-board-header";
import BoardList from "../../container/find-board-list";
import Pagebar from "../../container/page-bar";

import { useBoardSearch } from "./hooks";

const BoardFindSearch = () => {
  const { posts } = useBoardSearch();
  let url_string = window.location.pathname.split("/");
  let page = 1; // 나중에 url 맨 뒷부분 보고 현재 보고 있는 페이지 추출 (근데 맨 처음 클릭했을 때 값은 1 뒤 url이 없으므로)
  if (url_string.length === 3) { 
    page = 1;
  }
  else{ 
    page = parseInt(url_string[3]);
  }
  const totalCount = posts.length;
  const listCount = 10;
  let totalPage = parseInt(totalCount / listCount);
  if (totalCount % listCount > 0){
    totalPage += 1;
  } 
  if (totalPage < page) {
    page = totalPage; // 사용자가 임의로 페이지 수 바꿀 수 있으므로
  }
  const pageCount = 5;
  let startPage = parseInt((page - 1) / pageCount + 1);
  let endPage = startPage + pageCount - 1;
  if (endPage > totalPage) {
    endPage = totalPage;
  }
  return (
    <Layout>
      <S.BoardFind>
        <S.BoardFindContainer>
          <S.TitleContainer>
            <S.Title>습득물 게시판</S.Title>
          </S.TitleContainer>
          <S.DescContainer>
            <S.Description>검색 결과</S.Description>
          </S.DescContainer>
        </S.BoardFindContainer>
        <S.ToolsContainer>
          <S.WriteButton to="/find/board">목록으로</S.WriteButton>
        </S.ToolsContainer>
        <S.BoardListContainer>
          <BoardHeader />
          <BoardList posts={posts} />
        </S.BoardListContainer>
        <S.PagebarContainer>
          <Pagebar
            board_type="find"
            page={page}
            start_page={startPage}
            end_page={endPage}
            page_count={pageCount}
            total_page={totalPage}
          />
        </S.PagebarContainer>
      </S.BoardFind>
    </Layout>
  );
};

export default BoardFindSearch;
