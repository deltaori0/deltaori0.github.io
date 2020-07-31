import React from "react";

import * as S from "./styles";
import TextEditor from "../../component/find-text-editor";
import Layout from "../../component/layout";

const NoticeUpload = () => {
  return (
    <Layout>
      <S.Upload>
        <S.UploadContainer>
          <S.TitleContainer>
            <S.Title>글 작성</S.Title>
          </S.TitleContainer>
          <S.WriteInputContainer>
            <S.NameInput placeholder="제목" />
          </S.WriteInputContainer>
          <S.TextEditorContainer>
            <TextEditor />
          </S.TextEditorContainer>
          <S.SubmitButton>작성</S.SubmitButton>
        </S.UploadContainer>
      </S.Upload>
    </Layout>
  );
};

export default NoticeUpload;
