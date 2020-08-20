import styled from "styled-components/macro";

import { THEME_COLOR } from "../../constant";

export const Comment = styled.div`
  width: 100%;

  margin-bottom: 1rem;
  background-color: ${THEME_COLOR.GRAY};
`;

export const WriterContainer = styled.div`
  width: 100%;

  padding: 1rem;
  margin-bottom: 0.5rem;
`;

export const Writer = styled.div`
  font-size: 1.3rem;
`;

export const ContentContainer = styled.div`
  width: 100%;
  padding: 1rem;
  margin-bottom: 0.5rem;
`;

export const Content = styled.div`
  font-size: 1.3rem;
`;
