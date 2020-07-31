import styled from "styled-components/macro";

import { THEME_COLOR } from "../../constant";

export const BoardHeader = styled.ul`
  height: 4rem;
  margin-bottom: 1rem;
  padding: 0;
  /* border: 1px solid ${THEME_COLOR.GRAYER}; */

  display: flex;
  flex-direction: row;
  align-items: stretch;
`;

export const Label = styled.ul`
  font-size: 1.2rem;
  margin: 1rem;
`;

export const NameContainer = styled.ul`
  border: 1px solid ${THEME_COLOR.GRAYER};
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const PlaceContainer = styled.ul`
  border: 1px solid ${THEME_COLOR.GRAYER};
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CommentContainer = styled.ul`
  border: 1px solid ${THEME_COLOR.GRAYER};
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const WriterContainer = styled.ul`
  border: 1px solid ${THEME_COLOR.GRAYER};
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const DateContainer = styled.ul`
  border: 1px solid ${THEME_COLOR.GRAYER};
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
