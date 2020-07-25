import { Link } from "react-router-dom";
import styled from "styled-components/macro";

import { THEME_COLOR } from "../../constant";

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 8rem;
  padding: 0rem 5rem;
`;

export const Logo = styled.img`
  display: block;
  width: 13rem;
`;

export const Buttons = styled.div`
  height: 100%;
  display: flex;
`;

export const Button = styled.button`
  height: 100%;
  outline: none;

  border: none;
  background-color: inherit;
  font-size: 1.4rem;
  font-weight: bold;

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: ${THEME_COLOR.GRAY};
  }

  img {
    width: 2rem;
    height: 2rem;
  }

  height: 8rem;
  width: 8.7rem;
  padding: 0rem 2rem;
  transition: background-color 0.5s;
`;

export const DesktopLink = styled(Link)`
  text-decoration: none;
  color: inherit;

  display: block;
`;
