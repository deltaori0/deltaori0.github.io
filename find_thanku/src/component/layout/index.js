import * as S from "./styles";

import React from "react";
import Header from "../header";

const Layout = () => {
  return (
    <S.Layout>
      <Header />
      <S.LayoutContainer />
    </S.Layout>
  );
};

export default Layout;
