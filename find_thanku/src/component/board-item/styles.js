import styled from "styled-components/macro";

import { THEME_COLOR } from "../../constant";

export const BoardItem = styled.li`
  width: 100%;
  height: 100%;
  border: 1px solid ${THEME_COLOR.GRAYER};

  /* border-radius: 0.5rem; */

  display: flex;
  flex-direction: column;

  align-items: center;

  padding: 1rem 1rem;
`;
