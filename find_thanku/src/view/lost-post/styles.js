import styled from "styled-components/macro";

import { Link } from "react-router-dom";
import { THEME_COLOR } from "../../constant";

export const LostPost = styled.div`
  width: 100%;
  height: 100%;

  padding: 2rem;
  margin-top: 1rem;
`;

export const LostPostContainer = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;

  align-items: center;

  border: 1px solid ${THEME_COLOR.GRAYER};
`;

export const TitleContainer = styled.div`
  width: 100%;

  display: flex;

  margin-bottom: 2rem;
`;

export const Title = styled.div`
  font-size: 2.2rem;
  font-weight: bold;

  margin-bottom: 0.3rem;
`;

export const MetaContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;

  padding: 1rem;
`;

export const PostTitle = styled.div`
  font-size: 2rem;

  margin-bottom: 2rem;
`;

export const Label = styled.div`
  font-size: 1.6rem;

  margin-bottom: 1rem;
`;

export const ContentContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;

  padding: 1rem;
`;

export const Content = styled.div`
  font-size: 1.6rem;

  margin-bottom: 1rem;
`;

export const WriteCommentContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const WriteComment = styled.input`
  width: 99%;
  font-size: 1.4rem;
  height: 3rem;
  border: none;
  outline: none;
  background-color: ${THEME_COLOR.GRAY};
  padding: 0.8rem 1rem;
`;

export const SubmitIcon = styled.div`
  margin-left: 1rem;

  img {
    width: 2rem;
    height: 100%;
    cursor: pointer;
  }
`;
