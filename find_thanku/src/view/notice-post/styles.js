import styled from "styled-components/macro";
import { Link } from "react-router-dom";
import { THEME_COLOR } from "../../constant";

export const NoticePost = styled.div`
  width: 100%;
  height: 100%;

  padding: 2rem;
  margin-top: 1rem;
`;

export const NoticePostContainer = styled.div`
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
  font-size: 2.2rem;

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
  margin-top: 0.5rem;
`;

export const Date = styled.div`
  font-size: 1.3rem;
  color: ${THEME_COLOR.FONT_GRAY};

  margin-bottom: 1rem;
  padding-bottom: 1rem;
  border-bottom: 0.1rem solid black;
`;
export const Icon = styled(Link)`
  margin-right: 1rem;
  
  img {
    width: 2rem;
    height: 2rem;
  }
`;
