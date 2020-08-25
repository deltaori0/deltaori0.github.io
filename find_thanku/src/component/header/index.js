import React from "react";

import { STATIC_URL } from "../../constant";
import {GoogleBtn} from "../../view/google_login/googlebtn";

import * as S from "./styles";

const Header = () => {
  return (
    <S.Header>
      <S.DesktopLink to="/">
        <S.Logo src={STATIC_URL.LOGO} alt="Logo"></S.Logo>
      </S.DesktopLink>
      <S.Buttons>
        <S.DesktopLink to="/lost/board">
          <S.Button>분실물</S.Button>
        </S.DesktopLink>
        <S.DesktopLink to="/find/board">
          <S.Button>습득물</S.Button>
        </S.DesktopLink>
        <S.DesktopLink to="/notice">
          <S.Button>공지사항</S.Button>
        </S.DesktopLink>
        <S.DesktopLink to='/login'>
          <S.Button>로그인</S.Button>
        </S.DesktopLink>
      </S.Buttons>
    </S.Header>
  );
};

export default Header;
