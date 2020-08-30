import styled from "styled-components/macro";
import { Link } from "react-router-dom";
import { THEME_COLOR } from "../../constant";

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 10rem;
  padding: 0rem 2rem;

  border-bottom: 3px solid ${THEME_COLOR.YELLOW};
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
  font-size: 1.6rem;
  font-weight: bold;

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    color: ${THEME_COLOR.YELLOW};
  }

  img {
    width: 4rem;
    height: 4rem;
    border-radius: 4rem;
  }

  width: 8.7rem;
  transition: background-color 0.5s;
`;

export const DesktopLink = styled(Link)`
  text-decoration: none;
  color: inherit;

  display: block;
`;

export const TempContainer = styled.div`
  display: flex;
  flex-direction: row;
`;
