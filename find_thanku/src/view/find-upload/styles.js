import styled from "styled-components/macro";
import { THEME_COLOR } from "../../constant";

export const Upload = styled.div`
  width: 100%;
  height: 100%;

  padding: 2rem;
  margin-top: 1rem;
`;

export const UploadContainer = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;

  align-items: center;
  /* padding: 0rem 2rem; */
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

  margin-bottom: 0.3rem;
`;

export const CategorySelector = styled.select`
  border: 1px solid ${THEME_COLOR.GRAYER};
  
  padding: 1rem;
  font-size: 1.7rem;

  /* height: 3rem; */
  flex-grow: 1;
`;

export const CategoryOption = styled.option`
  border: 1px solid ${THEME_COLOR.GRAYER};
`;

export const WriteInputContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  align-items: stretch;

  margin-bottom: 2rem;
`;

export const TitleInputContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  align-items: stretch;

  margin-bottom: 1rem;
`;
export const TitleInput = styled.input`
  width: 100%;

  padding: 1rem;

  font-size: 1.7rem;
  border: none;
  border: 1px solid ${THEME_COLOR.GRAYER};

  flex-grow: 1;
`;

export const NameInput = styled.input`
  /* width: 100%; */

  padding: 1rem;
  margin-right: 1rem;

  font-size: 1.7rem;
  border: none;
  border: 1px solid ${THEME_COLOR.GRAYER};

  flex-grow: 1;
`;

export const PlaceInput = styled.input`
  /* width: 100%; */

  padding: 1rem;
  margin-right: 1rem;

  font-size: 1.7rem;
  border: none;
  border: 1px solid ${THEME_COLOR.GRAYER};

  flex-grow: 1;
`;

export const TextEditorContainer = styled.div`
  /* padding: 0rem 1rem; */
  width: 100%;

  margin-bottom: 2rem;
`;

export const ButtonsContainer = styled.div`
  padding: 0rem 1rem;
  width: 100%;

  display: flex;
  justify-content: flex-end;

  margin-bottom: 2rem;
`;

export const SubmitButton = styled.button`
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
