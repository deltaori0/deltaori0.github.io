import styled from "styled-components/macro";
import { Link } from "react-router-dom";
import { THEME_COLOR } from "../../constant";

export const Main = styled.div`
  width: 100%;
  height: 100%;

  margin-top: 1rem;
`;

export const MainContainer = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: row;

  align-items: center;
  justify-content: center;
`;

export const BlockContainer = styled.div`
  width: 30rem;
  height: 30rem;

  display: flex;
  flex-direction: column;

  padding: 1.5rem;
  margin: 7rem 7rem;

  border: 1px solid ${THEME_COLOR.GRAYER};
  border-radius: 0.5rem;

  align-items: center;

  background-color: ${THEME_COLOR.LIGHT_YELLOW};
  text-decoration: none;
`;

export const Title = styled.div`
  width: 100%;
  font-size: 1.8rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;

export const Description = styled.div`
  width: 100%;
  height: 20rem;
  font-size: 1.4rem;
  margin-bottom: 1rem;
`;

export const GoButton = styled(Link)`
  width: 100%;
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
