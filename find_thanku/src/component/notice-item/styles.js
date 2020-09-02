import styled from "styled-components/macro";
import { Link } from "react-router-dom";

import { THEME_COLOR } from "../../constant";

export const BoardItem = styled.li`
  height: 4rem;
  padding: 0;
  /* border: 0.5px solid ${THEME_COLOR.GRAYER}; */

  display: flex;
  flex-direction: row;
  align-items: stretch;
`;

export const Label = styled.ul`
  font-size: 1.2rem;
  margin: 1rem;
`;

export const TitleContainer = styled(Link)`
  border: 0.5px solid ${THEME_COLOR.GRAYER};
  flex: 2;
  display: flex;
  flex-direction: column;
  align-items: center;

  text-decoration: none;
  color: black;
`;

export const DateContainer = styled.ul`
  border: 0.5px solid ${THEME_COLOR.GRAYER};
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
