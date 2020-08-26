import styled from "styled-components/macro";
import { Link } from "react-router-dom";
import { THEME_COLOR } from "../../constant";

export const Main = styled.div`
  width: 100%;
  height: 100%;

  margin-top: 1rem;
`;

export const ContentContainer = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
`;
export const MainContent = styled.div`
  margin: 8rem;
  margin-bottom: 0rem;
  margin-top: 4rem;
`;
export const MainLabel = styled.div`
  padding: 1rem;
  font-size: 4rem;
  font-weight: bold;
  color: #85092a;
  text-decoration: underline ${THEME_COLOR.LIGHT_YELLOW};
`;
export const SubContent = styled.div`
  margin: 4rem 9rem;
  margin-top: 2rem;
  margin-bottom: 0rem;
`;
export const SubLabel = styled.div`
  padding: 0.8rem;
  font-size: 2rem;
  color: chacol;
`;
export const MainContainer = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: row;

  margin-left: 6rem;

  align-items: center;
  justify-content: left;
`;

export const BlockContainer = styled.div`
  width: 28rem;
  height: 28rem;

  display: flex;
  flex-direction: column;

  padding: 1.5rem;
  margin: 8rem 4rem;

  border: 1px solid ${THEME_COLOR.GRAYER};
  border-radius: 0.5rem;

  align-items: center;

  background-color: ${THEME_COLOR.LIGHT_GRAY};
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
