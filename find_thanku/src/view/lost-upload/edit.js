import React, { Component } from "react";

import * as S from "./styles";
import { Editor } from "@tinymce/tinymce-react";
import Layout from "../../component/layout";
import { storage } from "../google_login/storage";

export class LostEdit extends Component {
  //texteditor 관련
  handleEditorChange = (e) => {
    console.log(e.target.getContent());
    this.content = e.target.getContent();
  };
  //게시글 수정 시
  EditPost = async () => {
    const newcontent = {
      title: this.title.value,
      name: this.name.value,
      place: this.place.value,
      content: "this.content",
    };
    console.log(newcontent);
    const url = window.location.pathname;
    const fetchurl =
      "https://find-thanku.herokuapp.com" +
      url +
      "/" +
      newcontent.title +
      "/" +
      newcontent.name +
      "/" +
      newcontent.place +
      "/" +
      newcontent.content;
    const request = await fetch(fetchurl, {
      method: "PATCH",
    });
    console.log(fetchurl);
    const previousurl = window.location.href.slice(0, -5); //edit 뺀 url
    if (!request.ok) {
      alert("게시글 수정 실패");
      storage.remove("editval");
      window.location.href = previousurl;
      return;
    }
    await request.json();
    storage.remove("editval");
    alert("수정되었습니다!");
    window.location.href = previousurl;
  };

  render() {
    //return
    return (
      <Layout>
        <S.Upload>
          <S.UploadContainer>
            <S.TitleContainer>
              <S.Title>글 수정</S.Title>
            </S.TitleContainer>
            <S.TitleInputContainer>
              <S.TitleInput
                type="text"
                ref={(ref) => (this.title = ref)}
                defaultValue={storage.get("editval").title}
              />
            </S.TitleInputContainer>
            <S.WriteInputContainer>
              <S.NameInput
                type="text"
                ref={(ref) => (this.name = ref)}
                defaultValue={storage.get("editval").name}
              />
              <S.PlaceInput
                type="text"
                ref={(ref) => (this.place = ref)}
                defaultValue={storage.get("editval").place}
              />
            </S.WriteInputContainer>

            <S.TextEditorContainer>
              <S.TextEditor>
                <Editor
                  initialValue={storage.get("editval").content}
                  init={{
                    height: 500,
                    menubar: false,
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
                      plugins: ["autosave", "lists", "autolink", "placeholder"],
                    },
                  }}
                  onChange={this.handleEditorChange}
                />
              </S.TextEditor>
            </S.TextEditorContainer>

            <S.SubmitButton onClick={this.EditPost} type="button" block>
              작성
            </S.SubmitButton>
            {/* <img src={STATIC_URL.PENCIL_ICON} alt="pencil" /> */}
          </S.UploadContainer>
        </S.Upload>
      </Layout>
    );
  }
}

export default LostEdit;
