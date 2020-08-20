import styled from "styled-components/macro";

import { THEME_COLOR } from "../../constant";

export const BoardHeader = styled.ul`
  height: 4rem;
  margin-bottom: 1rem;
  padding: 0;
  border: 0.5px solid white;

  background-color: ${THEME_COLOR.LIGHT_YELLOW};
  font-weight: bold;

  display: flex;
  flex-direction: row;
  align-items: stretch;
`;

export const Label = styled.ul`
  font-size: 1.2rem;
  margin: 1rem;
`;
export const TitleContainer = styled.ul`
  border: 0.5px solid white;
  flex-grow: 3;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const NameContainer = styled.ul`
  border: 0.5px solid white;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const PlaceContainer = styled.ul`
  border: 0.5px solid white;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CommentContainer = styled.ul`
  border: 0.5px solid white;
  flex-grow: 0.5;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const WriterContainer = styled.ul`
  border: 0.5px solid white;
  flex-grow: 0.5;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const DateContainer = styled.ul`
  border: 0.5px solid white;
  flex-grow: 0.5;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
