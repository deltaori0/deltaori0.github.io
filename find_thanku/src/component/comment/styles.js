import styled from "styled-components/macro";
import { Link } from "react-router-dom";

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

  padding: 1rem 1rem 0.5rem 1rem;
`;

export const Writer = styled.div`
  font-size: 1.3rem;
  margin-right: 1rem;
`;
export const Date = styled.div`
  font-size: 1.3rem;
  color: ${THEME_COLOR.FONT_GRAY};
`;
export const ContentContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0rem 1rem 1rem 1rem;
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

export const IconContainer = styled(Link)`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Icon = styled.div`
  margin-right: 1rem;
  padding-bottom: 0.5rem;
  img {
    width: 2rem;
    height: 2rem;
    cursor: pointer;
  }
`;
