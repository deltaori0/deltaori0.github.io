import React, { Component } from "react";

import * as S from "./styles";
import { Editor } from "@tinymce/tinymce-react";
import Layout from "../../component/layout";
import Select from "react-select";
import axios from "axios";
import { storage } from "../google_login/storage";

const headers = { withCredentials: true };

class FindUpload extends Component {
  FindUpload = () => {
    // 데이터베이스로 보낼 JSON 형식 지정
    const send_param = {
      headers,
      title: this.title.value,
      name: this.name.value,
      googleId: storage.get("loggedInfo").googleId,
      getplace: this.getplace.value,
      putplace: this.state.selectedOption.value,
      content: this.content,
      username: storage.get("loggedInfo").email.split("@")[0],
    };
    axios
      // 데이터베이스에 데이터 업로드
      // POST https://find-thanku.herokuapp.com/find/upload
      .post("https://find-thanku.herokuapp.com/find/upload", send_param)
      .catch((err) => {
        console.log(err);
      });
    alert("작성 완료!");
    // 1초 sleep
    setTimeout(function () {
      window.location.pathname = "/find/board";
    }, 1000);
  };
  //texteditor 안의 내용이 바뀌면 content 변수 해당 값으로 업데이트
  handleEditorChange = (e) => {
    this.content = e.target.getContent();
  };
  //Select 옵션 지정
  options = [
    { value: "중앙광장 원스탑", label: "중앙광장 원스탑" },
    { value: "하나스퀘어 원스탑", label: "하나스퀘어 원스탑" },
    { value: "기타", label: "기타" },
  ];

  state = {
    selectedOption: "",
  };

  handleChange = (selectedOption) => {
    this.setState({ selectedOption });
  };

  render() {
    // select state
    const { selectedOption } = this.state;

    // Select 옵션 스타일 지정
    const styles = {
      container: (base) => ({
        ...base,
        padding: "2px",
        fontSize: "18px",
        height: "30px",
        flex: 1,
      }),
      option: (provided, state) => ({
        ...provided,
        color: state.isSelected ? "black" : "black",
        backgroundColor: state.isSelected ? "lightgrey" : "white",
      }),
      control: (provided) => ({
        ...provided,
        marginTop: "1%",
      }),
    };
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
                placeholder="습득물 명"
              />
              <S.PlaceInput
                type="text"
                ref={(ref) => (this.getplace = ref)}
                placeholder="습득 장소"
              />
              <Select
                styles={styles}
                placeholder="보관 장소"
                options={this.options}
                onChange={this.handleChange}
                autoFocus={true}
                value={selectedOption}
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
                      "습득물 게시판에 대한 공지사항이 들어갈 예정입니다.",
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

            <S.SubmitButton onClick={this.FindUpload} type="button" block>
              작성
            </S.SubmitButton>
          </S.UploadContainer>
        </S.Upload>
      </Layout>
    );
  }
}

export default FindUpload;
