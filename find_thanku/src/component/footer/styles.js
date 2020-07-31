import styled from "styled-components/macro";
import { THEME_COLOR } from "../../constant";

export const Footer = styled.div`
  display: flex;
  /* justify-content: space-between; */
  align-items: center;

  width: 100%;
  height: 4rem;
  padding: 0rem 2rem;

  position: fixed;
  left: 0;
  bottom: 0;

  background-color: ${THEME_COLOR.GRAY};
`;

export const Label = styled.div`
  font-size: 1.8rem;
  margin: 0rem 0.5rem;
`;
