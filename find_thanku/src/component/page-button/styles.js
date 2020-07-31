import styled from "styled-components/macro";
import { Link } from "react-router-dom";

export const PageButton = styled.li`
  font-size: 1.4rem;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PageButtonContainer = styled(Link)`
  text-decoration: none;
  color: inherit;

  width: 3.6rem;
  height: 3.6rem;

  display: flex;
  justify-content: center;
  align-items: center;
`;
