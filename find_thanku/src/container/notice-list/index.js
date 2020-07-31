import React from "react";

import * as S from "./styles";

import NoticeItem from "../../component/notice-item";

const NoticeList = () => {
  return (
    <S.BoardList>
      <NoticeItem />
      <NoticeItem />
      <NoticeItem />
      <NoticeItem />
      <NoticeItem />
    </S.BoardList>
  );
};

export default NoticeList;
