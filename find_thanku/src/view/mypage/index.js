import React from "react";

import * as S from "./styles";
import Layout from "../../component/layout";
import { STATIC_URL } from "../../constant";
import BoardHeader from "../../container/find-board-header";
import BoardList from "../../container/find-board-list";
import { useMyPage } from "./hooks";

const MyPage = () => {
  const { posts } = useMyPage();

  return (
    <Layout>
      <S.MyPage>
        <S.BoardListContainer>
          <BoardHeader />
          <BoardList posts={posts} />
        </S.BoardListContainer>
      </S.MyPage>
    </Layout>
  );
};

export default MyPage;
