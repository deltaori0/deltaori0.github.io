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

export const ImageContainer = styled.div`
img {
  width: 8rem;
  height: 8rem;
  border-radius: 8rem;
}
`;

export const Temp = styled.div`
  font-size: 1.8rem;
  font-weight: bold;

  margin-bottom: 0.3rem;
`;