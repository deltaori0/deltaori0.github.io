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

export const PostContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;

  padding: 1.6rem;
`;

export const PostTitle = styled.div`
  font-size: 2.2rem;

  margin-bottom: 1rem;
`;

export const MetaContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom: 0.1rem solid black;
  margin-bottom: 0.5rem;
`;

export const Date = styled.div`
  font-size: 1.3rem;
  color: ${THEME_COLOR.FONT_GRAY};
  padding-bottom: 0.5rem;
`;

export const IconContainer = styled(Link)`
  display: flex;
  flex-direction: row;
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

export const Label = styled.div`
  font-size: 1.6rem;

  margin-bottom: 1rem;
`;

export const ContentContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
`;

export const Content = styled.div`
  font-size: 1.6rem;
`;

export const CommentsContainer = styled.div`
  width: 99%;
`;

export const WriteCommentContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const WriteComment = styled.input`
  width: 97%;
  font-size: 1.4rem;
  height: 3.5rem;

  padding: 0.8rem 1rem;
  border-radius: 0.5rem;
`;

export const SubmitIcon = styled.div`
  margin-left: 1rem;

  img {
    width: 2rem;
    height: 100%;
    cursor: pointer;
  }
`;
