import React from "react";
import { Editor } from "@tinymce/tinymce-react";
import * as S from "./styles";

export const FindTextEditor = () => {
  const handleEditorChange = (e) => {
    console.log(e.target.getContent());
  };
  
  return (
    <S.TextEditor>
      <Editor
        initialValue=""
        init={{
          height: 500,
          menubar: false,
          placeholder: "습득물 게시판에 대한 공지사항이 들어갈 예정입니다.",
          plugins: [
            "advlist autolink lists link image",
            "charmap print preview anchor help",
            "searchreplace visualblocks code",
            "insertdatetime media table paste wordcount",
          ],
          toolbar:
            "undo redo | formatselect | bold italic | image | alignleft aligncenter alignright | bullist numlist outdent indent | help",
          mobile: {
            theme: "mobile",
            placeholder: "습득물 게시판에 대한 공지사항이 들어갈 예정입니다.",
            plugins: ["autosave", "lists", "autolink", "placeholder"],
          },
        }}
        onChange={handleEditorChange}
      />
    </S.TextEditor>
  );
};

export default FindTextEditor;
