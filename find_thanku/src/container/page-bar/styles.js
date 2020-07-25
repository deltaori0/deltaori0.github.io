import styled from "styled-components/macro";

import { THEME_COLOR } from "../../constant";

export const Pagebar = styled.div`
  display: flex;

  align-items: center;
`;

export const Buttons = styled.ul`
  display: flex;

  background-color: ${THEME_COLOR.GRAY};

  border-radius: 10rem;

  margin: 0rem 0.5rem;
`;

export const ArrowBlock = styled.button`
  width: 3.6rem;
  height: 3.6rem;

  border-radius: 50%;
  border: 1px solid ${THEME_COLOR.PRIMARY};

  background-color: inherit;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Arrow = styled.div`
  border: solid black;
  border-width: 0 1px 1px 0;
  display: inline-block;
  padding: 2px;

  &.right {
    transform: rotate(-45deg);
    -webkit-transform: rotate(-45deg);
    margin-right: 2px;
  }

  &.left {
    transform: rotate(135deg);
    -webkit-transform: rotate(135deg);
    margin-left: 2px;
  }
`;
