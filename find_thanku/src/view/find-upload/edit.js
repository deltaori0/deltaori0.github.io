import React, { Component } from "react";

import * as S from "./styles";
import { Editor } from "@tinymce/tinymce-react";
import Layout from "../../component/layout";
import Select from "react-select";
import { storage } from "../google_login/storage";

export class FindEdit extends Component {
  // texteditor에 작성된 내용을 content 변수에 넣음
  handleEditorChange = (e) => {
    this.content = e.target.getContent();
  };
  // Select option 지정
  options = [
    { value: "중앙광장 원스탑", label: "중앙광장 원스탑" },
    { value: "하나스퀘어 원스탑", label: "하나스퀘어 원스탑" },
    { value: "기타", label: "기타" },
  ];

  state = {
    selectedOption: "",
  };

  // 선택한 옵션이 바뀌면 state 바꿈
  handleChange = (selectedOption) => {
    this.setState({ selectedOption });
  };

  // 게시글 수정 함수
  EditPost = async () => {
    // 새 게시글
    const newcontent = {
      title: this.title.value,
      name: this.name.value,
      getplace: this.getplace.value,
      putplace: this.state.selectedOption.value,
      content: "this.content",
    };
    // 페이지가 업로드 시 기존에 작성한 내용이 들어감 - 습득 장소
    if (!newcontent.putplace) {
      newcontent.putplace = storage.get("editval").putplace; // local storage에 저장되어 있던 내용으로 업데이트
    }

    const url = window.location.pathname;

    const fetchurl =
      "https://find-thanku.herokuapp.com" +
      url +
      "/" +
      newcontent.title +
      "/" +
      newcontent.name +
      "/" +
      newcontent.getplace +
      "/" +
      newcontent.putplace +
      "/" +
      newcontent.content;
    // PATCH https://find-thanku.herokuapp.com/find/post/:_id/edit/:title/:name/:getplace/:putplace/:content
    const request = await fetch(fetchurl, {
      method: "PATCH",
    });
    const previousurl = window.location.href.slice(0, -5);
    if (!request.ok) {
      alert("게시글 수정 실패");
      storage.remove("editval"); // local storage에 저장된 내용 삭제
      window.location.href = previousurl;
      return;
    }
    await request.json();
    storage.remove("editval");
    alert("수정되었습니다!");
    window.location.href = previousurl;
  };

  render() {
    // select 스타일 지정
    const { selectedOption } = this.state;
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
                ref={(ref) => (this.getplace = ref)}
                defaultValue={storage.get("editval").getplace}
              />
              <Select
                styles={styles}
                options={this.options}
                placeholder={storage.get("editval").putplace}
                onChange={this.handleChange}
                autoFocus={true}
                value={selectedOption}
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
          </S.UploadContainer>
        </S.Upload>
      </Layout>
    );
  }
}

export default FindEdit;
