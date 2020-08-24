import styled from "styled-components/macro";

import { THEME_COLOR } from "../../constant";

export const Comment = styled.div`
  width: 100%;

  margin-bottom: 1rem;
  background-color: ${THEME_COLOR.GRAY};
  border-radius: 0.5rem;
`;

export const WriterContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;

  padding: 1rem;
`;

export const Writer = styled.div`
  font-size: 1.3rem;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  padding: 1rem;
`;

export const Content = styled.div`
  font-size: 1.3rem;
`;

export const ProfileIcon = styled.div`
  margin-right: 1rem;

  img {
    width: 2rem;
    height: 2rem;
  }
`;

export const CommentIcon = styled.div`
  margin-right: 1rem;
  
  img {
    width: 2rem;
    height: 2rem;
  }
`;