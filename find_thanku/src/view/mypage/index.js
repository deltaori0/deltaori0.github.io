import React from "react";

import * as S from "./styles";
import Layout from "../../component/layout";
import { STATIC_URL } from "../../constant";
import BoardHeader from "../../container/find-board-header";
import BoardList from "../../container/find-board-list";

const MyPage = () => {
  return (
    <Layout>
      <S.MyPage></S.MyPage>
    </Layout>
  );
};

export default MyPage;
