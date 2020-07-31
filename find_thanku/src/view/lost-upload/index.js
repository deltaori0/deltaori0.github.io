import React from "react";

import * as S from "./styles";
import TextEditor from "../../component/find-text-editor";
import Layout from "../../component/layout";
// import { STATIC_URL } from "../../constant";

const LostUpload = () => {
  return (
    <Layout>
      <S.Upload>
        <S.UploadContainer>
          <S.TitleContainer>
            <S.Title>글 작성</S.Title>
          </S.TitleContainer>
          <S.WriteInputContainer>
            <S.NameInput placeholder="보관물 명" />
            <S.PlaceInput placeholder="분실 장소" />
          </S.WriteInputContainer>
          <S.TextEditorContainer>
            <TextEditor />
          </S.TextEditorContainer>
          <S.SubmitButton>작성</S.SubmitButton>
          {/* <img src={STATIC_URL.PENCIL_ICON} alt="pencil" /> */}
        </S.UploadContainer>
      </S.Upload>
    </Layout>
  );
};

export default LostUpload;
