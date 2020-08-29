import React, { Component } from "react";
import * as S from "./styles";
import TextEditor from "../../component/find-text-editor";
import { Editor } from "@tinymce/tinymce-react";
import Layout from "../../component/layout";
// import { STATIC_URL } from "../../constant";
import { storage } from "../google_login/storage";
import axios from "axios";
const headers = { withCredentials: true };

class LostUpload extends Component {
  LostUpload = () => {
    const send_param = {
      headers,
      title: this.title.value,
      name: this.name.value,
      googleId: storage.get("loggedInfo").googleId,
      place: this.place.value,
      content: this.content,
      username: storage.get("loggedInfo").email.split("@")[0],
    };
    axios
      .post("https://find-thanku.herokuapp.com/lost/upload", send_param)
      //에러
      .catch((err) => {
        console.log(err);
      });
    alert("작성 완료!");
    setTimeout(function () {
      window.location.pathname = "/lost/board";
    }, 1000);
  };
  //texteditor 관련
  handleEditorChange = (e) => {
    console.log(e.target.getContent());
    this.content = e.target.getContent();
  };
  //render
  render() {
    //return
    return (
      <Layout>
        <S.Upload>
          <S.UploadContainer>
            <S.TitleContainer>
              <S.Title>글 작성</S.Title>
            </S.TitleContainer>
            <S.TitleInputContainer>
              <S.TitleInput
                type="text"
                ref={(ref) => (this.title = ref)}
                placeholder="제목 명"
              />
            </S.TitleInputContainer>
            <S.WriteInputContainer>
              <S.NameInput
                type="text"
                ref={(ref) => (this.name = ref)}
                placeholder="분실물 명"
              />
              <S.PlaceInput
                type="text"
                ref={(ref) => (this.place = ref)}
                placeholder="분실 장소"
              />
            </S.WriteInputContainer>

            <S.TextEditorContainer>
              <S.TextEditor>
                <Editor
                  initialValue=""
                  init={{
                    height: 500,
                    menubar: false,
                    placeholder:
                      "분실물 게시판에 대한 공지사항이 들어갈 예정입니다.",
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
                      placeholder:
                        "습득물 게시판에 대한 공지사항이 들어갈 예정입니다.",
                      plugins: ["autosave", "lists", "autolink", "placeholder"],
                    },
                  }}
                  onChange={this.handleEditorChange}
                />
              </S.TextEditor>
            </S.TextEditorContainer>

            <S.SubmitButton onClick={this.LostUpload} type="button" block>
              작성
            </S.SubmitButton>
            {/* <img src={STATIC_URL.PENCIL_ICON} alt="pencil" /> */}
          </S.UploadContainer>
        </S.Upload>
      </Layout>
    );
  }
}

export default LostUpload;
