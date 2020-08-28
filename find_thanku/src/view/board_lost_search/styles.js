import styled from "styled-components/macro";

import { Link } from "react-router-dom";
import { THEME_COLOR } from "../../constant";

export const BoardLost = styled.div`
  width: 100%;
  height: 100%;

  padding: 2rem;
  margin-top: 1rem;
`;

export const BoardLostContainer = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;

  align-items: center;
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

export const DescContainer = styled.div`
  width: 100%;

  display: flex;

  margin-bottom: 2rem;
`;

export const Description = styled.div`
  font-size: 1.8rem;
  font-weight: bold;

  margin-bottom: 0.3rem;
`;

export const ToolsContainer = styled.div`
  width: 100%;
  display: flex;

  align-items: center;
  justify-content: space-between;
  height: 100%;

  margin-bottom: 1.5rem;
`;
export const WriteButton = styled(Link)`
  width: 7rem;
  font-size: 1.4rem;
  text-decoration: none;

  background-color: ${THEME_COLOR.YELLOW};
  color: white;

  padding: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;

  border: none;
  outline: none;
  border-radius: 0.5rem;
`;

export const SearchContainer = styled.div`
  height: 4rem;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const SearchBox = styled.input`
  width: 20rem;
  font-size: 1.4rem;
  height: 4rem;

  outline: none;
  border: 1px solid ${THEME_COLOR.GRAYER};

  background-color: ${THEME_COLOR.GRAY};
  border-radius: 0.5rem;

  padding: 0.8rem 1rem;
`;

export const SearchIcon = styled.div`
  margin-left: 1rem;

  img {
    width: 2rem;
    height: 2rem;
    cursor: pointer;
  }
`;

export const BoardListContainer = styled.div`
  width: 100%;
  height: 100%;
`;

export const PagebarContainer = styled.div`
  width: 100%;
  display: flex;

  justify-content: center;

  margin: 2.5rem 0rem;
  padding: 0rem 1.5rem;
`;
