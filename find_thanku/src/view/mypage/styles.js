import styled from "styled-components/macro";
import { Link } from "react-router-dom";
import { THEME_COLOR } from "../../constant";

export const MyPage = styled.div`
  width: 100%;
  height: 100%;

  padding: 2rem;
  margin-top: 1rem;
`;

export const BoardListContainer = styled.div`
  width: 100%;
  height: 100%;
`;

export const MyInfoContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;

  margin-bottom: 3rem;
`;
export const MyInfo = styled.div`
  display: flex;
  flex-direction: row;
`;

export const MetaContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Meta = styled.div`
  font-size: 1.4rem;
  margin-bottom: 0.8rem;
`;
export const TitleContainer = styled.div`
  width: 100%;

  display: flex;

  margin-bottom: 2rem;
`;

export const Title = styled.div`
  width: 100%;
  font-size: 2.2rem;
  font-weight: bold;

  margin-bottom: 1.8rem;
`;
export const Label = styled.div`
  font-size: 1.8rem;
  font-weight: bold;

  margin-bottom: 0.3rem;
`;

export const ImageContainer = styled.div`
  img {
    width: 8rem;
    height: 8rem;
    border-radius: 8rem;
  }
  margin-right: 3rem;
`;

export const Container = styled.div`
  margin-bottom: 2rem;
`;
