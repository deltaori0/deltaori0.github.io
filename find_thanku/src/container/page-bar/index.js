import React from "react";

import * as S from "./styles";

import PageButton from "../../component/page-button";

const Pagebar = ({
  board_type,
  page,
  start_page,
  end_page,
  page_count,
  total_page,
}) => {
  function beforePage() {
    // console.log("이전 버튼 누름!!!!");
    // if (start_page - page_count > 0) start_page -= page_count;
    // console.log("이전페이지 누름 - start_page :", start_page); // 눌렀을 때 start_page에 바로 반영되어서 PageButton으로 넘겨줘야 함 (미완)
    // window.location.reload(true);
  }
  function nextPage() {
    // console.log("다음 버튼 누름!!! !");
    // if (start_page + page_count < total_page) start_page += page_count;
    // console.log("다음페이지 누름 - start_page :", start_page);
    // window.location.reload(true);
  }
  return (
    <S.Pagebar>
      <S.ArrowBlock onClick={beforePage}>
        <S.Arrow className="left"></S.Arrow>
      </S.ArrowBlock>
      <S.Buttons>
        <PageButton
          board_type={board_type}
          page={page}
          start_page={start_page}
          end_page={end_page}
        />
      </S.Buttons>
      <S.ArrowBlock onClick={nextPage}>
        <S.Arrow className="right"></S.Arrow>
      </S.ArrowBlock>
    </S.Pagebar>
  );
};

export default Pagebar;
