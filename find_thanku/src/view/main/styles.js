import styled from "styled-components/macro";
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
  margin: 2rem 7rem;

  border: 1px solid ${THEME_COLOR.GRAYER};
  border-radius: 0.5rem;

  align-items: center;

  background-color: ${THEME_COLOR.LIGHT_YELLOW};
`;

export const Title = styled.div`
  width: 100%;
  font-size: 1.8rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;

export const Description = styled.div`
  width: 100%;
  font-size: 1.4rem;
`;
